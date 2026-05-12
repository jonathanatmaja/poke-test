import { Card, Typography } from "@mui/material";
import Image from "next/image";
import { pokemonCardSty } from "../styles";

import { COLLECTION_TYPES, DEFAULT_IMG_WIDTH_HEIGHT } from "@/lib/constants";
import { CatchingPokemon, People, Star } from "@mui/icons-material";

interface PokemonCardProps {
  name: string;
  sprite?: string;
  url: string;
  collectionType?: number;
  onClickCard?: () => void;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { name, sprite, collectionType, onClickCard } = props;

  return (
    <Card
      data-testid={`pokemon-card-${name}`}
      variant="outlined"
      elevation={0}
      sx={pokemonCardSty}
      {...(onClickCard && { onClick: onClickCard })}
    >
      {Number(collectionType) === COLLECTION_TYPES.WHISHLIST && (
        <Star style={{ color: "gold" }} sx={{ alignSelf: "flex-end" }} />
      )}
      {Number(collectionType) === COLLECTION_TYPES.TEAM && (
        <People
          style={{ color: "blueviolet" }}
          sx={{ alignSelf: "flex-end" }}
        />
      )}
      {Number(collectionType) === COLLECTION_TYPES.OWNED && (
        <CatchingPokemon
          style={{ color: "red" }}
          sx={{ alignSelf: "flex-end" }}
        />
      )}
      <Image
        src={String(sprite)}
        alt="sprite"
        width={DEFAULT_IMG_WIDTH_HEIGHT}
        height={DEFAULT_IMG_WIDTH_HEIGHT}
      />
      <Typography
        sx={{ alignSelf: "center", fontWeight: "bolder" }}
        variant="button"
      >
        {name}
      </Typography>
    </Card>
  );
};
