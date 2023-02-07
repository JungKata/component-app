import { Component, ReactNode } from "react";
import  {Product as ProductIterface } from "../Product";

interface Props{
    product: Product;
}

export default class Product extends Component<Props>{
    render(): ReactNode {
        return <div>
            <p>Product details</p>
        </div>
    }
}