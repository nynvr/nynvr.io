// next
import Link from "next/link"

// react icons
import { IconType } from "react-icons"
import { IoMdPerson, IoLogoGithub } from "react-icons/io"
import { FaDocker, FaLink, FaWix } from "react-icons/fa"
import { GrOrganization } from "react-icons/gr"
import { PiFileHtmlFill, PiFileCssFill } from "react-icons/pi"
import { RiNextjsFill, RiTailwindCssFill, RiCheckboxBlankLine, RiAddBoxFill, RiCheckboxFill, RiCheckboxMultipleFill } from "react-icons/ri"
import { SiShadcnui, SiAwsamplify, SiJavascript } from "react-icons/si"
import { BsCursorFill } from "react-icons/bs"

// components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { TooltipC } from "@/app/components/tooltip-wrapper"

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

export default function HomeProjects() {
    return (
        <div id="projects" className="py-16 text-sm">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-xs pb-9 font-black">
                    # PROJECTS
                </p>
                
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiAddBoxFill />
                                <IoMdPerson />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    Spectral
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            A cloud-based tool utilizing msconvert to transform between various mass spectrometry data formats
                        </CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxMultipleFill />
                                <IoMdPerson />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://nynvr.io/">
                                    <FaLink />
                                </Link>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://github.com/nynvr/nynvr.io">
                                    <IoLogoGithub />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://nynvr.io/">
                                    NYNVR
                                </Link>
                            </CardTitle>
                            <CardDescription>Curious Software Engineer</CardDescription>
                        </CardHeader>
                        <CardContent>[2024-OCT] A personal portfolio and blogging website</CardContent>
                        <CardFooter className="text-xl">
                            <TechStackItemC
                                items={[
                                    { icon: RiNextjsFill, name: "Next.js" },
                                    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
                                    { icon: SiShadcnui, name: "Shadcn UI" },
                                    { icon: SiAwsamplify, name: "AWS Amplify" },
                                    { icon: BsCursorFill, name: "Cursor" }
                                ]}
                            />
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxFill />
                                <GrOrganization />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.eglint.com/">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.eglint.com/">
                                    eGlint
                                </Link>
                            </CardTitle>
                            <CardDescription>Real-time biomarker testing for health.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            [2024-JUN] Corporate website built with Wix Studio for a biotech company addressing a crucial need in critical care settings, where timely interventions can significantly impact patient outcomes
                        </CardContent>
                        <CardFooter className="text-xl">
                            <TechStackItemC
                                items={[
                                    { icon: SiJavascript, name: "JavaScript" },
                                    { icon: PiFileHtmlFill, name: "HTML" },
                                    { icon: PiFileCssFill, name: "CSS" },
                                    { icon: FaWix, name: "Wix Studio" },
                                ]}
                            />
                        </CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxFill />
                                <GrOrganization />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.southernskyadvisors.com/">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.southernskyadvisors.com/">
                                    Southern Sky Advisors
                                </Link>
                            </CardTitle>
                            <CardDescription>Your strategic partner for thriving in healthcare and technology markets</CardDescription>
                        </CardHeader>
                        <CardContent>
                            [2024-MAY] Corporate website built with Wix Studio for an advisory company in healthcare and technology industry
                        </CardContent>
                        <CardFooter className="text-xl">
                            <TechStackItemC
                                items={[
                                    { icon: SiJavascript, name: "JavaScript" },
                                    { icon: PiFileHtmlFill, name: "HTML" },
                                    { icon: PiFileCssFill, name: "CSS" },
                                    { icon: FaWix, name: "Wix Studio" },
                                ]}
                            />
                        </CardFooter>
                    </Card>
                    
                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxBlankLine />
                                <IoMdPerson />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    Anasa
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>A cloud-based project management tool</CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxBlankLine />
                                <IoMdPerson />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    Versa
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>A cloud-based, general-purpose quality management system (QMS)</CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="flex justify-start gap-2 text-sm content-center pb-2">
                                <RiCheckboxBlankLine />
                                <IoMdPerson />
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    <FaLink />
                                </Link>
                            </div>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    LabOS
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            A cloud-based digital laboratory with Electronic Laboratory Notebook (ELN), Sample Management, and Laboratoy Information Management System (LIMS)
                        </CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}