import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';




  
  export default function ProductCard({product :{id, nombre, categoria, precio, img, stock}}) {
  
    return (
      <Link to={`/producto/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        
          
          title={nombre}
          subheader={"$" + precio}
        />
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt=""
        />
        <CardContent>
          <Typography title="Shrimp and Chorizo Paella" variant="body2" color="text.secondary">
          <CardHeader
          title={"$" + precio}
          />  
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
         
          <ItemCount />
        </CardActions>
       
      </Card>
      </Link>
    );
  }
  console.log(CardHeader)