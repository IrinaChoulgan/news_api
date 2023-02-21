import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Error page{' '}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to="/home">Home</NavLink>
        </CardActions>
      </Card>
    </Box>
  );
}
