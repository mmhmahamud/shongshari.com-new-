import React, { lazy, Suspense } from "react";
import FindKaziPage from "../../components/pages/Kazi/FindKazi/FindKaziPage";
import { FindRecentKazi } from "../../components/pages/Kazi/FindKazi/FindRecentKazi";
import KaziActivity from "../../components/pages/Kazi/KaziActivity/KaziActivity";
import KaziReviewsContainer from "../../components/pages/Kazi/KaziReview/KaziReviewsContainer";
import KaziAddServiceForm from "../../components/pages/Kazi/KaziServices/AddServiceForm/KaziAddServiceForm";
import KaziServicesPage from "../../components/pages/Kazi/KaziServices/KaziServicesPages";
import { KaziProfile } from "../../components/pages/Kazi/Profile/KaziProfile";
import { KaziProfileContainer } from "../../components/pages/Kazi/Profile/profileContainer/KaziProfileContainer";
import { ServiceEdit } from "../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import SingleServicesContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import { OvalLoader } from "../../components/shared/Cards/Loader/OvalLoader/OvalLoader";
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

const kaziPrivateRoutes = [
  {
    id: 1,
    path: "/kaziProfile",
    element: <KaziProfile />,
    nestedRoutes: [
      {
        id: 1,
        path: "kaziServices",
        element: <KaziServicesPage />,
      },
      {
        id: 2,
        path: "review",
        element: <KaziReviewsContainer />,
      },
      {
        id: 3,
        path: "kaziAddServiceForm",
        element: <KaziAddServiceForm />,
      },
      {
        id: 4,
        path: "kaziSingleServiceDetails/:id",
        element: <SingleServicesContainer />,
      },
      {
        id: 5,
        path: "activity",
        element: <KaziActivity />,
      },
      {
        id: 6,
        path: "profile",
        element: <KaziProfileContainer />,
        nestedRoutes: [
          {
            id: 1,
            path: "",
            element: <ProfileDetails />,
          },
          {
            id: 2,
            path: "edit",
            nestedRoutes: [
              {
                id: 1,
                path: "personalinfo/:id",
                element: (
                  <Suspense fallback={<OvalLoader />}>
                    <EditPersonalInfo />
                  </Suspense>
                ),
              },
              {
                id: 2,
                path: "profesionalinfo/:id",
                element: (
                  <Suspense fallback={<OvalLoader />}>
                    <EditProfesionalInfo />
                  </Suspense>
                ),
              },
              {
                id: 3,
                path: "educationalinfo/:id",
                element: (
                  <Suspense fallback={<OvalLoader />}>
                    <EditEducationalInfo />
                  </Suspense>
                ),
              },
              {
                id: 4,
                path: "physicalinfo/:id",
                element: (
                  <Suspense fallback={<OvalLoader />}>
                    <EditPhysicalInfo />
                  </Suspense>
                ),
              },
              {
                id: 5,
                path: "othersinfo/:id",
                element: (
                  <Suspense fallback={<OvalLoader />}>
                    <EditOthersInfo />
                  </Suspense>
                ),
              },
            ],
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
    path: "/kazi",
    element: <FindKaziPage />,
    nestedRoutes: [
      {
        id: 1,
        path: "recent",
        element: <FindRecentKazi role="kazi" />,
      },
    ],
  },
];

export default kaziPrivateRoutes;
