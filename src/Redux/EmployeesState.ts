import { createStore } from "redux";
import EmployeeModel from "../Models/EmployeeModel";

// 1. AppState - Data in app level
export class EmployeesState {
    public employees: EmployeeModel[] = [];

}

// 2. ActionType - AppState Actions List - what we can do on our state:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
}

// 3. Action - A single action on the state:
export interface EmployeesAction {
    type: EmployeesActionType;
    payload: any; // any --> list of Employees, single employee...
}

// 4. Action Creators - functions for creating Action Objects -each for different ActionType - not mandatory
export function fetchEmployeesAction(employees: EmployeeModel[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees , payload: employees};
}

export function addEmployeesAction(employee: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.AddEmployee , payload: employee};
}

export function updateEmployeesAction(employee: EmployeeModel): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployee , payload: employee};
}

export function deleteEmployeesAction(id: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployee , payload: id};
}

// 5. Reducer - perform the actual operation:
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction) : EmployeesState {

    const newState = {...currentState};

    switch(action.type) {
        case EmployeesActionType.FetchEmployees: //here, the payload is the list of all Employees
            newState.employees = action.payload;
            break;
        
        case EmployeesActionType.AddEmployee: // here. the payload is a new Employee
            newState.employees.push(action.payload);
            break;

        case EmployeesActionType.UpdateEmployee: // here, the payload is an existing Employee
            const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id);
            if(indexToUpdate >= 0) newState.employees[indexToUpdate] = action.payload;
            break;

        case EmployeesActionType.DeleteEmployee: // here, the payload is Employee id
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload);
            if(indexToDelete >= 0) newState.employees.splice(indexToDelete, 1); // 1 = delete only one
            break;
    }

    return newState;

    
}

// 6. Store - the managing object:
export const employeesStore = createStore(employeesReducer);

