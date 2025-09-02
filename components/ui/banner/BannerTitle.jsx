import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';

export default function BannerTitle() {
    // const titlemain = 'Brochure Design \n Company in Chennai';
    const { header_section } = useContext(MenuContext);
    const titlemain = header_section?.title;
    console.log(titlemain, 'test66');

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2
                }}
                style={{ marginRight: '8px', display: 'flex', paddingTop: 10, paddingBottom: 10, width: 500 }}
            >
                <Typography
                    variant="h2"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        // textAlign: 'start',
                        fontSize: { xs: '20px', md: '45px' }
                        // whiteSpace: { xs: 'pre-line', sm: "normal", md: "normal" }
                    }}
                    width={{ xs: '300px', sm: '700px', md: '1000px' }}
                >
                    {titlemain}
                </Typography>
            </motion.div>
        </>
    );
}
