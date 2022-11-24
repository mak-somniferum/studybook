import React from "react";

class ConfirmButtonClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isConfirmed: false,
    };
  }

  handleConfirm() {
    this.setState({
      isConfirmed: !this.isConfirmed,
    });
  }

  render() {
    return (
      <button onClick={() => this.handleConfirm()} disabled={this.state.isConfirmed}>
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}

export default ConfirmButtonClass;