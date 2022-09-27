// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <section style={{ backgroundColor: "#DBF6F0", padding: "0 1rem", borderRadius: "4px" }}>
      <List>
        {data.map((contact) => {
          return (
            <ListItem key={contact.phone + "-" + +new Date()} sx={{ borderBottom: "thin solid rgba(0, 0, 0, 0.12)", pl: 0, pr: 0, overflow: "hidden", flexWrap: "wrap" }}>
              <ListItemAvatar sx={{ margin: { xs: "0 auto 1rem", sm: "0 2.5rem 0 0" } }}>
                <Avatar src={contact.photo} alt={contact.name} sx={{ width: "5rem", height: "5rem" }} />
              </ListItemAvatar>
              <Box sx={{ flex: { xs: "100%", sm: 1 }, textAlign: { xs: "center", sm: "left" } }}>
                <ListItemText primary={contact.name} />
                <ListItemText secondary={contact.phone} />
                <ListItemText secondary={contact.email} />
              </Box>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export default Contact;
