describe('Home page Counter', () => {
  test('Counter function', () => {
    let counter = '';
    const pokemonInfo = () => [1, 2, 3, 4, 5];
    const pokemonCounter = () => {
      const pokemons = pokemonInfo();
      counter = `[ ${pokemons.length} ] Pokemons`;
      return counter;
    };
    pokemonCounter();
    expect(counter).toEqual('[ 5 ] Pokemons');
  });
});
