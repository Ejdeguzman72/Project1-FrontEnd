import * as React from 'react';
import { string } from 'prop-types';
import Axios from 'axios';

// interface SubmitReimbursementInterface {
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

// creates a component that serves as the form for submitting reimbursements
export class SubmitReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            formFields: {
                    reimbursementid: {
                        value:""
                    },
                    author: {
                        value:""
                    },
                    amount: {
                        value:""
                    },
                    dateSubmitted: {
                        value:""
                    },
                    dateResolved: {
                        value:""
                    },
                    description: {
                        value: ""
                    },
                    status: {
                        value: ""
                    },
                    type: {
                        value: ""
                    },
                }
            };
        }
        
        handleChange = (event: any) => {
            const name = event.target.name;
            let value;
            this.setState({
                ...this.state,
                formFields: {
                    ...this.state.formFields, 
                    [name]: {
                        ...this.state.formFields[name],
                        value
                    }
                }
            });
        }
       async handleSubmit() {
            alert("You have submitted a new reimbursement");
            const url = "http://localhost:3004/reimbursements";
            
            // const data = {
            //     reimbursementid: this.state.reimbursementId,
            //     author: this.state.authorId,
            //     amount: this.state.amount,
            //     datesubmitted: this.state.dateSubmitted,
            //     dateresolved: this.state.dateResolved,
            //     description: this.state.description,
            //     resolver: this.state.resolver,
            //     status: this.state.status,
            //     type: this.state.type
            // };

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("ejToken")
                }
            }
            
            console.log(this.state);
            let instance = Axios.create(config);
            let payload = await instance.post(url).catch((error) => {
                return error.response;
            });
            console.log(payload);
            this.setState({
                validated: false,
                Error: {isError: false, message: ""},
                isLoading: false,
                shouldRedirect: false,
                reimbursementId: payload.data.reimbursementId,
                authorId: payload.data.author,
                dateSubmitted: payload.data.datesubmitted,
                dateResolved: payload.data.dateresolved,
                description: payload.data.description,
                resolver: payload.data.resolver,
                status: payload.data.status,
                type: payload.data.type
                })
 
        }
    render() {
        return (
            <div className="body">
            <form>
                <div className="center-title">
                <h1>Submit a Reimbursement</h1>
                </div>
               <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>ReimbursementId</label>
                        <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)} value={this.state.reimbursementId} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>AuthorID</label>
                        <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.authorId} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Reimbursement Amount</label>
                        <input type="number" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.amount} />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Date Submitted</label>
                        <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.dateResolved} />
                    </div>
                </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Date Resolved</label>
                    <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.dateSubmitted} />
                </div>
            <div className="form-group col-md-4">
                <label>Reimbursement Description</label>
                <input type ="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.description} />
            </div>
            <div className="form-row">
                <div className="form-group col-md-8">
                    <label>Resolver</label>
                    <input type="text" className="form=control" onChange={(event: any) => this.handleChange(event)}  value={this.state.resolver} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>StatusID</label>
                    <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.status} />
                </div>
                <div className="form-group col-md-6">
                    <label>Type ID</label>
                    <input type="text" className="form-control" onChange={(event: any) => this.handleChange(event)}  value={this.state.type} />
                </div>
            </div>
        </div>
            <button type="submit" onClick ={() => this.handleSubmit()} className="btn btn-primary">Submit</button>
        </form>
        </div>
        )
    }
}