
import React, {Component} from 'react'

class Layout extends Component {
        state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            age: '',
            password: '',
            confirmPassword: ''
        };
    

    // this.handleSubmit = this.handleSubmit.bind(this);
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    // printNames = () => {
    //     this.setState({firstName : this.state.firsName, lastName : this.state.lastName, email : this.state.email, phone : this.state.phone, age : this.state.age, password : this.state.password, confirmPassword : this.state.confirmPassword})
    // }

    render() {
        return (
        <div>
            <fieldset>
            <legend>Create an Account</legend>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" onChange={(event) => this.setState({ firstName :event.target.value})} />
            <br/>
                <input type="text" placeholder="Last Name" onChange={(event) => this.setState({lastName : event.target.value})} />
            <br/>
                <input type="email" placeholder="Email" onChange = {(event) => this.setState({email : event.target.value})} />
            <br/>
                <input type="phone" placeholder="Phone Number" onChange = {(event) => this.setState({phone : event.target.value})} />
            <br/>
                <input type="text" placeholder="Age" onChange = {(event) => this.setState({age : event.target.value})} />
            <br/>
                <input type="password" placeholder="Password" onChange = {(event) => this.setState({ password : event.target.value})} />
            <br/>
                <input type="password" placeholder="Confirm Password" onChange={(event) => this.setState({confirmPassword : event.target.value})}  />
            <br/>
                <input type="submit" />
            </form>
            </fieldset>
            </div>
        )
        }
    }

export default Layout;
