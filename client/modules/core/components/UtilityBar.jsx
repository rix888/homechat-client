import React from 'react';

class UtilityBar extends React.Component {
  render() {
    return (
      <div id="utility-bar">
        <button>
          New Conversation
        </button>
        <input type="text" />
        <a href="/">
          Send to CRM
        </a>
      </div>
    );
  }
}

export default UtilityBar;
