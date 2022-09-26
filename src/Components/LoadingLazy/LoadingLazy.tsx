import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Loading from "Assets/Loading/loading.gif";

type Props = {};
const StyledBox = styled(Box)`
  position: fixed;
  background-position: center;
  background-size: cover;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
`;

const LoadingLazy = (props: Props) => {
  return (
    <StyledBox
      sx={{
        backgroundImage: `url(${Loading})`,
      }}
    />
  );
};

export default LoadingLazy;
