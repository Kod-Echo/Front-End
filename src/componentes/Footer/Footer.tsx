import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='container-footer'>
                <Grid alignItems="center" item xs={12} >
                    <Box style={{ backgroundColor: "#2A4009", height: "100px" }} >
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="subtitle1" align="center" gutterBottom style={{ color: "#E0F2CE" }}>Nossas Redes sociais </Typography>
                        </Box>
                        <Box className='container-footer' display="flex" alignItems="center" justifyContent="center">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#E0F2CE" }} />
                            </a>                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
