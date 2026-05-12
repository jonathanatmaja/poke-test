import { SxProps, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface InputSearchProps {
  fullWidth?: boolean;
  onSearch: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
  placeholder?: string;
  sx?: SxProps;
}

export const InputSearch = (props: InputSearchProps) => {
  const { fullWidth, onSearch, placeholder = "Search Pokemon...", sx } = props;
  return (
    <TextField
      variant="outlined"
      fullWidth={fullWidth}
      placeholder={placeholder}
      onChange={(e) => onSearch(e)}
      sx={{ py: "2rem", flexShrink: 0, ...sx }}
    />
  );
};
