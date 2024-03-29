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
    ],
    productsData: [
        {
            img: '01.jpg',
            imgHover: '02.jpg',
            vote: 4,
            name: 'Shopping Mahjong Connect',
            price: 180.00,
            discount: 0.44,
        },
        {
            img: '03.jpg',
            imgHover: '04.jpg',
            vote: 0,
            name: 'Buddy and Lucky Solitaire',
            price: 90.00,
            discount: null,
        },
        {
            img: '05.jpg',
            imgHover: '06.jpg',
            vote: 0,
            name: 'Taishou x Alice Epilogue',
            price: 60.00,
            discount: null,
        },
        {
            img: '07.jpg',
            imgHover: '08.jpg',
            vote: 2,
            name: 'Labyrinths of the World',
            price: 110.00,
            discount: null,
        },
        {
            img: '09.jpg',
            imgHover: '10.jpg',
            vote: 0,
            name: 'BangBangShooting',
            price: 56,
            discount: null,
        },
        {
            img: '11.jpg',
            imgHover: '12.jpg',
            vote: 5,
            name: 'Connect0r X',
            price: 200.00,
            discount: 0.2,
        },
        {
            img: '13.jpg',
            imgHover: '14.jpg',
            vote: 1,
            name: 'The Revolver',
            price: 30.00,
            discount: null,
        },
        {
            img: '15.jpg',
            imgHover: '16.jpg',
            vote: 3,
            name: 'Magicka',
            price: 80.00,
            discount: 0.1,
        },
        {
            img: '17.jpg',
            imgHover: '18.jpg',
            vote: 4,
            name: 'Oshi No Ko',
            price: 75.00,
            discount: 0.37,
        }
    ],
    testimonialArr: [
        {
            img: 'testimonial-1.jpg',
            name: 'Luis Charls',
            job: 'Web Designer',
            message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: 'testimonial-2.jpg',
            name: 'Mark Wall',
            job: 'Front-end Dev',
            message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: 'testimonial-3.jpg',
            name: 'James Rein',
            job: 'Back-end Dev',
            message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, There are many variations of passages of Lorem Ipsum available'
        }
    ],
    blogPreview: [
        {
            img: 'blog-1.jpg',
            date: 'Jan 18, 2021',
            comments: 0,
            title: 'Anyway REPS is a NYC agency representing photographers'
        },
        {
            img: 'blog-2.jpg',
            date: 'May 30, 2021',
            comments: 0,
            title: 'Nasual risus suscipit Lorem Ipsum is simply text'
        },
        {
            img: 'blog-3.jpg',
            date: 'Apr 13, 2021',
            comments: 0,
            title: 'Nostrum Iesum Christum Lorem Ipsum is simply text'
        }
    ],
    brands: [
        {
            img: 'brand-01.png'
        },
        {
            img: 'brand-02.png'
        },
        {
            img: 'brand-03.png'
        },
        {
            img: 'brand-04.png'
        },
        {
            img: 'brand-05.png'
        }
    ]
})