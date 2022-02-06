import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import {useStyles} from "../components/styles"

const Crowd = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={3} className={styles.root}>
      <Grid item xs={12}>
        <Paper className={styles.paper} elevation={3}>
          {/* <Link to="/"><img loop="infinite" border="0" src={Crowdgif} alt="crowd detection" /></Link> */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Crowd;
