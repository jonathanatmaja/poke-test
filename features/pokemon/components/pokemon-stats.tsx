import { Box, Typography } from "@mui/material";

export interface PokemonStatsProps {
  baseStat: number;
  name: string;
}

export const PokemonStats = (props: { stats: PokemonStatsProps[] }) => {
  const { stats } = props;
  const MAX_STAT = 255;
  const MAX_BAR_WIDTH = 200;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="button"
        sx={{
          textDecoration: "underline",
          mb: 2,
        }}
      >
        Stats
      </Typography>

      {stats?.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              minWidth: 120,
            }}
          >
            {item.name}
          </Typography>

          <Box
            sx={{
              flex: 1,
              height: 10,
              bgcolor: "#e0e0e0",
              borderRadius: 999,
              overflow: "hidden",
              width: MAX_BAR_WIDTH,
            }}
          >
            <Box
              sx={{
                width: (item.baseStat / MAX_STAT) * MAX_BAR_WIDTH,
                height: "100%",
                bgcolor: "orange",
                borderRadius: 999,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
