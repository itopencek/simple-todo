import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './list';
import { AddTask } from './addtask';
import { ChangePage } from './changepage';

class ToDoApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [{
                'text': 'first test #1',
                'category': 'blue',
                'date': ' wed'
            }],
            page: true,
        };
        this.newTask = this.newTask.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    newTask(newTask){
        let allTasks = this.state.tasks;
        let date = new Date();
        let today = date.getFullYear() + '-' + (String(date.getMonth()+1).length < 2 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + '-' + (String(date.getDate().length) < 2 ?  '0'+ date.getDate() : date.getDate());
        if(newTask.date === "") newTask.date = today;
        
        allTasks.push({
            'text': newTask.text,
            'category': newTask.category,
            'date': newTask.date,
        });

        this.setState({
            tasks: allTasks,
        })
    }
    handlePage(){
        this.setState({
            page: this.state.page ? false : true,
        })
    }
    handleDelete(e){
        const key = e.target.getAttribute('data-key');
        let newTasks = this.state.tasks;
        newTasks.splice(key,1);
        this.setState({
            tasks: newTasks
        });
    }
    render(){
        if(this.state.page){
            return (
                <div>
                    <svg id="bg-check" fill="#AF21B3" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"></path>
                    </svg>
                    <h1>todo <br/>list</h1>
                    <List tasks={ this.state.tasks } handleDelete={ this.handleDelete }/>
                    <ChangePage page= { this.handlePage }/>
                </div>
            );
        }else{
            return (
                <div>
                    <svg id="bg-check" fill="#AF21B3" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"></path>
                    </svg>
                    <h1>add <br/>new</h1>
                    <AddTask onChange={ this.newTask }/>
                    <ChangePage page={ this.handlePage }/>
                </div>
            );
        }
    }
}

ReactDOM.render(<ToDoApp />, document.getElementById('app'));