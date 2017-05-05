import React from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';


export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    mqtt.publish('@near/demo', message);
  }

  render(){
    return (
      <div>
        <MessageList data={this.props.data} />
        <MessageForm onSubmit={this.addMessage.bind(this)} />
      </div>
    )

  }
}
