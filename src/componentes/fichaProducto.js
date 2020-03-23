import React from 'react';
import './fichaProducto.css';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, CardImg } from 'reactstrap';

class FichaProducto extends React.Component{
    constructor(props){
        super();

        this.state = {
            modal:false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        console.log(this.props);
        this.setState(prevState=>({
            modal:!prevState.modal
        }));
    }

    render(){
        return(
           <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal className="ModalFichaProd" isOpen={this.state.modal}>
                    <ModalHeader>Producto:<br></br> {this.props.props.titulo} </ModalHeader>
                    <ModalBody>
                        <CardImg className="imgModalProd" src={this.props.props.img}></CardImg>
                        <strong>Descripción</strong>
                        {this.props.props.descripcion}
                        <strong>Precio</strong>
                        {this.props.props.precio}
                    </ModalBody>
                    <ModalFooter className="ModalFooter">
                        <Button onClick={this.toggle} color="primary">Añadir al carrito</Button>
                        <Button onClick={this.toggle} color="secondary">Volver atras</Button>
                    </ModalFooter>
                </Modal>
           </Container>
        );
    }
}

export default FichaProducto;