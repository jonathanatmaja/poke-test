import { SxProps } from "@mui/material";

export const pokemonListSty: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  overflow: "hidden",
  padding: "2rem",
  pt: 0,
  flex: 1,
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
  cursor: "pointer",
};

export const pokemonGridSty: SxProps = {
  width: "100%",
};
export const homeHeaderSty: SxProps = {
  display: "flex",
  backgroundColor: "cornflowerblue",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
};
