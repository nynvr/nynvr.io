import { InitialDataInterface } from "@/app/lib/data"

interface FooterProps {
    data?: InitialDataInterface,
}

export default function Footer({ data }: FooterProps) {
    return (
      <footer className="">
        <div className="max-w-7xl mx-auto p-2 leading-4">
          <span className="text-lg leading-4 align-top">&copy;</span>
          <span className="leading-4 align-middle">&nbsp;2024 NYNVR</span>
          <span className="leading-4 align-middle">&nbsp;&bull;&nbsp;</span>
          <span className="text-xs leading-4 align-middle">
            { data?.footer_section?.footer_msg }
          </span>
        </div>
      </footer>
    );
  }