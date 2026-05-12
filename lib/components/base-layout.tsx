"use client";

import { homeHeaderSty } from "@/features/home/styles";
import Logo from "@/public/logo.png";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <Box sx={homeHeaderSty} id="header">
          <Image
            src={Logo}
            alt="Logo"
            style={{ width: 150, height: "auto" }}
            priority
          />
        </Box>
        {children}
      </ThemeProvider>
    </Box>
  );
};
