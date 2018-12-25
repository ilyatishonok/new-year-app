import { connect } from 'react-redux';
import Game from '../../components/Game';
import { reset } from '../../actions/heroActions';

const mapStateToProps = state => ({
    heroId: state.hero.currentHeroId,
    step: state.hero.currentHeroStep,
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);