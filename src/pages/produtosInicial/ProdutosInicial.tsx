import { Button, Card, CardActions, Grid, Typography } from "@material-ui/core";
import { CardContent, } from "@mui/material";
import './ProdutosInicial.css'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material';

function ProdutosInicial() {

    return (

        <>
            <Box m={2} display="flex" >
                <Card className='card-prod-inicial'>
                    <CardContent  >
                        <Typography >
                            <img src='src/assets/img/copoFibraBranco.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Copo Fibra de Bambu Branco
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'
                            > Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/ecobagbranco.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            EcoBag Kod-eco Branco
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/ecobagpreto.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Eco Bag Kod-eco Preto
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/escorredor.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Escorredor de Bambu
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/kitpratos.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Prato de Fibra Kod-eco
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/kitescovas.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Kit Escovas de Bambu
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/kitsabonetes.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Kit Sabonetes em Barra
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/marmita.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Marmita Fibra de Bambu
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial'>
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/tijelafibra.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Tijela de Fibra
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial' >
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/ecobagverde.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Eco Bag Kod-eco Verde
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial'>
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/kitcanetas.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Kit Canetas de Papelão
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2}  >
                <Card className='card-prod-inicial'>
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/sabonetebarra.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Sabonete Barra
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>
            <Box m={2} >
                <Card className='card-prod-inicial'>
                    <CardContent >
                        <Typography >
                            <img src='src/assets/img/copofibraverde.png' />
                        </Typography>
                        <Typography className='titulo-prod-inicial'>
                            Copo Fibra de Bambu Verde
                        </Typography>
                        <Link to="/login" className="text-decorator-none" >
                            <Button
                                className="botao-comprar"
                                size='small'> Comprar
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Box>


        </>
    );


}

export default ProdutosInicial;