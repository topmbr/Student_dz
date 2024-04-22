import axios from 'axios';

const BASE_URL = 'http://localhost:7035/api/Employees'; // Адрес сервера

// Метод для получения списка всех сотрудников
export const getEmployees = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error getting employees:', error);
        throw error;
    }
};

// Метод для получения сотрудника по ID
export const getEmployee = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting employee:', error);
        throw error;
    }
};

// Метод для добавления нового сотрудника
export const postEmployee = async (employee) => {
    try {
        const response = await axios.post(BASE_URL, employee);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

// Метод для обновления существующего сотрудника
export const putEmployee = async (id, employee) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, employee);
        return response.data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

// Метод для удаления сотрудника
export const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};
