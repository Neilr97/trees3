import React, { Component } from 'react';
import { register } from '../serviceWorker';

const emailRegularExpression = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const vaildationForm = errorCatch => {
    let validation = true;

    Object.values(errorCatch).forEach(val => { val.length > 0 && (validation = false);
    });

    return validation;
};

class User extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            lastName: '',
            firstName: '',
            password: '',
            email: '',
            errorCatch:{
                lastName: "",
                firstName: "",
                password: "",
                email: "",
            }
        };
    }

    handleSubmit = a => {
        a.preventDefault();
        if(vaildationForm(this.state.errorCatch)) {
            console.log(
            "email: "+this.state.email+"\nfirstName: "+this.state.firstName+"\nlastName: "+this.state.lastName+"\npassword: "+this.state.password);
        }
        else{
            console.error('Form is not vaild');
        }
    };

    handleChange = a =>{
        a.preventDefault();
        const {name, value} = a.target;
        let errorCatch = this.state.errorCatch;

        switch(name){
            case "firstName":
            errorCatch.firstName = 
            value.length < 3 ? "At least 3 characters needed" : "";
            break;

            case "lastname":
            errorCatch.firstName = value.length < 3 ? "At least 3 characters needed" : "";
            break;

            case "password":
            errorCatch.firstName = value.length < 6 ? "At least 6 characters needed " : "";
            break;

            case "email":
            errorCatch.email = emailRegularExpression.test(value) < 3 && value.length > 0 ? "":"Invaild Email";
            break;

            break;
            default:
            break;
        }

        this.setState({errorCatch, [name]: value}, () => console.log(this.state));
    }


    render() {
        const{ errorCatch } = this.state;

        return <div className = "wrap">
            <div className="form-wrap">
            <h1>Create Account</h1>
            <form on onSubmit={this.handleSubmit}>
                <div className ="firstname">
                <label htmlFor="firstName">First Name</label>
                <input 
                className={errorCatch.firstName.length > 0 ? "error" : null}
                placeholder="First Name" 
                type="text" 
                name="firstName"
                noValidate
                onChange={this.handleChange}
                />
                {errorCatch.firstName.length > 0 && (
                    <span className = "errorMessage">{errorCatch.firstName}</span>
                )}
                </div>
                <div className ="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input  
                className={errorCatch.lastName.length > 0 ? "error" : null} 
                placeholder="Last Name" 
                type="text" 
                name="lastName"
                noValidate
                onChange={this.handleChange}
                />
                {errorCatch.lastName.length > 0 && (
                    <span className = "errorMessage">{errorCatch.lastName}</span>
                )}
                </div>
                <div className ="email">
                <label htmlFor="email">Email</label>
                <input  
                className={errorCatch.email.length > 0 ? "error" : null}
                placeholder="Email" 
                type="email" 
                name="email"
                noValidate
                onChange={this.handleChange}
                />
                {errorCatch.email.length > 0 && (
                    <span className = "errorMessage">{errorCatch.email}</span>
                )}
                </div>
                <div className ="password">
                <label htmlFor="password">Password</label>
                <input  
                className={errorCatch.password.length > 0 ? "error" : null}
                placeholder="Password" 
                type="password" 
                name="firstName"
                noValidate
                onChange={this.handleChange}
                />
                {errorCatch.password.length > 0 && (
                    <span className = "errorMessage">{errorCatch.password}</span>
                )}
                </div>
                <div className="accountCreate">
                    <button type="submit">Create Account</button>
                    <small>Account Already in Use</small>
                </div>
            </form>
            </div>
        </div>;
    }
}      
export default User;