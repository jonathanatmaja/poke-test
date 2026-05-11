import { Card, Typography } from "@mui/material";
import Image from "next/image";
import { pokemonCardSty } from "../styles";

import { DEFAULT_IMG_WIDTH_HEIGHT } from "@/lib/constants";
import { Star, StarBorder } from "@mui/icons-material";

interface PokemonCardProps {
  name: string;
  sprite?: string;
  url: string;
  isFavorite?: boolean;
  onClickCard?: () => void;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { name, sprite, isFavorite, onClickCard } = props;

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={pokemonCardSty}
      {...(onClickCard && { onClick: onClickCard })}
    >
      {isFavorite ? (
        <Star style={{ color: "gold" }} sx={{ alignSelf: "flex-end" }} />
      ) : (
        <StarBorder style={{ color: "gold" }} sx={{ alignSelf: "flex-end" }} />
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
