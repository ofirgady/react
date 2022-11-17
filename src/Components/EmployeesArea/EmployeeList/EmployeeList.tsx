import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";
import usePageTitle from "../../../Utils/usePageTitle";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import "./EmployeeList.css";

function EmployeeList(): JSX.Element {

    usePageTitle("Employee List");

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(()=> {
        employeesService.getAllEmployees()
            .then(employees => setEmployees(employees))
            .catch(err => notifyService.error(err));

    }, []);

    async function removeEmployee(id: number) {
        setEmployees(current => current.filter((employee) => employee.id !== id));
    }

    return (
        <div className="EmployeeList">
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>title</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Birth Date</th>
                    <th>Photo</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(e => <EmployeeRow key={e.id} employee={e} removeEmployee={removeEmployee} /> )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;