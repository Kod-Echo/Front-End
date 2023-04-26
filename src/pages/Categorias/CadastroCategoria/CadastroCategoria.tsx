import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import "./CadastroCategoria.css";

function CadastroCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const [categoria, setCategoria] = useState<Categoria>({

    id: 0,
    tipo: '',
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        'Authorization': token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token,
          },
        });

        alert("Categoria atualizada com sucesso!");
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    } else {
      try {
        await post(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token,
          },
        });

        alert("Categoria cadastrada com sucesso");
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    }

    back();
  }

  function back() {
    navigate('/categorias');
  }

  return (
    <Container maxWidth="sm" className="topo"  >
      <form onSubmit={onSubmit}  >
        <Typography
          variant="h3"
          className="titulocategoria"
          component="h1"
          align="center"
        >
          Cadastro de Categoria
        </Typography>
        <TextField
          value={categoria.tipo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="tipo"
          label="tipo"
          variant="outlined"
          name="tipo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" className="btncategoria">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
