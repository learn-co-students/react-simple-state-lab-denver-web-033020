import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super(props) 
        this.state = {
            color: this.props.value 
        }
    }
    render() {
        return (
            <div key={this.state.color} 
                className='cell' 
                style={{backgroundColor: this.state.color}}
                onClick={(event) => { this.setState({color: '#333'})}}>    
            </div>
        )
    }
}
