import home_1_screenshrot from "../../../public/images/home-showcase/home-showcase-1.jpg"
import home_2_screenshrot from "../../../public/images/home-showcase/home-showcase-2.jpg"
import home_3_screenshrot from "../../../public/images/home-showcase/home-showcase-3.jpg"
import home_4_screenshrot from "../../../public/images/home-showcase/home-showcase-4.jpg"
import home_5_screenshrot from "../../../public/images/home-showcase/home-showcase-5.jpg"
import home_6_screenshrot from "../../../public/images/home-showcase/home-showcase-6.jpg"
export const menuList = [
    {
        id: 1,
        path: "#",
        lable: "Home",
        megaMenu: [
            {
                id: 1,
                path: "/home-1",
                singlePath:"/home-single-1",
                lable: "Default",
                tag: "",
                src: home_1_screenshrot
            },
            {
                id: 2,
                path: "/home-2",
                singlePath:"/home-single-2",
                lable: "Home v2",
                tag: "Popular",
                src: home_2_screenshrot
            },
            {
                id: 3,
                path: "/home-3",
                singlePath:"/home-single-3",
                lable: "Home v3",
                tag: "",
                src: home_3_screenshrot
            },
            {
                id: 4,
                path: "/home-4",
                singlePath:"/home-single-4",
                lable: "Home v4",
                tag: "",
                src: home_4_screenshrot
            },
            {
                id: 5,
                path: "/home-5",
                singlePath:"/home-single-5",
                lable: "Home v5",
                tag: "",
                src: home_5_screenshrot
            },
            {
                id: 6,
                path: "/home-6",
                singlePath:"/home-single-6",
                lable: "Home v6",
                tag: "New",
                src: home_6_screenshrot
            },

        ],
        dropDown: false
    },
    {
        id: 2,
        path: "#",
        lable: "Pages",
        dropDown: [
            {
                id: 1,
                path: "/about-us",
                lable: "About Us",
                tag: ""
            },
            {
                id: 2,
                path: "/contact-us",
                lable: "Contact Us",
                tag: "",
            },
            {
                id: 3,
                path: "#",
                lable: "Our Team",
                tag: "",
                subDropdonwn: [
                    {
                        id: 1,
                        path: "/team",
                        lable: "Our Team",
                        tag: "",
                    },
                    {
                        id: 2,
                        path: "/team-carousel",
                        lable: "Team Carousel",
                        tag: "",
                    },
                    {
                        id: 3,
                        path: "/team-details",
                        lable: "Team Details",
                        tag: "",
                    },

                ]
            },
            {
                id: 4,
                path: "#",
                lable: "Career",
                tag: "2 Open Job",
                subDropdonwn: [
                    {
                        id: 1,
                        path: "/career",
                        lable: "Career",
                        tag: "",
                    },
                    {
                        id: 2,
                        path: "/career-details",
                        lable: "Career Details",
                        tag: "",
                    },

                ]
            },
            {
                id: 5,
                path: "/pricing",
                lable: "Pricing Plan",
                tag: "HOT"
            },
            {
                id: 6,
                path: "/faq",
                lable: "FAQs",
                tag: ""
            },
            {
                id: 7,
                path: "/testimonial",
                lable: "Testimonial",
                tag: ""
            },
            {
                id: 8,
                path: "#",
                lable: "Coming Soon",
                tag: ""
            },
            {
                id: 9,
                path: "/not-found",
                lable: "404",
                tag: ""
            },

        ],
        megaMenu: false
    },
    {
        id: 3,
        path: "#",
        lable: "Services",
        dropDown: [
            {
                id: 1,
                path: "/services",
                lable: "Services",
                tag: ""
            },
            {
                id: 2,
                path: "/service-details",
                lable: "Service Details",
                tag: "",
            },

        ],
        megaMenu: false
    },
    {
        id: 4,
        path: "#",
        lable: "Case Studies",
        dropDown: [
            {
                id: 1,
                path: "/portfolio",
                lable: "Case Studies",
                tag: ""
            },
            {
                id: 2,
                path: "/portfolio-details",
                lable: "Case Studies Details",
                tag: "",
            },

        ],
        megaMenu: false
    },
    {
        id: 5,
        path: "#",
        lable: "Blog",
        dropDown: [
            {
                id: 1,
                path: "/modern-with-sidebar",
                lable: "Modern With Sidebar",
                tag: ""
            },
            {
                id: 2,
                path: "/classic-with-sidebar",
                lable: "Classic With Sidebar",
                tag: "",
            },
            {
                id: 3,
                path: "/blog-list",
                lable: "Blog List",
                tag: "",
            },
            {
                id: 4,
                path: "/modern-without-sidebar",
                lable: "Modern Without Sidebar",
                tag: "",
            },
            {
                id: 5,
                path: "/blog-single-sidebar",
                lable: "Blog Single Sidebar",
                tag: "",
            },
            {
                id: 6,
                path: "/blog-single-no-siderbar",
                lable: "Blog Single No Siderbar",
                tag: "",
            },

        ],
        megaMenu: false
    },
]