import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import Friends from "../components/Friends";
import { LoadingFriendSkeleton } from "../components/";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

const FriendsContainer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { error, isLoading, response } = useFetch("/friends");

  const handleDetails = useCallback(
    (id: number) => {
      navigate("/friends/id");
    },
    [navigate]
  );

  if (error) {
    return <div className={classes.center}>{`Message ${error.message}`}</div>;
  }

  if (isLoading) {
    return (
      <div className={classes.center}>
        <LoadingFriendSkeleton />
      </div>
    );
  }
  return <Friends friends={response || []} handleDetails={handleDetails} />;
};

export default FriendsContainer;
