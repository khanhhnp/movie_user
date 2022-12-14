import { Box, Grid, Link } from "@mui/material";
import styled from "@emotion/styled";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";

interface news {
  type?: number;
  id: string;
  title: string;
  description?: string;
  image: string;
}
type Props = {
  list: news[];
  reactData?: boolean;
};

const ImageNews = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;
const Title = styled.h1<{ noSpace?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-top: ${(props) => (props.noSpace ? "0" : "0.5rem")};
  height: 3.3rem;
  text-overflow: ellipsis;
  transition: all 0.3s;
  &:hover {
    color: #fb4226;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const Desc = styled("p")`
  color: #4a4a4a;
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
`;

const NewsList = ({ list, reactData }: Props) => {
  return (
    <Grid container spacing={2}>
      {list.map((item) => {
        if (item.type)
          return (
            <Grid item md={item.type} key={item.id}>
              <Link
                target="_blank"
                href="https://moveek.com/tin-tuc/"
                rel="noreferrer"
                color="inherit"
                underline="none"
              >
                <ImageNews src={item.image} alt={item.title} />
              </Link>
              <Link
                target="_blank"
                href="https://moveek.com/tin-tuc/"
                rel="noreferrer"
                color="inherit"
                underline="none"
              >
                <Title>{item.title}</Title>
              </Link>
              <Desc>{item.description}</Desc>
              {reactData && (
                <Box display="flex" alignItems="center">
                  <ThumbUpAltIcon />
                  10
                  <Box
                    component="span"
                    ml={2}
                    display="flex"
                    alignItems="center"
                  >
                    <CommentIcon fontSize="small" />
                    <Box component="span" width="25px" textAlign="center">
                      20
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
          );
      })}
      <Grid
        item
        xs={12}
        md={4}
        direction="column"
        justifyContent="space-between"
        display="flex"
        container
      >
        {list.map((item) => {
          if (!item.type)
            return (
              <Grid container columnSpacing={1} key={item.id} mb={2}>
                <Grid item md={3} margin="auto">
                  <Link
                    target="_blank"
                    href="https://moveek.com/tin-tuc/"
                    rel="noreferrer"
                    color="inherit"
                    underline="none"
                  >
                    <ImageNews src={item.image} alt={item.title} />
                  </Link>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Link
                    target="_blank"
                    href="https://moveek.com/tin-tuc/"
                    rel="noreferrer"
                    color="inherit"
                    underline="none"
                  >
                    <Title noSpace>{item.title}</Title>
                  </Link>
                </Grid>
              </Grid>
            );
        })}
      </Grid>
    </Grid>
  );
};

export default NewsList;
