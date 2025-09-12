import { Button } from '@mui/material';
import React from 'react';

export default function Buttons({ title, href, onClick }) {
    // fallback href if none provided
    const finalHref = href || '/contact-us';

    return (
        <Button
            variant="contained"
            size="large"
            sx={{
                background: 'linear-gradient(135deg, #332050, #262250)',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '30px',
                textTransform: 'none',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                '&:hover': {
                    background: 'linear-gradient(135deg, #262250, #332050)'
                }
            }}
            {...(onClick ? { onClick } : { component: 'a', href: finalHref })} // if onClick exists, use it; else fall back to href
        >
            {title}
        </Button>
    );
}
