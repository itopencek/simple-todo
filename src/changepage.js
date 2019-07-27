import React from 'react';

export class ChangePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            main: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            main: this.state.main ? false : true,
        })
        this.props.page(this.state.main);
    }
    render(){
        if(this.state.main){
            return <span className="page-button" onClick={ this.handleClick }>new</span>;
        }else{
            return <span className="page-button" onClick={ this.handleClick }>back</span>;
        }
    }
}