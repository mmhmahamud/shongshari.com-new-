// configuration
import React from "react";

// components
import { BottomNav } from "./BottomNav";
import { MobileBanner } from "./MobileBanner";
import { Services } from "./Services";
import { TopMenu } from "./TopMenu";
import TopProfileMov from "./topprofilemov/TopProfileMov";

const MobileHome = () => {
  return (
    <div className="mov-res">
      <TopMenu></TopMenu>
      <MobileBanner></MobileBanner>
      <Services></Services>
      <TopProfileMov />
      <div className="h-12"></div>
      <BottomNav />
    </div>
  );
};

export default MobileHome;
