import AgenceComponent from "../components/agence/FirstSection";
import Experties from "../components/agence/Experties";
import SlidingImage from "../components/agence/SlidingImage";
import React, { useMemo, } from "react";
import Team from "../components/agence/Team";
import TeamMemberDetails from "../components/agence/TeamMemberDetails";
import BottomContact from "../components/contact/bottomContact";



const Agence = () => {
  const randomTeamMembers = useMemo(() => {
    const shuffled = [...Team].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, []);




  return (
    <>
      <AgenceComponent />
      <Experties />
      <SlidingImage FirstName={randomTeamMembers[0].FirstName} LastName={randomTeamMembers[0].LastName} Position={randomTeamMembers[0].Position} Image={randomTeamMembers[0].Image} />
      <SlidingImage FirstName={randomTeamMembers[1].FirstName} LastName={randomTeamMembers[1].LastName} Position={randomTeamMembers[1].Position} Image={randomTeamMembers[1].Image}/>
      <TeamMemberDetails />
      <BottomContact />
    </>
  );
};

export default Agence;
