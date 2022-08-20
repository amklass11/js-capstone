// Add tests for reservations counter

import { readFileSync } from 'fs';

describe('Counter of reservations', () => {
  beforeAll(() => {
    document.body.innerHTML = readFileSync('dist/index.html');
  });
  test('Number of reservations', () => {
    const popUp = document.getElementById('poke_reservation');
    const counter = document.createElement('h3');
    const reservationCounter = (comment) => {
      popUp.appendChild(counter);
      counter.innerHTML = `Reservations (${comment.length})`;
    };
    reservationCounter(['R1', 'R2', 'R3', 'R4']);
    expect(counter.innerHTML).toEqual('Reservations (4)');
  });
});