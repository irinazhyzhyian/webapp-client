import { serialize } from 'object-to-formdata';
import axios from "axios";

export async function getEmployees(cancelToken) {
    const url = `${process.env.REACT_APP_URL}/api/employees`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.get(url, configs);
    return response;
}

export async function getEmployeeById(cancelToken, id) {
    const url = `${process.env.REACT_APP_URL}/api/employees/${id}`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.get(url, configs);
    return response;
}

export async function addEmployee(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/api/employees`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.post(url, serialize(apiDto), configs);
    return response;
}

export async function updateEmployee(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/api/employees`;
    const configs = {
        cancelToken: cancelToken.token,
    };
    const response = await axios.put(url, serialize(apiDto), configs);
    return response;
}

export async function deleteEmployee(cancelToken, apiDto) {
    const url = `${process.env.REACT_APP_URL}/api/employees/${apiDto.id}`;
    const configs = {
        cancelToken: cancelToken.token,
    };
        
    const response = await axios.delete(url, configs);
    return response;
}


