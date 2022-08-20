import { readFileSync } from 'fs';

describe('Counter of comments', () => {
  beforeAll(() => {
    document.body.innerHTML = readFileSync('dist/index.html');
  });
  test('Number of comments', () => {
    const popUp = document.getElementById('commentPopup');
    const counter = document.createElement('h3');
    const commentCouter = (comment) => {
      popUp.appendChild(counter);
      counter.innerHTML = `Comments (${comment.length})`;
    };
    commentCouter(['C1', 'C2', 'C3', 'C4']);
    expect(counter.innerHTML).toEqual('Comments (4)');
  });
});