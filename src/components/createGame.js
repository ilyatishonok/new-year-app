import React, { Component } from 'react';
import KeyForm from './KeyForm';

const createGame = (heroId, handleSubmit) => {
    return Description => {
        return class extends Component {
            render() {
                const { step } = this.props;
                
                return (
                    <React.Fragment>
                        <Description {...this.props} step={step} />
                        { step !== 5 && <KeyForm onSubmitForm={handleSubmit(heroId, step)} />}
                    </React.Fragment>
                );
            }
        }
    }
}

export default createGame;