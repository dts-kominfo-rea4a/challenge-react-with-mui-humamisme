// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <Card sx={{ padding: "1.5rem 1rem 1rem", backgroundColor: "#F3F1EB" }}>
    {/* <Card sx={{ padding: "1.5rem 1rem 1rem", flexGrow: 1, maxWidth: 544, alignSelf: "flex-start", backgroundColor: "#F3F1EB" }}> */}
      <form action="" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField id="name" label="Name" variant="filled" required />
        <TextField id="phone" label="Phone" variant="filled" required />
        <TextField id="email" label="Email" variant="filled" required />
        <TextField id="photo-url" label="Photo URL" variant="filled" required />
        <Button type="submit" variant="text" color="success" sx={{ alignSelf: "start", marginTop: "1rem", padding: 0 }}>
          ADD NEW
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
