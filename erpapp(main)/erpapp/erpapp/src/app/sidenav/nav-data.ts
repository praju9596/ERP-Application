import { INavbarData } from "./helper"

export const navbarData: INavbarData[] = [
  {
    routelink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routelink: 'master',
    icon: 'fas fa-user-alt',
    label: 'Master',
    items: [
      {
        routelink: 'master/roleslist',
        label : 'Roles',
       
      },
      {
        routelink: 'master/designationlists',
        label : 'Designation',
      },
      {
        routelink: 'master/subcategorylists',
        label : 'Sub-Category',
      },
      {
        routelink: 'master/categorylists',
        label : 'Category',
      },
      {
        routelink: 'master/statuslists',
        label : 'Status',
      },
      {
        routelink: 'master/enquirymodelists',
        label : 'Enquiry-Mode',
      },
      {
        routelink: 'master/enquirylist',
        label : 'Enquiry-Type',
      },
      {
        routelink: 'master/businesslist',
        label : 'Business-Type',
      },
      {
        routelink: 'master/userlist',
        label : 'User',
      },
      {
        routelink: 'master/employeelist',
        label : 'Employee Master',
      },
      {
        routelink: 'master/customerlist',
        label : 'Customer-Master',
      },
      {
        routelink: 'master/supplierlist',
        label : 'Supplier-Master',
      },
    ]
  },
  {
    routelink: 'visitplan',
    icon: 'fas fa-edit',
    label: 'Visit Plan',
    // items:[

    //   {
    //     routelink: 'visitplan/dialogue',
    //     label : 'User',
    //   },


    
  },
  
  /*{
    routelink: 'coupens',
    icon: 'fal fa-tags',
    label: 'Enquiry',
    items: [
      {
        routelink: 'coupens/list',
        label : 'Sub 1'
      },
      {
        routelink: 'coupens/create',
        label : 'Sub 2'
      }
    ]
  },*/
  {
    routelink: 'enquiry',
    icon: 'fal fa-tags',
    label: 'Enquiry',
    items: [
      {
        routelink: 'enquiry/list',
        label : 'Sub 1'
      },
      {
        routelink: 'enquiry/create',
        label : 'Sub 2'
      }
    ]
  },
  {
    routelink: 'sales',
    icon: 'fal fa-cog',
    label: 'Sales',
    expanded: false,
    items: [
      {
        routelink: 'sales/profile',
        label : 'Profile'
      },
      {
        routelink: 'sales/customize',
        label : 'Customize'
      },

    ]
  },
  {
    routelink: 'jobcard',
    icon: 'fas fa-portrait',
    label: 'Job Card',
    items: [
      {
        routelink: 'jobcard/list',
        label : 'Sub 1'
      },
      {
        routelink: 'jobcard/create',
        label : 'Sub 2'
      }
    ]
  },{
  routelink: 'purchase',
  icon: 'fas fa-marker',
  label: 'Purchase'
},
{
  routelink: 'proc',
  icon: 'fas fa-plus-square',
  label: 'Procurement'
},
{
  routelink: 'delivery',
  icon: 'fas fa-share-square',
  label: 'Delivery'
},
];