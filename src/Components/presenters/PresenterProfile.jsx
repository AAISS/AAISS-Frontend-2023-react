import React from 'react';
import {ArrowForward} from '@mui/icons-material';
import {Box, Button, Divider, Stack, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import URL from '../../providers/APIProvider/URL.js';
import Image from '../image/Image.jsx';

const Header = ({name, workplace, photo}) => (
    <Stack flexDirection="row" alignItems="center" gap={2} py={2}>
        <Image
            src={`${URL.baseURL}${photo}`}
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '10px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />
        <Stack flexDirection="column">
            <Typography variant="h2" fontSize="30px">
                {name}
            </Typography>
            <Typography variant="string" fontSize="20px" sx={{fontWeight: 'lighter'}}>
                from {workplace}
            </Typography>
        </Stack>
    </Stack>
);

const PresenterProfile = ({name, workplace, photo, cvPath, bio}) => (
    <Stack alignItems="center" style={{width: "100%"}}>
        <Box sx={{bgcolor: 'var(--background-color)', px: 4, pb: 8, borderRadius: '30px', width: '80%'}}>
            <Header name={name} photo={photo} workplace={workplace}/>
            <Divider sx={{py: 3}}>
                <Typography variant="h3" fontSize="24px">
                    Biography
                </Typography>
            </Divider>
            <Typography color="text.secondary">{bio}</Typography>
            {cvPath && (
                <Stack alignItems="center" pt={5}>
                    <Button href={cvPath} endIcon={<ArrowForward/>}>
                        Link to CV
                    </Button>
                </Stack>
            )}
        </Box>
    </Stack>
);

PresenterProfile.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
    cvPath: PropTypes.string,
    bio: PropTypes.string,
};

export default PresenterProfile;
