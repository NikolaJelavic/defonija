import Footer from "../components/Footer";
import { useState } from 'react';


export default function ONas() {

    const [imageSrc, setImageSrc] = useState("https://res.cloudinary.com/dapwniqqn/image/upload/v1710172792/Defonija/AboutUs/822ad0b9-305a-4ec2-8fa1-985b3b2df7de_g7jztq.jpg");

    const handleMouseEnter = () => {
      setImageSrc("https://res.cloudinary.com/dapwniqqn/image/upload/v1710172792/Defonija/AboutUs/736762dc-36e4-4627-8841-3973209616b4_sytboj.jpg");
    };
  
    const handleMouseLeave = () => {
      setImageSrc("https://res.cloudinary.com/dapwniqqn/image/upload/v1710172792/Defonija/AboutUs/822ad0b9-305a-4ec2-8fa1-985b3b2df7de_g7jztq.jpg");
    };
    

    return (
        <>
        <main className="flex justify-center mb-32">
        <article className="bg-slate-200 w-11/12 md:w-1/2 mt-6 rounded-xl p-5 min-h-full" >
          <img
            src={imageSrc}
            alt="ONama"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <p className="text-xl p-4">
            For over 20 years an extremely important avenue for explorative music in Slovenia. Held at Club Gromka in the Autonomous Cultural Centre Metelkova mesto, Defonija runs a free-wheeling programme that can easily pair experimental rock with improv gigs in the same evening. Though, it does have a penchant for the great tradition of no-nonsense free jazz. 
          </p>
          <p className="text-right">&mdash;Europe Jazz Network (EJN)</p>
        </article>
      </main>
      <Footer/>
        </>
    )
};
