import React from 'react';
import { Text, Poem, Player, ResetButton } from '../../Game';
import createGame  from '../../createGame';
import { KATYA_ID } from '../../../consts/names';
import { handleSubmitOnStep } from '../../../actions/heroActions';

const Description = ({ step, reset }) => {
    if (step === 1) {
        return (
            <React.Fragment>
                <Text>
                    Хо-хо! Привет, Катя! Я Дед Мороз <span role="img" aria-label="Santa">🎅</span>! И пришел я сегодня к тебе не с пустыми руками! Надеюсь, ты хорошо себя вела целый год и готова получить свои подарки <span role="img" aria-label="Gift">🎁</span>.
                </Text>
                <Text>
                    Учти, у тебя есть только 15 минут, чтобы закончить выполнение всех заданий и только после этого ты получишь подарок, о котором наверняка мечтала целый год.
                </Text>
                <Text>
                    Но прежде, чем начать, ответь: что это за четыре цифры, которые ты сейчас ввела? Что они значат?
                </Text>
            </React.Fragment>
        );
    }

    if (step === 2) {
        return (
            <React.Fragment>
                <Text>А ты молодец, раз прошла дальше. Но это ещё не всё! Отгадай загадку, чтобы пройти  дальше:</Text>
                <Poem>
                    <p>Будем Новый год встречать,</p>
                    <p>Петь, кружиться, танцевать.</p>
                    <p>Чтобы было веселей,</p>
                    <p>В гости позовем...</p>
                </Poem>
            </React.Fragment>
        );
    }

    if (step === 3) {
        return (
            <Text>
                Смотрю, ты решительно настроена на получение подарка <span role="img" aria-label="Gift">🎁</span>, но что-то ты давно не заглядывала в свою прикроватную тумбочку <span role="img" aria-label="Bed">🛌</span>, а там лежит отгадка к следующему шагу.
            </Text>
        );
    }

    if (step === 4) {
        return (
            <Text>
                Я, конечно, настоящий Дед Мороз <span role="img" aria-label="Santa">🎅</span>, но я прежде всего представляю интересы Ильи и Оли <span role="img" aria-label="Girt and Boy">👫</span>, поэтому задание: назови Олю и Илью восьмью (по четыре на каждого) прилагательными, которые начинаются с первой буквы их имени.
            </Text>
        );
    }

    if (step === 5) {
        return (
            <React.Fragment>
                <Text>
                    Ты умница! Ты прошла все испытания и заслужила свой подарок <span role="img" aria-label="Gift">🎁</span>, но я что-то загрустил, поэтому хочу услышать песню в твоём исполнении!
                </Text>
                <Player url='https://www.youtube.com/watch?v=5ThBkBuUD1M' playing />
                <ResetButton onClick={reset}>Главная страница</ResetButton>
            </React.Fragment>
        )
    }
}

export default createGame(KATYA_ID, handleSubmitOnStep)(Description);