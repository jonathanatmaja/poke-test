import { DEFAULT_IMG_WIDTH_HEIGHT } from "@/lib/constants";
import { Box, Card, Chip, Typography } from "@mui/material";
import Image from "next/image";
import { detailCardSty, imageCardSty } from "../styles";
import { PokemonDetailType, PokemonLoreType } from "../types";
import { PokemonStats, PokemonStatsProps } from "./pokemon-stats";
import { PokemonTypes, PokemonTypesProps } from "./pokemon-types";
import { getRandomPaleColor } from "../utils";
import { PokemonVarieties, PokemonVarietiesProps } from "./pokemon-varieties";
import { PokemonFavoriteForm } from "./pokemon-favorite-form";

interface PokemonDetailProps {
  detail: Partial<PokemonDetailType>;
  lore: Partial<PokemonLoreType>;
}

export const PokemonDetail = (props: PokemonDetailProps) => {
  const { detail, lore } = props;
  const { sprites, name } = detail;
  const spriteUrls =
    sprites &&
    Object.values(sprites).filter((v) => typeof v === "string" && v !== null);

  const description =
    String(lore?.flavor_text_entries?.[0]?.flavor_text) || "-";

  const stats = detail?.stats?.map((d) => ({
    name: d.stat.name,
    baseStat: d.base_stat,
  })) as PokemonStatsProps[];

  const types = detail?.types?.map((d) => ({
    name: d.type.name,
    color: getRandomPaleColor(),
  })) as PokemonTypesProps[];

  const varieties = lore?.varieties?.map((d) => ({
    name: d.pokemon.name,
  })) as PokemonVarietiesProps[];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        height: "calc(100vh - 9.5rem)",
        gap: "1rem",
      }}
    >
      <Card variant="outlined" elevation={0} sx={imageCardSty}>
        {spriteUrls &&
          spriteUrls.map((url, index) => (
            <Box key={index}>
              <Image
                src={url}
                alt={url}
                width={DEFAULT_IMG_WIDTH_HEIGHT * 2}
                height={DEFAULT_IMG_WIDTH_HEIGHT * 2}
                style={{ transform: "scale(1.2)" }}
              />
            </Box>
          ))}
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 2,
          rowGap: 2,
        }}
      >
        <Card
          variant="outlined"
          elevation={0}
          sx={{ ...detailCardSty, flex: 1 }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="button" sx={{ fontSize: 36 }}>
              {name}
            </Typography>
            <Chip label={detail?.id} variant="outlined" size="small" />
          </Box>

          <PokemonTypes types={types} />
          <Typography variant="subtitle2" sx={{ color: "GrayText" }}>
            {description}
          </Typography>
        </Card>
        <Card
          variant="outlined"
          elevation={0}
          sx={{
            justifyContent: "center",
            boxShadow: "none",
            borderRadius: 4,
            padding: "2rem",
            flex: 4,
            display: "flex",
            width: "100%",
            columnGap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <PokemonStats stats={stats} />
            <PokemonVarieties varieties={varieties} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <PokemonFavoriteForm />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
