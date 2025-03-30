import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const img ="https://s.w-x.co/ap_21074085936124.jpg";
    return (
        <div className="imfo">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  >
            <div> </div>
            <div> Temperature : {info.temp}</div>
            <div> min temp : {info.tempMin}</div>
            <div> max temp  : {info.tempMax}</div>
            <div> humudity  : {info.humidity}</div>
            <div> feelsLike  : {info.feelsLike}</div>
            <div> description  : {info.weather}</div>

        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}