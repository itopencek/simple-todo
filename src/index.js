import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './list';
import { AddTask } from './addtask';
import { ChangePage } from './changepage'

class ToDoApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [{
                'text': 'test #1',
                'category': 'red',
                'date': 'mon',
            }],
            page: true,
        };
        this.newTask = this.newTask.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }
    newTask(newTask){
        let allTasks = this.state.tasks;
        allTasks.push({
            'text': newTask,
            'category': 'blue',
            'date': 'tue',
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
    render(){
        if(this.state.page){
            return (
                <div>
                    <svg id="bg-check" fill="#AF21B3" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"></path>
                    </svg>
                    <h1>todo <br/>list</h1>
                    <List tasks={ this.state.tasks }/>
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