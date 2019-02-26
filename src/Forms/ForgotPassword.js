import React, { Component } from 'react'

class ForgotPassword extends Component {
    state={
        userName: '',
        email: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <fieldset>
                <legend>Forgot Your Password?</legend>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="User Name" onChange={(event) => this.setState({userName : event.target.value})} />
                        <br/>
                        <input type="email" placeholder="Email" onChange={(event) => this.setState({email : event.target.value})}/>
                        <br/>
                        <input type="submit"/>
                    </form>
                </fieldset>
            </div>
    
    )}
}
export default ForgotPassword