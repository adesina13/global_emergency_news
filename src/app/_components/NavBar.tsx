// src\app\_components\NavBar.tsx
'use client'

import { LanguageSelect } from "./LanguageSelect";
import logo from '@/images/logo.png'
import notificationBell from '@/images/notificationBell.png'
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar(){

    const pathname = usePathname()
    return(
        <nav className="flex justify-between text-[17px] pb-[24px] bg-[#FFFFFF] px-[50px] 
                    border-b border-solid border-[#D9D9D9] items-center pt-[22px] fixed top-0 w-full">
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="logo" className="w-[19.25px] h-[19.68px]"/>
            <p className="font-semibold text-[20px]">Global Emergency News</p>
          </div>

          <div className="flex gap-[28px]">
            <button className={pathname == "/"? "font-semibold": ""}>Home</button>
            <button className={pathname == "/about"? "font-semibold": ""}>About Us</button>

            <div className="flex gap-[13px]">
              <LanguageSelect/>
              <button className="px-[12px] bg-[#F2E8E8] rounded-[8px]">
                <Image src={notificationBell} alt="notification" className="w-[14px] h-auto"/>
              </button>
            </div>
          </div>
        </nav>
    )
}