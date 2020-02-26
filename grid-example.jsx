import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={show ? 12 : 6}>
          <Paper className={classes.paper}>xs=6</Paper>
          <Button onClick={() => setShow(!show)}> Ok </Button>
        </Grid>
        <Grid item xs={show ? 12 : 6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={show ? 12 : 6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={show ? 12 : 6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
      {show && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Text
          </Grid>
        </Grid>
      )}
    </div>
  );
}
