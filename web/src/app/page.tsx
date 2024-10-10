import { GetHomeBlogData } from "@/app/lib/api/blogs"
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import HomePage from "@/app/components/home/page";

export default async function Page() {
  const data = await GetHomeBlogData();

  return (
    <>
      <Header data={data} />
      <HomePage data={data} />
      <Footer data={data} />
    </>
  )
}
