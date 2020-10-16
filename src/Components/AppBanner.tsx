import { AppBar, createStyles, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar } from '@material-ui/core';
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
  }),
);


/**
 * Displayed along the top of the pages within the user interface
 */
export const AppBanner = (): JSX.Element => {

  const { isAuthenticated, userHasAuthenticated } = useAppContext()!;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const history = useHistory();

  const handleLogout = () => {
    userHasAuthenticated(false);
    setAnchorEl(null);
    localStorage.removeItem("user");
    history.push("/");
  };


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {isAuthenticated && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
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
