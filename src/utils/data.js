import {
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs, angular, vue, mysql, aws, mizule, impact, ar
} from "../assets";

export const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "aws",
        icon: aws,
    },
];

export const projects = [
    {
        name: "Mizule",
        description:
            "Mizule is an amazing platform that allows Zulists to showcase their creative talent and create stunning visuals that will surely wow any audience.",
        tags: [
            {
                name: "Native Android",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "Springboot",
                color: "pink-text-gradient",
            },
        ],
        image: mizule,
        source_code_link: "https://github.com/lohithsrk/Mizule.git",
    },
    {
        name: "Impact Podcast",
        description:
            "\"Impact\" is a captivating student podcast that goes beyond the ordinary by showcasing in-depth interviews with seasoned industrial specialists.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: impact,
        source_code_link: "https://impactpodcast.in/",
    },
    {
        name: "Andhaadhi Rehab",
        description:
            "One of India’s most trusted and leading teletherapy hub for Speech therapy, Occupational therapy and special education services.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
            {
                name: "Jsonwebtoken",
                color: "pink-text-gradient",
            },
        ],
        image: ar,
        source_code_link: "https://andhaadhirehab.in/",
    },

];