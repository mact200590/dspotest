import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { FriendDetails, LoadingFriend } from "../components";
import { detailsFriend } from "../utils/dataDefault";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

const FriendDetailsContainer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { error, isLoading, response } = useFetch("/friends/id");

  const handleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (error) {
    return <div className={classes.center}>{`Mensafe{error.message}`}</div>;
  }

  if (isLoading) {
    return (
      <div className={classes.center}>
        <LoadingFriend />
        <LoadingFriend />
        <LoadingFriend />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <FriendDetails
        friend={response || detailsFriend}
        handleClick={handleClick}
      />
    </div>
  );
};

export default FriendDetailsContainer;
