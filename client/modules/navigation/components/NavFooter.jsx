// This is for the chat with us box. Could go somehwere else, as it will literally be a link
// to onboardy help version. Not sure if it deserves its own component, but
// up to you.
import React from 'react';

class NavFooter extends React.Component {
  render() {
    return (
        <div class="nav_footer">
          <span id="nav_footer_ques_mark">?</span>
          <span id="nav_footer_chat">Chat With Us</span>
        </div>
    );
  }
}

export default NavFooter;
