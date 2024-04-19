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
import DealsInquiry from "../myPages/DealsSection/comp/DealsInquiry";
import Call from "../myPages/Call";
import WebsiteInquiry from "../myPages/WebsiteInquiry";
import CRM from "../myPages/CRM";
import ViewMore from "../myPages/DealsSection/comp/ViewMore";
import UpcomingCall from "../myPages/Call/UpcomingCall";
import Inquiry from "../myPages/DealsSection/comp/Inquiry";
import UserDetails from "../myPages/myCutomers/UserDetails";
import History from "../myPages/Call/History";
import UserCurrentSubscription from "../myPages/SubscriptionPackages/UserCurrentSubscription";
import UserCardDetails from "../myPages/SubscriptionPackages/comp/UserCardDetails";
import DealsTransactions from "../myPages/DealsSection/DealsTransactions";
import AddProperty from "../myPages/DealsSection/AddProperty";
import AddNewOccupant from "../myPages/DealsSection/comp/AddNewOccupant";
import UserDeals from "../myPages/myCutomers/UserDeals";
import PurchaseNew from "../myPages/DealsSection/comp/PurchaseNew";
import Attornies from "../myPages/Attornies/Attornies";
import AddAttornies from "../myPages/Attornies/AddAttornies";
import AddEviction from "../myPages/myCutomers/AddEviction";

export const AdminRoutes = [
  {
    path: `/dashboard`,
    Component: <Dashboard />,
  },
  {
    path: `/crm`,
    Component: <CRM />,
  },
  {
    path: `/slowflip-attorneys`,
    Component: <Attornies />,
  },
  {
    path: `/add-attorneys`,
    Component: <AddAttornies />,
  },
  {
    path: `/add-eviction`,
    Component: <AddEviction />,
  },
  {
    path: `/users/all-customers`,
    Component: <AllCustomers />,
  },
  { path: "/user-details/:id", Component: <UserDetails /> },

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
    Component: <DealsInquiry />,
  },
  {
    path: `/customer/Inquiry`,
    Component: <Inquiry />,
  },
  {
    path: `/deals/1`,
    Component: <ViewMore />,
  },
  {
    path: `/website/Inquiry`,
    Component: <WebsiteInquiry />,
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
    path: `/meet/history`,
    Component: <History />,
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
export const UserRoutes = [
  {
    path: `/slowflip-attorneys`,
    Component: <Attornies />,
  },
  {
    path: `/my-attorneys`,
    Component: <Attornies />,
  },
  {
    path: `/add-attorneys`,
    Component: <AddAttornies   />,
  },
  {
    path: `/add-eviction`,
    Component: <AddEviction />,
  },
  {
    path: `/dashboard`,
    Component: <Dashboard />,
  },
  {
    path: `/account/profile`,
    Component: <Profile />,
  },
  {
    path: `/inquiry`,
    Component: <DealsInquiry />,
  },
  {
    path: `/customer/Inquiry`,
    Component: <Inquiry />,
  },
  {
    path: `/crm`,
    Component: <UserDetails />,
  },
  {
    path: `/deals/1`,
    Component: <ViewMore />,
  },
  {
    path: `/customer/Inquiry`,
    Component: <Inquiry />,
  },

  {
    path: `/upcoming-call`,
    Component: <UpcomingCall />,
  },
  {
    path: `/update-subscription`,
    Component: <UserCurrentSubscription />,
  },
  {
    path: `/debit-card`,
    Component: <UserCardDetails />,
  },
  {
    path: `/deals/view`,
    Component: <ViewDeals />,
  },
  {
    path: `/deals/purchased`,
    Component: <UserDeals heading={"Deal Purchased"} />,
  },
  {
    path: `/deals/inquiry`,
    Component: <UserDeals heading={"Deals Inquiry"} />,
  },
  {
    path: `/deals/customize`,
    Component: <UserDeals heading={"Featured Deals"} />,
  },
  {
    path: `/new-property`,
    Component: <AddProperty />,
  },
  {
    path: `/new-Occupant`,
    Component: <AddNewOccupant />,
  },
  {
    path: `/purchase-new/:id`,
    Component: <PurchaseNew />,
  },
  {
    path: `/deals/transactions`,
    Component: <DealsTransactions />,
  },
  {
    path: `/subscription/transactions`,
    Component: <ViewTransactions showBreadcrumbs={false} />,
  },
];
