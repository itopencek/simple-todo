import React from 'react';

export class List extends React.Component {
    constructor(props){
    super(props)

    this.handleTasks = this.handleTasks.bind(this);
    };

   handleTasks(){
    const tasks = this.props.tasks;

    let arrayList = tasks.map((list, key) => {
        if(list === undefined){
            return false;
        }
        list.date = ' ' + list.date;
        return (
            <li key={ key } >
                <svg onClick={ () => { this.props.handleDelete(key) } } className="list-check" fill={ list.category } version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                    <path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"></path>
                </svg>
                { list.text }
                <span className='list-date'>{ list.date }</span>
            </li>
            );
    }
    );
    return arrayList;
   }

    render(){
        if(this.props.tasks.length === 0){
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 id="no-tasks">You have no tasks! :)</h2>
                </div>
            );
        } else {
            return (
                <div>
                <ul>
                    { this.handleTasks() }
                </ul>
                </div>
            );
        }
    }
}