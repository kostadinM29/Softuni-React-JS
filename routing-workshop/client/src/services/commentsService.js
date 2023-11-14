import { request } from "../lib/request";


const BASE_URL = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (gameId) =>
{
    // const query = new URLSearchParams({
    //     where: `gameId="${gameId}"`,
    // });

    //const result = await request('GET', `${BASE_URL}?${query}}`);
    const result = await request('GET', BASE_URL);

    // Temp solution
    return Object.values(result).filter(comment => comment.gameId === gameId);
};

export const create = async (gameId, username, text) =>
{
    const result = await request('POST', BASE_URL, {
        gameId,
        username,
        text,
    });

    return result;
};