import Box from "@mui/material/Box";
import {
  CardActions,
  Card,
  CardContent,
  List,
  ListItemAvatar, ListItemText, ListItem
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

function EventsList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, ml:1, mt:"3rem", border: 1}}>
      <Typography variant="h5" align={"center"} sx = {{mb: 1.5}}>
        Upcoming events
      </Typography>
        <List sx = {{overflow: "auto", maxHeight: 420 , border: 1}}>
          {[1,2,3,4,5,6,7,8,9].map((el) =>
            <ListItem
              key={el}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <NavigateNextIcon />
                </IconButton>
              }
            >
              <ListItemAvatar >
                <Avatar>
                  <NavigateNextIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary="wtf"
              />
            </ListItem>
          )}
        </List>
    </Box>
  );
}

export default EventsList;