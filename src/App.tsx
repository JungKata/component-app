import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { Product as ProductInterface } from './Product';
import Product from './components/Products';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav,Card as BsCard } from 'react-bootstrap';


interface State{
  products: ProductInterface[];
}

export default class App extends Component<{}, State> {
  constructor(props: {}){
    super(props);
  this.state = {
    products: [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]
  }}

  
    
  render(): React.ReactNode {
      return <div>
        <Navbar>
          <Container>
            <Nav.Link href="https://example.com">Oldalra mutató link</Nav.Link>
            <Nav.Link href="https://example.com">Oldalra mutató link</Nav.Link>
            <Nav.Link href="https://example.com">Oldalra mutató link</Nav.Link>
          </Container>
        </Navbar>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map(p => <Product product={p} /> )
            
            } 
          </tbody>
        </table>
        <Footer />
       <ErrorMessage message='Kevés a termék'/>
       <ErrorMessage message=''/>
       <div>
       <BsCard.Body>
          <BsCard.Title>A kártya címe:</BsCard.Title>
          <BsCard.Text>Leírás</BsCard.Text>
        </BsCard.Body>
        <Button variant='danger'>Katt ide</Button>
       </div>
      </div>
  }
}


