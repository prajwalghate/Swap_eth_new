import React, { Component } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";
import TransferForm from "./TransferForm";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: "buy",
		};
	}

	render() {
		let content;
		if (this.state.currentForm === "buy") {
			content = (
				<BuyForm
					ethBalance={this.props.ethBalance}
					tokenBalance={this.props.tokenBalance}
					buyTokens={this.props.buyTokens}
				/>
			);
		} else if (this.state.currentForm === "sell") {
			content = (
				<SellForm
					ethBalance={this.props.ethBalance}
					tokenBalance={this.props.tokenBalance}
					sellTokens={this.props.sellTokens}
				/>
			);
		} else {
			content = (
				<TransferForm
					ethBalance={this.props.ethBalance}
					tokenBalance={this.props.tokenBalance}
					sellTokens={this.props.sellTokens}
					transferTokens={this.props.transferTokens}
				/>
			);
		}

		return (
			<div id="content" className="mt-3">
				<div className="d-flex justify-content-between mb-3">
					<button
						className="btn btn-light"
						onClick={(event) => {
							this.setState({ currentForm: "buy" });
						}}
					>
						Buy
					</button>
					<button
						className="btn btn-light"
						onClick={(event) => {
							this.setState({ currentForm: "trans" });
						}}
					>
						Transfer
					</button>
					<button
						className="btn btn-light"
						onClick={(event) => {
							this.setState({ currentForm: "sell" });
						}}
					>
						Sell
					</button>
				</div>

				<div className="card mb-4">
					<div className="card-body">{content}</div>
				</div>
			</div>
		);
	}
}

export default Main;
