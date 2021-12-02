import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
  linesContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 4,
  },
});

const LoadingFriend = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: 350 }} className={classes.box}>
      <Skeleton variant="circular" width={50} height={50} />
      <div className={classes.linesContainer}>
        <Skeleton animation="wave" width={150} />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} />
      </div>
    </Box>
  );
};

export default LoadingFriend;
