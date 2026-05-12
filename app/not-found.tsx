import Pokeball from "@/public/pokeball.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 9.5rem)",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 70 }}>
        4<Image src={Pokeball} alt="pokeball" width={52} height={52} priority />
        4
      </Typography>
      Page not found
    </Box>
  );
}
