export interface InitialDataInterface {
    header_section?: {
        nav_menu?: {
            0?: {
                label?: string,
                href?: string,
                target?: string,
            },
            1?: {
                label?: string,
                href?: string,
                target?: string,
            },
            2?: {
                label?: string,
                href?: string,
                target?: string,
            },
            3?: {
                label?: string,
                href?: string,
                target?: string,
            },
        },
        logo?: {
            logo_text?: string,
        }
        mode_toggle?: {
            default_theme?: string,
        }
    },
    profile_section?: {
        profile_label?: string,
        profile_name?: string,
        profile_name_sub?: string,
        experience_html?: string,
        interests_html?: string,
    },
    skills_section?: {
        skills_html?: string,
        life_skills_html?: string,
        soft_skills_html?: string,
        technical_concepts_html?: string,
        hard_skills_section?: {
            javascript?: {
                name?: string,
            },
            react?: {
                name?: string,
            },
            nextjs?: {
                name?: string,
            },
            tailwind?: {
                name?: string,
            },
            shadcnui?: {
                name?: string,
            },
            python?: {
                name?: string,
            },
            django?: {
                name?: string,
            },
            aws?: {
                name?: string,
            },
            docker?: {
                name?: string,
            },
            githubactions?: {
                name?: string,
            },
            cursor?: {
                name?: string,
            },
        },
    },
    get_resume_button?: {
        text?: string,
        href?: string,
        target?: string,
    },
    projects_section?: {
        projects_label?: string,
        projects?: {
            1?: {
                name?: string,
                status?: string,
                href?: string,
                target?: string,
                description?: string,
                skills?: JSON,
            }
        },
    },
    contact_section?: {
        contact_label?: string,
        contact_msg?: string,
        email?: string,
        linkedin?: string,
        github?: string,
    },
    footer_section?: {
        footer_msg?: string,
    },
}

export const blog_default_contents = {
    "header_section": {
        "nav_menu": {
            0: {
                "label": "Profile",
                "href": "#profile",
                "target": "_self",
            },
            1: {
                "label": "Projects",
                "href": "#profile",
                "target": "_self",
            },
            2: {
                "label": "Blog",
                "href": "/blog/",
                "target": "_self",
            },
            3: {
                "label": "Contact",
                "href": "#contact",
                "target": "_self",
            },
        },
        "logo": {
            "logo_text": "NYNVR",
        },
        "mode_toggle": {
            "default_theme": "light",
        }
    },
    "profile_section": {
        "profile_label": "# PROFILE",
        "profile_name": "Noy Novera",
        "profile_name_sub": "Curious Software Engineer",
        "experience_html": '<span class="font-black">Experience: </span>Over a decade in software engineering mostly in startup companies — both local and international — across industries such as <span class="font-medium">Marketing</span>, <span class="font-medium">e-Commerce</span>, <span class="font-medium">e-Learning</span>, <span class="font-medium">Payments</span>, and most recently <span class="font-medium">Biotechnology</span>.',
        "interests_html": '<span class="font-black">Interests: </span>Building products that enhance health, protect the environment, digitalize government operations and services, advance education and innovate finance.',
    },
    "skills_section": {
        "skills_html": '<span class="font-black">Skills: </span>I thrive on the challenge of transforming ideas into solutions from inception to implementation.',
        "life_skills_html": '<span>Curiosity</span><span>&bull;</span><span>Lifelong Learning</span><span>&bull;</span><span>Pragmatism</span><span>&bull;</span><span>Simplicity</span><span>&bull;</span><span>Collaboration</span>',
        "soft_skills_html": '<span>People Management</span><span>&bull;</span><span>Project Management</span><span>&bull;</span><span>Software Engineering Management</span>',
        "technical_concepts_html": '<span>Software Architecture</span><span>&bull;</span><span>TDD</span><span>&bull;</span><span>DevOps</span><span>&bull;</span><span>Shift Left Security</span><span>&bull;</span><span>AI as a Tool</span>',
        "hard_skills_section": {
            "javascript": {
                "name": "JavaScript",
            },
            "react": {
                "name": "React",
            },
            "nextjs": {
                "name": "Next.js",
            },
            "tailwind": {
                "name": "Tailwind CSS",
            },
            "shadcnui": {
                "name": "shadcn/ui",
            },
            "python": {
                "name": "Python",
            },
            "django": {
                "name": "Django",
            },
            "aws": {
                "name": "AWS",
            },
            "docker": {
                "name": "Docker",
            },
            "githubactions": {
                "name": "Github Actions",
            },
            "cursor": {
                "name": "Cursor",
            },
        },
    },
    "get_resume_button": {
        "text": "Get My Resume",
        "href": "https://www.linkedin.com/in/noynovera/",
        "target": "_blank",
    },
    "projects_section": {
        "projects_label": "# PROJECTS",
        "projects": {
            1: {
                "name": "",
                "status": "",
                "href": "",
                "target": "",
                "description": "",
                "skills" :{},
            },
        },
    },

    "contact_section": {
        "contact_label": "# CONTACT",
        "contact_msg": "Feel free to reach out if you want to build something together, have a question, or just want to connect.",
        "email": "noynovera@gmail.com",
        "linkedin": "https://www.linkedin.com/in/noynovera/",
        "github": "https://github.com/noynovera/",
    },

    "footer_section": {
        "footer_msg": "Life is so beautiful... but it is also full of pain and suffering. Let's try to be kind to one another.",
    }  
}