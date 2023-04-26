import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';
import { Box } from '@mui/material';

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (


        <AppBar className='nv-menu' >
            <Toolbar className='container-menu' variant="dense">
                <Link to='/home' className='text-none'>
                    <Typography variant="h6" className='nav-titulo'>
                        Kod-Eco
                    </Typography>
                </Link>

                <Link to='/home' className='text-none' >
                    <Typography variant="h6" className='nav-titulo' >
                        Home
                    </Typography>
                </Link>
                <Link to='/contato' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>

                    </Typography>
                </Link>
                <Link to='/login' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Login
                    </Typography>
                </Link>

                <Link to='/formularioCategoria' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Cadastrar Categoria
                    </Typography>
                </Link>
                <Link to='/formularioProduto' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Cadastrar Produto
                    </Typography>
                </Link>

                <Link to='/categorias' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Categorias
                    </Typography>
                </Link>
                <Link to='/produtos' className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Produtos
                    </Typography>
                </Link>
                <Box className='text-none' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>

    );



}

export default Navbar;