// next
import Link from "next/link"

// react icons
import { IconType } from "react-icons"
import { IoMdPerson } from "react-icons/io"
import { FaReact, FaAws, FaDocker, FaLink, FaWix, FaCheckSquare } from "react-icons/fa"
import { GrOrganization } from "react-icons/gr"
import { PiFileHtmlFill, PiFileCssFill } from "react-icons/pi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiShadcnui, SiDjango, SiGithubactions, SiWagtail, SiJavascript } from "react-icons/si"
import { BsCursorFill } from "react-icons/bs"

// components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { TooltipC } from "@/app/components/tooltip-wrapper"

import { HomeBlogDataInterface } from "@/app/lib/api/blogs"

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

interface HomeProjectsProps {
    data?: HomeBlogDataInterface,
}

export default function HomeProjects({ data }: HomeProjectsProps) {
    return (
        <div id="projects" className="py-16 text-sm">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-xs pb-9 font-black">
                { data?.projects_section?.projects_label }
                </p>
                
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="https://www.eglint.com/">
                                <FaCheckSquare />
                                <GrOrganization />
                                <FaLink />
                            </Link>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.eglint.com/">
                                    eGlint
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            Real-time biomarker testing for health.
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
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="https://www.southernskyadvisors.com/">
                                <FaCheckSquare />
                                <GrOrganization />
                                <FaLink />
                            </Link>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://www.southernskyadvisors.com/">
                                    Southern Sky Advisories
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            Your strategic partner for thriving in healthcare and technology markets.
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
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="https://nynvr.io/">
                                <FaCheckSquare />
                                <IoMdPerson />
                                <FaLink />
                            </Link>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="https://nynvr.io/">
                                    NYNVR
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>A portfolio and blogging website.</CardContent>
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
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="#">
                                <FaCheckSquare />
                                <IoMdPerson />
                                <FaLink />
                            </Link>
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
                            A cloud-based tool utilizing msconvert to transform between various mass spectrometry data formats.
                        </CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>
                    
                    <Card className="w-[350px]">
                        <CardHeader>
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="#">
                                <FaCheckSquare />
                                <IoMdPerson />
                                <FaLink />
                            </Link>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    Anasa
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>A cloud-based project management tool.</CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="#">
                                <FaCheckSquare />
                                <IoMdPerson />
                                <FaLink />
                            </Link>
                            <CardTitle>
                                <Link className="flex items-center"
                                    target="_blank"
                                    href="#">
                                    Versa
                                </Link>
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>A cloud-based, general-purpose quality management system (QMS).</CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <Link className="flex justify-start gap-2 text-sm content-center pb-2"
                                target="_blank"
                                href="#">
                                <FaCheckSquare />
                                <IoMdPerson />
                                <FaLink />
                            </Link>
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
                            A cloud-based digital laboratory. Electronic Laboratory Notebook (ELN). Sample Management. Laboratoy Information Management System (LIMS).
                        </CardContent>
                        <CardFooter className="text-xl"></CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}