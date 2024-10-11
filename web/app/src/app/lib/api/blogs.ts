import { blog_default_contents, InitialDataInterface } from '@/app/lib/api/utils'
import { unstable_noStore as noStore } from 'next/cache'

export type HomeBlogDataInterface = InitialDataInterface

export async function GetHomeBlogData() {
    noStore()
    const NYNVRIO_API_URL = process.env.NYNVRIO_API_URL + "/api/blog-data"
    const NYNVRIO_TOKEN = process.env.NYNVRIO_TOKEN

    const result = await fetch(NYNVRIO_API_URL || '', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + NYNVRIO_TOKEN,
        }
    })

    if (!result.ok) {
        console.log("Using default contents.")
        return blog_default_contents
    }

    console.log("Using contents from API.")
    return result.json()
}