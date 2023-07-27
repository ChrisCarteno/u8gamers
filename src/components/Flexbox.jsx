import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BsFilm } from 'react-icons/bs';
import { GiPumpkinLantern } from 'react-icons/gi';
import { MdOutlineCabin } from 'react-icons/md';

export default function MultiActionAreaCard( props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#fff" }}>
      <CardActionArea className='cardActionArea'>
        <CardMedia
          component="img"
          height="140"
          image= {
            props.title === 'Barbenheimer: Movie Day' ? ( "https://agentsoffandom.com/wp-content/uploads/2023/07/IMG_6060-819x1024.jpg" ) : ( "https://images2.alphacoders.com/123/1231556.png" )
          }
          alt={props.title}
        />
        <CardContent>
           {
            props.title === 'Barbenheimer: Movie Day' ? ( <BsFilm /> ) : ( <div></div> )
          }          
          {
            props.title === 'Big Bear Summit' ? ( <MdOutlineCabin /> ) : ( <div></div> )
          } 
          {
            props.title === 'Halloween Spooktacular' ? ( <GiPumpkinLantern /> ) : ( <div></div> )
          } 
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
