import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@material-ui/core/Grid";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@material-ui/core/Link";
import { styled } from "@mui/system";

const FooterSocialIcons = styled(Box)({
  marginLeft: "30px",
});

const YoutubeSocialIcon = styled(YoutubeIcon)({
  fontSize: "100px",
  color: "#8C4188",
  marginTop: -4,
});

const TwitterSocialIcon = styled(TwitterIcon)({
  fontSize: "90px",
  color: "#8C4188",
});

const InstagramSocialIcon = styled(InstagramIcon)({
  fontSize: "90px",
  color: "#8C4188",
});

export default function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        backgroundColor: "#95AD6F",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />

        <Container maxWidth="sm">
          <Grid container item xs={12}>
            <Grid>
              <div>
                <Typography style={{ fontSize: 30, paddingTop: 25 }}>
                  Sociālie tīkli
                </Typography>
              </div>
            </Grid>

            <Grid>
              <div>
                <Typography>
                  <FooterSocialIcons>
                    <Link href="https://www.youtube.com">
                      <YoutubeSocialIcon />
                    </Link>
                  </FooterSocialIcons>
                </Typography>
              </div>
            </Grid>

            <Grid>
              <div>
                <Typography>
                  <FooterSocialIcons>
                    <Link href="https://www.twitter.com">
                      <TwitterSocialIcon />
                    </Link>
                  </FooterSocialIcons>
                </Typography>
              </div>
            </Grid>
            <Grid>
              <div>
                <Typography>
                  <FooterSocialIcons>
                    <Link href="https://www.instagram.com">
                      <InstagramSocialIcon />
                    </Link>
                  </FooterSocialIcons>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
