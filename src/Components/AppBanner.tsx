import { AppBar, createStyles, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppContext } from '../libs/AppContext';
import { useHistory } from "react-router-dom";
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    banner: {
      position: "sticky"
    }
  }),
);


/**
 * Displayed along the top of the pages within the user interface
 */
export const AppBanner = (): JSX.Element => {

  const { isAuthenticated, userHasAuthenticated } = useAppContext()!;
  const [userAnchorEl, setUserAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mainAnchorEl, setMainAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const userMenuOpen = Boolean(userAnchorEl);
  const mainMenuOpen = Boolean(mainAnchorEl);

  const history = useHistory();

  const handleLogout = () => {
    userHasAuthenticated(false);
    setUserAnchorEl(null);
    localStorage.removeItem("user");
    history.push("/");
  };

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleMainMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMainAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserAnchorEl(null);
  };

  const handleMainMenuClose = () => {
    setMainAnchorEl(null);
  };


  return (
    <AppBar className={classes.banner}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMainMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-main-appbar"
          anchorEl={mainAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={mainMenuOpen}
          onClose={handleMainMenuClose}
          getContentAnchorEl={null}
        >
          {isAuthenticated && (<>
            <MenuItem onClick={() => {
              history.push("/admin");
              handleMainMenuClose();
            }}
            >Admin</MenuItem>
            <MenuItem onClick={() => {
              history.push("/graph");
              handleMainMenuClose();
            }}
            >Graphs</MenuItem></>)}
          {!isAuthenticated && (<>

            <MenuItem onClick={() => {
              history.push("/");
              handleMainMenuClose();
            }}
            >Enter Data</MenuItem>
            <MenuItem onClick={() => {
              history.push("/login");
              handleMainMenuClose();
            }}
            >Login</MenuItem>
          </>)}
        </Menu>
        <Typography variant="h6" className={classes.title}>
          School Carbon Tracker
        </Typography>
        {isAuthenticated && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-user-appbar"
              anchorEl={userAnchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={userMenuOpen}
              onClose={handleUserMenuClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBanner;
