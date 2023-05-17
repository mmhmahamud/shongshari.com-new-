import React, { lazy, Suspense } from "react";
import { useOutletContext } from "react-router";
import { OvalLoader } from "../../shared/Cards/Loader/OvalLoader/OvalLoader";
const Accordian = lazy(() => import("./Accordion"));

const ProfileDetails = () => {
  const [data, isLoading] = useOutletContext();
  return (
    <Suspense fallback={<OvalLoader />}>
      <Accordian {...{ data, isLoading, edit: true }}></Accordian>
    </Suspense>
  );
};

export default ProfileDetails;
