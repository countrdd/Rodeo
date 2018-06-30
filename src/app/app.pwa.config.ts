export class PWAConfig {

  public static readonly APP_CONFIG = {
    tabsPlacement: 'top'
  };

  public static readonly MenuItems = [
    // User/Guest Functions
    //{ title: 'Home', component: 'HomePage' },
    //     { title: 'Center', component: 'CenterExamplePage' },
    //     { title: 'Images', component: 'ImagesExamplePage' },
    //     { title: 'Split Pane', component: 'SplitPaneExamplePage' },
    //     { title: 'Menu', component: 'CustomMenuExamplePage' },
    //     { title: 'Show/Hide', component: 'ShowHidePage' },
  {
    title: 'Home', component: 'HomePage', level:0
  },
    {title: 'Alerts', component: 'CenterExamplePage', auth: "user",level:0},
    {title: 'Delivery Schedule', component: 'ImagesExamplePage', auth: "user",level:0},
    {title: 'Find A Friend', auth: "user",level:0,
      subPages: [
        {title: 'Add a Friend', component: 'HomePage',level:1},
        {title: 'Where are my Friends', component: 'HomePage',level:1},
        {title: 'Campsites', component: 'HomePage',level:1},
      ]},
    {title: 'Food', component: 'CustomMenuExamplePage', auth: "user",level:0},
    {title: 'Events Schedule', component: 'HomePage', auth: "user",level:0},
    {title: 'Items of Intere7st', component: 'HomePage', auth: "user",level:0},
    {title: 'Request Ice', component: 'HomePage', auth: "user",level:0}, // Not Shown here if Vendor Request


    {title: 'Vendors', auth: "user",level:1,
      subPages: [
        {title: 'My Orders', component: 'HomePage',level:1},
        {title: 'Schedule', component: 'HomePage',level:1},
        {title: 'Request Ice', component: 'HomePage',level:1},
      ]},
    // Vendor Functions

    // Worker Functions
    {title: 'Staff', auth: "user",level:1,
      subPages: [
    {title: 'FCR Alerts', component: 'HomePage', auth: "worker",level:2},
    {title: 'Clock In/Clock out', component: 'HomePage', auth: "worker",level:2},
    {title: 'Items of Interest', component: 'HomePage', auth: "worker",level:2},
    {title: 'Ice Requests', component: 'HomePage', auth: "worker",level:2},
    {title: 'Run Route', component: 'HomePage',level:2},
    {title: 'Schedule', component: 'HomePage',level:2},
    {title: 'Signup to Work', component: 'HomePage', auth: "worker",level:2},
    {title: 'Ice Sold', component: 'HomePage',level:2},
      ]},


    // Admin/InCharge Functions
    {
      title: 'Admin',level:3,
      subPages: [{title: 'Gator Tracker', component: 'HomePage'},
        {title: 'Expenses', component: 'HomePage'},
        {title: 'Deposits', component: 'HomePage'},
        {title: 'Inventory', component: 'HomePage'},
        {title: 'Reports', component: 'HomePage'},
        {title: 'Schedule', component: 'HomePage'},
        {title: 'Users', component: 'AccountPage'},
      ]
    },




  ];

  public static readonly MenuItemsTopNav = [
    {title: 'Accounts', component: 'AccountPage'},
    {title: 'Logout', component: 'LogoutPage'},
  ];

}

export interface IMenuItems {
  title: string,
  component: string,
  icon?: string,
}
