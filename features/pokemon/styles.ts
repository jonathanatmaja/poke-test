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

export const infoCardSty: SxProps = {
  flex: 3,
  display: "flex",
  justifyContent: "flex-start",
  boxShadow: "none",
  borderRadius: 4,
  padding: "2rem",
  flexDirection: "column",
};

export const statCardSty: SxProps = {
  justifyContent: "center",
  boxShadow: "none",
  borderRadius: 4,
  padding: "2rem",
  flex: 4,
  display: "flex",
  width: "100%",
  columnGap: 4,
  flexDirection: "column",
};

export const spriteCardSty: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: 2,
  rowGap: 2,
};

export const detailWrapperSty: SxProps = {
  display: "flex",
  alignItems: "stretch",
  height: "calc(100vh - 9.5rem)",
  gap: "1rem",
};
