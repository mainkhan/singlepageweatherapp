import React, { Component } from 'react';
import axios from 'axios';

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            firstname: null,
            lastname: null
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        var headers = {
            'Content-Type': 'application/json',
        };
        var body = {
            "id": this.state.username,
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "password": this.state.password
        };
        console.log("about to send over body: ", body);

        axios.post("localhost:8081/", body, { headers: headers });
    }


    handleChangeUsername(event) {
    this.setState({username: event.target.value});
    }
    handleChangePassword(event) {
    this.setState({password: event.target.value});
    }
    handleChangeFirstName(event) {
    this.setState({fistname: event.target.value});
    }
    handleChangeLastName(event) {
    this.setState({lastname: event.target.value});
    }


    render() {
        return (
            <div className="container">
                <div className="form-group" onSubmit={this.handleSubmit}>
                    {/* <div className="form-group"> */}
                        <label for="username">Username:</label>
                        <input type="text" className="form-control" id="username" 
                        value={this.state.username} onChange={this.handleChangeUsername}/>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                        <label for="password">Password:</label>
                        <input type="password" className="form-control" id="password"
                        value={this.state.password} onChange={this.handleChangePassword}/>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                        <label for="firstname">First Name:</label>
                        <input type="text" className="form-control" id="firstname" 
                        value={this.state.firstname} onChange={this.handleChangeFirstName}/>
                    {/* </div> */}
                    {/* <div className="form-group"> */}
                        <label for="lastname">Last Name:</label>
                        <input type="text" className="form-control" id="lastname" 
                        value={this.state.lastname} onChange={this.handleChangeLastName}/>
                    {/* </div> */}

                    <button type="submit" class="btn btn-success" >Add User</button>

                </div>
            </div>
        );
    }
}

export default NewUser;
