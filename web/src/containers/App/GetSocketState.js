import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

class GetSocketState extends Component {
	componentDidMount() {
		this.checkConnection();
	}

	componentDidUpdate(prevProps) {
		if (
			JSON.stringify(this.props.orderbooks) !==
				JSON.stringify(prevProps.orderbooks) ||
			JSON.stringify(this.props.pairsTrades) !==
				JSON.stringify(prevProps.pairsTrades) ||
			JSON.stringify(this.props.pairs) !== JSON.stringify(prevProps.pairs)
		) {
			this.checkConnection();
		}
	}

	checkConnection = () => {
		if (!this.props.isDataReady) {
			const { pairsTrades, pairs } = this.props;
			const isReady =
				!!Object.keys(pairsTrades).length || !!Object.keys(pairs).length;
			this.props.socketDataCallback(isReady);
		}
	};

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (store) => ({
	pair: store.app.pair,
	orderbooks: store.orderbook.pairsOrderbooks,
	pairsTrades: store.orderbook.pairsTrades,
	pairs: store.app.pairs,
});

export default connect(mapStateToProps)(GetSocketState);
