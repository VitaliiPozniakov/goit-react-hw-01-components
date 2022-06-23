import { Avatar, Description, Name, Profile, Quantity, Tag, Wraper } from "./Profile.styled"
import {PropTypes} from 'prop-types'


export const Profile = ({user}) => {
    return <Wraper>
    <Description>
      <Avatar
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
      />
      <Name>Petra Marica</Name>
      <Tag>@pmarica</Tag>
      <Location>Salvador, Brasil</Location>
    </Description>
  
    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>1000</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>2000</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>3000</Quantity>
      </li>
    </Stats>
  </Wraper>
}


Wraper.PropTypes = {
    user: PropTypes.exact ({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
         avatar: PropTypes.string.isRequired,
         stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
         })
    })
}





// {username, tag, location, avatar, stats}