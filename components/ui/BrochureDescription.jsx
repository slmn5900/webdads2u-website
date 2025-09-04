import { Typography, Box, styled } from '@mui/material';
import { keyframes } from '@mui/system'; // ✅ Import keyframes properly
import { useContext } from 'react';
import { MenuContext } from '../../layout/context/menucontext';

// Animations
const popIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  80% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`;

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const DescriptionContainer = styled(Box)(() => ({
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    
}));

export default function BrochureDescription() {
    const { company_section } = useContext(MenuContext);

    // ✅ Fallback if context not ready
    const title = company_section?.title || 'Default Title';
    const description = company_section?.description || 'Default description text goes here until API loads.';
    console.log(company_section?.description, 'company_section?.description');
    return (
        <DescriptionContainer sx={{py:4}}>
            <Typography
                variant="h4"
                component="h5"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    color: '#0A1F5F',
                    mb: 2,
                    opacity: 0,
                    transform: 'scale(0.8)',
                    animation: `${popIn} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                    fontSize: { xs: '1.50rem', md: '2rem' },
                    
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body1"
                paragraph
                sx={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    opacity: 0,
                    transform: 'translateY(15px)',
                    animation: `${fadeSlideUp} 0.8s ease-out forwards`,
                    animationDelay: '0.3s',
                    // textAlign: 'justify',
                    color: '#5A5A5A',
                    p: 2
                }}
            >
                {description}
            </Typography>
        </DescriptionContainer>
    );
}
