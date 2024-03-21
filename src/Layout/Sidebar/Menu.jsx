export const MENUITEMS = [
  {
    menutitle: "Generals",
    menucontent: "Generals",
    Items: [
      {
        path: `/dashboard`,
        type: "link",
        title: "Dashboard",
        icon: "user",
      },
      {
        path: `/account/profile`,
        type: "link",
        title: "Profile",
        icon: "user",
      },
    ],
  },
  {
    menutitle: "Application",
    menucontent: "Application",
    Items: [
      {
        title: "Deals",
        icon: "task",
        type: "sub",
        badge: "badge badge-light-primary",
        children: [
          {
            path: `/deals/create`,
            type: "link",
            title: "Create Deal",
          },
          {
            path: `/deals/view`,
            type: "link",
            title: "View Deals",
          },
        ],
      },
  
      {
        path: `/inquiry`,
        type: "link",
        title: "Inquiry",
        icon: "user",
      },
      {
        path: `/users/all-customers`,
        type: "link",
        title: "Users",
        icon: "user",
      },
      {
        title: "Memberships",
        icon: "ecommerce",
        type: "sub",
        badge: "badge badge-light-primary",
        children: [
          {
            path: `/subscription-packages/create`,
            type: "link",
            title: "Create Package",
          },
          {
            path: `/subscription-packages/view`,
            type: "link",
            title: "View Packages",
          },
        ],
      },
      {
        title: "Promotions",
        icon: "sample-page",
        badge2: true,
        active: false,
        type: "sub",
        children: [
          {
            path: `/banners/create`,
            type: "link",
            title: "Create Banners",
          },
          {
            path: `/banners/view`,
            type: "link",
            title: "View Banners",
          },
        ],
      },
      {
        title: "Schedule-Call",
        icon: "icons",
        type: "link",
        path: `/schedule-call`,
      },
      {
        title: "Upcoming-Call",
        icon: "icons",
        type: "link",
        path: `/upcoming-call`,
      },
      {
        path: `/crm`,
        type: "link",
        title: "CRM",
        icon: "user",
      },
 
      {
        title: "Transactions",
        icon: "icons",

        type: "sub",
        children: [
          {
            title: "Customers",
            type: "link",
            path: `/customers/transactions`,
          },
          {
            title: "Members",
            type: "link",
            path: `/members/transactions`,
          },
        ],
      },
      {
        path: `/website/queries`,
        type: "link",
        title: "Website",
        icon: "user",
      },
      {
        icon: "faq",
        type: "sub",
        title: "FAQ",
        children: [
          {
            path: `/faqs/create`,
            type: "link",
            title: "Create Faq's",
          },
          {
            path: `/faqs/view`,
            type: "link",
            title: "View Faq's",
          },
        ],
      },
      {
        path: ``,
        type: "link",
        title: "Logout",
      },
    ],
  },
];
