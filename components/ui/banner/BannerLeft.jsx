import { Box } from '@mui/material';
import BannerTitle from './BannerTitle';
import Description from './Description';
import ContactButton from './ContactButton';

export default function BannerLeft() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    mt: { xs: 0, md: 10 },
                    paddingRight: { md: 4 },
                    color: 'common.white' // White text for better contrast
                }}
            >
                <BannerTitle />
                <Description />
                <Box>
                    <ContactButton />
                </Box>
            </Box>
        </>
    );
}
