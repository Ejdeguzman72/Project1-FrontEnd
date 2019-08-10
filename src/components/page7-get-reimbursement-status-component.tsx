import * as React from 'react';
import Axios from 'axios';

// interface GetReimbursementByStatusInterface {
//     reimbursementId: number;
//     authorId: number;
//     amount: number;
//     dateSubmitted: string;
//     dateResolved: string;
//     description: string;
//     resolver: number;
//     status: number;
//     type: number
// }

// creates a component for Getting Reimbursement By Status Form
// outputs a table for the data
export class GetReimbursementByStatusComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            reimbursementId: 0,
            authorId: 0,
            amount: 0,
            dateSubmitted: "2019-01-01",
            dateresolved: "",
            description: "",
            resolver: 0,
            status: 0,
            type: 0,
            statusArray: []
        };
    }

    handleChange(event: any) {
            const value = event.target.value;
            this.setState({
                ...this.state,
                status: value
            });
        }
    handleSubmit() {
        alert(`You have retrieved the reimbursement with the status ID of ${this.state.status}`);
        const url = `http://localhost:3004/reimbursements/status/${this.state.status}`;
        const config = {
            headers: {
                "Content-Type": "application.json",
                authorization: localStorage.getItem("ejToken")
            }
        }
        Axios.get(url, config).then(payload => {
            this.setState({
                ...this.state,
                statusArray: (
                    <tr key={payload.data.reimbursementId}>
                        <th>{payload.data.reimbursementId}</th>
                        <th>{payload.data.author}</th>
                        <td>{payload.data.amount}</td>
                        <td>{payload.data.dateSubmitted}</td>
                        <td>{payload.data.dateResolved}</td>
                        <td>{payload.data.description}</td>
                        <td>{payload.data.resolver}</td>
                        <td>{payload.data.status}</td>
                        <td>{payload.data.type}</td>
                    </tr>
                )
                // reimbursementId: payload.data.reimbursementId,
                // authorId: payload.data.authorId,
                // amount: payload.data.amount,
                // dateSubmitted: payload.data.dateSubmitted,
                // dateResolved: payload.data.dateResolved,
                // description: payload.data.description,
                // resolver: payload.data.resolver,
                // status: payload.data.value,
                // type: payload.data.type 
            })
            console.log(payload.data.dateSubmitted + "date")
            console.log(payload.data.status + "status");
        })
        .catch(err => {
            console.log(err);
            console.log(url);
        })
    }
    
    render() {
        return (
            <div className="body">
                {console.log(this.state.status)}
            <form>
                <div className="center-title">
                <div className="form=group">
                    <h1>Retrieve Reimbursement by Status ID</h1>
                    <label>Enter a StatusID</label>
                    <input type = "number"  value={this.state.status} onChange={(event: any) => this.handleChange(event)} placeholder ="Enter a ReimbursementID" />
                    <br></br>
                    <button type="submit" onClick = {() => this.handleSubmit()} className="btn btn-primary">Submit</button>
                </div>
                </div>
                <br></br>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ReimbursementID</th>
                            <th scope="col">Author</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Date Resolved</th>
                            <th scope="col">Description</th>
                            <th scope="col">Resolver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.statusArray}
                    </tbody>
                </table>
        </form>
        </div>        
        )
    }
}