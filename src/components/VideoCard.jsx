import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <>
      <Card sx={{ width: { md: '250px', xs:'100%',sm:'350px'},boxShadow:"none",borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia style={{backgroundSize:'inherit'}} image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{height: 180 }} />
        </Link>
        <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color="#fff" fontWeight={"bold"} >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color="gray" fontWeight={"bold"} >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  )
}

export default VideoCard;