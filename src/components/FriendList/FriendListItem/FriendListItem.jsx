import { Item, Avatar,  Name, StatusTrue, StatusFalse} from './FriendListItem.styled';
// import { PropTypes } from 'prop-types';
  

  export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <Item>

  {isOnline ? <StatusTrue></StatusTrue> : <StatusFalse></StatusFalse>}
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
      </Item>
    );
  };
  

  
  