import Relay from 'react-relay';
import Friend from './Friend.js';
import React from 'react';

class FriendList extends React.Component {
  render() {
    let user = this.props.user;
    let friends = user.friends.map((friend) => {
      return <Friend friend={friend} key={friend.__dataID__} />;
    });

    return (<div>{friends}</div>);
  }
}

export default Relay.createContainer(FriendList, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        friends {
          ${Friend.getFragment('friend')}
        }
      }`
  }
});
