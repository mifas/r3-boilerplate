//  @flow

import React, { Fragment } from "react";
import { connect } from "react-redux";
import Logo from "../../components/Logo";

type Props = {
	caption: string
};

export class Home extends React.PureComponent<Props> {
	render() {
		const { caption } = this.props;
		return (
			<Fragment>
				<Logo />
				<h1>{caption}</h1>
			</Fragment>
		);
	}
}

export default connect(state => ({
	caption: state.data.caption
}))(Home);
