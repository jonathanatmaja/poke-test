import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { Controller, Form } from "react-hook-form";
import { usePokemonCollection } from "../hooks/use-pokemon-collection";

interface PokemonFavoriteForm {
  name: string;
}

export const PokemonFavoriteForm = (props: PokemonFavoriteForm) => {
  const { name } = props;
  const {
    collectionForm,
    onSubmitCollection,
    onRemoveCollection,
    pokemonCollections,
  } = usePokemonCollection(name);
  const {
    register,
    control,
    formState: { errors },
  } = collectionForm;

  const collectionTypes = [
    { label: "Team", value: 1 },
    { label: "Whishlist", value: 2 },
    { label: "Owned", value: 3 },
  ];

  const isInCollection = pokemonCollections.some((d) => d.name === name);

  return (
    <Box>
      <Form control={control} onSubmit={({ data }) => onSubmitCollection(data)}>
        <Typography sx={{ textDecoration: "underline", mb: 2 }}>
          Collection Form
        </Typography>
        <input type="hidden" {...register("name")} />
        <TextField
          fullWidth
          size="small"
          label="Nickname"
          sx={{ mb: 2 }}
          {...register("nickname")}
          error={!!errors.nickname}
          helperText={errors.nickname?.message}
        />
        <Controller
          name="collectionType"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Collection Type"
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
              {...field}
            >
              {collectionTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <TextField
          fullWidth
          size="small"
          label="Description"
          sx={{ mb: 2 }}
          {...register("description")}
        />
        <Box
          sx={{
            display: "flex",
            columnGap: 5,
          }}
        >
          {isInCollection && (
            <Button
              sx={{ marginLeft: "auto", display: "block", flex: 1 }}
              variant="outlined"
              size="small"
              color="warning"
              onClick={() => onRemoveCollection(name)}
            >
              Remove from collection
            </Button>
          )}

          <Button
            type="submit"
            sx={{ marginLeft: "auto", display: "block", flex: 1 }}
            variant="outlined"
            size="small"
          >
            Save
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
