// next
import Link from "next/link"
import Image from "next/image"

// react icons
import { DiDjango } from "react-icons/di"
import { FaReact, FaPython, FaAws, FaDocker } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiGithubactions, SiJavascript } from "react-icons/si"
import { BsCursorFill } from "react-icons/bs"

// components
import { Button } from "@/app/components/ui/button"
import { TooltipWrapper } from "@/app/components/tooltip-wrapper"

import { HomeBlogDataInterface } from "@/app/lib/api/blogs"
import ProfilePic from "@/public/profile-photo.jpg"

interface HomeProfileProps {
    data?: HomeBlogDataInterface,
}

export default function HomeProfile({ data }: HomeProfileProps) {
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
                { data?.profile_section?.profile_label }
                </div>
                <div className="py-3">
                <h1 className="font-black text-2xl" dangerouslySetInnerHTML={{ __html: data?.profile_section?.profile_name || '' }} />
                <p dangerouslySetInnerHTML={{ __html: data?.profile_section?.profile_name_sub || '' }} />
                </div>
                <div className="py-3">
                    <p dangerouslySetInnerHTML={{ __html: data?.profile_section?.experience_html || '' }} />
                </div>
                <div className="py-3">
                    <p dangerouslySetInnerHTML={{ __html: data?.profile_section?.interests_html || '' }} />
                </div>
                <div className="py-3">
                    <p dangerouslySetInnerHTML={{ __html: data?.skills_section?.skills_html || '' }} />
                </div>

                <div className="py-3">
                    <div
                        className="flex flex-row gap-2 flex-wrap w-3/4 border-l-2 mb-5 pl-2 border-neutral-900 dark:border-neutral-100"
                        dangerouslySetInnerHTML={{ __html: data?.skills_section?.life_skills_html || '' }} />

                    <div
                        className="flex flex-row gap-2 flex-wrap w-3/4 border-l-2 mb-5 pl-2 border-neutral-900 dark:border-neutral-100"
                        dangerouslySetInnerHTML={{ __html: data?.skills_section?.soft_skills_html || '' }} />

                    <div 
                        className="flex flex-row gap-2 flex-wrap w-3/4 border-l-2 mb-5 pl-2 border-neutral-900 dark:border-neutral-100"
                        dangerouslySetInnerHTML={{ __html: data?.skills_section?.technical_concepts_html || '' }} />

                    <div className="mt-3 w-3/4 border-l-2 border-black dark:border-white mb-5 pl-2">
                        <div className="mt-1 flex flex-row flex-wrap gap-4">
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.javascript?.name || '' }>
                                <SiJavascript className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.react?.name || '' }>
                                <FaReact className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.tailwind?.name || '' }>
                                <RiTailwindCssFill className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.python?.name || '' }>
                                <FaPython className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.django?.name || '' }>
                                <DiDjango className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.aws?.name || '' }>
                                <FaAws className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.docker?.name || '' }>
                                <FaDocker className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.githubactions?.name || '' }>
                                <SiGithubactions className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                            
                            <TooltipWrapper content={ data?.skills_section?.hard_skills_section?.cursor?.name || '' }>
                                <BsCursorFill className="text-3xl cursor-pointer" />
                            </TooltipWrapper>
                        </div>
                    </div>
                </div>

                <div className="pt-7">
                    <Link target={ data?.get_resume_button?.target || '' }
                        href={ data?.get_resume_button?.href || '' }>
                        <Button>{ data?.get_resume_button?.text || '' }</Button>
                    </Link>
                </div>
            </div>

            </div>
        </div>
    )
}