import React, { Component } from 'react';

class UserList extends Component{
    constructor(props){
        super(props) ;
        this._selectElement = null;
        this.changeHandler = this.changeHandler.bind(this) ;
    }

    changeHandler(e){
        console.log( e.target.value) ;
        this.props.callback(e.target.value) ;
    }



    render() {
        return (
            <select onChange={this.changeHandler}>
                <option>--选择用户--</option>
                <option>张三</option>
                <option>李四</option>
            </select>
        )}
}

export default UserList ;