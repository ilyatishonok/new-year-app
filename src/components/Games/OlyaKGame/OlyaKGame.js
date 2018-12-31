import React from 'react';
import styled from 'styled-components';
import { Text, ResetButton } from '../../Game';
import createGame  from '../../createGame';
import { OLYAK_ID } from '../../../consts/names';
import { handleSubmitOnStep } from '../../../actions/heroActions';

const Description = ({ step, reset }) => {
    if (step === 1) {
        return (
            <React.Fragment>
                <Text>
                    Хо-хо <span role="img" aria-label="Santa">🎅</span>! Привет, Олька! У меня и для тебя есть подарок <span role="img" aria-label="Gift">🎁</span>! Давай с тобой немного поиграем!
                </Text>
                <Text>
                    Есть слово: "<code>уышааф</code>" - расшифруй его. Ты знаешь у кого спрашивать подсказки!
                </Text>
            </React.Fragment>
        );
    }

    if (step === 2) {
        return (
            <Text>
                Молодец! Поехали дальше! Где-то в этом доме есть место, где лежит "сердце" <span role="img" aria-label="heart">❤️</span>, а в этом "сердце" твой ключик.
            </Text>
        );
    }

    if (step === 3) {
        return (
            <React.Fragment>
                <Text>
                    Надеюсь ты запомнила код, который только что ввела. Он тебе сейчас пригодится <span aria-label="smile-face" role="img">😃</span>
                </Text>
                <Text>
                    Найди среди вложений диалога с Ильей, фото под номером, который ты только что ввела.
                </Text>
            </React.Fragment>
        );
    }

    if (step === 4) {
        return (
            <React.Fragment>
                <Text>
                    Молодец! Я записал твой следующий код тут <olyacode style={{display: 'none'}}>1000</olyacode>, но он почему-то не отобразился.
                </Text> 
                <Text>
                    Возможно, ты знаешь как его отобразить?
                </Text>
            </React.Fragment>
        );
    }

    if (step === 5) {
        return (
            <React.Fragment>
                <Text>
                    Молодец! Иди в комнату Кати и Лизы и поищи подсказку на двери!
                </Text>
                <ResetButton onClick={reset}>Главная страница</ResetButton>
            </React.Fragment>
        )
    }
}

export default createGame(OLYAK_ID, handleSubmitOnStep)(Description);