import * as React from 'react';
import { StringLiteral, thisExpression } from '@babel/types';
import Axios from 'axios';
import { statement } from '@babel/template';

// interface GetUserState {
//     userId: number,
//     username: string,
//     password: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     role: string
// }

export class GetUserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            userId: 0,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            users: []
        };

    }

    async componentDidMount() {
        alert("You have retrieved the users");
        const url = "http://localhost:3004/user";
        const config  = {
            headers: {
                "Content-Type": "application.json",
                authorization: localStorage.getItem("ejToken")
            }
        }
        Axios.get(url, config).then(payload => {
            this.setState({
                ...this.state,
                users: payload.data.map((o: any) => {
                    return (
                        <tr key={o.userId}>
                            <th scope="row">{o.userid}</th>
                            <td>{o.username}</td>
                            <td>{o.password}</td>
                            <td>{o.firstname}</td>
                            <td>{o.lastname}</td>
                            <td>{o.email}</td>
                            <td>{o.role}</td>
                        </tr>
                    )
                })
                // userId: payload.data.userId,
                // username: payload.data.username,
                // password: payload.data.password,
                // firstName: payload.data.firstName,
                // lastName: payload.data.lastName,
                // email: payload.data.email,
                // role: payload.data.role
            })
            console.log(payload.data);
            console.log(this.state.users);
        });
        
    }

    render() {
        return (
            <div className="body">
            <form>
                <div className="center-title">
                <div className="form-group">
                    <h1>Get All User Information</h1>
                    <h3>Get all users</h3>
                    <br></br>
                </div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">First Name: </th>
                            <th scope="col">Last Name: </th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users}
                    </tbody>
                </table>
            </form>
            </div>
        )
    }
}