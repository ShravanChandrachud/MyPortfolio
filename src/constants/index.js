export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];

export const myProjects = [
    {
        title: 'ZenKraft',
        desc: 'An AI-powered personalized yoga assistant that blends wellness with technology to make fitness more accessible and effective.',
        subdesc:
            'Designed to act as a personal yoga trainer, ZenKraft customizes courses by analyzing user fitness goals, medical history, and available time. Using AI-powered pose detection with OpenCV and MediaPipe, it provides instant corrections, ensuring users maintain safe postures and achieve maximum benefits, all from the comfort of their home.',
        // href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/ZenKraft.mp4',
        logo: '/assets/zenkraft_logo.png',
        logoStyle: {
            backgroundColor: '#c4c0c0',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'NodeJS',
                path: '/assets/node_js.png',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb-original.svg',
            },
            {
                id: 4,
                name: 'Flask',
                path: '/assets/flask.svg',
            },
            {
                id: 5,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 6,
                name: 'OpenCV',
                path: '/assets/opencv.svg',
            },
            {
                id: 7,
                name: 'MediaPipe',
                path: '/assets/media-pipe.png',
            },
        ],
    },
    {
        title: 'Agreement/Decision In Principle Automation system',
        desc: 'An intelligent automation system built during my internship at MortgageKart Ltd. that accelerates mortgage applications for UK lenders.',
        subdesc:
            'Built during my internship at MortgageKart Ltd., this system streamlines one of the most time-consuming steps in the mortgage process. By studying lender workflows and intermediary portals in detail, I developed logic to automatically map user inputs into lender-specific formats, enabling accurate form filling and quote generation. This reduced manual data entry and made intermediaries’ work significantly faster and more efficient.',
        // href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/no_video_available.mp4',
        logo: '/assets/dip.jpg',
        logoStyle: {
            backgroundColor: '#382f2f',
            background:
                'linear-gradient(0deg,rgba(35, 34, 34, 0.31),rgba(24, 21, 21, 0.31)), linear-gradient(180deg, rgb(26, 25, 25) 0%, rgba(33, 16, 16, 0.8) 100%)',
            border: '0.2px solid rgba(33, 16, 16, 0.8)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'RobotFramework',
                path: 'assets/robotframework.svg',
            },
            {
                id: 3,
                name: 'Javascript',
                path: '/assets/javascript-js.svg',
            },
        ],
    },
    {
        title: 'Keep Moving Forward - 3D Game Concept',
        desc: 'A dungeon-crawler game that evolved from a 2D game jam prototype into a full 3D experience, challenging players to persevere through procedurally generated rooms and relentless enemies.',
        subdesc:
            'Originally created as a 2D side-scroller in a game jam, the project was later expanded into 3D using Unity. Players navigate procedurally generated dungeon rooms, battling waves of monsters while the protagonist continues advancing despite injuries. Innovative mechanics, such as reattaching defeated monsters’ limbs to replace lost ones, add strategic depth, and dynamic 3D environments provide an immersive and tense gameplay experience that embodies the theme Keep Moving Forward.',
        // href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/no_video_available.mp4',
        logo: '/assets/python.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Unity Engine',
                path: '/assets/unity.svg',
            },
            {
                id: 2,
                name: 'C Sharp',
                path: 'assets/c-sharp-c.svg',
            },
        ],
    },
    {
        title: 'Medical Record system using Blockchain',
        desc: 'A secure blockchain-based solution for storing and managing medical records with complete transparency and immutability.',
        subdesc:
            "This project leverages blockchain's core strength—immutability—to safeguard sensitive medical data. I wrote smart contracts in Solidity, deployed them using Remix IDE, and connected with MetaMask to simulate real-world execution. The system ensures records cannot be altered, while smart contracts allow secure sharing and transparent verification, addressing privacy and trust challenges in healthcare.",
        // href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/remix_ide.mp4',
        logo: '/assets/health-report.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Solidity',
                path: '/assets/solidity.png',
            },
            {
                id: 2,
                name: 'Remix IDE',
                path: 'assets/remix_ide.png',
            },
            {
                id: 3,
                name: 'MetaMask',
                path: '/assets/MetaMask.svg',
            },
        ],
    },
    {
        title: 'Predictive Analytics for Customer Retention in Banking',
        desc: 'An AI-powered churn prediction system that helps banks identify at-risk customers and proactively reduce attrition.',
        subdesc:
            'Developed a neural network using Keras to forecast 6-month customer churn, achieving 91% precision and outperforming logistic regression by 15%. Preprocessing, feature engineering, and visualizations were done in Python with Pandas, Matplotlib, and Seaborn, demonstrating the power of deep learning to guide data-driven retention strategies.',
        // href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/no_video_available.mp4',
        logo: '/assets/python.png',

        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'Kaggle',
                path: 'assets/kaggle.png',
            },
        ],
    },
    {
        title: 'My Portfolio Website',
        desc: 'A fully interactive 3D portfolio website designed to showcase my skills, projects, and personality in a visually engaging way.',
        subdesc:
            'A fully interactive 3D portfolio crafted to go beyond a static resume, offering an immersive experience to recruiters and visitors. Built with React, Three.js, and React Three Fiber, it features smooth GSAP-powered animations, a personalized avatar from Ready Player Me, and character rigging with Mixamo. This project showcases both my technical expertise and creative design skills in an engaging format.',
        // href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/myportfolio.mp4',
        logo: '/portfolio.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'ThreeJS',
                path: 'assets/threejs.png',
            },
            {
                id: 3,
                name: 'Mixamo',
                path: '/assets/mixamo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -4, 2] : isMobile ? [5, -4, 2] : isTablet ? [6, -5, 0] : [9, -6, 0],
        holoGlobePosition: isSmall ? [4, 2, 0] : isMobile ? [5, 2, 0] : isTablet ? [6, 1.5, 0] : [9, 1.5, 0],
        reactPosition: isSmall ? [-4, 3, 0] : isMobile ? [-5.8, 3, 0] : isTablet ? [-7, 2.3, 0] : [-9, 2.3, 0],
        headsetPosition: isSmall ? [-5, -9, -10] : isMobile ? [-8, -7, -10] : isTablet ? [-11, -8, -10] : [-13, -9, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'MortgageKart Ltd',
        pos: 'Software Developer Engineer Intern',
        duration: 'April 2025 - August 2025',
        title: "During my internship at MortgageKart, I built an automation system for AIP/DIP mortgage applications used by major UK lenders. I first dove deep into the end-to-end mortgage process, studying different mortgage types, internal workflows, and lender portals. With this understanding, I created intelligent field mappings and logic that could instantly translate user inputs into lender-specific formats. The result was a system that automatically filled forms and generated quotes, dramatically reducing manual effort and making the mortgage process faster and more efficient for intermediaries.",
        icon: '/assets/mortgage-kart.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Stralto Global',
        pos: 'Full Stack Intern',
        duration: 'June 2024 - July 2024',
        title: "At Stralto, I built the entire backend system from scratch, designing RESTful APIs and databases that powered both the company’s mobile app and an Admin Dashboard for data management. I also developed the Admin Panel interface, giving administrators a streamlined way to manage users, posts, images, and more. To ensure reliability, I implemented unit testing and best practices, delivering a backend that was scalable, maintainable, and production-ready.",
        icon: '/assets/stralto_global.jpg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'MeshBA Solutions LLP',
        pos: 'Database Management & Design Intern',
        duration: 'February 2024 - March 2024',
        title: "At MeshBA, I designed and managed the database for a Movie Ticket Booking System, structuring it into master and transaction data for efficiency and scalability. I also created a SYS table to log admin activity, ensuring transparency and auditability. By applying normalization up to 3NF and optimizing queries, I improved data consistency, storage efficiency, and retrieval speed, delivering a system tailored for reliable real-world use.",
        icon: '/assets/meshba.jpg',
        animation: 'victory',
    },
];
