import * as React from 'react';
import Axios from 'axios';

// interface GetUserByIdState {
//     userId: number,
//     username: string,
//     password: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     role: string
// }

export class UpdateUserComponent extends React.Component<any, any> {
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
            user: []
        };
    }
    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            userId: value
        });
        
    }
    handleSubmit() {
        alert(`You have retrieved the user with id of ${this.state.userId}`);
        const url = `http://localhost:3004/user/${this.state.userId}`;
        const config = {
            headers: {
                "Content-Type": "application.json",
                authorization: localStorage.getItem("ejToken")
            }
        }
        Axios.get(url, config).then(payload => {
            this.setState({
                ...this.state,
                user: (
                    <tr key={payload.data.userId}>
                        <th>{payload.data.userId}</th>
                        <td>{payload.data.username}</td>
                        <td>{payload.data.password}</td>
                        <td>{payload.data.firstName}</td>
                        <td>{payload.data.lastName}</td>
                        <td>{payload.data.email}</td>
                        <td>{payload.data.role}</td>
                    </tr>
                )
                // userId: payload.data.value,
                // username: payload.data.username,
                // password: payload.data.password,
                // firstName: payload.data.firstName,
                // lastName: payload.data.lastName,
                // email: payload.data.email,
                // role: payload.data.role
            })
            console.log(payload.data);
        })
        .catch(err => {
            console.log(err);
            console.log(url);
        })
    }
    render() {
        return (
            <div className="body">
                {console.log(this.state.userId)}
            <form>
                <div className="center-title">
                <div className="form-group">
                    <h1>Get User Information by UserID</h1>
                    <h3>Enter a UserID</h3>
                    <input type="number" value={this.state.userId} onChange={(event: any) => this.handleChange(event)} />
                    <br></br>
                    <button type="submit" onClick = {() => this.handleSubmit()} className="btn btn-primary">Submit</button>
                </div>
                </div>
                <br></br>
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
                        {this.state.user}
                    </tbody>
                </table>
                <br></br>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>UserId</label>
                        <input type = "text" className="form-control" onChange={(event:any) => this.handleChange(event)} />
                    </div>
                    <div className="form-group col-md-3">
                    <label>Username</label>
                        <input type = "text" className="form-control" onChange={(event:any) => this.handleChange(event)} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Password</label>
                        <input type = "text" className="form-control" onChange={(event:any) => this.handleChange(event)} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>First Name</label>
                        <input type = "text" className="form-control" onChange={(event:any) => this.handleChange(event)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Email</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Role</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                </div>
            </form>
            </div>
        )
    }
}