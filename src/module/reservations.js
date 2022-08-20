/* eslint-disable no-use-before-define */

// Display reservations pop up with selected item's details

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

const reservationData = async (e) => {
  const reservationList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/reservations?item_id=item${e.target.id}`;
  const datos = await fetch(reservationList);
  return datos.json();
};

// Add reservations counter.

const counter = async (e) => {
  const reservation = await reservationData(e);
  const reservationQuantity = reservation.length;
  return reservationQuantity;
};

const hideReservation = () => {
  const reservationPopup = document.getElementById('poke_reservation');
  const closePopup = document.getElementById('closePopup');
  closePopup.addEventListener('click', () => {
    reservationPopup.style.display = 'none';
    window.location.reload();
  });
};

// Display reservations for a given item on the Reservations pop - up

const printReservations = async (e) => {
  const reservation = await reservationData(e);
  const containerReservations = document.getElementById('allreservations');
  containerReservations.innerHTML = null;
  reservation.forEach((rsv) => {
    const name = rsv.username;
    const dateStart = rsv.date_start;
    const dateEnd = rsv.date_end;
    containerReservations.insertAdjacentHTML('afterbegin', `
    <p class="reservation">${dateStart} - ${dateEnd} by: ${name}</p>
    `);
  });
};

const showReservation = async (e) => {
  const reservationPopup = document.getElementById('poke_reservation');
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
  const counterReservation = await counter(e);
  reservationPopup.innerHTML = null;
  reservationPopup.insertAdjacentHTML('afterbegin', `
  <div class="popup-container">
      <span id="closePopup">&#x274c;</span>
      <img id="pokeimg" src="${img}" alt="${name}"/>
      <div class="pokemonInfo">
        <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3><br>
        <div class="pokemon-description">
          <div class="type">
            <h4 class="title">Type</h4>
            <ul>
              <li>${type[0].toUpperCase() + type.slice(1)}</li>
            </ul>
            <br>
          </div>
          <div class="abilities">
            <h4 class="title">Abilities</h4>
            <ul>
              <li>${abilityOne[0].toUpperCase() + abilityOne.slice(1)}</li>
              <li>${abilityTwo[0].toUpperCase() + abilityTwo.slice(1)}</li>
            </ul>
            <br>
          </div>
          <div class="moves">
            <h4 class="title">Moves</h4>
            <ul>
              <li>${moveOne[0].toUpperCase() + moveOne.slice(1)}</li>
              <li>${moveTwo[0].toUpperCase() + moveTwo.slice(1)}</li>
              <li>${moveThree[0].toUpperCase() + moveThree.slice(1)}</li>
              <li>${moveFour[0].toUpperCase() + moveFour.slice(1)}</li>
            </ul>
            <br>
          </div>
        </div>
      </div>
      <div id="reservation">
        <h3 class="title">Reservations (${counterReservation || 0})</h3><br>
        <div id="allreservations"></div>
      </div>
       <form id="reservation-form">
        <h3 class="title">Add a reservation</h3><br>
        <input id="user_name" type:"text" placeholder="Your name"><br>
        <input id="date_start" type:"date" placeholder="Start date"><br>
        <input id="date_end" type:"date" placeholder="End date"><br>
        <button type="submit" class="addReservation id="${e.target.id}">Reserve</button>
      </form>
    </div>
  `);
  hideReservation();
  printReservations(e);
  submitReservation(e);
};

// Create feature: add new reservation

const submitReservation = async () => {
  const reservationForm = document.getElementById('reservation-form');
  const reservationSubmit = document.querySelector('.addReservation');
  const reservationList = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RI0oSx45l9C27N7elyXx/reservations';
  reservationSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('user_name');
    const dateStart = document.getElementById('date_start');
    const dateEnd = document.getElementById('date_end');
    const id = `item${e.target.id}`;
    await fetch(reservationList, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name.value,
        date_start: dateStart.value,
        date_end: dateEnd.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    printReservations(e);
    reservationForm.reset();
    showReservation(e);
  });
};

export default showReservation;