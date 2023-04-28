import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!')
        } catch (error) {
            alert('Dados do usuario insconsistentes. Erro ao logar!')

        }
    }

    return (
        <Grid container className="cont-login" >
            <Grid item xs={12} sm={12}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Box className="card" >
                        <Typography className='card-title' variant="h4" align="center" >
                            Login
                        </Typography>

                        <form onSubmit={onSubmit} className='form-login'>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input'  id="usuario" name='usuario' label="Usuário" margin='normal' fullWidth />

                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input'  id="senha" name='senha' type="password" label="Senha" margin='normal' fullWidth />

                            <Button className="form-btn" type='submit' variant='contained'>
                                Acessar
                            </Button>
                        </form>

                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <Box marginTop={3}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='text1'>Não tem uma conta?</Typography>

                                <Link to='/cadastrousuario' className='btnCadastro' >
                                    <Typography gutterBottom align='center' variant='h6' > Cadastre-se</Typography> </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Login;