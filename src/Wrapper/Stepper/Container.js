// configuration
import React, { useState, lazy, Suspense } from "react";

// components
import NavBar from "../../components/pages/Shared/NavBar";
import { BrandLoader } from "../../components/shared/Cards/Loader/BrandLoader/BrandLoader";
// import PersonalDetails from "./PersonalDetails";
// import EducationalDetails from "./EducationalDetails";
// import ProfessionalDetails from "./ProfessionalDetails";
// import PhysicalDetails from "./PhysicalDetails";
// import OtherDetails from "./OtherDetails";
// import FamilyDetails from "./FamilyDetails";
// import SiblingDetails from "./SiblingDetails";
const PersonalDetails = lazy(() => import("./PersonalDetails"));
const EducationalDetails = lazy(() => import("./EducationalDetails"));
const ProfessionalDetails = lazy(() => import("./ProfessionalDetails"));
const PhysicalDetails = lazy(() => import("./PhysicalDetails"));
const OtherDetails = lazy(() => import("./OtherDetails"));
const FamilyDetails = lazy(() => import("./FamilyDetails"));
const SiblingDetails = lazy(() => import("./SiblingDetails"));

export const Container = ({ responsive }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="min-h-screen">
      {!responsive && <NavBar />}
      <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20 min-h-[calc(100vh-90px)]">
        <div className="bg-white shadow-2xl rounded-2xl md:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
          <div className="w-full p-5 my-auto">
            <Suspense fallback={<BrandLoader />}>
              <div className="my-[20px]">
                {page === 1 && <PersonalDetails {...{ setPage }} />}
                {page === 2 && <EducationalDetails {...{ setPage }} />}
                {page === 3 && <ProfessionalDetails {...{ setPage }} />}
                {page === 4 && <PhysicalDetails {...{ setPage }} />}
                {page === 5 && <FamilyDetails {...{ setPage }} />}
                {page === 6 && <SiblingDetails {...{ setPage }} />}
                {page === 7 && <OtherDetails {...{ setPage }} />}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};
