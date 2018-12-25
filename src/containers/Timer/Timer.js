import { connect } from 'react-redux';
import Timer from '../../components/Timer';
import { startTimer } from '../../actions/timerActions';

const mapStateToProps = state => ({
    seconds: state.timer.seconds,
    isTimerTurnedOn: state.timer.isTimerTurnedOn,
    interval: state.timer.interval,
});

const mapDispatchToProps = dispatch => ({
    startTimer: () => dispatch(startTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
