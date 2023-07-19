import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MultiActionAreaCard( props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#fff" }}>
      <CardActionArea className='cardActionArea'>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" height="140" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
