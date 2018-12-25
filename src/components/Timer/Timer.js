import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import config from '../../config';

const TimerContainer = styled.div``;

export default class Timer extends Component {
    componentDidMount() {
        const { startTimer, isTimerTurnedOn, interval } = this.props;

        if (isTimerTurnedOn && !interval) {
            startTimer();
        }
    }

    render() {
        const { seconds } = this.props;

        const secondsToLose = config.maxTimeInSeconds - seconds;

        const date = new Date(null);
        date.setSeconds(secondsToLose);

        if (secondsToLose <= 0) {
            return (
                <TimerContainer>Время вышло, друг...</TimerContainer>
            );
        }

        const formattedData = date.toISOString().substr(11, 8);

        return (
            <TimerContainer>{formattedData}</TimerContainer>
        );
    }

    static propTypes = {
        isTimerTurnedOn: PropTypes.bool.isRequired,
        interval: PropTypes.number,
        seconds: PropTypes.number.isRequired,
        startTimer: PropTypes.func.isRequired,
    }
}