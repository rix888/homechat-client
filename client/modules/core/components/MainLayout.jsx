import React from 'react';

class MainLayout extends React.Component {
  render() {
    return (
      <main id="authentication-form" role="main">
        <div className="form-wrapper">
          {this.props.content()}
        </div>
      </main>
    );
  }
}

export default MainLayout;
