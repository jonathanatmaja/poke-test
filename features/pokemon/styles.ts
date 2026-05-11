import { SxProps } from "@mui/material";

export const imageCardSty: SxProps = {
  flex: 1,
  display: "flex",
  height: "100%",
  boxShadow: "none",
  borderRadius: 4,
  flexDirection: "column",
  alignItems: "center",
  overflowY: "scroll",
  scrollbarWidth: "none",
};

export const detailCardSty: SxProps = {
  flex: 3,
  display: "flex",
  justifyContent: "flex-start",
  boxShadow: "none",
  borderRadius: 4,
  padding: "2rem",
  flexDirection: "column",
};
