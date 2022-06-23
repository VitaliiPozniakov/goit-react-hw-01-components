import { Profile } from "./Profile/Profile";
import upcomingData from "../user.json";

// console.log(upcomingData)

export const App = () => {
  return (
    <>
    <Profile user={upcomingData}/>
    </>
  );
};
