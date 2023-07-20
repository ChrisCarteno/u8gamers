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
          image= "https://agentsoffandom.com/wp-content/uploads/2023/07/IMG_6060-819x1024.jpg"
          alt={props.title}
        />
        <CardContent>
          {props.icon}
          <Typography gutterBottom variant="h6" height="140" component="div">
            {props.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
