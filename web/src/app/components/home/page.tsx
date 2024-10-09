import { IconType } from "react-icons";

import Link from "next/link";
import Image from "next/image";

import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";
import { FaReact, FaPython, FaAws, FaDocker, FaLink } from "react-icons/fa";
import { SiShadcnui, SiDjango, SiGithubactions, SiWagtail, SiJavascript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { BsCursorFill } from "react-icons/bs";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

import { TooltipC, TooltipWrapper } from "@/app/components/tooltip-wrapper"

import { InitialDataInterface } from "@/app/lib/data"
import ProfilePic from "@/public/profile-photo.jpg";

export interface TechStackItem {
    icon: IconType;
    name: string;
}

interface TechStackItemCProps {
    items: TechStackItem[];
}
  
function TechStackItemC({ items }: TechStackItemCProps) {
    return (
        <>
            {items.map((item, index) => (
                <TooltipC key={index}  content={item.name}>
                    <item.icon className="mr-1 cursor-pointer" />
                </TooltipC>
            ))}
        </>
    );
}

interface HomePageProps {
    data?: InitialDataInterface,
}

export default function HomePage({ data }: HomePageProps) {
    return (
        <>
            {/* PROFILE */}
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

            {/* PROJECTS */}
            <div id="projects" className="py-16 text-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-xs pb-9 font-black">
                    { data?.projects_section?.projects_label }
                    </p>
                    
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="w-[350px]">
                        <CardHeader>
                        <div className="flex justify-end content-center text-lg">
                            <Link
                            target="_blank"
                            href="https://nynvr.io/">
                                <FaLink className="text-lg rotate-45" />
                            </Link>
                        </div>
                        <CardTitle>
                            Nynvr.io
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        A portfolio and blogging website.
                        </CardContent>
                        <CardFooter className="text-xl">
                        <TechStackItemC
                            items={[
                            { icon: FaReact, name: "React" },
                            { icon: RiNextjsFill, name: "Next.js" },
                            { icon: RiTailwindCssFill, name: "Tailwind CSS" },
                            { icon: SiShadcnui, name: "Shadcn UI" },
                            { icon: SiDjango, name: "Django" },
                            { icon: SiWagtail, name: "Wagtail" },
                            { icon: FaDocker, name: "Docker" },
                            { icon: FaAws, name: "AWS" },
                            { icon: SiGithubactions, name: "GitHub Actions" },
                            { icon: BsCursorFill, name: "Cursor" }
                            ]}
                        />
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                        <div className="flex justify-end content-center text-lg">
                            <Badge className="mr-2">In development</Badge>
                            <Link
                            target="_blank"
                            href="#">
                                <FaLink className="text-lg rotate-45" />
                            </Link>
                        </div>
                        <CardTitle>
                            Spectral
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        A cloud-based tool utilizing msconvert to transform between various mass spectrometry data formats.
                        </CardContent>
                        <CardFooter className="text-xl">
                        </CardFooter>
                    </Card>
                    
                    <Card className="w-[350px]">
                        <CardHeader>
                        <div className="flex justify-end content-center text-lg">
                            <Badge className="mr-2">To do</Badge>
                            <Link
                            target="_blank"
                            href="#">
                                <FaLink className="text-lg rotate-45" />
                            </Link>
                        </div>
                        <CardTitle>
                            Anasa
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        A cloud-based project management tool.
                        </CardContent>
                        <CardFooter className="text-xl">
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                        <div className="flex justify-end content-center text-lg">
                            <Badge className="mr-2">To do</Badge>
                            <Link
                            target="_blank"
                            href="#">
                                <FaLink className="text-lg rotate-45" />
                            </Link>
                        </div>
                        <CardTitle>
                            Versa
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        A cloud-based, general-purpose quality management system (QMS).
                        </CardContent>
                        <CardFooter className="text-xl">
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                        <div className="flex justify-end content-center text-lg">
                            <Badge className="mr-2">To do</Badge>
                            <Link
                            target="_blank"
                            href="#">
                                <FaLink className="text-lg rotate-45" />
                            </Link>
                        </div>
                        <CardTitle>
                            LabOS
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        A cloud-based digital laboratory. Electronic Laboratory Notebook (ELN). Sample Management. Laboratoy Information Management System (LIMS).
                        </CardContent>
                        <CardFooter className="text-xl">
                        </CardFooter>
                    </Card>
                    </div>
                </div>
            </div>

            {/* CONTACT */}
            <div id="contact" className="py-16 text-sm bg-neutral-100 dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-xs pb-9 font-black">
                    { data?.contact_section?.contact_label }
                    </p>

                    <div className="w-3/5 lg:w-2/4 ">
                    <p dangerouslySetInnerHTML={{ __html: data?.contact_section?.contact_msg || '' }} />
                    <div className="flex flex-row mt-6">
                        <Link
                        target="_blank"
                        href="mailto:noynovera@gmail.com">
                            <TooltipWrapper content={ data?.contact_section?.email || '' }>
                            <IoIosMail className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                        <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/noynovera/">
                            <TooltipWrapper content={ data?.contact_section?.linkedin || '' }>
                            <IoLogoLinkedin className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                        <Link
                        target="_blank"
                        href="https://github.com/noynovera/">
                            <TooltipWrapper content={ data?.contact_section?.github || '' }>
                            <IoLogoGithub className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}