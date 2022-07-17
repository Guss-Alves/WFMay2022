import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div className="card">
                <h1>{this.props.lname}, {this.props.fname}</h1>
                <p>Age : {this.state.age}</p>
                <p>Hair color: {this.props.hair}</p>
                <button className='btn' onClick={() => this.setState({age: this.state.age+1})} >Birthday Button for {this.props.fname} {this.props.lname}</button>
            </div>
        )
    }
}

export default PersonCard;