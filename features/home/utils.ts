export const getSpriteUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const generateMockPokemonList = (limit: number) => ({
  data: {
    count: limit,
    next: null,
    previous: null,
    results: Array.from({ length: limit }, (_, i) => ({
      name: `pokemon-${i + 1}`,
      url: `process.env.NEXT_PUBLIC_API_URL/pokemon/${i + 1}/`,
    })),
  },
});
