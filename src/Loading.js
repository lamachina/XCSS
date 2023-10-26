// Loading.js
import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 132px)"
        >
            <Spinner size="xl" color="white" />
        </Box>
    );
};

export default Loading;
