import React from 'react';
export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const value = this.input.value;
    this.props.onSubmit(value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message
        </label>
        <input type="text" ref={(input) => this.input = input} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
