import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

export const PokemonFavoriteForm = () => {
  const collectionTypesDropdown = [
    { label: "Team", value: 1 },
    { label: "Whishlist", value: 2 },
    { label: "Owned", value: 3 },
  ];

  return (
    <Box>
      <Typography sx={{ textDecoration: "underline", mb: 2 }}>
        Collection Form
      </Typography>

      <TextField fullWidth size="small" label="Nickname" sx={{ mb: 2 }} />
      <TextField
        select
        label="Collection Type"
        fullWidth
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
      >
        {collectionTypesDropdown.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField fullWidth size="small" label="Description" sx={{ mb: 2 }} />
      <Button sx={{ marginLeft: "auto", display: "block" }} variant="outlined">Save</Button>
    </Box>
  );
};
