import React, { lazy, Suspense } from "react";
import { DynamicSingleServiceContainer } from "../../components/pages/DynamicProfilePage/DynamicSingleServiceContainer/DynamicSingleServiceContainer";
import { FilterResults } from "../../components/pages/FindPartner/FilterResults/FilterResults";
import { FindAPartnerSuggested } from "../../components/pages/FindPartner/FindAPartnerSuggested";
import FindPartners from "../../components/pages/FindPartner/FindPartners";
import { NearestPartners } from "../../components/pages/FindPartner/NearestPartners/NearestPartners";
import { TopPartners } from "../../components/pages/FindPartner/TopPartner/TopPartners";
import { Gallery } from "../../components/shared/Components/Gallery";
import SingleServicesStatusContainer from "../../components/shared/Components/LawyerAgentKaziService/SingleServicesStatus/SingleServicesStatusContainer";
import { DesktopNotification } from "../../components/shared/Notification/DesktopNotification";
import EducationalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/EducationalCertificateWeb";
import PersonalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/PersonalCertificateWeb";
// import ProfessionalCertificateWeb from "../../components/SingleProfilesUser/CertificateSection/ProfessionalCertificateWeb";
import { Container } from "../../Wrapper/Stepper/Container";
import { OvalLoader } from "../../components/shared/Cards/Loader/OvalLoader/OvalLoader";
import { BrandLoader } from "../../components/shared/Cards/Loader/BrandLoader/BrandLoader";
import ProfileDetails from "../../components/SingleProfilesUser/profileSection/ProfileDetails";
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
const EditFamilyInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditFamilyInfo"
  )
);
const EditSiblingsInfo = lazy(() =>
  import(
    "../../components/SingleProfilesUser/profileSection/EditprofileSection/EditSiblingsInfo"
  )
);
const SingleProfiles = lazy(() =>
  import("../../components/SingleProfilesUser/SingleProfiles")
);

const matrimonyPrivateRoutes = [
  {
    id: 1,
    path: "/userprofile",
    element: (
      <Suspense fallback={<BrandLoader />}>
        <SingleProfiles />
      </Suspense>
    ),
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
          {
            id: 6,
            path: "familyInfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditFamilyInfo />
              </Suspense>
            ),
          },
          {
            id: 7,
            path: "siblingsInfo/:id",
            element: (
              <Suspense fallback={<OvalLoader />}>
                <EditSiblingsInfo />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    path: "/stepper",
    element: <Container />,
  },
  {
    id: 3,
    path: "/personalCertificate",
    element: <PersonalCertificateWeb />,
  },
  {
    id: 4,
    path: "/professionalCertificate",
    element: <EducationalCertificateWeb title="prof" />,
    // element: <ProfessionalCertificateWeb />,
  },
  {
    id: 5,
    path: "/educationalCertificate",
    element: <EducationalCertificateWeb title="edu" />,
  },
  {
    id: 12,
    path: "/marriageCertificate",
    element: <EducationalCertificateWeb title="marriage" />,
    // element: <MarriageCertificateWev />,
  },
  {
    id: 6,
    path: "/gallery/:id",
    element: <Gallery />,
  },
  {
    id: 7,
    path: "/serviceStatus/running/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 7,
    path: "/serviceStatus/cancelled/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 8,
    path: "/serviceStatus/completed/:id",
    element: <SingleServicesStatusContainer />,
  },
  {
    id: 9,
    path: "/desktopNotification/:id",
    element: <DesktopNotification />,
  },
  {
    id: 10,
    path: "/service/:id",
    element: <DynamicSingleServiceContainer />,
  },
  {
    id: 11,
    path: "/find-partner",
    element: <FindPartners />,
    nestedRoutes: [
      {
        id: 1,
        path: "/find-partner/suggested",
        element: <FindAPartnerSuggested />,
      },
      {
        id: 2,
        path: "top",
        element: <TopPartners />,
      },
      {
        id: 3,
        path: "nearest",
        element: <NearestPartners />,
      },
      {
        id: 4,
        path: "filter",
        element: <FilterResults />,
      },
    ],
  },
];

export default matrimonyPrivateRoutes;
