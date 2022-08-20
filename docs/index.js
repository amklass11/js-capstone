import './style.css';
import * as api from './home_page/display.js';
import likeimg from './like_img.png';
import moviesimg from './movies_img.png';
import {
  postComments, getmovie, getcomments, totalcomments,
} from './modules/popup.js';

// Create variables for storing data
const section = document.querySelector('.moviediv');
const logo = document.querySelector('header img');
const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';
const popup = document.querySelector('.modal');
const movies = document.querySelector('#movietotal');
const likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';
const commenturl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments/';
const comments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/comments?item_id=';

let likesnum;
let imgurl;
let likescounter;
let itemscounter;
let commentCounter;
logo.src = moviesimg;

const hide = (msg) => {
  msg.classList.remove('active');
};

// Getting data from Api if promise status resolve
const myPromise = new Promise((resolve) => {
  resolve(api.getdata(apiurl));
});

const mypromiseb = new Promise((resolve) => {
  resolve(api.getlikes(likesurl));
});

myPromise.then((result) => {
  imgurl = api.getimg(result);
  itemscounter = api.totalitems(result);
  movies.textContent = `Movies(${itemscounter})`;
  imgurl.forEach((element, index) => {
    section.innerHTML += `<div class="item">
        <img class="poster" src="${element}" alt="Italian Trulli">
        <div class="title"><p>${result[index].name}</p>
        <div>
        <img class="like" src="${likeimg}">
        <p class="like-text"> </p>
        </div>
        </div>
       <button><p class="comments" id="commentid" >Comments</p></button>
        <p class="reservations">Reservations</p>  
        </div>`;
  });
  const commentbutton = document.querySelectorAll('.comments');
  commentbutton.forEach((element, index) => {
    element.addEventListener('click', () => {
      const mypromisec = new Promise((resolve) => {
        resolve(getcomments(comments, index));
      });
      const popupinfo = getmovie(result, popup, index);
      section.append(popupinfo);
      popupinfo.classList.add('active');
      const close = document.querySelector('.close-button');
      close.addEventListener('click', () => {
        popupinfo.remove();
      });
      const commentdiv = document.querySelector('.comment-list');
      const count = document.querySelector('.commentsp');
      mypromisec.then((commentarr) => {
        count.textContent = `Comments(${commentarr.length})`;
        commentarr.forEach((element) => {
          commentdiv.innerHTML += `<li class="comments-li">${element.creation_date}  ${element.username}:  ${element.comment}</li>`;
        });
      });
      const inputname = document.querySelector('.username');
      const inputtext = document.querySelector('.insight');
      const commenttext = document.querySelector('.addnew-btn');
      const message = document.querySelector('.message');
      commenttext.addEventListener('click', () => {
        if (inputname.value !== '' && inputtext.value !== '') {
          postComments(commenturl, index, inputname.value, inputtext.value);
          const [date] = new Date().toISOString().split('T');
          commentdiv.innerHTML += `<li class="comments-li">${date}  ${inputname.value}:  ${inputtext.value}</li>`;
          const commentdivlist = document.querySelectorAll('.comment-list li');
          const commentstotal = totalcomments(commentdivlist);
          count.textContent = `Comments(${commentstotal})`;
          inputname.value = '';
          inputtext.value = '';
        } else {
          message.textContent = 'Inputs should not be empty';
          message.classList.add('active');
          setTimeout(() => {
            hide(message);
          }, 2000);
          const list = document.querySelectorAll('.list-item');
          const counts = document.querySelector('.comment');
          commentCounter[index] += +1;
          commenttext.forEach((comments, index) => {
            if (list[index] <= 1) {
              counts.textContent = `Comments (${list.length})`;
            } else {
              counts.textContent = 'Comments (0)';
            }
            commentCounter.classList.add('active');
          });
        }
      });
    });
  });

  const liketext = document.querySelectorAll('.like-text');
  const likebutton = document.querySelectorAll('.like');
  mypromiseb.then((result) => {
    likesnum = api.likes(result);
    likescounter = likesnum;
    liketext.forEach((element, index) => {
      if (likesnum[index] <= 1) {
        element.textContent = `${likesnum[index]} like`;
      } else {
        element.textContent = `${likesnum[index]} likes`;
      }
    });
    likebutton.forEach((element, index) => {
      element.addEventListener('click', () => {
        api.postlike(likesurl, index);
        likescounter[index] += +1;
        liketext.forEach((element, index) => {
          if (likesnum[index] <= 1) {
            element.textContent = `${likescounter[index]} like`;
          } else {
            element.textContent = `${likescounter[index]} likes`;
          }
        });
      });
    });
  });
});
