import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import News from '../assets/news.png';

const pages = ['home', 'news', 'profile'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/home">
            <img src={News} alt="news" style={{ width: 50, height: 50 }} />
          </Typography>

          <Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                <Link to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
