import React from "react";
import { makeStyles } from "@material-ui/core";
import { LoadingFriend } from ".";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
});

const LoadingFriendSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LoadingFriend />
      <LoadingFriend />
      <LoadingFriend />
    </div>
  );
};

export default LoadingFriendSkeleton;
