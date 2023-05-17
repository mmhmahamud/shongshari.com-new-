import React, { lazy, Suspense } from "react";
import FindAlawyerPage from "../../components/pages/FindAlawyer/FindAlawyerPage";
import { FindRecentLawyer } from "../../components/pages/FindAlawyer/FindRecentLawyer";
import { ServiceEdit } from "../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import SingleServicesContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import Lawyer from "../../Wrapper/Lawyer/Lawyer";
import { OvalLoader } from "../../components/shared/Cards/Loader/OvalLoader/OvalLoader";
import LawyerActivity from "../../components/Lawyer/LawyerActivity/LawyerActivity";
import LawyerProfileContainer from "../../components/Lawyer/LawyerProfileContainer/LawyerProfileContainer";
import LawyerReviewsContainer from "../../components/Lawyer/LawyerReview/LawyerReviewsContainer";
import LawyerServiceForm from "../../components/Lawyer/LawyerServiceForm/LawyerServiceForm";
import LawyerServicesPage from "../../components/Lawyer/LawyerServicesPage/LawyerServicesPage";
const EditOthersInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditOthersInfo"
  )
);
const EditPersonalInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPersonalInfo"
  )
);
const EditPhysicalInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditPhysicalInfo"
  )
);
const EditProfesionalInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditProfesionalInfo"
  )
);
const EditEducationalInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditEducationalInfo"
  )
);

const lawyerPrivateRoutes = [
  {
    id: 1,
    path: "/lawyerProfile",
    element: <Lawyer />,
    nestedRoutes: [
      { id: 1, path: "lawyerService", element: <LawyerServicesPage /> },
      { id: 2, path: "lawyerAddForm", element: <LawyerServiceForm /> },
      {
        id: 3,
        path: "lawyerSingleServiceDetails/:id",
        element: <SingleServicesContainer />,
      },
      {
        id: 4,
        path: "lawyerReview",
        element: <LawyerReviewsContainer />,
      },
      {
        id: 5,
        path: "lawyerActivity",
        element: <LawyerActivity />,
      },
      {
        id: 6,
        path: "profile",
        element: <LawyerProfileContainer />,
        nestedRoutes: [
          {
            id: 1,
            path: "",
            element: <ProfileDetails />,
          },
          {
            id: 2,
            path: "edit/personalinfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditPersonalInfo />
              </Suspense>
            ),
          },
          {
            id: 3,
            path: "edit/profesionalinfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditProfesionalInfo />
              </Suspense>
            ),
          },
          {
            id: 4,
            path: "edit/educationalinfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditEducationalInfo />
              </Suspense>
            ),
          },
          {
            id: 5,
            path: "edit/physicalinfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditPhysicalInfo />
              </Suspense>
            ),
          },
          {
            id: 6,
            path: "edit/othersinfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditOthersInfo />
              </Suspense>
            ),
          },
        ],
      },
      {
        id: 7,
        path: "serviceEdit/:id",
        element: <ServiceEdit />,
      },
    ],
  },
  {
    id: 2,
    path: "/findLawyers",
    element: <FindAlawyerPage />,
    nestedRoutes: [
      {
        id: 1,
        path: "recent",
        element: <FindRecentLawyer />,
      },
    ],
  },
];

export default lawyerPrivateRoutes;
