import { COLLECTION_TYPES, DEFAULT_IMG_WIDTH_HEIGHT } from "@/lib/constants";
import { CatchingPokemon, People, Star } from "@mui/icons-material";
import { Card, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { pokemonCardSty } from "../styles";

interface PokemonCardProps {
  name: string;
  sprite?: string;
  url: string;
  collectionType?: number;
  onClickCard?: () => void;
  loading?: boolean;
}

const collectionIcons: Record<number, React.ReactNode> = {
  [COLLECTION_TYPES.WHISHLIST]: (
    <Star style={{ color: "gold" }} sx={{ alignSelf: "flex-end" }} />
  ),
  [COLLECTION_TYPES.TEAM]: (
    <People style={{ color: "blueviolet" }} sx={{ alignSelf: "flex-end" }} />
  ),
  [COLLECTION_TYPES.OWNED]: (
    <CatchingPokemon style={{ color: "red" }} sx={{ alignSelf: "flex-end" }} />
  ),
};

export const PokemonCard = (props: PokemonCardProps) => {
  const { name, sprite, collectionType, onClickCard, loading } = props;

  return (
    <Card
      data-testid={loading ? `skeleton-card-${name}` : `pokemon-card-${name}`}
      variant="outlined"
      elevation={0}
      sx={pokemonCardSty}
      {...(onClickCard && { onClick: onClickCard })}
    >
      {collectionType && collectionIcons[Number(collectionType)]}
      {loading ? (
        <>
          <Skeleton variant="rectangular" width="100%" height={150} />
          <Skeleton variant="text" width="60%" sx={{ alignSelf: "center" }} />
        </>
      ) : (
        <>
          <Image
            src={String(sprite)}
            alt="sprite"
            width={DEFAULT_IMG_WIDTH_HEIGHT}
            height={DEFAULT_IMG_WIDTH_HEIGHT}
            priority
          />
          <Typography
            sx={{ alignSelf: "center", fontWeight: "bolder" }}
            variant="button"
          >
            {name}
          </Typography>
        </>
      )}
    </Card>
  );
};
