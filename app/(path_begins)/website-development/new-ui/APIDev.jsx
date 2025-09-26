import React from 'react';
import { Grid2, Typography, Box, useTheme, useMediaQuery, styled, Container } from '@mui/material';
import { RiNodejsLine } from 'react-icons/ri';
import { SiFastapi, SiFlask, SiRubyonrails, SiLumen, SiSpringboot } from 'react-icons/si';
import LookButton from './LookButton';

const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(1)
}));

const TechIcon = styled(Box)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#3c4151',
    borderRadius: '10px',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '& svg': {
        fontSize: '50px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }
}));

const TechName = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    paddingTop: theme.spacing(1),
    fontWeight: 500
}));

const technologies = [
    { icon: <RiNodejsLine />, name: 'Node.js' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiRubyonrails />, name: 'Ruby on Rails' },
    { icon: <SiSpringboot />, name: 'Spring Boot' },
    { icon: <SiLumen />, name: 'Lumen' }
];

const APIDev = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>
            <Grid2 container spacing={3} sx={{ mt: { xs: 4, md: 2 } }}>
                {technologies.map((tech, index) => (
                    <Grid2
                        size={{ xs: 4, sm: 6, md: 2 }}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <IconWrapper>
                            <TechIcon>{tech.icon}</TechIcon>
                            <TechName variant="h5">{tech.name}</TechName>
                        </IconWrapper>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default APIDev;
