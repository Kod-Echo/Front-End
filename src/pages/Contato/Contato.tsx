import { Box } from '@mui/material';
import { Typography, Grid, } from '@material-ui/core';



import './Contato.css'


function Contato() {

    return (


        <Grid className="contact" id="contact">
            <Grid className="container">
                <Box className="heading text-center">
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"> Contate a gente!</Typography>
                    <Typography> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, commodi? Cumque expedita laboriosam facere neque corrupti a voluptas! Aliquam delectus cum natus repudiandae iusto autem eius recusandae? Asperiores, quas ea. </Typography>
                </Box>
                <Box className="row">
                    <Box className="col-md-5">
                        <Box className="title">
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"> Detalhes de contatos</Typography>
                            <Typography> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, commodi? Cumque expedita laboriosam facere neque corrupti a voluptas! Aliquam delectus cum natus repudiandae iusto autem eius recusandae? Asperiores, quas ea. </Typography>
                        </Box>
                        <Box className="content">
                            <Box className="info">
                                <i className="fas fa-mobile-alt"></i>
                                <h4 className="d-inline-block">PHONE :

                                    <span>+12457836913 , +12457836913</span></h4>
                            </Box>
                            <Box className="info">
                                <i className="far fa-envelope"></i>
                                <h4 className="d-inline-block">EMAIL :

                                    <span>example@info.com</span></h4>
                            </Box>
                            <Box className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4 className="d-inline-block">ADDRESS :
                            </h4>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="col-md-7">

                        <form>
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                            />

                            <label htmlFor="phone">Telefone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                            />

                            <label htmlFor="message">Mensagem:</label>
                            <textarea
                                id="message"
                                name="message"
                            ></textarea>

                            <button type="submit">Enviar</button>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>


    );
}

export default Contato;