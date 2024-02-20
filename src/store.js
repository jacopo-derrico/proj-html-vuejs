import { reactive } from "vue";

export const store = reactive({
    headerNav: [
        {
            name: 'Home',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        },
        {
            name: 'Shop',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        }, {
            name: 'Blog',
            isDropdown: true,
            link: '#',
            dropdownItems: [
                {
                    name: 'Game World',
                    link: '#'
                },
                {
                    name: 'Consoles',
                    link: '#'
                },
                {
                    name: 'New Releases',
                    link: '#'
                }
            ]
        }, {
            name: 'Media',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        }, {
            name: 'ShortCode',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        },
        {
            name: 'Features',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        },
    ],
    headerActionNav: [
        {
            name: 'search',
            link: '#',
            faClass: 'fa-magnifying-glass'
        },
        {
            name: 'account',
            link: '#',
            faClass: 'fa-user'
        },
        {
            name: 'cart',
            link: '#',
            faClass: 'fa-bag-shopping'
        },
    ],
    footerInfoNav: [
        {
            name: 'Bookmark',
            link: '#'
        },
        {
            name: 'Features',
            link: '#'
        }, {
            name: 'Sitemap',
            link: '#'
        }, {
            name: 'Lists',
            link: '#'
        }, {
            name: 'Contact Us',
            link: '#'
        },
    ],
    footerExtrasoNav: [
        {
            name: 'Delivery',
            link: '#'
        },
        {
            name: 'Cart',
            link: '#'
        }, {
            name: 'Terms & Conditions',
            link: '#'
        }, {
            name: 'My Account',
            link: '#'
        }, {
            name: 'About Us',
            link: '#'
        },
    ],
    newsletterEmails: [],
    addEmail: '',
})