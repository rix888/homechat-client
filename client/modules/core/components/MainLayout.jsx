import React from 'react';

import UtilityBar from './UtilityBar.jsx';
import ChatLayout from '../../chat/components/ChatLayout.jsx';
import ConversationsLayout from '../../conversations/components/ConversationsList.jsx';
import NavigationLayout from '../../navigation/components/NavLayout.jsx';
import ProfileLayout from '../../profile/components/ProfileLayout.jsx';

class MainLayout extends React.Component {
  render() {
    return (
      <main id="chatapp" role="main">
        <UtilityBar />
        <div className="chatapp-column">
          <NavigationLayout />
        </div>
        <div className="chatapp-column">
          <ConversationsLayout />
        </div>
        <div className="chatapp-column">
          <ChatLayout />
        </div>
        <div className="chatapp-column">
          <ProfileLayout />
        </div>
      </main>
    );
  }
}

export default MainLayout;
