import * as React from 'react';
import Axios from 'axios';

// interface UpdateReimbursementInterface {
//     reimbursementId: number;
//     authorId: number;
//     amount: number;
//     dateSubmitted: string;
//     dateResolved: string;
//     description: string;
//     resolver: number;
//     status: number;
//     type: number;
//     reimbursementArray: object;
// }

// creates a component that handles the form for updating user information
export class UpdateReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            reimbursementId: 0,
            author: 0,
            amount: 0,
            dateSubmitted: "0000-00-00",
            dateResolved: "0000-00-00",
            description: "",
            resolver: 0,
            status: 0,
            type: 0,
            reimbursementArray: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            rid: value
        });
    }

    handleSubmit() {
        alert(`You have retrieved the reimbursement with an rid of ${this.state.rid}`);
        console.log(this.state.rid);
        const url = `http://locahost:3004/reimbursements/${this.state.rid}`;
        const config = {
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("ejToken")
            }
        }
        console.log(url);
        Axios.get(url, config).then(payload => {
            this.setState({
                ...this.state,
                reimbursementArray: (
                    <tr key={payload.data.reimbursementId}>
                        <th>{payload.data.reimbursementid}</th>
                        <td>{payload.data.author}</td>
                        <td>{payload.data.amount}</td>
                        <td>{payload.data.dateresolver}</td>
                        <td>{payload.data.datesubmitted}</td>
                        <td>{payload.data.description}</td>
                        <td>{payload.data.resolver}</td>
                        <td>{payload.data.status}</td>
                        <td>{payload.data.type}</td>
                    </tr>
                )
            })
            console.log(payload.data);
        })
        .catch(err => {
            console.log(err);
            console.log(url);
        })
    }

    // handleUpdate(event: any) {
    //     const url = "http://locahost:3004/reimbrsements"; 
    //     event.preventDefault();
    //     const update = {
    //         userId: this.state.reimbursementId,
    //         author: this.state.authorId,
    //         amount: this.state.amount,
    //         dateSubmitted: this.state.dateSubmitted,
    //         dateResolved: this.state.dateResolved,
    //         description: this.state.description,
    //         resolver: this.state.resolver,
    //         status: this.state.status,
    //         type: this.state.type
    //     }
    //     Axios.patch(url, update)
    // }

    render() {
        return (
            <div className="body">
            <form>
                <div className="center-title">
                <h1>Update Reimbursement Information</h1>
                <div className="form=group">
                    <label>Enter a ReimbursementID</label>
                    <input type = "number" onChange={(event: any) => this.handleChange(event)} value={this.state.rid} />
                    <br></br>
                    <button type="submit" onClick = {() => this.handleSubmit()} className="btn btn-primary">Submit</button>
                </div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Reimbursement ID</th>
                            <th scope="col">AuthorID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Description </th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Date Resolved</th>
                            <th scope="col">Resolver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reimbursementArray}
                    </tbody>
                </table>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>ReimbursementID</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Author</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Amount</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Date Submitted</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Date Resolved</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Description</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Resolver</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Status</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                    <div className="form-group col-md-3">
                        <label>Type</label>
                        <input type="text" className="form-control" onChange={(event:any) => this.handleChange(event)} /> 
                    </div>
                </div>
                <div className="form-row">
                    <button className=" btn btn-primary">Update User</button>
                </div>
            </form>
            </div>
        )
    }
}