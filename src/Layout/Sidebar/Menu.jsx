export const MENUITEMS = [
  {
    menutitle: "Dashboard",
    menucontent: "Dashboards",
    Items: [
      {
        path: `/users/all-customers`,
        type: "link",
        title: "Users",
        icon: "user",
      },

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
        title: "Packages",
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
        title: "Transactions",
        icon: "icons",
        type: "link",
        path: `/subscription-packages/transactions`,
      },

      {
        title: "Banners",
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
    ],
  },
];
