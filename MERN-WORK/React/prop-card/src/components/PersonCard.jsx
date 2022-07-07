import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.lname}, {this.props.fname}</h1>
                <p>Age : {this.props.age}</p>
                <p>Hair color: {this.props.hair}</p>
            </div>
        )
    }
}

export default PersonCard;