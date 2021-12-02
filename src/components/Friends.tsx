import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import FriendItem from "./FriendItem";
import theme from "../style/theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 2,
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
  contend: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    heigh: "100%",
    marginBottom: 16,
    marginTop: 16,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  title: {
    marginTop: 4,
    marginBottom: 4,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 40,
    },
  },
  item: {
    marginBottom: 8,
    marginTop: 8,
  },
});

interface Props {
  friends: Definitions.Friend[];
  handleDetails: () => void;
}

const Friends = ({ friends, handleDetails }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" component="h2" className={classes.title}>
        List of friends
      </Typography>
      <div className={classes.contend} data-testid="container-list">
        {friends.map((friend) => {
          return (
            <div className={classes.item} key={friend.id}>
              <FriendItem friend={friend} handleDetails={handleDetails} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
