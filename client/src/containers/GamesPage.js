
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import MatchGame from './MatchGame';


class UsersPage extends Component {

	render(){

	  return(
		<div>
			<MatchGame />
		</div>
	   )
	}
}

function mapStateToProps(state) {
	return { };
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
