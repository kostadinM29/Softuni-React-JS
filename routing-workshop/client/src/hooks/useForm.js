import { useState } from "react";

const useForm = (initialValues, submitHandler) =>
{
    const [values, setValues] = useState(initialValues);

    const onChange = (e) =>
    {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) =>
    {
        e.preventDefault();

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
};

export default useForm;