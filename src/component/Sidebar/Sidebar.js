import React from "react";
import "./Sidebar.scss";

import variables from "../../scss/variables.scss";

import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MicIcon from "@material-ui/icons/Mic";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import DescriptionIcon from "@material-ui/icons/Description";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "90px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    color: "white",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link className={classes.link} to="/">
          <ListItem button>
            <ListItemIcon style={{ color: variables.main }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText style={{ color: variables.main }} primary={"Home"} />
          </ListItem>
        </Link>

        <Link className={classes.link} to="/Resume">
          <ListItem button>
            <ListItemIcon style={{ color: variables.main }}>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: variables.main }}
              primary={"Resume"}
            />
          </ListItem>
        </Link>

        <Link className={classes.link} to="/Calendar">
          <ListItem button>
            <ListItemIcon style={{ color: variables.main }}>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: variables.main }}
              primary={"Schedule a Meeting"}
            />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/Podcast">
          <ListItem button>
            <ListItemIcon style={{ color: variables.main }}>
              <MicIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: variables.main }}
              primary={"Podcast"}
            />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/Photography">
          <ListItem button>
            <ListItemIcon style={{ color: variables.main }}>
              <CameraAltIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: variables.main }}
              primary={"Photography"}
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{ background: variables.main }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Zachary Graham
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

export default App;
