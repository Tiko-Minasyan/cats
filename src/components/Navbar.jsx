import { useDispatch, useSelector } from "react-redux";
import { getCatsRequest } from "../redux/cats/action";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: 260,
    height: "100vh",
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      width: 230,
    },
  },
  drawer: {
    width: 200,
    background: "#0a2746",
    [theme.breakpoints.down("sm")]: {
      width: 170,
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();

  const { isGettingCatsCategories, catsCategories } = useSelector(
    (state) => state.cats
  );

  const handleCategoryClick = (id) => {
    dispatch(getCatsRequest(id));
  };

  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }} className={classes.sidebar}>
      <Drawer variant="permanent" anchor="left">
        {isGettingCatsCategories ? (
          <CircularProgress />
        ) : (
          <List className={classes.drawer}>
            {catsCategories.map((category) => (
              <ListItem
                button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
              >
                <ListItemIcon style={{ color: "white" }}>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "white" }}
                  primary={category.name}
                />
              </ListItem>
            ))}
          </List>
        )}
        <Divider />
      </Drawer>
    </Box>
  );
}
