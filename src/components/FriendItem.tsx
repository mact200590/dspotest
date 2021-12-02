import { Avatar, makeStyles, Button, useMediaQuery } from "@material-ui/core";
import React, { useCallback } from "react";
import theme from "../style/theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
    [theme.breakpoints.down("xs")]: {
      cursor: "pointer",
      "&:hover": {
        borderRadius: 8,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: theme.palette.grey[300],
        transition: theme.transitions.duration.standard,
      },
    },
  },
  contend: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  descriptions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginLeft: 8,
  },
  name: {
    marginBottom: 2,
    marginTop: 2,
  },
  status: {
    marginBottom: 0,
    marginTop: 2,
  },
  button: {
    display: "flex",
    marginLeft: 65,
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});

interface Props {
  friend: Definitions.Friend;
  handleDetails: (id: number) => void;
}

const FriendItem = ({ friend, handleDetails }: Props) => {
  const classes = useStyles();
  const handleOnclick = useCallback(() => {
    handleDetails(friend.id);
  }, [friend.id, handleDetails]);

  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div
      data-testid="item-list"
      className={classes.container}
      onClick={matches ? handleOnclick : undefined}
    >
      <div className={classes.contend}>
        <Avatar
          alt="Image"
          src={friend.img}
          children={friend.first_name.charAt(0)}
        />
        <div className={classes.descriptions}>
          <p
            className={classes.name}
          >{`${friend.first_name} ${friend.last_name}`}</p>
          <p className={classes.status}>{friend.status}</p>
        </div>
      </div>
      <div className={classes.button}>
        <Button variant="outlined" onClick={handleOnclick}>
          Select
        </Button>
      </div>
    </div>
  );
};
export default FriendItem;
