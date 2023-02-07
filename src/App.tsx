import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { Product as ProductInterface } from './Product';

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
        {
          this.state.products.map(p => <div>Ide jön valami </div>)
        }
        <Footer />
      </div>
  }
}


