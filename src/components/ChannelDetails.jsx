import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from '../utils/fetchFromApi';
const ChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => { setChannelDetails(data?.items[0]) });
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => { setVideos(()=>data?.items) })
    }, [id]);
    return (
        <>
            <Box minHeight={"95vh"}>
                <Box>
                    <div style={{ background: 'linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 0%, rgba(0,212,255,1) 100%)', zIndex: "10", height: '300px' }} />
                    <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
                </Box>
                <Box sx={{p:"6px"}}>
                    <Box>
                        <Videos videos={videos} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ChannelDetails;