
import EmployeeModel from "../../../Models/EmployeeModel";
import appConfig from "../../../Utils/AppConfig";
import "./EmployeeRow.css";
import employeeService from "../../../Services/EmployeesService";
import notifyService from "../../../Services/NotifyService";

interface EmployeeListProps {
    employee: EmployeeModel;
    removeEmployee: Function;
}

function EmployeeRow(props: EmployeeListProps): JSX.Element {

    async function removeEmployee() {
        const ok = window.confirm("Are you sure?");
        if (!ok) return;
        try {
            await employeeService.deleteEmployee(props.employee.id);
            props.removeEmployee(props.employee.id);
            notifyService.success("Employee removed");
        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <tr>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.title}</td>
            <td>{props.employee.country}</td>
            <td>{props.employee.city}</td>
            <td>{props.employee.birthDate}</td>
            <td><img src={appConfig.employeeImagesUrl + props.employee.imageName} /></td>
            <td><a href={"#"} onClick={removeEmployee}>❌</a></td>
        </tr>

    );
}

    export default EmployeeRow;