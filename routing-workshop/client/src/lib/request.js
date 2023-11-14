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

    const result = await response.json();

    return result;
};