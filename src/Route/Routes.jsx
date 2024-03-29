import Profile from "../myPages/myAuth/Profile";
import CreateSubscriptionPackage from "../myPages/SubscriptionPackages/CreateSubscriptionPackage";
import ViewSubscriptionPackages from "../myPages/SubscriptionPackages/ViewSubscriptionPackages";
import ViewTransactions from "../myPages/SubscriptionPackages/ViewTransactions";

import ViewDeals from "../myPages/DealsSection/ViewDeals";
import AllCustomers from "../myPages/myCutomers/AllCustomers";
import Banners from "../myPages/myBanners/ViewBanners";
import SendDeals from "../myPages/DealsSection/SendDeals";
import CreateDeal from "../myPages/DealsSection/CreateDeal";
import ViewFaqs from "../myPages/myFaqs/ViewFaqs";
import CreateFaqs from "../myPages/myFaqs/CreateFaqs";
import ViewBanners from "../myPages/myBanners/ViewBanners";
import CreateBanner from "../myPages/myBanners/CreateBanner";
import Dashboard from "../myPages/Dashboard";
import DealsQueries from "../myPages/DealsSection/comp/DealsQueries";
import Call from "../myPages/Call";
import WebsiteQueries from "../myPages/WebsiteQueries";
import CRM from "../myPages/CRM";
import ViewMore from "../myPages/DealsSection/comp/ViewMore";
import UpcomingCall from "../myPages/Call/UpcomingCall";
import Queries from "../myPages/DealsSection/comp/Queries";
import UserDetails from "../myPages/myCutomers/UserDetails";

export const routes = [
  {
    path: `/dashboard`,
    Component: <Dashboard />,
  },
  {
    path: `/crm`,
    Component: <CRM />,
  },
  {
    path: `/users/all-customers`,
    Component: <AllCustomers />,
  },
  { path: "/user-details/:id", Component: <UserDetails /> },
  // {
  //   path: `/user/:id`,
  //   Component: <SingleCustomer />,
  // },
  {
    path: `/account/profile`,
    Component: <Profile />,
  },

  {
    path: `/advertisement-banner`,
    Component: <Banners />,
  },
  {
    path: `/subscription-packages/create`,
    Component: <CreateSubscriptionPackage />,
  },

  {
    path: `/subscription-packages/view`,
    Component: <ViewSubscriptionPackages />,
  },

  {
    path: `/customers/transactions`,
    Component: <ViewTransactions />,
  },
  {
    path: `/members/transactions`,
    Component: <ViewTransactions />,
  },

  {
    path: `/deals/create`,
    Component: <CreateDeal />,
  },
  {
    path: `/deals/send-deals`,
    Component: <SendDeals />,
  },
  {
    path: `/inquiry`,
    Component: <DealsQueries />,
  },
  {
    path: `/customer/queries`,
    Component: <Queries />,
  },
  {
    path: `/deals/1`,
    Component: <ViewMore />,
  },
  {
    path: `/website/queries`,
    Component: <WebsiteQueries />,
  },

  {
    path: `/schedule-call`,
    Component: <Call />,
  },
  {
    path: `/upcoming-call`,
    Component: <UpcomingCall />,
  },
  {
    path: `/deals/view`,
    Component: <ViewDeals />,
  },
  {
    path: `/faqs/view`,
    Component: <ViewFaqs />,
  },
  {
    path: `/faqs/create`,
    Component: <CreateFaqs />,
  },
  {
    path: `/banners/view`,
    Component: <ViewBanners />,
  },

  {
    path: `/banners/create`,
    Component: <CreateBanner />,
  },
];
