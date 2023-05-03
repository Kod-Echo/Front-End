import { Typography, Grid, } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabProdutos from '../produtos/tabprodutos/TabProdutos';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';



function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
  }, [token])
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
                <Grid item xs={12}>
                    <TabProdutos />
                </Grid>
            </Grid>

        </>
    );
}

export default Home;