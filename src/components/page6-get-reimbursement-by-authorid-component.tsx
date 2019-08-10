import * as React from 'react';
import Axios from 'axios';

// interface GetReimbursementByAuthorIdInterface {
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

// creates a component for Getting a Reimbursement By Type Form
// creates a table to handle the data
export class GetReimbursementByAuthorIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            reimbursementid: 0,
            authorid: 0,
            amount: 0,
            dateSubmitted: "0000-00-00",
            dateResolved: "0000-00-00",
            description: "",
            resolver: 0,
            status: 0,
            type: 0,
            authorMap: []
        };
    }
    
    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            authorId: value
        });
    }
    handleSubmit() {
        alert(`You have retrieved the reimbursement ${this.state.authorId}`);
        const url = `http://localhost:3004/reimbursements/author/userId/${this.state.authorId}`;
        const config = {
            headers: {
                "Content-Type": "application.json",
                authorization: localStorage.getItem("ejToken")
            }
        }
        console.log(url + "this is hte url");
        Axios.get(url, config).then(payload => {
            this.setState({
                ...this.state,
                authorMap: payload.data.map((o: any) => {
                    return (
                        <tr key={o.reimbursementId}>
                            <th scope="row">{o.reimbursementid}</th>
                            <td>{o.author}</td>
                            <td>{o.amount}</td>
                            <td>{o.datesubmitted}</td>
                            <td>{o.dateresolved}</td>
                            <td>{o.description}</td>
                            <td>{o.resolver}</td>
                            <td>{o.status}</td>
                            <td>{o.type}</td>
                        </tr>
                    )
                })
                // reimbursementId: payload.data.reimbursementId,
                // authorId: payload.data.value,
                // amount: payload.data.amount,
                // dateSubmitted: payload.data.dateSubmitted,
                // dateResolved: payload.data.dateResolved,
                // description: payload.data.description,
                // resolver: payload.data.resolver,
                // status: payload.data.status,
                // type: payload.data.type
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
                {console.log(this.state.authorid)}
            <form>
                <div className="center-title">
                <div className="form=group">
                    <h1>Retrieve a Reimbursement by AuthorID</h1>
                    <label>Enter an AuthorID</label>
                    <input type = "number" value={this.state.authorId} onChange={(event: any) => this.handleChange(event)} placeholder ="Enter an AuthorId" />
                    <br></br>
                    <button type="submit" onClick = {() => this.handleSubmit()} className="btn btn-primary">Submit</button>
                </div>
                </div>
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
                        {this.state.authorMap}
                    </tbody>
            </table>
            </form>
            </div>
        )
    }
}