import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FacebookIcon from "@mui/icons-material/Facebook";

const FacebookSocialIcon = styled(FacebookIcon)({
  fontSize: "50px",
  color: "#8C4188",
  marginTop: 40,
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: "center",
  transition: "transform 0.25s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.01, 1.05, 1) scale(1.1)",
  },
}));

export default function Razotaji() {
  return (
    <div>
      <Grid align="center" spacing={3} style={{ paddingTop: 50 }}>
        <Grid item xs={8} style={{ paddingBottom: 50 }}>
          <Paper>
            <Item style={{ paddingTop: 50, background: "#eef7e9" }}>
              <div>
                <Typography variant="h4">Hydrophil</Typography>
              </div>
              <div>
                <Typography style={{ fontSize: 20 }}>
                  HYDROPHIL rada inovatīvus un ilgtspējīgus higiēnas produktus.
                  Produkti, kuriem vajadzētu paplašināt skatījumu uz tādām tēmām
                  kā ilgtspējība un resursu trūkums. Mēs vēlamies ar skaistām
                  lietām sasniegt skaistas lietas. Mūsu kopīgā vīzija:
                  ilgtspējīga pilna klāsta vannas istabai ražošana - ūdens
                  neitrāla, vegāna un godīga.
                </Typography>
                <Link href="https://www.facebook.com/wasserneutral/">
                  <FacebookSocialIcon />
                </Link>
              </div>
            </Item>
          </Paper>
        </Grid>

        <Grid item xs={8} style={{ paddingBottom: 50 }}>
          <Paper>
            <Item style={{ background: "#eef7e9" }}>
              <div>
                <Typography variant="h4">BioBag</Typography>
              </div>
              <div>
                <Typography style={{ fontSize: 20 }}>
                  BioBag izstrādā, ražo un tirgo labākos bioloģiskos produktus
                  atkritumu apsaimniekošanas, mazumtirdzniecības, HORECA,
                  rūpniecisko lietojumu un lauksaimniecības nozarēm, vienlaikus
                  saglabājot galveno uzmanību uz atjaunojamo, bioloģiski
                  noārdāmo un kompostējamo izejvielu izmantošanu.
                </Typography>
                <Link href="https://www.facebook.com/BioBag/">
                  <FacebookSocialIcon />
                </Link>
              </div>
            </Item>
          </Paper>
        </Grid>
        <Grid item xs={8} style={{ paddingBottom: 50 }}>
          <Paper>
            <Item style={{ background: "#eef7e9" }}>
              <div>
                <Typography variant="h4">Black and Blum</Typography>
              </div>
              <div>
                <Typography style={{ fontSize: 20 }}>
                  Visi mūsu produkti ir izstrādāti mūsu Londonas studijā,
                  izgatavoti no ilgtspējīgiem un pārtikai drošiem materiāliem.
                  Katra detaļa tiek pārbaudīta, lai nodrošinātu vislabāko
                  kvalitāti, lai tās varētu atkārtoti izmantot visu mūžu. Mēs
                  lepojamies ar 1% planētu un esam sertificēti neitrāli
                  klimatam, cik vien iespējams samazinot mūsu ietekmi uz vidi.
                </Typography>
                <Link href="https://www.facebook.com/blackblumdesign/">
                  <FacebookSocialIcon />
                </Link>
              </div>
            </Item>
          </Paper>
        </Grid>
        <Grid item xs={8} style={{ paddingBottom: 80 }}>
          <Paper>
            <Item style={{ background: "#eef7e9" }}>
              <div>
                <Typography variant="h4">Smelly Viking</Typography>
              </div>
              <div>
                <Typography style={{ fontSize: 20 }}>
                  Smelly Viking - Ozolnieku novadā radīts zīmols, kas piedāvā
                  unikālas, smaržīgas, košas, putojošas un dabīgā procesā
                  radītas ķermeņa ziepes. Smelly Viking ražotās ziepes ir ļoti
                  saudzīgas pret ādu, ražotas bez sintētiskām vielām, ražošanas
                  procesā pēc iespējas vairāk izmantojot vietējās izejvielas.
                </Typography>
                <Link href="https://www.facebook.com/SmellyViking/">
                  <FacebookSocialIcon />
                </Link>
              </div>
            </Item>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
