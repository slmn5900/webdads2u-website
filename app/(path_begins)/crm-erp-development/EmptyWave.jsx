import React from 'react';
import { Box } from '@mui/material';

export default function EmptyWave() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%'
            }}
        >
            <Box
                component="svg"
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '15vh',
                    mb: '-8px',
                    minHeight: '100px',
                    maxHeight: '150px'
                }}
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s58 18 88 18 
               58-18 88-18 58 18 88 18v44h-352z"
                    ></path>
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ECFCF9E6" />
                </g>
            </Box>

            {/* Wave animation styles */}
            <style>
                {`
          .parallax > use {
            animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
          }
          @keyframes move-forever {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
          }
        `}
            </style>
        </Box>
    );
}
