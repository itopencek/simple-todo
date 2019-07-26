import React from 'react';

export class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputData: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        let inputText = e.target.value;

        this.setState({
            inputData: inputText,
        })
    }
    handleClick(){
        this.props.onChange(this.state.inputData);
    }
    render(){
        return(
            <div>
                <input onChange={ this.handleChange } />
                <button className='add-task' onClick={ this.handleClick }>Add</button>
            </div>
        );
    }
}