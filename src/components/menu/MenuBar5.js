import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Image2 from "../image/Image2";
import Home2 from "../home/Home2";
import Fonts from "../Fonts";
import Logos from "../Logos";
import UploadU from "../upload/UploadU";
import Album5 from "../album/Album5";
import "./../../App.css";
import { connect } from "react-redux";
import { changeStyle1, changeStyle3, setHome } from "../../actions/actions";
import Grid from "@material-ui/core/Grid";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { faFilm, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compose from "recompose/compose";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      home: true,
      open: false
    };
  }

  setHome = () => {
    const history = createBrowserHistory();
    this.props.setHome(true);
    const location = {
      pathname: "/",
      state: { fromDashboard: true }
    };
    history.replace(location);
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  changeStyle = index => {
    if (index == 1) {
      this.props.changeStyle1(true);
      this.props.changeStyle3(false);
    }
    if (index == 2) {
      this.props.changeStyle1(false);
      this.props.changeStyle3(false);
    }
    if (index == 3) {
      this.props.changeStyle1(false);
      this.props.changeStyle3(true);
    }
    if (index == 4) {
      this.props.changeStyle1(true);
      this.props.changeStyle3(true);
    }
  };

  componentDidMount() {
    fetch(`http://localhost:8000/api/thumbnails`, {
      mode: "cors",
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => this.setState({ thumbnails: data.data }));
  }

  render() {
    const { classes, theme } = this.props;
    return this.state.thumbnails.length > 2 ? (
      <div className={classes.root}>
        <Router>
          {this.props.home & !this.props.style1 & !this.props.style3 ? (
            <Home2 />
          ) : (
            <div>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: this.state.open
                })}
                style={{ backgroundColor: "black" }}
              >
                <Toolbar disableGutters={!this.state.open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                      [classes.hide]: this.state.open
                    })}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    onClick={this.setHome}
                  >
                    Gatiway
                  </Typography>

                  <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    style={{ marginLeft: "750px" }}
                  >
                    {this.props.album.length > 0
                      ? this.props.album[0].Album
                      : null}
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open
                  })
                }}
                open={this.state.open}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {["Layout 1", "Layout 2", "Layout 3", "Layout 4"].map(
                    (text, index) => (
                      <ListItem
                        button
                        key={text}
                        onClick={() => this.changeStyle(index)}
                      >
                        <ListItemIcon>
                          {index % 2 === 0 ? (
                            <FontAwesomeIcon
                              icon={faFilm}
                              style={{ width: "60px", marginLeft: "-10px" }}
                              onClick={() => this.changeStyle(index)}
                            />
                          ) : (
                            <FontAwesomeIcon
                              style={{ width: "60px", marginLeft: "-10px" }}
                              icon={faCamera}
                              onClick={() => this.changeStyle(index)}
                            />
                          )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <Link to={`/album/${this.state.thumbnails[index].Album}`}>
                      <ListItem button key={text}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            this.state.thumbnails[index].Path
                          }
                          className={"Thumbnail5"}
                        />

                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Drawer>
              <main className={classes.content}>
                <Route path="/fonts" component={Fonts} />
                <Route path="/logos" component={Logos} />
                <Route
                  path="/upload"
                  render={props => <UploadU {...props} layout={2} />}
                />
                <Route path="/image/:id" component={Image2} />
                <Route path="/album/:name" component={Album5} />
              </main>
            </div>
          )}
        </Router>
      </div>
    ) : null;
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  style1: state.style1,
  style3: state.style3,
  home: state.home,
  album: state.album
});

export default compose(
  connect(
    mapStateToProps,
    { changeStyle1, changeStyle3, setHome }
  ),
  withStyles(styles, { withTheme: true })
)(MiniDrawer);
