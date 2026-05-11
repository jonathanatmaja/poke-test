export type RequestDetailPokemonType = { name: string };
export type RequestPokemonLoreType = { name: string };

type NamedResource = {
  name: string;
  url: string;
};

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

export type PokemonLoreType = {
  base_happiness: number;
  capture_rate: number;
  color: NamedResource;
  egg_groups: NamedResource[];
  evolution_chain: { url: string };
  evolves_from_species: NamedResource | null;
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version: NamedResource;
  }[];
  form_descriptions: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: NamedResource;
  }[];
  generation: NamedResource;
  growth_rate: NamedResource;
  habitat: NamedResource | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    name: string;
    language: NamedResource;
  }[];
  order: number;
  pal_park_encounters: {
    area: NamedResource;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedResource;
  }[];
  shape: NamedResource;
  varieties: {
    is_default: boolean;
    pokemon: NamedResource;
  }[];
};

export type PokemonCollectionType = {
  nickname: string;
  collectionType: 1 | 2 | 3;
  description?: string;
};
