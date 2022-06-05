import { totalcomments } from './popup.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    { score: 0.1, show: { id: 1 } },
    { score: 0.1, show: { id: 2 } },
    { score: 0.1, show: { id: 3 } },
    { score: 0.1, show: { id: 4 } },
    { score: 0.1, show: { id: 5 } },
    { score: 0.1, show: { id: 6 } },
    { score: 0.1, show: { id: 7 } },
    { score: 0.1, show: { id: 8 } },
    { score: 0.1, show: { id: 9 } },
    { score: 0.1, show: { id: 10 } },
  ]),
}));

const commentsdiv = [
  'li.coments-li',
  'li.coments-li',
  'li.coments-li',
  'li.coments-li',
  'li.coments-li',

];

test('Verify pop comments counter', () => {
  expect(totalcomments(commentsdiv)).toBe(5);
});
