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
      //       path: `/account/profile`,
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
      //       path: `/users/all-customers`,
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
            path: `/subscription-packages/create`,
            type: "link",
            title: "Create Package",
          },

          {
            path: `/subscription-packages/view`,
            type: "link",
            title: "View Packages",
          },

          {
            path: `/subscription-packages/transactions`,
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
                path: `/deals/send-deals`,
                type: "link",
                title: "Send Deals",
              },
            ],
          },

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
        title: "Banners Section",
        icon: "gift",
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
        title: "Faq's",
        icon: "box",
        type: "sub",
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
//             path: `/account/profile`,
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
//             path: `/users/all-customers`,
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
//             path: `/faq`,
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
//             path: `/advertisement-banner`,
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
// //             path: `/account/profile`,
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
// //             path: `/users/all-customers`,
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
// // //           path: `/users/all-customers`,
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
// // //           path: `/pages/sample-page`,
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
