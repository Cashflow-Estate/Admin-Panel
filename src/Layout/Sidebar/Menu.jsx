export const MENUITEMS_FOR_Admin = [
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
        title: "Slow Flip Deals",
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
            title: "Slow Flip Deals",
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
        title: "Meet",
        icon: "icons",
        type: "sub",
        children: [
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
            title: "History",
            icon: "icons",
            type: "link",
            path: `/meet/history`,
          },
        ],
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
        title: "Attorneys",
        icon: "icons",

        type: "sub",
        children: [
          {
            title: "Add-Attorneys",
            type: "link",
            path: `/add-attorneys`,
          },
          {
            title: "Slowflip Attorneys",
            type: "link",
            path: `/slowflip-attorneys`,
          },
       
         
        ],
      },
      {
        path: `/website/Inquiry`,
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
    
    ],
  },
];
export const MENUITEMS_FOR_User = [
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
        title: "Slow Flip Deals",
        icon: "task",
        type: "sub",
        badge: "badge badge-light-primary",
        children: [
          {
            path: `/deals/view`,
            icon: "task",
    
            type: "link",
            title: "Slow Flip Deals",
          },
     
          {
            path: `/deals/purchased`,
            type: "link",
            title: "Purchased Deals",
          },
          {
            path: `/deals/inquiry`,
            type: "link",
            title: "Deals Inquiry",
          },
          {
            path: `/deals/customize`,
            type: "link",
            title: "Customize Deals",
          },
        ],
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
        title: "Transactions",
        icon: "icons",

        type: "sub",
        children: [
          {
            title: "Deals",
            type: "link",
            path: `/deals/transactions`,
          },
          {
            title: "Subscription",
            type: "link",
            path: `/subscription/transactions`,
          },
        ],
      },
      {
        path: `/update-subscription`,
        type: "link",
        title: "Update-Subscription",
        icon: "ecommerce",

      },
      {
        path: `/debit-card`,
        type: "link",
        title: "Debit-Card",
        icon: "ecommerce",

      },
      {
        path: `/inquiry`,
        type: "link",
        title: "Inquiry",
        icon: "user",
      },
  
      {
        path: `/crm`,
        type: "link",
        title: "CRM",
        icon: "user",
      },
      {
        title: "Attorneys",
        icon: "icons",

        type: "sub",
        children: [
          {
            title: "Add-Attorneys",
            type: "link",
            path: `/add-attorneys`,
          },
          {
            title: "Slowflip Attorneys",
            type: "link",
            path: `/slowflip-attorneys`,
          },
          {
            title: "My Attorneys",
            type: "link",
            path: `/my-attorneys`,
          },
       
        ],
      },
      {
        title: "Upcoming-Call",
        icon: "icons",
        type: "link",
        path: `/upcoming-call`,
      },
    
    ],
  },

];

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
            title: "Slow Flip Deals",
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
        title: "Meet",
        icon: "icons",
        type: "sub",
        children: [
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
            title: "History",
            icon: "icons",
            type: "link",
            path: `/meet/history`,
          },
        ],
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
        path: `/website/Inquiry`,
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
    
    ],
  },
];
