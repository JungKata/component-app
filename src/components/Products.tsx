import { Component, ReactNode } from "react";
import  {Product as ProductInterface } from "../Product";

interface Props{
    product: ProductInterface;
}

export default class Product extends Component<Props>{
    render(): ReactNode {
        return <p>{this.props.product.name}</p>
    }
}