export type RequestDetailPokemonType = { name: string };

export type PokemonDetailType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  location_area_encounters: string;

  abilities: {
    ability: NamedResource;
    is_hidden: boolean;
    slot: number;
  }[];

  types: {
    slot: number;
    type: NamedResource;
  }[];

  stats: {
    base_stat: number;
    effort: number;
    stat: NamedResource;
  }[];

  sprites: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
      };
    };
  };

  moves: {
    move: NamedResource;
    version_group_details: {
      level_learned_at: number;
      order: number | null;
      move_learn_method: NamedResource;
      version_group: NamedResource;
    }[];
  }[];

  forms: NamedResource[];
  species: NamedResource;
  cries: { latest: string; legacy: string };

  held_items: {
    item: NamedResource;
    version_details: {
      rarity: number;
      version: NamedResource;
    }[];
  }[];

  game_indices: {
    game_index: number;
    version: NamedResource;
  }[];

  past_types: {
    generation: NamedResource;
    types: { slot: number; type: NamedResource }[];
  }[];

  past_abilities: {
    generation: NamedResource;
    abilities: {
      ability: NamedResource | null;
      is_hidden: boolean;
      slot: number;
    }[];
  }[];

  past_stats: {
    generation: NamedResource;
    stats: {
      base_stat: number;
      effort: number;
      stat: NamedResource;
    }[];
  }[];
};

type NamedResource = {
  name: string;
  url: string;
};
