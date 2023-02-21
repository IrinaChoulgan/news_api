import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        const json = await res.json();
        setLoading(false);
        setNews((prev) => [...prev, ...json]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setNews(
            news.filter((news) => {
              return news.id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleClickOnDeleteBtn = (id) => {
    onDelete(id);
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: '50px' }}>
        {news?.map((news, index) => (
          <Card sx={{ width: 275 }} key={index} style={{ padding: '10px', margin: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {news.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClickOnDeleteBtn(news.id)}>
                Delete this news
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Box textAlign="center">
        <Button variant="contained" onClick={handleClick}>
          {loading ? 'loading...' : 'Load more...'}
        </Button>
      </Box>
    </>
  );
}

export default News;
