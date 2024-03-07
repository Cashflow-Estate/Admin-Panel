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
    path: `/users/all-customers`,
    Component: <AllCustomers />,
  },
  {
    path: `/user/:id`,
    Component: <SingleCustomer />,
  },
  {
    path: `/account/profile`,
    Component: <Profile />
  },

  {
    path: `/advertisement-banner`,
    Component: <Banners />
  },
  {
    path: `/subscription-packages/create`,
    Component: <CreateSubscriptionPackage />
  },

  {
    path: `/subscription-packages/view`,
    Component: <ViewSubscriptionPackages />
  },

  {
    path: `/subscription-packages/transactions`,
    Component: <ViewTransactions />
  },

  {
    path: `/deals/create`,
    Component: <CreateDeal />
  },
  {
    path: `/deals/send-deals`,
    Component: <SendDeals />
  },

  // {
  //   path: `/deals/edit`,
  //   Component: <EditDeal />
  // },
  {
    path: `/deals/view`,
    Component: <ViewDeals />
  },
  {
    path: `/faqs/view`,
    Component: <ViewFaqs />
  },
  {
    path: `/faqs/create`,
    Component: <CreateFaqs/>
  },
  {
    path: `/banners/view`,
    Component: <ViewBanners/>

  },

  {
    path: `/banners/create`,
    Component: <CreateBanner/>

  },
];
