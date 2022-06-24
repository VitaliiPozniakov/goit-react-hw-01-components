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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />

      <FriendList friends={friends} />
    </>
  );
};
