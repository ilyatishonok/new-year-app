/*import React from 'react';
import KeyForm from '../KeyForm';
import { stepsData } from '../../data/data';
import { SubmissionError } from 'redux-form';

const handleSubmit = (heroId, step) => {
    return (values, dispatch) => {
        const isKeyCorrect = stepsData[heroId][step - 1] === values.secretKey;

        if (!isKeyCorrect) {
            throw new SubmissionError({ _error: 'Неправильный секретный ключ!',  });
        }

        dispatch({
            type: 'NEXT_STEP',
        });
    }
}

const renderDescription = step => {
    if (step === 1) {
        return (
            <div>
                Хо-хо! Привет, Олька! Я как раз прошел IT Academy по бизнес анализу. Давай с тобой немного подумаем?
                Есть слово: "<code>уышааф</code>" - расшифруй его. Подсказки у IT'шника :) 
            </div>
        );
    }

    if (step === 2) {
        return (
            <div>
                Молодец! Поехали дальше :) . Где-то в этом доме есть место где лежит "сердце", а в этом "сердце" твой ключик.
            </div>
        );
    }

    if (step === 3) {
        return (
            <div>
                Надеюсь ты запомнила код, который только что ввела, потому что он тебе сейчас пригодится :)
            </div>
        );
    }
    
    if (step === 4) {
        return (
            <div>

            </div>
        );
    }

    if (step === 5) {
        return (
            <div>
                
            </div>
        )
    }
}

const OlyaKGame = ({ step, reset }) => (
    <React.Fragment>
        {renderDescription(step)}
        { step !== 5 && <KeyForm onSubmitForm={handleSubmit('#16', step)} />}
    </React.Fragment>
);

export default OlyaKGame;*/

import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import createGame  from '../../createGame';
import { handleSubmitOnStep } from '../../../actions/heroActions';

const Text = styled.div`
    font-family: corbel;
    text-indent: 1.5em;
`;

const Poem = styled.div`
    font-style: italic;
    text-align: center;
    font-family: corbel;
    line-height: 0.5em;
`;

const Player = styled(ReactPlayer)`
    width: 100% !important;
    margin-top: 40px;
`;

const Description = ({ step, reset }) => {
    if (step === 1) {
        return (
            <React.Fragment>
                <Text>
                    Хо-хо! Привет, Олька Войкель! Ты уже, наверное, поняла, кто я? Так вот сегодня я пришёл тебе вручить подарки за то, что ты была такой хорошей девочкой весь прошедший год.
                </Text>
                <Text>
                    Но ты не настолько отличилась от Катьки, чтобы не выполнять мои пожелания. Так что, вперёд! Твои 5 минут начались!
                </Text>
                <Text>
                    Для того, чтобы продолжить, ответь: что это за четыре цифры, которые ты сейчас ввела? Что они значат?
                </Text>
            </React.Fragment>
        );
    }

    if (step === 2) {
        return (
            <React.Fragment>
                <Text>Неплохо-неплохо. Думал, ты не ответишь. А ну-ка, отгадай загадку:</Text>
                <Poem>
                    <p>Новый год — особый праздник.</p>
                    <p>Полон радости, веселья,</p>
                    <p>Детям он подарки дарит</p>
                    <p>Взрослым же с утра —...</p>
                </Poem>
            </React.Fragment>
        );
    }

    if (step === 3) {
        return (
            <Text>
                Ого, а я смотрю, ты не только мазик сюда пришла поточить, но ещё и подарки получить! Ладно-ладно. Найди следующий код под батареей в одной из комнат. Удачи ;)
            </Text>
        );
    }

    if (step === 4) {
        return (
            <Text>
                Чтобы продолжить, скажи тост за своих лучших друзей: Олю и Илью, разумеется, и выпей рюмку махом!
            </Text>
        );
    }

    if (step === 5) {
        return (
            <React.Fragment>
                <Text>
                    Не надейся, что уйдёшь без песни!
                </Text>
                <Player url='https://www.youtube.com/watch?v=bqzbUFIO5Yo' playing />
                <button>Reset</button>
            </React.Fragment>
        )
    }
}

export default createGame('#14', handleSubmitOnStep)(Description);