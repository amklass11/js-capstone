import './style.css';
import Logo from './img/pokemonlogo.png';
import printPokemons from './module/homepage.js';
import showComment from './module/comment.js';
import showReservation from './module/reservations.js';

const headLogo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = Logo;
headLogo.appendChild(myLogo);

const popUp = async () => {
  await printPokemons();
  const commetBtn = document.querySelectorAll('.comments');
  commetBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const commentPopup = document.getElementById('commentPopup');
      commentPopup.style.display = 'flex';
      showComment(e);
    });
  });
  const reservationBtn = document.querySelectorAll('.reservations');
  reservationBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const reservationPopup = document.getElementById('poke_reservation');
      reservationPopup.style.display = 'flex';
      showReservation(e);
    });
  });
};

printPokemons();
popUp();