import { Component, ReactNode } from "react";
import  {Product as ProductInterface } from "../Product";

interface Error{
    error: string;
}

export default class ErrorMessage extends Component<Error>{
    render(): ReactNode {
        return <div style= { {color: this.props.error ? 'green' : 'red'}}>
            {"Error message"}
    </div>
    }
}