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
        desc: 'An AI-powered personalized yoga assistant designed to promote both physical and mental well-being.',
        subdesc:
            'Provides users with a personalized yoga course tailored to their fitness level, goals, and medical conditions. Utilizes real-time pose detection to offer instant feedback on posture, helping users improve their fitness effectively from the comfort of their home.',
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
        desc: 'Developed an AIP/DIP automation system during my internship at MortgageKart Ltd. The system automates form filling on lender (bank) intermediary portals and generates mortgage quotes, streamlining the process and enhancing efficiency for mortgage intermediaries.',
        subdesc:
            'Gained a strong understanding of the AIP/DIP process in the mortgage domain and analyzed various lender portals. Created intelligent field mappings by interpreting user input from the frontend, enabling automated and logically consistent responses aligned with lender-specific questionnaire formats.',
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
        title: 'Keep Moving Forward - Game concept',
        desc: 'Created during a game jam hosted by Code For a Cause under the theme "Keep Moving Forward", the game features a protagonist who continues to advance no matter the injuries sustained. He relentlessly battles waves of monsters, embodying the theme through his unwavering determination and survival-driven combat.',
        subdesc:
            'Developed a 2D side-scroller game in Unity where the main character battles relentless waves of monsters to rescue his kidnapped daughter from the Demon King. The character pushes forward despite injuries, and uniquely, can reattach severed monster limbs to replace his own lost ones, adding a dark and strategic twist to gameplay.',
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
        desc: 'A data storage system which blockchain technology to store the records of patient. With the help of blockchain technology it ensures security and reliability of data records since they are immutable. Due to smart contracts it is easier to execute such systems while ensuring privacy and successful execution.',
        subdesc:
            'I made the smart contract in solidity language on RemixIDE. Connected it with my metamask account and deployed the smart contract.',
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
        title: 'Emotion Detection Classifier',
        desc: 'This a ML project where we detect the emotions portrayed by a sentence. This model analyzes the text by breaking it into tokens and with the help of Naive Bayes Classifier it identifies whether a sentence represents joy, anger, sadness, love, fear or surprise',
        subdesc:
            'Made with python in a jupyter notebook. Dataset obtained from kaggle. Classifier used is the Naive Bayes Classifier. Data preprocessing applied is tokenization and lametization.',
        // href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/emotion_detection.mp4',
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
        desc: 'This is by far my biggest and personal favorite project. My own portfolio website which allows me to showcase my skills. It also allows others to see my projects, know more about me and contact me in just a brief moment.',
        subdesc:
            'I built this with ThreeJS, React Three Fiber, React Three drei and ReactJs as the main libraries. I also used GSAP animations for many 3d components. I also used other tools such as Ready Me Player to make my avatar, Mixamo to rig the avatar and get some animations for the same.',
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
        duration: '3rd April 2025 - Present',
        title: "During my internship at MortgageKart Ltd., I designed and developed a complete AIP/DIP automation system for major UK lenders, including BM Solutions (Birmingham Midshires) and TMW (The Mortgage Works). I studied the end-to-end mortgage process, including its various types and internal workflows, and analyzed lender intermediary portals in detail. Based on this understanding, I created intelligent field mappings and logic to translate user inputs from the frontend into accurate, lender-specific responses. This enabled automated form filling and quote generation, streamlining the mortgage application process and significantly improving efficiency for intermediaries.",
        icon: '/assets/mortgage-kart.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Stralto Global',
        pos: 'Full Stack Intern',
        duration: '3rd June 2024 - 12th July 2024',
        title: "During my time at Stralto Global, I developed and deployed a robust backend system, crafting APIs and databases from scratch to support their mobile app’s functionality. Additionally, I designed an intuitive Admin Panel to streamline app management for administrators. I was also responsible for unit testing to ensure code quality and reliability, implementing best practices for maintainable and scalable solutions.",
        icon: '/assets/stralto_global.jpg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'MeshBA Solutions LLP',
        pos: 'Database Management & Design Intern',
        duration: '28th February 2024 - 31st March 2024',
        title: "At MeshBA Solutions, I honed my skills in database management and design, focusing on building efficient data systems. As part of a self-driven project, I designed a comprehensive Movie Ticket Booking System, integrating core principles of data structuring, storage optimization, and retrieval efficiency to enhance user experience and system performance.",
        icon: '/assets/meshba.jpg',
        animation: 'victory',
    },
];
