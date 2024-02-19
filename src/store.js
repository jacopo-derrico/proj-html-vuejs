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
        },{
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
        },{
            name: 'Media',
            isDropdown: false,
            link: '#',
            dropdownItems: []
        },{
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
})