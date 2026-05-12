"use client";

import { homeHeaderSty } from "@/features/home/styles";
import Logo from "@/public/logo.png";
import { HomeOutlined } from "@mui/icons-material";
import { Box, Card, createTheme, SxProps, ThemeProvider } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const buttonSty: SxProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 16,
  cursor: "pointer",
  position: "absolute",
  left: "2%",
};

export const BaseLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  const backHome = pathname !== "/";
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
          {backHome && (
            <Card
              variant="outlined"
              sx={buttonSty}
              onClick={() => router.push("/")}
            >
              <HomeOutlined fontSize="small" data-testid="back-icon" />
            </Card>
          )}
        </Box>
        {children}
      </ThemeProvider>
    </Box>
  );
};
