import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { PropTypes } from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </List>
  )
};

FriendList.prototype = {
  friends: PropTypes.arrayOf().isRequired,
};
