import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

const ChannelCard = ({ channelDetail,marginTop }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: '20px',display:"flex",justifyContent:'center',alignItems:'center',width:{xs:'280px',md:'250px'},height:'326px',margin:'auto',marginTop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: "flex", flexDirection: 'column', justifyContent: "center",alignItems:'center' ,color: '#fff' }}>
          <CardMedia alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '150px', width: '150px', mb: 1, border: '1px solid #e3e3e3' }} image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title
            }
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "2px" }} />
          </Typography>
          {
            channelDetail?.statistics?.subscriberCount && (
              <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
            )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;