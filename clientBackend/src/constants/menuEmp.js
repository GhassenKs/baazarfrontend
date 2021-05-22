import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMSEMP = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            {
                title: 'Physical', type: 'sub', active: false, children: [
                    { path: '/products/physical/category', title: 'Category', type: 'link' },
                    
                    { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
                  //  { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
                    { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
                ]
            },
            {
                title: 'digital', type: 'sub', active: false, children: [
                    { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
                    
                    { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
                    { path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
                ]
            },
        ]
    },
    
    
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },
    
    
    /**
     * {
        title: 'Coupons', icon: Tag, type: 'sub', active: false, children: [
            { path: '/coupons/list-coupons', title: 'List Coupons', type: 'link' },
            { path: '/coupons/create-coupons', title: 'Create Coupons', type: 'link' },
        ]
    },
     */
    /**{
        title: 'Pages', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/pages/list-page', title: 'List Page', type: 'link' },
            { path: '/pages/create-page', title: 'Create Page', type: 'link' },
        ]
    },*/
    
    
    /**
     * {
        title: 'Menus', icon: AlignLeft, type: 'sub', active: false, children: [
            { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
            { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
        ]
    },
     */
    
    /**
     * {
        title: 'Localization', icon: Chrome, type: 'sub', children: [
            { path: '/localization/transactions', title: 'Translations', type: 'link' },
            { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
            { path: '/localization/taxes', title: 'Taxes', type: 'link' }
        ]
    },
     */
  
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    },
   
    {
        title: 'Logout',path:'/auth/login', icon: LogIn, type: 'link', active: false
    }
]
