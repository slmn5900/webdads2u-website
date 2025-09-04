import { Container, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails, Box, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { MenuContext } from '../../layout/context/menucontext';

function BrochureFaq() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { qna_section } = useContext(MenuContext);
    console.log(qna_section, 'qna_section');
    const free = qna_section?.title;
    const descriptions = qna_section?.description;
    const queriess = qna_section?.queries || [];

    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, py: { xs: 2, md: 5 } }}>
            <Container>
                <Grid2 container spacing={4} alignItems="flex-start">
                    {/* Left Column - FAQ Header */}
                    <Grid2 size={{ xs: 12, md: 5 }}>
                        <Box sx={{ py: 2, px: { xs: 0, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                            <Typography
                                variant={isMobile ? 'h3' : 'h2'}
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    color: '#0A1F5F',
                                    fontSize: '34px'
                                }}
                            >
                                {' '}
                                {free}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    color: 'black'
                                }}
                            >
                                {descriptions}
                            </Typography>
                        </Box>
                    </Grid2>

                    {/* Right Column - Accordion */}
                    <Grid2 size={{ xs: 12, md: 7 }}>
                        <Box
                            sx={{
                                '& .MuiAccordion-root': {
                                    boxShadow: 'none',
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: '8px !important',
                                    mb: 2,
                                    '&:before': {
                                        display: 'none'
                                    }
                                }
                            }}
                        >
                            {queriess?.map((item, index) => (
                                <Accordion key={index} defaultExpanded={index === 0}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{
                                            backgroundColor: theme.palette.background.default,
                                            borderRadius: '8px',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#002060' }}>
                                            {item?.question || item.ques}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="p" sx={{ lineHeight: 1.5, fontWeight: 500, textAlign: 'justify' }}>
                                            {item?.answer || item.ans}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default BrochureFaq;
