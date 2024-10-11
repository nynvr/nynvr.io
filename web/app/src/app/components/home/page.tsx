// Components
import HomeProfile from "@/app/components/home/profile"
import HomeProjects from "@/app/components/home/projects"
import HomeContact from "@/app/components/home/contact"

import { HomeBlogDataInterface } from "@/app/lib/api/blogs"

interface HomePageProps {
    data?: HomeBlogDataInterface,
}

export default function HomePage({ data }: HomePageProps) {
    return (
        <>
            <HomeProfile data={data} />
            <HomeProjects data={data} />
            <HomeContact data={data} />
        </>
    )
}