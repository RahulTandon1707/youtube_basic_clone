import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
const Videos = ({ videos, marginTop, marginLeft,gap ,direction}) => {
  return (
    <>
      <Stack direction={direction || "row"} flexWrap={"wrap"} gap={1} justifyContent={"start"} style={{marginTop,marginLeft,gap}} >
        {
          videos.map((item, index) => {
            return (
              <Box key={index}>
                {
                  item.id.videoId && <VideoCard video={item} />
                }
                {
                  item.id.channelId && <ChannelCard channelDetail={item} />
                }
              </Box>
            )
          })
        }
      </Stack>
    </>
  )
}

export default Videos;