import React, { Component } from "react";

export default class Customers extends Component {
  state = {
    heading: "Customers List",
    UserData: [
      { id: 1, name: "Jack", email: "jack@gmail.com" },
      { id: 2, name: "John", email: "John@gmail.com" },
      { id: 3, name: "Jimm", email: "Jimm@gmail.com" },
      { id: 4, name: "Jachy", email: "Jachy@gmail.com" },
      { id: 5, name: "Jorden", email: "Jorden@gmail.com" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.heading}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.UserData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
