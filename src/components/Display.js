import React,{ Component } from "react";

class Display extends Component{

    render(){
        return(
            <div className="container">
                <div className="container-heading"><h2>{this.props.counter}</h2></div>
                <div className="container-display">
                        <button className="btn cta-btn" onClick={() => this.props.plus()}><i className="fas fa-plus"></i></button>
                        <button className="btn cta-btn" onClick={() => this.props.reset()}><i className="fas fa-sync"></i></button>
                        <button className="btn cta-btn" onClick={() => this.props.minus()}><i className="fas fa-minus"></i></button>
                </div>
            </div>
        );
    }
}

export default Display;