import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function ContactButton() {
    const { header_section } = useContext(MenuContext);
    const button = header_section?.button;

    return (
        <>
            <Button
                variant="outlined"
                sx={{
                    backgroundColor: 'white',
                    fontWeight: 600,
                    border: '2px solid #fff',
                    borderRadius: '50px',
                    color: '#000085 ',
                    borderColor: 'white',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'white'
                    },
                    transition: 'all 0.3s ease',
                    py: 1,
                    px: 2,
                    mt: 2,
                    letterSpacing: 0
                }}
            >
                {button}
            </Button>
        </>
    );
}
