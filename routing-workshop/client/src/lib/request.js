const buildOptions = (data) =>
{
    const options = {};

    if (data)
    {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json',
        };
    }

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken)
    {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        };
    }

    return options;
};

export const request = async (method, url, data) =>
{
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (!response.ok)
    {
        throw new Error('Fetch error!')
    };

    if (response.status === 204)
    {
        return {};
    }

    const result = await response.json();

    return result;
};