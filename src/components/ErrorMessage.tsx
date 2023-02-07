import { Component, ReactNode } from "react";
import  {Product as ProductInterface } from "../Product";

interface Props{
    message: string;
}

export default class ErrorMessage extends Component<Props>{
    render(): ReactNode {
       let tartalom = 'Minden OK';
       let stilus = {
        color: 'green',
        backgroundColor: 'lightblue'
       };
       if(this.props.message != ''){
        tartalom = this.props.message;
        stilus = {
            color: 'red',
            backgroundColor: 'ffd1d1'
        }
    }
    return <p style={stilus}>{tartalom}</p>
    }
}