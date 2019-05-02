import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


// serve data
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// serve function --> this is what gets all props to main (when it is invoked below)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;