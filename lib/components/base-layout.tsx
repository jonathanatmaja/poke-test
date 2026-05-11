import { homeHeaderSty } from "@/features/home/styles";
import Logo from "@/public/logo.png";
import { Box } from "@mui/material";
import Image from "next/image";
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
      <Box sx={homeHeaderSty} id="header">
              <Image src={Logo} alt="Logo" style={{ width: 150, height: "auto" }} />
            </Box>
      {children}
    </Box>
  );
};
