import React, { useState } from "react";
import {
  Box,
  Typography, 
  TextField,
  Button,
  Paper,
  useMediaQuery,
  Drawer,
  IconButton,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Input,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useTheme } from "@mui/material/styles";
import SideNavbar from "../SideNavbar/SideNavbar";
import SellerHeader from "../SellerHeader/SellerHeader";

function SellerChat() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [contacts] = useState([
    { name: "John Doe", id: 1, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", id: 2, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Michael Lee", id: 3, avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle sending messages
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Toggle drawer for mobile view
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Header */}
      <SellerHeader />

      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: "fixed", top: "1rem", left: "1rem", zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Main Layout */}
      <Box sx={{ display: "flex", height: "100vh" }}>
        {isMobile ? (
          <Drawer open={drawerOpen} onClose={toggleDrawer}>
            <SideNavbar />
          </Drawer>
        ) : (
          <SideNavbar />
        )}

        {/* Chat Section */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: isMobile ? 2 : 3,
            paddingTop: "5rem",
            backgroundColor: "#f5f5f5",
            flexBasis: "70%",
          }}
        >
          {/* Contact Name */}
          {selectedContact && (
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Chatting with: {selectedContact.name}
            </Typography>
          )}

          {/* Chat Messages Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              marginBottom: 2,
            }}
          >
            {messages.length === 0 ? (
              <Typography align="center" color="text.secondary">
                No messages yet. Start a conversation!
              </Typography>
            ) : (
              messages.map((msg, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    padding: 2,
                    marginBottom: 1,
                    alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.sender === "You" ? "#cce5ff" : "#e0f7fa",
                  }}
                >
                  <Typography>{msg.text}</Typography>
                  {msg.file && (
                    <Box sx={{ marginTop: 1 }}>
                      <a href={msg.file} target="_blank" rel="noopener noreferrer">
                        <Button>View File</Button>
                      </a>
                    </Box>
                  )}
                </Paper>
              ))
            )}
          </Box>

          {/* Message Input Area */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: 2,
              padding: 1,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              sx={{ marginRight: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <SendIcon />
            </Button>
            <Input
              type="file"
              onChange={handleFileChange}
              sx={{ display: "none" }}
              inputProps={{ accept: "image/*, .pdf, .docx, .xlsx" }}
            />
            <label htmlFor="file-upload">
              <IconButton color="primary" component="span">
                <AttachFileIcon />
              </IconButton>
            </label>
          </Box>
        </Box>

        {/* Contacts List - Right Side */}
        {!isMobile && (
          <Box
            sx={{
              width: "30%",
              backgroundColor: "#ffffff",
              padding: 2,
              borderLeft: "1px solid #ddd",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contacts
            </Typography>
            <List>
              {contacts.map((contact) => (
                <ListItem
                  button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                >
                  <ListItemAvatar>
                    <Avatar src={contact.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={contact.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </>
  );
}

export default SellerChat;
