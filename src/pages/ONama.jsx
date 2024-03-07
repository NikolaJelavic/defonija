import Footer from "../components/Footer";

export default function ONama() {
    

    return (
        <>
             <main class="flex justify-center mb-32">
                <article className="bg-slate-200 w-11/12 md:w-1/2 mt-6 rounded-xl p-5 min-h-full " >
                    <img src="https://res.cloudinary.com/dapwniqqn/image/upload/v1709844144/Defonija/AboutUs/about_geg8fr.jpg" alt="ONama" />
                    <p className="text-xl p-4">
                    For over 20 years an extremely important avenue for explorative music in Slovenia. Held at Club Gromka in the Autonomous Cultural Centre Metelkova mesto, Defonija runs a free-wheeling programme that can easily pair experimental rock with improv gigs in the same evening. Though, it does have a penchant for the great tradition of no-nonsense free jazz. 
                    </p>
                    <p className="text-right">&mdash;European Jazz Network (EJN)</p>
                </article>
             </main>      
            <Footer/>
        </>
    )
};
