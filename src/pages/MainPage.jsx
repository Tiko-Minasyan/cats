import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

import {
  getCatsCategoriesRequest,
  getMoreCatsRequest,
} from "../redux/cats/action";

const useStyles = makeStyles(() => ({
  mainDiv: {
    width: "100%",
    padding: 10,
  },
  loading: {
    position: "absolute",
    top: 20,
    left: "50%",
  },
  imageDiv: {
    border: "1px solid black",
    width: "100%",
    height: 400,
    background: "lightgray",
  },
  loadMoreBtn: {
    marginTop: 20,
    width: 120,
    height: 40,
  },
}));

const MainPage = () => {
  const dispatch = useDispatch();

  const { isGettingCats, isGettingMoreCats, cats, category } = useSelector(
    (state) => state.cats
  );

  useEffect(() => {
    dispatch(getCatsCategoriesRequest());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(getMoreCatsRequest(category));
  };

  const classes = useStyles();

  return (
    <div className="d-flex" style={{ justifyContent: "space-between" }}>
      <Navbar />

      <div className={classes.mainDiv}>
        {!cats.length && !isGettingCats && <Welcome />}

        {isGettingCats && (
          <div className={classes.loading}>
            <CircularProgress style={{ width: 75, height: 75 }} />
          </div>
        )}

        <Grid container>
          {cats.map((cat, index) => (
            <Grid key={index} item xs={12} md={6} className={classes.imageDiv}>
              <img
                src={cat.url}
                alt="cat"
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Grid>
          ))}
        </Grid>

        {!!cats.length && (
          <Button
            variant="contained"
            color="primary"
            className={classes.loadMoreBtn}
            onClick={loadMore}
            disabled={isGettingMoreCats}
          >
            {isGettingMoreCats ? (
              <CircularProgress style={{ width: 30, height: 30 }} />
            ) : (
              "Load More"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
