import { Box, Chip } from "@mui/material";

export interface PokemonTypesProps {
  name: string;
  color: string;
}

export const PokemonTypes = (props: { types: PokemonTypesProps[] }) => {
  const { types } = props;

  return (
    <Box sx={{ display: "flex", gap: 1 , mb: 1}}>
      {types.map((type) => (
        <Chip key={type.name} label={type.name} sx={{ bgcolor: type.color }} />
      ))}
    </Box>
  );
};
