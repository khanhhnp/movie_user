import { theme } from "GlobalStyles";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

//BookingTicket
export const BookingItems = styled(Box)`
  position: fixed;
  top: 80px;
  right: 0;
  width: 30%;
  box-shadow: 0 0 5px #ccc;
  @media screen and (max-width: 992px) {
    position: absolute;
  }
`;

export const BookingItem = styled(Box)`
  padding: 1rem;
  background-color: ${theme.palette.primary.dark};
`;

export const BookingTitle = styled(Typography)`
  color: ${theme.palette.primary.contrastText};
`;

export const BookingText = styled(Typography)`
  color: ${theme.palette.secondary.main};
`;

export const ChairStyle = styled(Box)`
  width: 2rem;
  height: 2rem;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: ${theme.palette.primary.contrastText};
`;

