import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'

function ListaProduto() {
    const [prods, setProds] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getProd() {
        await busca(`/produtos`, setProds, {
            headers: {
                'Authorization': token,
            },
        });
    }

    useEffect(() => {

        getProd()

    },
        [prods.length])

    return (
        <>
            {
                prods.map(prod => (
                    <Box m={3} className='container-listprod' >
                        <Card variant="outlined" className='card-prod'>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {prod.nome}
                                </Typography>

                                <Typography variant="h6" component="h2">
                                    <img src={prod.foto} />
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    R${prod.preco}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    Catergoria: <b/>
                                    {prod.categoria?.descricao}
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${prod.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button
                                                variant="contained"
                                                className="marginLeft button-atucateg"
                                                size='small'>                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${prod.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='button-delprod'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaProduto;