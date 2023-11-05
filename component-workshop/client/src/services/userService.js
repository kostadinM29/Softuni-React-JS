const baseUrl = 'http://localhost:3030/jsonstore/users';

export const GetAll = async () =>
{
    try
    {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);
        return data;
    } catch (error)
    {
        console.log(error);
    }
};