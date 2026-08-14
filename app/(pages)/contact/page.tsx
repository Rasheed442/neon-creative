import ContactCards from '@/components/ContactCards'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import { ctbgImages } from '@/contants'
import Image from 'next/image'

function Page() {
  return (
    <div>
         <div className="h-[80vh] relative">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={ctbgImages.ctbg}
            alt="background"
            fill
            priority
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-black/30" />

        {/* Header */}
          <Header />

        {/* Hero text */}
        <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-end text-center px-4 sm:px-6">
          <h2 className="font-serif text-white text-[28px] sm:text-[32px] md:text-[45px] lg:text-[56px]">
            Let’s Talk About <span className='text-[#E1AD56] font-light  italic'>Your Space </span>
          </h2>
          <p className="text-gray-300 text-[12px] max-w-3xl capitalize sm:text-[14px] md:text-[17px] mt-3 sm:mt-4">
            Have a project in mind or need help finding the right cabinetry solution? Our team is ready to listen,
             answer your questions, and help you take the next step.
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <ContactCards />
      </div>
      <ContactUs />
    </div>
  )
}

export default Page