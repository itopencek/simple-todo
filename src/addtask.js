import React from 'react';

export class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputData: {
                'text': '',
                'date': '',
                'category': '#b52838',
            },
            addedNew: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }
    handleCategory(color){
        let data = this.state.inputData;
        const thisItem = document.getElementById(color);
        if(color === 'b52838'){ color = '#b52838'};
        this.setState({
            inputData: {
                'text': data.text,
                'date': data.date,
                'category': color
            }
        });

        const items = document.getElementsByClassName('category-list')[0].childNodes;
        console.log(items)
        items.forEach(item => {
            item.classList.remove('category-chosen');
        });
        thisItem.classList.add('category-chosen');
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
        this.setState({ 
            addedNew: true,
            inputData: {
            'text': '',
            'date': '',
            'category': '#b52838',
            } 
        });
    }
    handleDeleteMessage(){
        this.setState({
            addedNew: false,
        })
    }
    render(){
        let date = new Date();
        let today = date.getFullYear() + '-' + (String(date.getMonth()+1).length < 2 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + '-' + (String(date.getDate().length) < 2 ?  '0'+ date.getDate() : date.getDate());
        if(this.state.addedNew === false){
            return(
                <div id='add-page'>
                    <h2>description</h2>
                    <input onChange={ this.handleChange } autoFocus/>
                    <h2>date</h2>
                    <input type='date' max='2040-01-01' defaultValue={today} onChange={ this.handleDate } />
                    <h2>category</h2>
                    <ul className='category-list'>
                        <li className='category-item category-chosen' id='b52838' onClick={ () => { this.handleCategory('b52838') } }></li>
                        <li className='category-item' id='MidnightBlue' onClick={ () => { this.handleCategory('MidnightBlue') } }></li>
                        <li className='category-item' id='white' onClick={ () => { this.handleCategory('white') } }></li>
                        <li className='category-item' id='green' onClick={ () => { this.handleCategory('green') } }></li>
                    </ul>
                    <h1 className='add-task' onClick={ this.handleClick }>add</h1>
                </div>
            );   
        } else {
            return(
                <div id='add-page'>
                    <div className='added-task' onClick={ this.handleDeleteMessage }><h3>Task has been added!</h3><img src='x-mark.svg' alt='X'></img></div>
                    <h2>description</h2>
                    <input onChange={ this.handleChange } autoFocus value={ this.state.inputData.text }/>
                    <h2>date</h2>
                    <input type='date' max='2040-01-01' defaultValue={ today } onChange={ this.handleDate }/>
                    <h2>category</h2>
                    <ul className='category-list'>
                        <li className='category-item category-chosen' id='b52838' onClick={ () => { this.handleCategory('b52838') } }></li>
                        <li className='category-item' id='MidnightBlue' onClick={ () => { this.handleCategory('MidnightBlue') } }></li>
                        <li className='category-item' id='white' onClick={ () => { this.handleCategory('white') } }></li>
                        <li className='category-item' id='green' onClick={ () => { this.handleCategory('green') } }></li>
                    </ul>
                    <h1 className='add-task' onClick={ this.handleClick }>add</h1>
                </div>
            );   
        }
    }
}