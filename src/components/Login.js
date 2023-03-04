import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Login() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('user') === 'admin' && data.get('password') === '12345') {
      localStorage.setItem('user', JSON.stringify(data.get('user')));
      localStorage.setItem('password', JSON.stringify(data.get('password')));
      setName(data.get('user'));
      setPwd(data.get('password'));
    } else {
      toast.error("Ім'я користувача або пароль введено неправильно");
    }
  };

  useEffect(() => {
    if (name === 'admin' && pwd === '12345') {
      return navigate('/profile', { replace: true });
    }
  }, [name, pwd]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {t('titleLoginForm')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label={t('inputName')}
            name="user"
            autoComplete="user"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('inputPassword')}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('formBtn')}
          </Button>
          <ToastContainer />
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
