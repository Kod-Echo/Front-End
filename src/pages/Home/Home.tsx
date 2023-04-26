import { Typography, Grid,} from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';



function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" align="center" className='titulo' >Seja bem Vinde</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">

                        <Typography align="center" className='titulo2'> ao eco mais perto de você</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src/assets/img/home.jpg" alt="home" width="850px" height="500px" />
                </Grid>

            </Grid>

        </>
    );
}

export default Home;