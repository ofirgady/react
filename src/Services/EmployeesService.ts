import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import { addEmployeesAction, deleteEmployeesAction, employeesStore, fetchEmployeesAction, updateEmployeesAction } from "../Redux/EmployeesState";
import appConfig from "../Utils/AppConfig";

class EmployeesService {

    public async getAllEmployees() : Promise<EmployeeModel[]> {
        let employees = employeesStore.getState().employees;
        if(employees.length === 0 ) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            employees = response.data;
            employeesStore.dispatch(fetchEmployeesAction(employees))
        }
       return employees;
    }


    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        let employee = employeesStore.getState().employees.find(e => e.id === id);
        if (!employee) {
            const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
            employee = response.data;
        }
        return employee;
    }

    public async addEmployee(employee: EmployeeModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" }
       const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, {headers});
       const addedEmployee = response.data;
    //    employeesStore.dispatch(addEmployeesAction(addedEmployee));
    }


    public async updateEmployee(employee: EmployeeModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" }
       const response = await axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, employee, {headers});
       const updatedEmployee = response.data;
    //    employeesStore.dispatch(updateEmployeesAction(updatedEmployee));


    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete(appConfig.employeesUrl +id);
        employeesStore.dispatch(deleteEmployeesAction(id));

    }

}

const employeesService = new EmployeesService();

export default employeesService;