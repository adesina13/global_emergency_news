// src\app\_components\home\NewsContent.tsx

"use client";
import { useEffect, useState } from "react";

export default function NewsContent({ time, title, headline, imageUrl }: any) {
  const [formattedTime, setFormattedTime] = useState(time);

  useEffect(() => {
    setFormattedTime(new Date(time).toLocaleString());
  }, [time]);

  return (
    
      <article className="flex md:flex-row flex-col-reverse justify-between items-start gap-4"> 
        <div className="md:w-[60%]"> 
            <p className="text-[#994D4D] text-[14px]">{formattedTime}</p> 
            <p className="font-semibold text-[16px]">{title}</p> 
            <p className="text-[#994D4D] ttext-[14px]">{headline}</p> 
        </div> 
        {imageUrl && 
            ( 
            <div className=" md:w-[35%] w-full"> 
                <img src={imageUrl} alt={title} className="rounded-md w-full h-full" /> 
            </div> 
            )} 
        </article>
  

    
  );
}
