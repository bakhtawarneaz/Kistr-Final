import api from '../config/axiosConfig';

export const createEmployee = async (data) => {
    const response = await api.post('/api/employees', data);
    return response;
};

export const getEmployee = async (page = 1, perPage = 5) => {
    const response = await  api.get('/api/employees',{
        params: {
            page,
            per_page: perPage
        }
    });
    return response.data;
};


export const updateEmployee = async (employeeData) => {
    const response = await  api.put(`/api/employees/${employeeData.id}`, employeeData);
    return response.data;
};

export const employeeDetail = async (id) => {
    const response = await  api.get(`/api/employees/${id}`);
    return response.data;
};