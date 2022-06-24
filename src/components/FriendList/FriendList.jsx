import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { PropTypes } from 'prop-types';
  

  export const FriendList = ({ friends }) => 
  {
    
    console.log(friends)

    return (
      <List>
  {friends.map(({ id, isOnline, avatar, name }) => {

console.log(isOnline)

            return (
                <FriendListItem
                key = {id} 
                avatar = {avatar}
                name = {name}
                isOnline = {name}
                />);  
            })}
      </List>
    );
  };
  

  
  FriendList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
  };