import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProductDetails({title = '', subtitle = '', body = [], products = [], footer=''}) {
  return (
    <>
      <Box p={3}>
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography mb={2} variant="h2">
            {title}
          </Typography>
          {subtitle && (
            <Typography mb={2} variant="h4">
              {subtitle}
            </Typography>
          )}
          {body.map(item => (
            <Typography mb={1} variant="body" >
              {item}
            </Typography>
          ))}
        </Container>
      </Box>
      <Box p={3} sx={{ backgroundColor: '#68b36b' }}>
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid item xs={12} md={6} lg={products.length < 6 ? 6 : products.length % 3 === 0 ? 4 : 3 }>
              <Card key={product.title} sx={{ backgroundColor: '#eee', height: '100%' }}>
                <CardHeader
                  title={product.title}
                  sx={{ height: "100px", textAlign: 'center' }}
                />
                <CardMedia
                  component="img"
                  height="250"
                  image={product.imageSrc}
                  alt={product.imageAlt}
                />
                <CardContent>
                  {product.subtitle && (
                    <Typography variant="h6">
                      {product.subtitle}
                    </Typography>
                  )}
                  <Typography variant="body2">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {footer}
    </>
  )
}
