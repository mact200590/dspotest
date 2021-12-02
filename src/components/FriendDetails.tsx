import React from "react";
import {
  makeStyles,
  Button,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Avatar,
} from "@material-ui/core";
import Front from "../assets/cardImage.webp";
import theme from "../style/theme";

const useStyles = makeStyles({
  card: {
    minWidth: 445,
    [theme.breakpoints.down("xs")]: {
      minWidth: 200,
      marginLeft: 20,
      marginRight: 20,
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: 8,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 40,
    },
  },
  text: {
    marginLeft: 8,
    textAlign: "center",
  },
  bio: {
    width: 100,
  },
  descriptions: {
    width: 350,
    marginLeft: 46,
  },
  button: {
    position: "fixed",
    top: 10,
    right: 10,
  },
});

interface Props {
  friend: Definitions.FriendRequiredDetail;
  handleClick: () => void;
}

const FriendDetails = ({ friend, handleClick }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} data-cy="card-container">
        <CardMedia
          style={{ height: "140px" }}
          component="img"
          alt="img"
          image={Front}
        />
        <CardContent>
          <div className={classes.avatar}>
            <Avatar
              data-cy="avatar"
              alt="Avatar"
              src={friend.img}
              children={friend.first_name.charAt(0)}
            />
            <Typography variant="h5" className={classes.text}>
              {`${friend.first_name} ${friend.last_name}`}
            </Typography>
          </div>
          <div className={classes.descriptions}>
            <Typography gutterBottom variant="h6" component="div">
              {`Phone: ${friend.phone}`}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {`Address: ${friend.address_1}`}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {`City: ${friend.city}`}
            </Typography>
            <Typography variant="body1" noWrap paragraph>
              {`Bio: ${friend.bio}`}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Button
        variant="outlined"
        onClick={handleClick}
        className={classes.button}
      >
        Go Back
      </Button>
    </>
  );
};
export default FriendDetails;
