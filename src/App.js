import React from 'react';
import Producto from './componentes/Producto';
import './App.css';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
      <Producto 
        titulo="5ER WALL KEY LOCK EXPRESS SET" 
        img="https://www.andesgear.cl/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/2/0/2040-01721-10_m31170_1.jpg" 
        descripcion="Experimenta las ventajas de llevar este set de cintas ligeras en tu equipo." 
        precio="$94.990"/>

        <Producto 
        titulo="ARNÉS HOMBRE SOLUTION" 
        img="https://www.andesgear.cl/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/b/d/bd651082_bkub_1.jpg" 
        descripcion="No importa si estás practicando en un lugar cerrado o en la montaña, el arnés Solution de Black Diamond te proporcionará una comodidad inigualable." 
        precio="$59.900"/>

        <Producto 
        titulo="CASCO ROCK RIDER" 
        img="https://www.andesgear.cl/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/2/0/2030-00131_m00315_1.jpg" 
        descripcion="El casco Rock Rider es extremadamente liviano, lo que lo hace ideal para un gran rango de actividades: desde escalada deportiva a rutas alpinas de múltiples largos." 
        precio="$44.990"/>
      </Row>
    </Container>
  );
}

export default App;
