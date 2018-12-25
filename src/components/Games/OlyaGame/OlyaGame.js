import React from 'react';
import { Text, Poem, Player, ResetButton } from '../../Game';
import createGame  from '../../createGame';
import { OLYA_ID } from '../../../consts/names';
import { handleSubmitOnStep } from '../../../actions/heroActions';

const Description = ({ step, reset }) => {
    if (step === 1) {
        return (
            <React.Fragment>
                <Text>
                    Хо-хо! Привет, Олька Войкель! Ты уже, наверное, поняла, кто я <span role="img" aria-label="Santa">🎅</span>? Так вот сегодня я пришёл тебе вручить подарки <span role="img" aria-label="Gift">🎁</span> за то, что ты была такой хорошей девочкой весь прошедший год.
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
                Ого, а я смотрю, ты не только мазик сюда пришла поточить, но ещё и подарки <span role="img" aria-label="Gift">🎁</span> получить! Ладно-ладно. Найди следующий код под батареей в одной из комнат. Удачи ;)
            </Text>
        );
    }

    if (step === 4) {
        return (
            <Text>
                Чтобы продолжить, скажи тост за своих лучших друзей: Олю и Илью <span role="img" aria-label="Girt and Boy">👫</span>, разумеется, и выпей рюмку махом!
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
                <ResetButton onClick={reset}>Главная страница</ResetButton>
            </React.Fragment>
        )
    }
}

export default createGame(OLYA_ID, handleSubmitOnStep)(Description);