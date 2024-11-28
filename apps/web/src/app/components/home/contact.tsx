// next
import Link from "next/link"

// react icons
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io"

// components
import { TooltipWrapper } from "@/app/components/tooltip-wrapper"

export default function HomeContact() {
    return (
        <div id="contact" className="py-16 text-sm bg-neutral-100 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-xs pb-9 font-black">
                    # CONTACT
                </p>

                <div className="w-3/5 lg:w-2/4 ">
                    <p>Feel free to reach out if you want to build something together, have a question, or just want to connect.</p>
                    <div className="flex flex-row mt-6">
                        <Link
                            target="_blank"
                            href="mailto:noynovera@gmail.com">
                            <TooltipWrapper content="noynovera@gmail.com">
                                <IoIosMail className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/noynovera/">
                            <TooltipWrapper content="https://www.linkedin.com/in/noynovera/">
                                <IoLogoLinkedin className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                        <Link
                            target="_blank"
                            href="https://github.com/nynvr/">
                            <TooltipWrapper content="https://github.com/nynvr/">
                                <IoLogoGithub className="text-2xl mr-2" />
                            </TooltipWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}