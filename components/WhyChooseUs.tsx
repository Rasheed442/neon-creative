"use client";

import { motion } from 'framer-motion';

const features = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3337 15.1669C23.3337 21.0002 19.2503 23.9169 14.397 25.6085C14.1428 25.6947 13.8668 25.6905 13.6153 25.5969C8.75033 23.9169 4.66699 21.0002 4.66699 15.1669V7.0002C4.66699 6.69078 4.78991 6.39403 5.0087 6.17524C5.22749 5.95645 5.52424 5.83353 5.83366 5.83353C8.16699 5.83353 11.0837 4.43353 13.1137 2.6602C13.3608 2.44903 13.6752 2.33301 14.0003 2.33301C14.3254 2.33301 14.6398 2.44903 14.887 2.6602C16.9287 4.4452 19.8337 5.83353 22.167 5.83353C22.4764 5.83353 22.7732 5.95645 22.992 6.17524C23.2107 6.39403 23.3337 6.69078 23.3337 7.0002V15.1669Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 13.9998L12.8333 16.3332L17.5 11.6665" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Premium Materials",
    description: "We source only the finest timbers, hardware, and finishes for every build.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.667 2.33301V4.66634" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.333 2.33301V6.99967" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8333 2.3335C20.1428 2.3335 20.4395 2.45641 20.6583 2.6752C20.8771 2.894 21 3.19074 21 3.50016V14.0002H7V3.50016C7 3.19074 7.12292 2.894 7.34171 2.6752C7.5605 2.45641 7.85725 2.3335 8.16667 2.3335H19.8333Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.99967 14C6.69026 14 6.39351 14.1229 6.17472 14.3417C5.95592 14.5605 5.83301 14.8572 5.83301 15.1667V16.3333C5.83301 16.9522 6.07884 17.5457 6.51643 17.9832C6.95401 18.4208 7.5475 18.6667 8.16634 18.6667H10.4997C10.8091 18.6667 11.1058 18.7896 11.3246 19.0084C11.5434 19.2272 11.6663 19.5239 11.6663 19.8333V23.2167C11.6663 23.8355 11.9122 24.429 12.3498 24.8666C12.7873 25.3042 13.3808 25.55 13.9997 25.55C14.6185 25.55 15.212 25.3042 15.6496 24.8666C16.0872 24.429 16.333 23.8355 16.333 23.2167V19.8333C16.333 19.5239 16.4559 19.2272 16.6747 19.0084C16.8935 18.7896 17.1903 18.6667 17.4997 18.6667H19.833C20.4518 18.6667 21.0453 18.4208 21.4829 17.9832C21.9205 17.5457 22.1663 16.9522 22.1663 16.3333V15.1667C22.1663 14.8572 22.0434 14.5605 21.8246 14.3417C21.6058 14.1229 21.3091 14 20.9997 14" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Custom Designs",
    description: "Every piece is designed from scratch to suit your exact space and style.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5002 14L7.73171 23.7685C7.26758 24.2326 6.63809 24.4934 5.98171 24.4934C5.32533 24.4934 4.69584 24.2326 4.23171 23.7685C3.76758 23.3044 3.50684 22.6749 3.50684 22.0185C3.50684 21.3621 3.76758 20.7326 4.23171 20.2685L14.0002 10.5" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 17.5002L25.6667 12.8335" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0833 13.4165L22.8503 11.1835C22.4127 10.746 22.1668 10.1526 22.1667 9.53379V8.16646L19.53 5.52979C18.2286 4.22917 16.4675 3.49321 14.6277 3.48112L10.5 3.45312L11.5733 4.40979C12.3357 5.08575 12.9461 5.91561 13.3644 6.84468C13.7827 7.77374 13.9993 8.78091 14 9.79979V11.6665L16.3333 13.9998H17.7007C18.3195 13.9999 18.9129 14.2458 19.3503 14.6835L21.5833 16.9165" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Expert Craftsmanship",
    description: "Our makers have decades of combined experience in fine joinery and cabinetry.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9997 25.6663C20.443 25.6663 25.6663 20.443 25.6663 13.9997C25.6663 7.55635 20.443 2.33301 13.9997 2.33301C7.55635 2.33301 2.33301 7.55635 2.33301 13.9997C2.33301 20.443 7.55635 25.6663 13.9997 25.6663Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7V14L18.6667 16.3333" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "On-Time Delivery",
    description: "We respect your timeline and commit to delivery dates we actually keep.",
  },
  {
    icon: <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8185 6.18742C14.6048 6.4055 14.485 6.69871 14.485 7.00409C14.485 7.30946 14.6048 7.60267 14.8185 7.82075L16.6852 9.68742C16.9033 9.90118 17.1965 10.0209 17.5019 10.0209C17.8072 10.0209 18.1004 9.90118 18.3185 9.68742L22.7169 5.28909C23.3035 6.58547 23.4811 8.02986 23.2261 9.42976C22.971 10.8297 22.2954 12.1186 21.2892 13.1247C20.283 14.1309 18.9941 14.8066 17.5942 15.0616C16.1943 15.3167 14.7499 15.1391 13.4535 14.5524L5.39187 22.6141C4.92774 23.0782 4.29824 23.339 3.64187 23.339C2.98549 23.339 2.35599 23.0782 1.89187 22.6141C1.42774 22.15 1.16699 21.5205 1.16699 20.8641C1.16699 20.2077 1.42774 19.5782 1.89187 19.1141L9.95353 11.0524C9.36689 9.75603 9.18927 8.31165 9.44433 6.91175C9.6994 5.51185 10.375 4.22293 11.3812 3.21676C12.3874 2.21059 13.6763 1.53495 15.0762 1.27989C16.4761 1.02482 17.9205 1.20244 19.2169 1.78909L14.8302 6.17575L14.8185 6.18742Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Professional Installation",
    description: "Clean, precise installation with zero compromise on finish quality.",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.40593 13.5939C2.3087 13.8559 2.3087 14.144 2.40593 14.4059C3.35291 16.7021 4.96037 18.6654 7.0245 20.0469C9.08863 21.4284 11.5165 22.1659 14.0003 22.1659C16.484 22.1659 18.9119 21.4284 20.976 20.0469C23.0402 18.6654 24.6476 16.7021 25.5946 14.4059C25.6918 14.144 25.6918 13.8559 25.5946 13.5939C24.6476 11.2978 23.0402 9.33448 20.976 7.95298C18.9119 6.57148 16.484 5.83398 14.0003 5.83398C11.5165 5.83398 9.08863 6.57148 7.0245 7.95298C4.96037 9.33448 3.35291 11.2978 2.40593 13.5939Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z" stroke="#E1AD56" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
    title: "Attention to Detail",
    description: "From soft-close hinges to invisible joins — the details define the difference.",
  },
];

function WhyChooseUs() {
  return (
    <motion.div 
      className="w-full bg-[#2a2a2a] px-14 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>
        <h2 className="font-serif text-white text-[46px]">Why Choose Us</h2>
        <p className="text-gray-300 text-[16px] mt-4 max-w-xl">
          Six reasons why discerning homeowners trust us with their most
          important spaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {features.map((feature, i) => {
          return (
            <motion.div 
              key={i} 
              className="bg-[#3a3a3a] rounded p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -8, backgroundColor: '#444444' }}
            >
              <motion.div 
                className="text-[#E1AD56]"
                whileHover={{ scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-serif text-white text-[20px]">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default WhyChooseUs;