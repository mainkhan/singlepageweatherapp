import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  async componentDidMount() {
    const users = (await axios.get('http://localhost:8081/')).data;
    this.setState({
      users,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.users === null && <p>No registered users. Try adding one!</p>}
          {
            this.state.users && this.state.users.map(user => (
              <div key={user.id} className="col-sm-12 col-md-4 col-lg-3">
                
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">User ID: {user.id}</div>
                    <div className="card-body">
                      <h4 className="card-title">{user.firstname + " " + user.lastname}</h4>
                      <Link to={`/delete/${user.id}`}>
                      <p className="card-text">delete user?</p>
                      </Link>
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Users;