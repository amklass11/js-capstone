/* eslint-disable no-await-in-loop */

const pokeContainer = document.getElementById('poke_container');
const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
const likeList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/likes/';
let pokemons = [];

const convertData = async (API) => {
  const store = await fetch(API);
  const data = store.json();
  return data;
};

export const pokemonInfo = async () => {
  const data = await convertData(pokeList);
  pokemons = data.results;
  for (let i = 0; i < pokemons.length; i += 1) {
    const pokeUrl = pokemons[i].url;
    const pokeDetail = await convertData(pokeUrl);
    pokemons[i].id = pokeDetail.id;
    pokemons[i].img = pokeDetail.sprites.other.home.front_default;
  }
  return pokemons;
};

const convertLikes = async () => {
  const likes = await convertData(likeList);
  const pokemons = await pokemonInfo();
  for (let i = 0; i < likes.length; i += 1) {
    for (let x = 0; x < pokemons.length; x += 1) {
      if (Number(likes[i].item_id) === pokemons[x].id) {
        pokemons[x].likes = likes[i].likes;
      }
    }
  }
  return pokemons;
};

const addLikes = async (btn) => {
  await fetch(likeList, {
    method: 'POST',
    body: JSON.stringify({ item_id: btn.id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  btn.classList.remove('fa-regular');
  btn.classList.add('fa');
  btn.setAttribute('disabled', '');
  const counter = document.getElementById(`${btn.id}counter`);
  const likes = counter.innerHTML.split(' ');
  likes[0] = Number(likes[0]) + 1;
  counter.innerHTML = likes.join(' ');
};

const likeBtn = () => {
  const btnLike = document.querySelectorAll('.likesbtn');
  btnLike.forEach((btn) => {
    btn.addEventListener('click', () => {
      addLikes(btn);
    });
  });
};

const printPokemons = async () => {
  const pokemons = await convertLikes();
  pokeContainer.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    pokeContainer.innerHTML += `
    <div class="container">
      <img id="pokeimg" src="${pokemons[i].img}" alt="${pokemons[i].name}"/>
      <h3 class="name">${pokemons[i].name[0].toUpperCase() + pokemons[i].name.slice(1)}</h3>
      <button class="fa-regular fa-heart likesbtn" id="${pokemons[i].id}"></button>
      <p class="likes" id="${pokemons[i].id}counter">${pokemons[i].likes || 0} likes</p>
      <a href="#" class="comments" id="${pokemons[i].id}">Comments</a>
      <a href="#" class="reservations" id="${pokemons[i].id}">Reservations</a>
    </div>`;
  }
  likeBtn();
};

const pokeCounter = async () => {
  const pokemon = await pokemonInfo();
  const pokemonCounter = document.getElementById('home-counter');
  pokemonCounter.innerHTML = `[ ${pokemon.length} ] Pokemons`;
};

pokeCounter();

export default printPokemons;