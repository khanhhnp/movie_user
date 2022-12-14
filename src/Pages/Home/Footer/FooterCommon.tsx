import { Container, Grid, Link, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import ImagesLogo from "./Images";
import ios from "Assets/Footer/ContantsLogo/ios.png";
import android from "Assets/Footer/ContantsLogo/android.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import BackToTop from "./BackToTop";

type Props = {};

const StyledLink = styled(Link)`
  color: #9e9e9e;
  font-size: 0.85rem;
  font-weight: 300;
  transition: all 0.5s;
  &:hover {
    color: #fff;
  }
`;

const StyledImg = styled("img")`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  &:hover {
    filter: grayscale(80%);
  }
`;

const TextFooterCommon = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;
const TextContact = styled("span")`
  font-size: 0.9rem;
  color: #9e9e9e;
  margin-left: 0.5rem;
  &:hover {
    opacity: 0.7;
  }
`;
const FooterCommon = (props: Props) => {
  return (
    <div>
      <Box
        sx={{ backgroundColor: "#212121", color: "#fff", padding: "1.2rem 0" }}
      >
        <BackToTop />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={3} sm={4} display={{ xs: "none", sm: "block" }}>
              <TextFooterCommon>MOVIES</TextFooterCommon>
              <Typography>
                <StyledLink href="#" underline="none">
                  Giới thiệu
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink href="#" underline="none">
                  FAQ
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink href="#" underline="none">
                  Liên hệ
                </StyledLink>
              </Typography>
            </Grid>
            <Grid item lg={3} sm={4} display={{ xs: "none", sm: "block" }}>
              <TextFooterCommon>ĐIỀU KHOẢN SỬ DỤNG</TextFooterCommon>
              <Typography>
                <StyledLink href="#" underline="none">
                  Điều Khoản Chung
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink href="#" underline="none">
                  Điều Khoản Giao Dịch
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink href="#" underline="none">
                  Điều Khoản Thanh Toán
                </StyledLink>
              </Typography>

              <Typography>
                <StyledLink href="#" underline="none">
                  Điều Khoản Bảo Mật
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink href="#" color="inherit" underline="none">
                  Câu Hỏi Thường Gặp
                </StyledLink>
              </Typography>
            </Grid>
            <Grid item lg={4} display={{ xs: "none", lg: "block" }}>
              <TextFooterCommon>ĐỐI TÁC</TextFooterCommon>
              <Grid container rowSpacing={2}>
                {ImagesLogo.map((image) => {
                  return (
                    <Grid item xs={3} key={image.id}>
                      <Link href={image.href} target="_blank" rel="noopener">
                        <StyledImg src={image.src} alt={image.name} />
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid
              xs={12}
              item
              lg={2}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box display={{ xs: "none", lg: "block" }}>
                <TextFooterCommon>MOBILE APP</TextFooterCommon>
                <Box display="flex">
                  <Link
                    href="https://movie.zalopay.vn/buffer?fbclid=IwAR2zuIjKgIliemdXqy2yDgKx77hIacTQhM3Xzamuyps6qFWzPLe5mguiIM4"
                    target="_blank"
                    rel="noopener"
                    mr={2}
                  >
                    <StyledImg src={ios} alt="IOS" />
                  </Link>
                  <Link
                    href="https://movie.zalopay.vn/buffer?fbclid=IwAR2zuIjKgIliemdXqy2yDgKx77hIacTQhM3Xzamuyps6qFWzPLe5mguiIM4"
                    target="_blank"
                    rel="noopener"
                  >
                    <StyledImg src={android} alt="Android" />
                  </Link>
                </Box>
              </Box>
              <Box>
                <TextFooterCommon>LIỆN HỆ</TextFooterCommon>
                <Link
                  href="#"
                  display="flex"
                  alignItems="center"
                  underline="none"
                  mb={1}
                >
                  <FacebookIcon color="info" />
                  <TextContact>Khanh Hồ</TextContact>
                </Link>
                <Link
                  href="#"
                  display="flex"
                  alignItems="center"
                  underline="none"
                  mb={1}
                >
                  <FacebookIcon color="info" />
                  <TextContact>Trọng Trương</TextContact>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FooterCommon;
