import React from 'react';

export class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputData: {
                'text': '',
                'date': '',
                'category': 'red',
            },
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    handleDate(e){
        let data = this.state.inputData;
        this.setState({
            inputData: {
                'text': data.text,
                'date': e.target.value,
                'category': data.category
            }
        })
    }
    handleChange(e){
        let inputText = e.target.value;
        let data = this.state.inputData;
        this.setState({
            inputData: {
                'text': inputText,
                'date': data.date,
                'category': data.category
            },
        })
    }
    handleClick(){
        this.props.onChange(this.state.inputData);
    }
    render(){
        let date = new Date();
        let today = date.getFullYear() + '-' + (String(date.getMonth()+1).length < 2 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + '-' + (String(date.getDate().length) < 2 ?  '0'+ date.getDate() : date.getDate());
        return(
            <div>
                <h2>description</h2>
                <input onChange={ this.handleChange } autoFocus/>
                <h2>date</h2>
                <input type='date' max='2040-01-01' defaultValue={today} onChange={ this.handleDate } />
                <h2>category</h2>

                <h1 className='add-task' onClick={ this.handleClick }>add</h1>
            </div>
        );
    }
}