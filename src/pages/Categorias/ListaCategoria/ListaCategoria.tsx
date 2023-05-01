import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Categoria from "../../../models/Categoria";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import "./ListaCategoria.css";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getCategoria() {
    await busca("/categorias", setCategorias, {
      headers: {
        'Authorization': token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
  },

    [categorias.length]);

  return (
    <>
      {
        categorias.map((categoria) => (

          <Box m={2} className="container-listcateg">
            <Card variant="outlined" className="card-categ">
              <CardContent >

                <Typography variant="h6" component="h2">
                  Categoria: <b/>
                  {categoria.tipo}
                </Typography>

                <Typography component="h2">
                  Descrição: <b />
                  {categoria.descricao}
                </Typography>

              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to={`/formularioCategoria/${categoria.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft button-atucateg"
                        size="small">
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`}
                    className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size="small" className="button-delcateg">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
    </>
  );
}

export default ListaCategoria;
