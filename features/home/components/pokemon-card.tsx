import { Card, Typography } from "@mui/material";
import Image from "next/image";
import { pokemonCardSty } from "../styles";

interface PokemonCardProps {
  name: string;
  sprite?: string;
  url: string;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { name, sprite } = props;

  return (
    <Card variant="outlined" elevation={0} sx={pokemonCardSty}>
      <Image src={String(sprite)} alt="sprite" width={125} height={125} />
      <Typography
        sx={{ alignSelf: "center", fontWeight: "bolder" }}
        variant="button"
      >
        {name}
      </Typography>
    </Card>
  );
};
