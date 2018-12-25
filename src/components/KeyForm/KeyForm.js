import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { validate } from '../../actions/keyFormActions';

const Error = styled.div`
    color: red;
    margin-top: 10px;
`;

const FlexButton = styled(Button)`
    display: flex !important;
    margin: auto !important;
    margin-top: 10px !important;
    background: green !important;
    color: white !important;

    &: hover {
        background: darkgreen !important;
    }
    &:disabled {
        background: gray !important;
    }
`;

class KeyForm extends Component {
    renderFields = fieldProps => {
        const { input, label, type, required, meta: { touched, error }} = fieldProps;
        const color = touched && error ? 'red' : 'green';

        return (
            <FormControl margin="normal" required={required} fullWidth>
                <InputLabel style={{color: color}} htmlFor="login">{label}</InputLabel>
                <Input
                    {...input}
                    error={touched && !!error}
                    type={type}
                    placeholder={label}
                    autoComplete="off"
                />
                {touched && error && <Error>{error}</Error>}
            </FormControl>
        )
    }

    handleSubmit = (values, dispatch) => {
        this.props.onSubmitForm(values, dispatch);
    }

    render() {
        const { handleSubmit, pristine, submitting, label, error } = this.props;

        return (
            <form noValidate onSubmit={handleSubmit(this.handleSubmit)}>
                <div>
                    <Field 
                        name="secretKey"
                        required
                        component={this.renderFields}
                        type="text"
                        label={label || 'Введите секретный ключ'}
                    />
                </div>
                {error && <Error>{error}</Error>}
                <FlexButton type="submit" disabled={pristine || submitting}>
                    ОК
                </FlexButton>
            </form>
        );
    }
}

export default reduxForm({
    form: 'keyForm',
    validate,
})(KeyForm);
