export const MENUITEMS = [
  {
    menutitle: "Pages",
    menucontent: "Dashboards",
    Items: [
      // {
      //   title: "My-Account",
      //   icon: "user",
      //   type: "sub",
      //   children: [
      //     {
      //       path: `${process.env.PUBLIC_URL}/account/profile`,
      //       type: "link",
      //       title: "Profile",
      //     },
      //   ],
      // },
      // {
      //   title: "All-Users",
      //   icon: "user",
      //   type: "sub",
      //   children: [
      //     {
      //       path: `${process.env.PUBLIC_URL}/users/all-customers`,
      //       type: "link",
      //       title: "Users",
      //     },
      //   ],
      // },
      {
        path: `/users/all-customers`,
        type: "link",
        title: "Users",
      },{
        title: "Subscription Packages",
        icon: "box",
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/subscription-packages/create`,
            type: "link",
            title: "Create Package",
          },

          {
            path: `${process.env.PUBLIC_URL}/subscription-packages/view`,
            type: "link",
            title: "View Packages",
          },

          {
            path: `${process.env.PUBLIC_URL}/subscription-packages/transactions`,
            type: "link",
            title: "View Transactions",
          },
        ],
      },
      {
        title: "Deals Section",
        icon: "gift",
        type: "sub",
        children: [
          {
            title: "Send Deal",
            icon: "send",
            type: "sub",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/deals/send-deals`,
                type: "link",
                title: "Send Deals",
              },
            ],
          },

          {
            path: `${process.env.PUBLIC_URL}/deals/create`,
            type: "link",
            title: "Create Deal",
          },
          {
            path: `${process.env.PUBLIC_URL}/deals/view`,
            type: "link",
            title: "View Deals",
          },
        ],
      },
      {
        title: "Banners Section",
        icon: "gift",
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/banners/create`,
            type: "link",
            title: "Create Banners",
          },

          {
            path: `${process.env.PUBLIC_URL}/banners/view`,
            type: "link",
            title: "View Banners",
          },
        ],
      },
      {
        title: "Faq's",
        icon: "box",
        type: "sub",
        children: [
          {
            path: `${process.env.PUBLIC_URL}/faqs/create`,
            type: "link",
            title: "Create Faq's",
          },

          {
            path: `${process.env.PUBLIC_URL}/faqs/view`,
            type: "link",
            title: "View Faq's",
          },

    
        ],
      },
  
    ],
  },
];

// export const MENUITEMS = [
//   {
//     menutitle: "Pages",
//     menucontent: "Dashboards",
//     Items: [
//       {
//         title: "My-Account",
//         icon: "user",
//         type: "sub",
//         children: [
//           {
//             path: `${process.env.PUBLIC_URL}/account/profile`,
//             type: "link",
//             title: "Profile",
//           },
//         ],
//       },
//       {
//         title: "All-Users",
//         icon: "user",
//         type: "sub",
//         children: [
//           {
//             path: `${process.env.PUBLIC_URL}/users/all-customers`,
//             type: "link",
//             title: "Users",
//           },
//         ],
//       },
//       {
//         title: "FAQ",
//         icon: "question",
//         type: "sub",
//         children: [
//           {
//             path: `${process.env.PUBLIC_URL}/faq`,
//             type: "link",
//             title: "FAQ",
//           },
//         ],
//       },
//       {
//         title: "Advertisement Banner",
//         icon: "banner",
//         type: "sub",
//         children: [
//           {
//             path: `${process.env.PUBLIC_URL}/advertisement-banner`,
//             type: "link",
//             title: "Advertisement Banner",
//           },
//         ],
//       },
//     ],
//   },
// ];

// // export const MENUITEMS = [
// //   {
// //     menutitle: "Pages",
// //     menucontent: "Dashboards",
// //     Items: [
// //       {
// //         title: "My-Account",
// //         icon: "user",
// //         type: "sub",
// //         children: [

// //           {
// //             path: `${process.env.PUBLIC_URL}/account/profile`,
// //             type: "link",
// //             title: "Profile",
// //           },
// //         ],
// //       },
// //       {
// //         title: "All-Users",
// //         icon: "user",
// //         type: "sub",
// //         children: [
// //           {
// //             path: `${process.env.PUBLIC_URL}/users/all-customers`,
// //             type: "link",
// //             title: "Users ",
// //           },

// //         ],
// //       },
// //     ],
// //   },
// // ];
// // // {
// // //       title: "Users",
// // //       icon: "sample-page",
// // //       type: "sub",
// // //       children: [
// // //         {
// // //           active: false,
// // //           path: `${process.env.PUBLIC_URL}/users/all-customers`,
// // //           title: "All-Customers",
// // //           type: "link",
// // //         },
// // //       ],
// // //     },
// // // {
// // //   menutitle: 'General',
// // //   menucontent: 'Dashboards,Widgets',
// // //   Items: [
// // //     {
// // //       title: 'Pages',
// // //       icon: 'sample-page',
// // //       type: 'sub',
// // //       children: [
// // //         {
// // //           active: false,
// // //           path: `${process.env.PUBLIC_URL}/pages/sample-page`,
// // //           title: 'Sample-Page',
// // //           type: 'link',
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       title: 'Support Ticket',
// // //       icon: 'support-tickets',
// // //       type: 'sub',
// // //       children: [
// // //         {
// // //           active: false,
// // //           path: `http://support.pixelstrap.com/help-center`,
// // //           title: 'Rise Ticket',
// // //           type: 'link',
// // //         },
// // //       ],
// // //     },
// // //   ],
// // // },
