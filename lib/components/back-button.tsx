import { ArrowBack } from "@mui/icons-material";
import { Card, SxProps } from "@mui/material";
import { useRouter } from "next/navigation";

const buttonSty: SxProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 16,
  cursor: "pointer",
};

interface BackButtonProps {
  sx?: SxProps;
  onBack?: () => void;
}

export const BackButton = (props: BackButtonProps) => {
  const { sx, onBack } = props;
  const route = useRouter();
  return (
    <Card
      variant="outlined"
      sx={{ ...buttonSty, ...sx }}
      onClick={onBack ?? (() => route.back())}
      
    >
      <ArrowBack fontSize="small" data-testid="back-icon" />
    </Card>
  );
};
