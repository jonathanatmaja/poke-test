import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Toaster position="bottom-right" />
      {children}
    </Box>
  );
};
