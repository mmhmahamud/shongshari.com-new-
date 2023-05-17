import React, { lazy, Suspense } from "react";
import AgentActivity from "../../components/pages/Agent/AgentActivity/AgentActivity";
import AgentProfileContainer from "../../components/pages/Agent/AgentProfile/AgentProfileContainer/AgentProfileContainer";
import AgentReviewsContainer from "../../components/pages/Agent/AgentReview/AgentReviewsContainer";
import AgentServiceForm from "../../components/pages/Agent/AgentServiceForm/AgentServiceForm";
import AgentServicesPage from "../../components/pages/Agent/AgentServicesPage/AgentServicesPage";
import FindAgentPage from "../../components/pages/Agent/FindAgent/FindAgentPage";
import { FindRecentAgent } from "../../components/pages/Agent/FindAgent/FindRecentAgent";
import { ServiceEdit } from "../../components/shared/Components/LawyerAgentKaziService/ServiceEdit/ServiceEdit";
import SingleServicesContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServices/SingleServicesContainer";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
import Agent from "../../Wrapper/Agent/Agent";
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

const AgentPrivateRoutes = [
  {
    id: 1,
    path: "/agentProfile",
    element: <Agent />,
    nestedRoutes: [
      { id: 1, path: "agentService", element: <AgentServicesPage /> },
      { id: 2, path: "serviceCreate", element: <AgentServiceForm /> },
      {
        id: 3,
        path: "agentSingleServiceDetails/:id",
        element: <SingleServicesContainer />,
      },
      {
        id: 4,
        path: "agentReview",
        element: <AgentReviewsContainer />,
      },
      {
        id: 5,
        path: "agentActivity",
        element: <AgentActivity />,
      },
      {
        id: 6,
        path: "profile",
        element: <AgentProfileContainer />,
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
    path: "agent",
    element: <FindAgentPage />,
    nestedRoutes: [
      {
        id: 1,
        path: "recent",
        element: <FindRecentAgent />,
      },
    ],
  },
];

export default AgentPrivateRoutes;
