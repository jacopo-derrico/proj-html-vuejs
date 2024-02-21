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
    categoryBanner: [
        {
            catName: 'Most Popular',
            gameTitle: 'The Battlefield 4 Naval Strike',
            img: 'cms-banner-01.jpg'
        },
        {
            catName: 'Latest Game',
            gameTitle: "Assassin's Creed Unity Game",
            img: 'cms-banner-02.jpg'
        }
    ],
    discountBanner: [
        {
            discount: '20% Discount',
            gameTitle: 'Dragon’s Dogma Video Game',
            img: 'cms-banner-03.jpg'
        },
        {
            discount: '30% Discount',
            gameTitle: 'World Of Tanks New Game',
            img: 'cms-banner-04.jpg'
        }
    ]
})