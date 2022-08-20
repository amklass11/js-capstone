/* eslint-disable no-use-before-define */

const convertData = async () => {
  const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
  const datos = await fetch(pokeList);
  return datos.json();
};

const getId = async (id) => {
  const datos = await convertData();
  const dataId = datos.results[id - 1].url;
  const pokeId = await fetch(dataId);
  return pokeId.json();
};

const commentData = async (e) => {
  const commentList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/comments?item_id=item${e.target.id}`;
  const datos = await fetch(commentList);
  return datos.json();
};

const counter = async (e) => {
  const comment = await commentData(e);
  const commentQuantity = comment.length;
  return commentQuantity;
};

const hideComment = () => {
  const commentPopup = document.getElementById('commentPopup');
  const closePopup = document.getElementById('closePopup');
  closePopup.addEventListener('click', () => {
    commentPopup.style.display = 'none';
    window.location.reload();
  });
};

const printComments = async (e) => {
  const comment = await commentData(e);
  const container = document.getElementById('allcomment');
  container.innerHTML = null;
  comment.forEach((cmt) => {
    const name = cmt.username;
    const date = cmt.creation_date;
    const comentario = cmt.comment;
    container.insertAdjacentHTML('afterbegin', `
    <p class="comment"><strong>${date}</strong> ${name}: ${comentario}</p>
    `);
  });
};

const showComment = async (e) => {
  const commentPopup = document.getElementById('commentPopup');
  const pokemons = await getId(e.target.id);
  const { name } = pokemons;
  const img = pokemons.sprites.other.home.front_default;
  const type = pokemons.types[0].type.name;
  const { abilities } = pokemons;
  const abilityOne = abilities[0].ability.name;
  const abilityTwo = abilities[1].ability.name;
  const { moves } = pokemons;
  const moveOne = moves[0].move.name;
  const moveTwo = moves[1].move.name;
  const moveThree = moves[2].move.name;
  const moveFour = moves[3].move.name;
  const counterComment = await counter(e);
  commentPopup.innerHTML = null;
  commentPopup.insertAdjacentHTML('afterbegin', `
  <div class="popup-container">
      <span id="closePopup">&#x274c;</span>
      <img id="pokeimg" src="${img}" alt="${name}"/>
      <div class="pokemonInfo">
        <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <ul>
              <li>${type[0].toUpperCase() + type.slice(1)}</li>
            </ul>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>
              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>
            </ul>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>
              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>
              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>
              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="comment">
        <h3 class="title">Comments (${counterComment || 0})</h3><br>
        <div id="allcomment"></div>
        <div id="formcontainer"><br>
          <h3 class="title">Add a comment</h3><br>
          <form id="commentform">
            <input id="username" type="text" placeholder="Your name" requiered><br>
            <textarea id="commentinput" placeholder="Your comment" requiered></textarea><br>
            <button type="submit" class="commentsubmit" id="${e.target.id}">Comment</button><br>
          </form>
        </div>
      </div>
    </div>
  `);
  hideComment();
  printComments(e);
  submitComment(e);
};

const submitComment = async () => {
  const commentForm = document.getElementById('commentform');
  const commentSubmit = document.querySelector('.commentsubmit');
  const commentList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/comments';
  commentSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('username');
    const comment = document.getElementById('commentinput');
    const id = `item${e.target.id}`;
    await fetch(commentList, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name.value,
        comment: comment.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    printComments(e);
    commentForm.reset();
    showComment(e);
  });
};

export default showComment;