import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  welcomeDiv: {
    marginLeft: "20%",
    width: "80%",

    [theme.breakpoints.down("md")]: {
      marginLeft: "10%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcomeDiv}>
      <h2>Welcome to the Cats Page!</h2>
      <p>Click on any category name on the left to load images of cats</p>
    </div>
  );
};

export default Welcome;
