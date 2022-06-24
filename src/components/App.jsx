import { Container } from 'Container.styled';
import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import statsData from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

// console.log(upcomingData)

export const App = () => {
  return (
    <>
  <Container> Task 1
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </Container>

      <Container> Task 2
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      </Container>

      <Container> Task 3
      <FriendList friends={friends} />
      </Container>
    </>
  );
};
