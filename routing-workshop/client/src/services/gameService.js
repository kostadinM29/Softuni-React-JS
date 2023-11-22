import { request } from "../lib/request";


const BASE_URL = 'http://localhost:3030/data/games';

export const getAll = async () =>
{
    const result = await request('GET', BASE_URL);

    return result;
};

export const getOne = async (id) =>
{
    const result = await request('GET', `${BASE_URL}/${id}`);

    return result;
};

export const create = async (gameData) =>
{
    const result = await request('POST', BASE_URL, gameData);

    return result;
};