import React from 'react';

class Example extends React.Component {
  render() {
    const { exampleText } = this.props;

    return (
      <div>
        <p> This is text in an Example React component! </p>
        <p> {exampleText} </p>
        <p> This text will be rendered by the remote data store (GraphQL) </p>
      </div>
    );
  }
}

export default Example;
