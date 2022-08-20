const getmovie = (result, popup, index) => {
  result = result[index];
  popup.innerHTML = `<div id="modal-pop-up-${result.id}" class="modal-pop-up">
        <div class="cont-pop-up">
          <div class="modal-header">  <button data-id='${result.id}' class="close-button">&times;</button> </div>
            <img class="modal-pop-img" src="${result.image.original}">
            <h2 class="movie-title">${result.name}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Premiered: ${result.premiered}</p>
                    <p>Type: ${result.type}</p> 
                </div>
                <div class="movie-info2">
                    <p>Runtime: ${result.runtime}</p>
                    <p>Language: ${result.language}</p>
                </div>
            </div>
            <h3 class="commentsp">comments(</h3>
            <ul class="comment-list"></ul>
            <p class=message></p>
            <form class="comment-form">
                <h4 class="addcom">Add comment</h4>
                <input type="text" id="username" class="username" placeholder="Your name" required><br>
                <textarea type="text" id="insight" class="insight" placeholder="Your insight" required></textarea><br>
                <p id="addnew" class="addnew-btn">Comment</p>
            </form>
        </div>
    </div>`;
  return popup;
};

const postComments = async (commenturl, id, username, comment) => {
  await fetch(commenturl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${username}`,
      comment: `${comment}`,
    }),
  });
};

const getcomments = async (comments, index) => {
  let response = await fetch(`${comments}${index}`);
  response = await response.json();
  return response;
};

const totalcomments = (comments) => {
  comments = comments.length;
  return comments;
};

export {
  getmovie, postComments, getcomments, totalcomments,
};