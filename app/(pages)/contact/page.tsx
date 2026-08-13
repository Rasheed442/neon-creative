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
          <h2 className="font-serif text-white text-[28px] font-semibold sm:text-[32px] md:text-[44px] lg:text-[56px]">
            Commercial Project
          </h2>
          <p className="text-gray-300 text-[12px] capitalize sm:text-[14px] md:text-[17px] mt-3 sm:mt-4">
            Explore One-Stop Interior Design Solutions
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