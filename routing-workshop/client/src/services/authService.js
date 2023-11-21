import { request } from "../lib/request";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) =>
{
    const result = await request('POST', `${BASE_URL}/login`, {
        email,
        password,
    });

    return result;
};

export const register = async (email, password) =>
{
    const result = await request('POST', `${BASE_URL}/register`, {
        email,
        password,
    });

    return result;
};

export const logout = () => request('GET', `${BASE_URL}/logout`);