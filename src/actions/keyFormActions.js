export const validate = values => {
    const errors = {};

    if (!values.secretKey) {
        errors.secretKey = 'Это поле обязательно!';
    }

    return errors;
}