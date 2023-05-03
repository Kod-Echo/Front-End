import { Typography, Grid, Button, } from '@material-ui/core';
import { Box } from '@mui/material';
import './PaginaInicial.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabProdutosInicial from '../tabProdutosInicial/TabProdutosInicial';
import Search from '../../componentes/search/Search';
import Carrosel from '../../componentes/carrosel/swiper';
import Carrosel2 from '../../componentes/carrosel/Swiper2';


function PaginaInicial() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {

            navigate("/homeinicial")

        }
    },

        [token])

    return (
        <>

            <Grid item xs={12} className='caixa-titulo' container direction='row'>
                <Box justifyContent="start" className=' sub-inicial' >
                    <img src="src/assets/img/icone.png" height='100' width='100' alt="" className='icone' />
                </Box>
                <Box className='search'>
                    <Search />
                </Box>
                <Typography align="center" className='sub-titulo'>Venha para o eco mais perto de você</Typography>
                <Link to="/login">
                    <Button
                        className="btn-inicial"
                        size='small'> Fazer Login
                    </Button> </Link>
            </Grid>

            <Grid alignItems="center" className='box-carrosel' justifyContent='center'>
                <Carrosel />
            </Grid>

            <Grid item xs={12} className='caixa-titulo' container direction='row'>
            </Grid>               
            <TabProdutosInicial /> 

            <Box className='box-comentarios'><Typography variant='h5' className='comentarios'> O que nossos clientes falam da gente? </Typography>        
            </Box>  
            <Carrosel2/>
            


        </>
    );
}

export default PaginaInicial;