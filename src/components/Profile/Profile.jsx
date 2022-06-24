import { Wraper, Description,  Avatar, Name, Tag, Location, Stats, Quantity, Label, ItemOfStats} from './Profile.styled'
import {PropTypes} from 'prop-types'


export const Profile = ({username, tag, location, avatar, stats }) => {

    // console.log()

// const {username, tag, location, avatar, stats } = user

// console.log(avatar)

    return (
        <Wraper>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  
    <Stats>
      <ItemOfStats>
        <Label>Followers </Label>
        <Quantity>{stats.followers}</Quantity>
      </ItemOfStats>
      <ItemOfStats>
        <Label>Views </Label>
        <Quantity>{stats.views}</Quantity>
      </ItemOfStats>
      <ItemOfStats>
        <Label>Likes </Label>
        <Quantity>{stats.likes}</Quantity>
      </ItemOfStats>
    </Stats>
  </Wraper>
    )
}

Wraper.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };






// {username, tag, location, avatar, stats}