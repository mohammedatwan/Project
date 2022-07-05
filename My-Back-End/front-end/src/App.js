import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Student from "./components/showStudent/showStudent.js";
import Create from "./components/createStudent/createStudent.js";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
            <Grid item xs={12} ms={4} lg={12}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
