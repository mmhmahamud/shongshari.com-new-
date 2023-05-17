import React, { lazy, Suspense } from "react";
import { OvalLoader } from "../../shared/Cards/Loader/OvalLoader/OvalLoader";
const Accordian = lazy(() =>
  import("../../SingleProfilesUser/profileSection/Accordion")
);

export const DynamicProfileInfo = ({ data, isLoading }) => {
  return (
    <div className="mb-[69px] max-w-[523px] mx-auto">
      <Suspense fallback={<OvalLoader />}>
        <Accordian {...{ data, isLoading }} />
      </Suspense>
    </div>
  );
};
