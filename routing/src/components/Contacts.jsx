import { useEffect } from "react";

const Contacts = () =>
{
    useEffect(() =>
    {
        console.log('mount or update.');

        const timeoutId = setTimeout(() =>
        {
            console.log('2 seconds.');
        }, 2000);

        return () =>
        {
            console.log('on unmount.');

            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <>
            <h2>Contacts Page</h2>

            <a href="tel:6031112298">Call us!</a>
        </>
    );
};

export default Contacts;