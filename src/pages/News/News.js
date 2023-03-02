import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import operations from '../../redux/operations.tsx';
import { getNews, getLoading } from '../../redux/selectors';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Sceleton from '../../components/Sceleton';

function News() {
  const { t } = useTranslation();

  const news = useSelector(getNews);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => dispatch(operations.addNews(page)), [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleClickOnDeleteBtn = id => {
    dispatch(operations.deleteNews(id));
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: '50px' }}>
        {news?.map((news, index) => (
          <Card
            sx={{ width: 275 }}
            key={index}
            style={{ padding: '10px', margin: '10px', position: 'relative' }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                style={{ marginBottom: '10px' }}
              >
                {news.title}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                style={{ marginBottom: '10px', fontSize: '16px' }}
              >
                {news.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                style={{ bottom: '5px', position: 'absolute' }}
                onClick={() => handleClickOnDeleteBtn(news.id)}
              >
                {t('newsBtn')}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Box textAlign="center">
        {loading ? (
          <Sceleton />
        ) : (
          <Button
            variant="contained"
            onClick={handleClick}
            style={{ marginTop: '20px' }}
          >
            {t('loadBtn')}
          </Button>
        )}
      </Box>
    </>
  );
}

export default News;
