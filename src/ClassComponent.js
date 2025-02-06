import React from "react";
class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state ={
            email:'Kulpreet@example.com',
        }
    }

    render () {
        return (
            console.log("render",this.state.email),
            <div>
                <h1>Class Component {this.state.data}</h1>
                <button onClick={()=>{this.setState({email:'Preet@example.com'})}}>Update Email</button>
            </div>
        );
    }
}

export default ClassComponent;