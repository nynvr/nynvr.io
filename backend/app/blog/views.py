from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.response import Response


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_blog_data(request):
    return Response({
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
                0: {
                    "name": "",
                    "status": "",
                    "href": "",
                    "target": "",
                    "description": "",
                    "skills" : "",
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
    })