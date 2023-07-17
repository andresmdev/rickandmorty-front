/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Container, CircularProgress, Button } from "@mui/material";
import { getCharacterByIdData } from '../api/request';

export default function List() {
  const [loading , setLoading] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCharacterById = async () => {
      setLoading(true);
  
      const res = await getCharacterByIdData(id);
      console.log(res);
  
      setData(res);
      setLoading(false);
    }

    getCharacterById();
  }, []);

  
  return (
    <>

      <Container>
        <h1 
          style={{
            color: "#333", 
            textAlign: "center",
          }}> Visualizacion </h1>
        <br />

        {
          loading ? 
          <>
            <div style={{
              textAlign: "center",
            }}>
              <CircularProgress />
            </div>
          </> : 
          <>
            <div>
              <ul style={{
                listStyle: "none",
                padding: 0,
                lineHeight: 2,
              }}>
                <li>
                  <b> Nombre: </b>
                  <span> {data.name} </span>
                </li>
                <li>
                  <b> Estado: </b>
                  <span> {data.status} </span>
                </li>
                <li>
                  <b> Genero: </b>
                  <span> {data.gender} </span>
                </li>
              </ul>
            </div>

            <Button 
              variant="contained"> 
              <Link to="/" style={{
                color: "#fff",
                textDecoration: "none",
              }}> Regresar </Link>
            </Button>
          </>
        }
      </Container>
    </>
  );
}
