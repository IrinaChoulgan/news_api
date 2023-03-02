import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import News from './assets/news.png';
import Ukraine from './assets/ukraine.png';
import Usa from './assets/usa.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    if (!user) return;
    const itemsName = JSON.parse(localStorage.getItem('user'));
    const itemsPassword = JSON.parse(localStorage.getItem('password'));

    if (itemsName && itemsPassword) {
      setPwd(itemsPassword);
      setName(itemsName);
    }
  }, [user]);

  const handleClick = e => {
    localStorage.clear();
    setName('');
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/">
            <img src={News} alt="news" style={{ width: 50, height: 50 }} />
          </Typography>

          <Box>
            <Button>
              <Link to={'/'}>{t('titleHome')}</Link>
            </Button>
            <Button>
              <Link to={'/news'}>{t('titleNews')}</Link>
            </Button>
            <Button>
              <Link to={user ? '/profile' : '/'}>{t('titleProfile')}</Link>
            </Button>
          </Box>
          <Box style={{ marginLeft: 'auto' }}>
            {name && pwd && name !== '' && pwd !== '' ? (
              <Box>
                <Typography
                  variant="p"
                  component="span"
                  style={{ marginRight: '20px' }}
                >
                  {t('textForUser')},{user}
                </Typography>

                <IconButton aria-label="exit" onClick={handleClick}>
                  <ExitToAppIcon />
                </IconButton>
              </Box>
            ) : (
              <Button color="inherit">
                <Link to={'/login'}>{t('loginBtn')}</Link>
              </Button>
            )}
          </Box>
          <Box style={{ marginLeft: '30px' }}>
            <IconButton aria-label="exit" onClick={() => changeLanguage('uk')}>
              <img src={Ukraine} alt="news" style={{ width: 18, height: 18 }} />
            </IconButton>

            <IconButton aria-label="exit" onClick={() => changeLanguage('en')}>
              <img src={Usa} alt="news" style={{ width: 18, height: 18 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
