// next
import Link from "next/link"

// react icons
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io"

// components
import { TooltipWrapper } from "@/app/components/tooltip-wrapper"

import { HomeBlogDataInterface } from "@/app/lib/api/blogs"

interface HomeContactProps {
    data?: HomeBlogDataInterface,
}

export default function HomeContact({ data }: HomeContactProps) {
    return (
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
                            href="https://github.com/nynvr/">
                            <TooltipWrapper content={ data?.contact_section?.github || '' }>
                                <IoLogoGithub className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}