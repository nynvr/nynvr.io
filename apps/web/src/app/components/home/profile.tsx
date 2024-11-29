// next
import Link from "next/link"
import Image from "next/image"

// react icons
import { FaReact, FaPython, FaAws, FaDocker } from "react-icons/fa"
import { RiTailwindCssFill, RiNextjsFill   } from "react-icons/ri"
import { SiJavascript, SiShadcnui, SiDjango } from "react-icons/si"
import { BsCursorFill } from "react-icons/bs"

// components
import { Button } from "@/app/components/ui/button"
import { TooltipWrapper } from "@/app/components/tooltip-wrapper"

import ProfilePic from "@/public/profile-photo.jpg"

export default function HomeProfile() {
    return (
        <div id="profile" className="py-16 bg-neutral-100 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row lg:flex-row-reverse">

            <div className="pt-10 mx-auto">
                <div className="avatar">
                <div>
                    <Image
                    src={ProfilePic}
                    className={`
                        rounded-full aspect-square object-cover
                        ring ring-8 ring-base-100 ring-offset-2
                        ring-neutral-200 ring-offset-neutral-400
                        dark:ring-neutral-800 dark:ring-offset-neutral-600`}
                    alt="Noy Novera"
                    priority={true}
                    />
                </div>
                </div>
            </div>

            <div className="mr-4 mt-20 lg:mt-0 text-sm">
                <div className="text-xs mb-6 font-black">
                    # PROFILE
                </div>
                <div className="py-3">
                    <h1 className="font-black text-2xl">Noy Novera</h1>
                    <p>Curious Software Engineer</p>
                </div>
                <div className="py-3">
                    <p>
                        <span className="font-black">Experience: </span>Over a decade in software engineering mostly in startup companies — both local and international — across industries such as <span className="font-medium">Marketing</span>, <span className="font-medium">e-Commerce</span>, <span className="font-medium">e-Learning</span>, <span className="font-medium">Payments</span>, and most recently <span className="font-medium">Biotechnology</span>.
                    </p>
                </div>
                <div className="py-3">
                    <p>
                        <span className="font-black">Interests: </span>Building products that enhance health, protect the environment, digitalize government operations and services, advance education and innovate finance.
                    </p>
                </div>
                <div className="py-3">
                    <p>
                        <span className="font-black">Skills: </span>I thrive on the challenge of transforming ideas into solutions from inception to implementation.
                    </p>
                </div>

                <div className="py-3">
                    <div className="flex flex-row gap-2 flex-wrap w-3/4 border-l-2 mb-5 pl-2 border-neutral-900 dark:border-neutral-100">
                        <span>Curiosity</span><span>&bull;</span><span>Lifelong Learning</span><span>&bull;</span><span>Pragmatism</span><span>&bull;</span><span>Simplicity</span><span>&bull;</span><span>Collaboration</span>
                    </div>

                    <div className="flex flex-row gap-2 flex-wrap w-3/4 border-l-2 mb-5 pl-2 border-neutral-900 dark:border-neutral-100">
                        <span>People Management</span><span>&bull;</span><span>Project Management</span><span>&bull;</span><span>Software Engineering Management</span>
                    </div>

                    <div className="mt-3 w-3/4 border-l-2 border-black dark:border-white mb-5 pl-2">
                        <div className="mt-1 flex flex-row flex-wrap gap-4">
                            
                            <TooltipWrapper content="Python">
                                <FaPython className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="Django">
                                <SiDjango className="text-3xl cursor-pointer" />
                            </TooltipWrapper>

                            <TooltipWrapper content="JavaScript">
                                <SiJavascript className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="React">
                                <FaReact className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="Next.js">
                                <RiNextjsFill className="text-3xl cursor-pointer" />
                            </TooltipWrapper>

                            <TooltipWrapper content="Tailwind CSS">
                                <RiTailwindCssFill className="text-3xl cursor-pointer" />
                            </TooltipWrapper>

                            <TooltipWrapper content="Shadcn/ui">
                                <SiShadcnui className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="AWS">
                                <FaAws className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="Docker">
                                <FaDocker className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content="Cursor">
                                <BsCursorFill className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                        </div>
                    </div>
                </div>

                <div className="pt-7">
                    <Link target="_blank"
                        href="https://www.linkedin.com/in/noynovera/">
                        <Button>Get My Resume</Button>
                    </Link>
                </div>
            </div>

            </div>
        </div>
    )
}