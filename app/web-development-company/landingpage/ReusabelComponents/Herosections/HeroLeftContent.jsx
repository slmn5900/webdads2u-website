import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';
const HeroLeftContent = ({ tagline, heading, description, email, phone, button1, button2 }) => (
    <Box maxWidth={{ md: '518px' }}>
        <Box sx={{ display: 'inline-block', bgcolor: '#262250', borderRadius: '50px', px: 1.5, py: 0.5 }}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', fontWeight: 600, fontFamily: 'Poppins' }}>{tagline}</Typography>
        </Box>

        <Typography variant="h2" sx={{
            background: "linear-gradient(90deg, #E30E26 0%, #262250 62.97%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: 600,
            fontFamily: 'Poppins',
            mb: 1,
        }}>{heading}</Typography>

        <Typography variant="body1" sx={{ color: 'black', fontSize: '16px', fontWeight: 400, fontFamily: 'Poppins', mb: 1 }}>{description}</Typography>

        <TextField placeholder="Name" size='small' sx={{ width: { xs: "100%", sm: "100%", md: "84%" }, mb: 2, '& .MuiOutlinedInput-root': { borderRadius: '8px', background: "white" } }} /> <br />
        <TextField placeholder="Phone Number" size='small' sx={{ width: { xs: "100%", sm: "100%", md: "84%" }, mb: 2, '& .MuiOutlinedInput-root': { borderRadius: '8px', background: "white" } }} />

        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button variant="contained" sx={{ bgcolor: '#E40D25', borderRadius: '4px', color: 'white', textTransform: 'uppercase', px: 2, py: 1, '&:hover': { bgcolor: '#C00D22' } }} size='small'>{button1}</Button>
            <Button variant="contained" sx={{ bgcolor: '#E40D25', borderRadius: '4px', color: 'white', textTransform: 'uppercase', px: 2, py: 1, '&:hover': { bgcolor: '#C00D22' } }} size='small'>{button2}</Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* <Box sx={{ width: 24, height: 24, bgcolor: '#1F167B' }} /> */}
                < EmailIcon sx={{ color: '#1F167B' }} />
                <Typography sx={{ color: '#1F167B', fontSize: { xs: '16px', md: '20px' }, fontWeight: 500, fontFamily: 'Poppins' }}><Link href={`mailto:${email}`} style={{textDecoration:'none', color:'black'}} >  {email}</Link>  </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* <Box sx={{ width: 24, height: 24, bgcolor: '#1F167B' }} />
                 */}
                < PhoneIcon sx={{ color: '#1F167B' }} />
                <Typography sx={{ color: '#1F167B', fontSize: { xs: '16px', md: '20px' }, fontWeight: 500, fontFamily: 'Poppins' }}><Link href={`tel:${phone}`} style={{textDecoration:'none', color:'black'}} >{phone}</Link> </Typography>
            </Box>
        </Box>
    </Box >
);

export default HeroLeftContent;
