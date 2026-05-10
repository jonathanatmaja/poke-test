import { SxProps } from "@mui/material";

export const pokemonListSty: SxProps = {
  width: "90%",
  mx: "auto",
  mt: 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: "1rem",
};

export const pokemonCardSty: SxProps = {
  width: "100%",
  height: "100%",
  p: 1.5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none",
  borderRadius: 4,
};

export const pokemonGridSty: SxProps = { flex: 1, width: "100%" };
export const homeHeaderSty: SxProps = {
  display: "flex",
  backgroundColor: "cornflowerblue",
  justifyContent: "center",
  alignItems: "center",
};
