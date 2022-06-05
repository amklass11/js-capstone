import { getdata, totalitems } from '../home_page/display.js';

const apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';

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

test('Verify homepage items counter', async () => {
  let result = await getdata(apiurl);
  result = totalitems(result);
  expect(result).toBe(10);
});