import React from 'react';
import {handleInitialDate} from "../actions/shared";
import ConnectedTodos from './Todo'
import ConnectedGoals from './Goal'
import {connect} from 'react-redux';


class App extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialDate())
    }

    render() {
        if (this.props.loading === true) {
            return (
                <span>Loading</span>
            )
        }
        return (
            <div>
                <ConnectedTodos/>
                <ConnectedGoals/>
            </div>
        )
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App);
