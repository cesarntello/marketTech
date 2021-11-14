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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ItemCount from '../ItemCount';





  
  export default function ProductCard() {
   
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Teclado Hyperx Alloy FPS Pro"
          subheader=""
        />
        <CardMedia
          component="img"
          height="194"
          image="../img/teclado"
          alt=""
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          $14000
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
    );
  }