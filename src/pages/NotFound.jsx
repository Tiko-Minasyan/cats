import { useHistory } from "react-router-dom";

import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    width: "50%",
    padding: 20,
    margin: "auto",
    marginTop: 150,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

const NotFound = () => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={5}>
      <h1>Invalid URL</h1>
      <h4>
        Click{" "}
        <span className={classes.link} onClick={() => history.replace("/cats")}>
          here
        </span>{" "}
        to go back to the main page
      </h4>
    </Paper>
  );
};

export default NotFound;
