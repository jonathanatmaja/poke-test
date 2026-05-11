import { Box, Typography } from "@mui/material";

export interface PokemonVarietiesProps {
  name: string;
}

export const PokemonVarieties = (props: {
  varieties: PokemonVarietiesProps[];
}) => {
  const { varieties } = props;
  if (!varieties) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body1">
        <strong>Varieties:</strong> {varieties.map((d) => d.name).join(", ")}
      </Typography>
    </Box>
  );
};
