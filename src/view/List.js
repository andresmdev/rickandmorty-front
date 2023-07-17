import React, { useEffect, useState } from 'react';
import { Container, CircularProgress, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { getAllCharactersData } from '../api/request';

export default function List() {
  const [loading , setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      setLoading(true);
  
      const res = await getAllCharactersData();
      console.log(res);
  
      setData(res);
      setLoading(false);
    }

    getAllCharacters();

  }, []);

  
  return (
    <>

      <Container>
        <h1 
          style={{
            color: "#333", 
            textAlign: "center",
          }}> Listado </h1>
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
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell> # </TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data.map((item, i) => (
                      <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell> {++i} </TableCell>
                        <TableCell> {item.name} </TableCell>
                        <TableCell> {item.status}  </TableCell>
                        <TableCell> <a href={`/view/${item.id}`}> Ver </a> </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </>
        }

      </Container>
    </>
  );
}
