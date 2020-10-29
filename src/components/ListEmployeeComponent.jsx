import React, { Component } from 'react'
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            employees: []
        }
    }


    componentDidMount() {





        axios.get(EMPLOYEE_API_BASE_URL)
            .then(res => {
                console.log('res', res)
                this.setState({
                    employees: res.data
                });
            });




    }
    render() {
        return (
            <div>

                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actiones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>

                                        </tr>
                                )
                            }
                        </tbody>

                    </table>


                </div>

            </div>
        )
    }
}
export default ListEmployeeComponent;
