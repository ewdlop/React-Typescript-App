import { useState, useCallback, ChangeEvent } from 'react';

interface FormErrors {
    [key: string]: string | undefined;
}

type ValidateFunction<T> = (name: keyof T, value: string) => FormErrors;
type UseForm<T> = [T, FormErrors, (e: ChangeEvent<HTMLInputElement>) => void, () => void];

const useForm = <T extends object>(
    initialValues: T,
    validate?: ValidateFunction<T>
): UseForm<T> => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setValues((prevValues) => ({ ...prevValues, [name]: value }));

            if (validate) {
                const validationErrors = validate(name as keyof T, value);
                setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
            }
        },
        [validate]
    );

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
    }, [initialValues]);

    return [values, errors, handleChange, resetForm];
};

export default useForm;