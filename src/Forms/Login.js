import React, { Component } from 'react';

class Login extends Component {
    state = {
        userName: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <fieldset>
                <legend>Login:</legend>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="User Name" onChange={(event) => this.setState({userName : event.target.value})} />
                    <br/>
                    <input type="password" placeholder="Password" onChange={(event) => this.setState({password : event.target.value})} />
                    <br/>
                    <input type="submit" />
                </form>
                </fieldset>
            </div>
        )
    }}
export default Login;
