import {
  Box,
  Button,
  Card,
  Skeleton,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useGetSummary } from "../hooks/use-get-summary";

interface SmartSummaryProps {
  name: string;
}

export const SmartSummary = (props: SmartSummaryProps) => {
  const { name } = props;
  const { onGetSummary, loading, summary } = useGetSummary();
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: "1rem", flex: 3 }}>
        {loading ? (
          <>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="90%" />
          </>
        ) : (
          summary
        )}
      </Box>
      <Button
        variant="contained"
        sx={{ flex: 1, width: "15%", alignSelf: "flex-end", m: 2, p: 0.5 }}
        onClick={() => onGetSummary(name)}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Summary"}
      </Button>
    </Card>
  );
};
