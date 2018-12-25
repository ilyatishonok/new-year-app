import React from 'react';
import createGame  from '../../createGame';
import { Text, Poem, Player, ResetButton } from '../../Game';
import { LIZA_ID } from '../../../consts/names';
import { handleSubmitOnStep } from '../../../actions/heroActions';

const Description = ({ step, reset }) => {
    if (step === 1) {
        return (
            <React.Fragment>
                <Text>
                    Хо-хо, Лизка <span role="img" aria-label="Santa">🎅</span>! Зря ты сюда зашла! Подарки  <span role="img" aria-label="Gift">🎁</span>- это, конечно, хорошо, но готова ли ты пройти мой НОВОГОДНЕ-ИСТОРИЧЕСКИЙ квест? Праздник-праздником, а об учёбе забывать не стоит. Я думаю, ты и сама это понимаешь.
                </Text>
                <Text>
                    Так что это за число, которое ты сейчас ввела? Что оно означает?
                </Text>
            </React.Fragment>
        );
    }

    if (step === 2) {
        return (
            <React.Fragment>
                <Text>Ничего себе! Да ты шаришь! Но с загадкой можешь не справиться!</Text>
                <Poem>
                    <p>Невозможно не отметить</p>
                    <p>Самый лучший на планете</p>
                    <p>Праздник радостных хлопот —</p>
                    <p>Развеселый...</p>
                </Poem>
            </React.Fragment>
        );
    }

    if (step === 3) {
        return (
            <Text>
                Эх, а куда же я дел следующий код? Возможно, на одном из зеркал найдёшь его!
            </Text>
        );
    }

    if (step === 4) {
        return (
            <Text>
                Подойди да поблагодари своих друзей, Олю и Илью <span role="img" aria-label="Girt and Boy">👫</span>, за всё хорошее, что было в этом году. Да только скажи слово "Спасибо", как минимум, на 5 языках.
            </Text>
        );
    }

    if (step === 5) {
        return (
            <React.Fragment>
                <Text>
                    Ну спой ты уже, пожалуйста!
                </Text>
                <Player url='https://www.youtube.com/watch?v=7JPqDL5TMjE' playing />
                <ResetButton onClick={reset}>Главная страница</ResetButton>
            </React.Fragment>
        )
    }
}

export default createGame(LIZA_ID, handleSubmitOnStep)(Description);