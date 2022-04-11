import React, { Component } from "react";
import tokenLogo from "./token-logo.png";
import ethLogo from "./eth-logo.png";

class TransferForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address_re: "0",
			token_amount: 0,
		};
	}

	render() {
		return (
			<form
				className="mb-3"
				onSubmit={(event) => {
					event.preventDefault();
					let etherAmount;
					etherAmount = this.state.token_amount.toString();
					etherAmount = window.web3.utils.toWei(etherAmount, "Ether");
					// console.log(etherAmount);
					// console.log(this.state.token_amount, this.state.address_re);
					// console.log("address", this.state.address_re);
					this.props.transferTokens(etherAmount, this.state.address_re);
				}}
			>
				<div>
					<label className="float-left">
						<b>Enter Reciever Address</b>
					</label>
					<span className="float-right text-muted">
						{/* Balance:{" "}
						{window.web3.utils.fromWei(this.props.tokenBalance, "Ether")} */}
					</span>
				</div>
				<div className="input-group mb-4">
					<input
						type="text"
						onChange={(event) => {
							// console.log(event.target.value);

							// const _address = this.input.value.toString();
							this.setState({
								address_re: event.target.value,
							});
						}}
						ref={(input) => {
							this.input = input;
						}}
						className="form-control form-control-lg"
						placeholder="0"
						required
					/>
					{/* <div className="input-group-append">
						<div className="input-group-text">
							<img src={tokenLogo} height="32" alt="" />
							&nbsp; Cryp
						</div>
					</div> */}
				</div>

				<div>
					<label className="float-left">
						<b>Enter Token Amount</b>
					</label>
					<span className="float-right text-muted">
						Balance:{" "}
						{window.web3.utils.fromWei(this.props.tokenBalance, "Ether")}
					</span>
				</div>
				<div className="input-group mb-4">
					<input
						type="text"
						onChange={(event) => {
							const tokenAmount = this.input.value.toString();
							this.setState({
								token_amount: tokenAmount,
							});
						}}
						ref={(input) => {
							this.input = input;
						}}
						className="form-control form-control-lg"
						placeholder="0"
						required
					/>
					<div className="input-group-append">
						<div className="input-group-text">
							<img src={tokenLogo} height="32" alt="" />
							&nbsp; Cryp
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary btn-block btn-lg">
					SEND
				</button>
			</form>
		);
	}
}

export default TransferForm;
