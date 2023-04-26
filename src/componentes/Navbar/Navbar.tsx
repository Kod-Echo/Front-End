import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (


        <AppBar className='nv-menu' >
            <Toolbar className='container-menu'  variant="dense">
                <Link to='/home' className='text-none'>
                     <Typography variant="h6" className='nav-titulo'>
                    Kod-Eco
                </Typography>
                </Link>

                <Link to='/home'  className='text-none' >
                    <Typography variant="h6" className='nav-titulo' >
                        Home
                    </Typography>
                </Link>
                <Link to='/contato'  className='text-none' >
                    <Typography variant="h6" className='nav-titulo'>
                        Contato
                    </Typography>
                    </Link>
                    <Link to='/login'  className='text-none' >
                         <Typography variant="h6" className='nav-titulo'>
                    Login
                </Typography> 
                </Link>
               
            </Toolbar>
        </AppBar>

    );



}

export default Navbar;