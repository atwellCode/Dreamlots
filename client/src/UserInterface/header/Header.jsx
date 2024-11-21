import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GiteOutlinedIcon from "@mui/icons-material/GiteOutlined";
import { styled } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DreamlotsLogo from "../../assets/logo.png";

const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto",
});

const MenuButton = styled(Button)({
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

const ProfileMenuItem = styled(MenuItem)({
  display: "flex",
  alignItems: "center",
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [propertiesMenuOpen, setPropertiesMenuOpen] = useState(false);
  const isLoggedIn = false;
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const ActiveNavLink = styled(NavLink)({
    color: "blue", // Change the color as needed
    fontWeight: "bold", // Change the font-weight as needed
  });

  const handlePropertiesMenuToggle = () => {
    setPropertiesMenuOpen(!propertiesMenuOpen);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <List>
        <ListItem button sx={{ paddingLeft: 3 }} component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          onClick={handlePropertiesMenuToggle}
          sx={{ paddingLeft: 3 }}
        >
          <ListItemText primary="Properties" />
          {propertiesMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={propertiesMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              onClick={handleMenuClose}
              sx={{ paddingLeft: 6 }}
              component={Link}
              to="/buy-property"
            >
              <ListItemText primary="Buy Property" />
            </ListItem>
            <ListItem
              button
              onClick={handleMenuClose}
              sx={{ paddingLeft: 6 }}
              component={Link}
              to="/rent-property"
            >
              <ListItemText primary="Rent Property" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem
          button
          sx={{ paddingLeft: 3 }}
          component={Link}
          to="/Services"
        >
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem
          button
          sx={{ paddingLeft: 3 }}
          component={Link}
          to="/AddProperty"
        >
          <ListItemText primary="Add Property" />
        </ListItem>
        <ListItem button sx={{ paddingLeft: 3 }} component={Link} to="/Contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {isLoggedIn ? (
          <ListItem button sx={{ paddingLeft: 3 }}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <>
            <ListItem
              button
              sx={{ paddingLeft: 3 }}
              component={Link}
              to="/seller-login"
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>

              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              button
              sx={{ paddingLeft: 3 }}
              component={Link}
              to="/seller-signup"
            >
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="Static"
      sx={{
        backgroundColor: "#F8F9FA",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>
        <Logo>
          <img
            src={DreamlotsLogo}
            alt="Logo"
            style={{ height: 45, padding: "5px" }}
          />
        </Logo>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <MenuButton
            color="inherit"
            component={Link}
            to="/"
            sx={{ marginRight: 4 }}
            startIcon={<GiteOutlinedIcon />}
          >
            Home
          </MenuButton>
          <MenuButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ marginRight: 4 }}
            endIcon={<ExpandMoreIcon />}
            startIcon={<HomeOutlinedIcon />}
          >
            Properties
          </MenuButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/buy-property"
            >
              Buy Property
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/rent-property"
            >
              Rent Property
            </MenuItem>
          </Menu>
          <MenuButton
            color="inherit"
            component={Link}
            to="/Services"
            sx={{ marginRight: 4 }}
            startIcon={<SettingsSuggestOutlinedIcon />}
          >
            Services
          </MenuButton>
          <MenuButton
            color="inherit"
            sx={{ marginRight: 4 }}
            component={Link}
            to="/Contact"
            startIcon={<LocalPhoneOutlinedIcon />}
          >
            Contact Us
          </MenuButton>
          <MenuButton
            color="inherit"
            sx={{ marginRight: 4 }}
            component={Link}
            to="/AddProperty"
            startIcon={<AddHomeOutlinedIcon />}
          >
            Add Property
          </MenuButton>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchorEl}
            open={Boolean(profileMenuAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            {isLoggedIn ? (
              <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
            ) : (
              <>
                <ProfileMenuItem
                  onClick={handleProfileMenuClose}
                  component={Link}
                  to="/seller-login"
                >
                  <LoginIcon sx={{ marginRight: 3 }} />
                  Login
                </ProfileMenuItem>
                <ProfileMenuItem
                  onClick={handleProfileMenuClose}
                  component={Link}
                  to="/seller-signup"
                >
                  <PersonAddIcon sx={{ marginRight: 3 }} />
                  Sign Up
                </ProfileMenuItem>
              </>
            )}
          </Menu>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
