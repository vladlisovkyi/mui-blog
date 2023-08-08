import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import { Delete, EditLocation, ModeEdit } from "@mui/icons-material";
import { Diary } from "../../types/diaryInterface";

interface DiariesItemProps extends Diary {
  onDelete: () => void; // Add onDelete prop
}

const DiariesItem: React.FC<DiariesItemProps> = ({
  author,
  date_of_post,
  description,
  image,
  name_of_channel,
  title,
  onDelete,
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90%", md: "70%", lg: "60%" },
        minHeight: "65vh",
        margin: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }}>{name_of_channel.charAt(0)}</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocation />
          </IconButton>
        }
        title={name_of_channel}
        subheader={date_of_post}
      />
      <CardMedia
        component="img"
        height="320"
        image={`./assets/images/posts/${image}`}
        alt={title}
        loading="lazy"
        sx={{ borderRadius: 4 }}
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display={"flex"}>
          <Typography fontWeight={"bold"} width={120} variant="caption">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton color="warning">
          <ModeEdit />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete()}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DiariesItem;
