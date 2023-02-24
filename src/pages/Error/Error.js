import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Error() {
  const { t } = useTranslation();

  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {t('errorPage')}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to="/">{t('textErrorPage')}</NavLink>
        </CardActions>
      </Card>
    </Box>
  );
}
