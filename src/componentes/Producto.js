import React from 'react';
import {Col,CardImg,CardBody, Card, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Producto.css';
import FichaProducto from './fichaProducto';

class Producto extends React.Component{
    constructor(props){
        super();

    }

    render(){
    return(
        <Col sm="3"> 
             <Card className="Card" body outline color="primary">
                 <CardImg src={this.props.img}/>
                 <CardBody>
                     <CardTitle>{this.props.titulo}</CardTitle>
                     <CardSubtitle><b>Valor:</b> {this.props.precio}</CardSubtitle>
                     <CardText>{this.props.descripcion}</CardText>
                     <FichaProducto props={this.props}/>
                 </CardBody>
             </Card>
        </Col>
     )
    }
}

export default Producto;