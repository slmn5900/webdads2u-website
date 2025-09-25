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
                background: 'white',
                color: 'black',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: '6px',
                textTransform: 'none',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                '&:hover': {
                    background: 'linear-gradient(135deg, #262250, #332050)',
                    color: 'white'
                }
            }}
            {...(onClick ? { onClick } : { component: 'a', href: finalHref })} // if onClick exists, use it; else fall back to href
        >
            {title}
        </Button>
    );
}
