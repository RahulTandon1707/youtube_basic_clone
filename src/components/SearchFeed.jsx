import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => { setVideos(data.items) })
    }, [searchTerm])

    return (
        <>
            <Box p={2} sx={{ height: "90vh", overflowY: 'auto', flex: 2 }} >
                <Typography variant={"h4"} fontWeight={"bold"} mb={2} mt={5} sx={{ color: 'white' }} >Search Results For:
                    <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
                </Typography>
                <Videos videos={videos} marginTop="15px" marginLeft="60px" gap="16px" />
            </Box>
        </>
    )
}

export default SearchFeed;