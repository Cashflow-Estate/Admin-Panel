import Profile from "../myPages/myAuth/Profile";
import CreateSubscriptionPackage from "../myPages/SubscriptionPackages/CreateSubscriptionPackage";
import ViewSubscriptionPackages from "../myPages/SubscriptionPackages/ViewSubscriptionPackages";
import ViewTransactions from "../myPages/SubscriptionPackages/ViewTransactions";

import ViewDeals from "../myPages/DealsSection/ViewDeals";
import AllCustomers from "../myPages/myCutomers/AllCustomers";
import SIngleCustomer from "../myPages/myCutomers/SingleCustomer";
import Banners from "../myPages/myBanners/ViewBanners";
import SendDeals from "../myPages/DealsSection/SendDeals";
import SingleCustomer from "../myPages/myCutomers/SingleCustomer";
import CreateDeal from "../myPages/DealsSection/CreateDeal";
import ViewFaqs from "../myPages/myFaqs/ViewFaqs";
import CreateFaqs from "../myPages/myFaqs/CreateFaqs";
import ViewBanners from "../myPages/myBanners/ViewBanners";
import CreateBanner from "../myPages/myBanners/CreateBanner";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/users/all-customers`,
    Component: <AllCustomers />,
  },
  {
    path: `/user/:id`,
    Component: <SingleCustomer />,
  },
  {
    path: `${process.env.PUBLIC_URL}/account/profile`,
    Component: <Profile />
  },

  {
    path: `${process.env.PUBLIC_URL}/advertisement-banner`,
    Component: <Banners />
  },
  {
    path: `${process.env.PUBLIC_URL}/subscription-packages/create`,
    Component: <CreateSubscriptionPackage />
  },

  {
    path: `${process.env.PUBLIC_URL}/subscription-packages/view`,
    Component: <ViewSubscriptionPackages />
  },

  {
    path: `${process.env.PUBLIC_URL}/subscription-packages/transactions`,
    Component: <ViewTransactions />
  },

  {
    path: `${process.env.PUBLIC_URL}/deals/create`,
    Component: <CreateDeal />
  },
  {
    path: `${process.env.PUBLIC_URL}/deals/send-deals`,
    Component: <SendDeals />
  },

  // {
  //   path: `${process.env.PUBLIC_URL}/deals/edit`,
  //   Component: <EditDeal />
  // },
  {
    path: `${process.env.PUBLIC_URL}/deals/view`,
    Component: <ViewDeals />
  },
  {
    path: `${process.env.PUBLIC_URL}/faqs/view`,
    Component: <ViewFaqs />
  },
  {
    path: `${process.env.PUBLIC_URL}/faqs/create`,
    Component: <CreateFaqs/>
  },
  {
    path: `${process.env.PUBLIC_URL}/banners/view`,
    Component: <ViewBanners/>

  },

  {
    path: `${process.env.PUBLIC_URL}/banners/create`,
    Component: <CreateBanner/>

  },
];
