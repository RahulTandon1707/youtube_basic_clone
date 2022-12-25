import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Link } from 'react-router-dom';

const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetails, setvideoDetails] = useState(null);
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setvideoDetails(data.items[0]));
        fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setvideos(data.items));
    }, [id]);
    if (!videoDetails?.snippet) return 'Loading...';
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;
    return (
        <>
            <Box minHeight={"95vh"}>
                <Stack direction={{ xs: 'column', md: 'row' }}>
                    <Box flex={1}>
                        <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                            <Typography variant="h5" px={2} py={1} color={"#fff"}>{title}</Typography>
                            <Stack direction={'row'} justifyContent={'space-between'} sx={{ color: "#fff" }} px={2}>
                                <Link to={`/channel/${channelId}`}>
                                    <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                                        {channelTitle}
                                        <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '3px' }} />
                                    </Typography>
                                </Link>
                                <Stack direction={'row'} gap={'20px'} alignItems='center'>
                                    <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                        {parseInt(viewCount).toLocaleString()} views
                                    </Typography>
                                    <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                        {parseInt(likeCount).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems={'center'}>
                        <Videos videos={videos} direction="column" />
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default VideoDetails;