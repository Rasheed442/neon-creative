"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

export interface FAQItem {
  question: string;
  answer: string;
}

export const aboutFaqs: FAQItem[] = [
  {
    question: "1. Do you offer fully customised kitchen designs?",
    answer:
      "Yes! We specialise in designing and creating bespoke kitchens tailored to your personal style, space, lifestyle, and functional needs. From kitchen layouts and cabinetry to countertops, finishes, storage solutions, and accessories, every detail is carefully considered to create a kitchen that is both beautiful and practical.",
  },
  {
    question: "2. Can I customise my kitchen cabinets, materials, and finishes?",
    answer:
      "Absolutely. We offer a range of customisation options, including cabinet styles, colours, materials, textures, handles, finishes, and internal storage configurations. Our team works closely with you to select options that complement your preferred aesthetic while meeting your functional requirements.",
  },
  {
    question: "3. Do you handle complete home interior design and customisation?",
    answer:
      "Yes. We provide comprehensive interior solutions for entire homes, including living rooms, bedrooms, kitchens, dining areas, bathrooms, wardrobes, and other interior spaces. Our goal is to create a cohesive design that reflects your personality, enhances comfort, and maximises functionality throughout your home.",
  },
  {
    question: "4. How does the kitchen or full-home customisation process work?",
    answer:
      "Our process typically begins with an initial consultation to understand your needs, preferences, space, and budget. This is followed by site measurements, design development, material selection, and proposal approval. Once everything is agreed upon, we proceed with production, installation, and final detailing to bring your vision to life.",
  },
  {
    question: "5. How long does a custom kitchen or full-home interior project take?",
    answer:
      "Project timelines vary depending on the size, complexity, materials, and level of customisation required. A custom kitchen may take several weeks, while a complete home interior project may require several months. Following our initial assessment, we provide a project-specific timeline to guide you through each stage.",
  },
  {
    question: "6. Do you work within a client's budget?",
    answer:
      "Yes. We understand that every client has different budget considerations. We work with you to establish a realistic budget and recommend suitable materials, finishes, designs, and solutions that align with your financial expectations without compromising the overall quality and functionality of the project.",
  },
  {
    question: "7. Can you work with my existing kitchen or furniture layout?",
    answer:
      "Certainly. We can work with your existing layout where practical or recommend modifications to improve functionality, storage, movement, and aesthetics. Our team assesses the available space and provides design solutions that make the most of your existing structure.",
  },
  {
    question: "8. Do you provide 3D designs or visualisations before production and installation?",
    answer:
      "Yes. Where included in the project scope, we provide 3D design visualisations to help you understand how your proposed kitchen or interior space will look before execution begins. This allows you to review layouts, colours, materials, and design details and request adjustments before final approval.",
  },
  {
    question: "9. Do you handle delivery and installation of custom kitchens and furniture?",
    answer:
      "Yes. We provide coordinated delivery and professional installation as part of our agreed project scope. Our team pays close attention to measurements, fittings, finishing, and detailing to ensure that every element is properly installed and aligns with the approved design.",
  },
  {
    question: "10. How do I get started on my custom kitchen or full-home interior project?",
    answer:
      "Getting started is simple! Contact us through our website, phone, or social media platforms to schedule an initial consultation. Share your ideas, requirements, project location, and any available space measurements or inspiration images. Our team will guide you through the next steps towards creating a space that is uniquely yours.",
  },
]

export const bedroomFaqs: FAQItem[] = [
  {
    question: "1. What does your bedroom customisation include?",
    answer:
      "We design and build complete bedrooms: beds and headboards, bedside tables, wardrobes, dressers, vanity units, TV walls, wall panelling and study nooks, all tailored to your room’s size and the atmosphere you want.",
  },
  {
    question: "2. Can you design a fully coordinated bedroom suite?",
    answer:
      "Yes. We create one design language across every piece, from the headboard and wall panels to the wardrobe and bedside tables, so the finished room feels calm, cohesive and intentional.",
  },
  {
    question: "3. Do you make custom beds and headboards?",
    answer:
      "We make upholstered, panelled and fluted headboards, including options with integrated lighting and floating bedsides. Beds can also include storage, such as drawers or lift-up bases, for linens and seasonal items.",
  },
  {
    question: "4. Can you design children's and guest bedrooms?",
    answer:
      "Yes. For children's rooms, we use durable finishes, rounded edges and flexible storage that can adapt as they grow. For guest rooms, we focus on comfortable, practical pieces that make visitors feel at home.",
  },
  {
    question: "5. What materials do you use for bedroom furniture?",
    answer:
      "We work with quality engineered boards, wood veneers, lacquers, upholstery fabrics and leathers, with metal or stone accents where they suit the design. We help you choose materials that are durable and easy to care for.",
  },
  {
    question: "6. Can you include a vanity or dressing area in my bedroom?",
    answer:
      "Yes. We can integrate a dressing table with mirror, lighting and drawers into your wardrobe wall or as a standalone piece, designed to match the rest of the room.",
  },
  {
    question: "7. How can you make a small bedroom feel more spacious?",
    answer:
      "We use wall-to-wall built-in storage, floating bedside tables, under-bed storage, mirrored or light finishes and integrated lighting, keeping floor space clear so the room feels larger and more open.",
  },
  {
    question: "8. Do you handle bedroom lighting?",
    answer:
      "We can integrate headboard reading lights, ambient LED strips, wardrobe lighting and bedside switching. We coordinate the lighting plan with your electrician during installation.",
  },
  {
    question: "9. How long does a bedroom project take?",
    answer:
      "A single piece such as a wardrobe or headboard takes a few weeks, while a full bedroom suite takes longer. After our assessment, we provide a timeline for each stage of your project.",
  },
]

export const kitchenFaqs: FAQItem[] = [
  {
    question: "1. What kitchen layouts can you design for my space?",
    answer:
      "We design L-shaped, U-shaped, galley, island, peninsula and open-plan kitchens. After measuring your space, we recommend the layout that gives the smoothest workflow between your sink, cooker and fridge, with enough worktop and walking room for the way your household cooks.",
  },
  {
    question: "2. What cabinet materials and finishes can I choose from?",
    answer:
      "You can choose from matte and high-gloss lacquer, wood veneer, textured laminate, fluted panels and glass-front units, in single colours or two-tone combinations like our Airis and Cloud series. We also help you pick handles, or handle-less push-to-open and profile options for a cleaner look.",
  },
  {
    question: "3. Which countertop options do you offer?",
    answer:
      "We offer quartz, sintered stone, marble-effect surfaces and other durable worktops. We guide you on heat, stain and scratch resistance so your countertop stands up to everyday Nigerian cooking, and we can match backsplashes and islands to the same surface.",
  },
  {
    question: "4. Can you build in my appliances?",
    answer:
      "Yes. We design housings for ovens, microwaves, hobs, extractor hoods, dishwashers, fridges and wine coolers to the manufacturer's dimensions and ventilation requirements. You can supply your own appliances or ask us to recommend options that suit your layout.",
  },
  {
    question: "5. How do you maximise storage in a custom kitchen?",
    answer:
      "We use tall larder units, corner carousels and pull-outs, deep pot-and-pan drawers, internal organisers, cutlery inserts and wall units that run to the ceiling. Every cabinet is planned around what you actually store, so nothing ends up as wasted space.",
  },
  {
    question: "6. Will my kitchen cabinets hold up to heat, steam and humidity?",
    answer:
      "Yes. We use moisture-resistant carcasses, sealed edges and finishes suited to our climate, with extra protection around the sink, hob and dishwasher zones. Hinges and drawer runners are soft-close hardware chosen for daily use.",
  },
  {
    question: "7. Do you include lighting in the kitchen design?",
    answer:
      "We can integrate under-cabinet LED strips for worktop lighting, in-cabinet lights for glass units, toe-kick lighting and sensor lights in drawers and larders. We coordinate the points and switching with your electrician during installation.",
  },
  {
    question: "8. Can you replace an old kitchen in a home I already live in?",
    answer:
      "Yes. We measure your existing space, plan the removal of old units and design around your current plumbing, gas and electrical points, or advise where relocating them would improve the layout. We schedule work to keep disruption to your home as low as possible.",
  },
  {
    question: "9. How long does a custom kitchen take from design to installation?",
    answer:
      "A custom kitchen typically takes several weeks after design approval, depending on its size, materials, countertop and appliances. After our site assessment, we give you a project-specific timeline covering production, delivery and installation.",
  },
]

export const sideCabinetFaqs: FAQItem[] = [
  {
    question: "1. What counts as a side cabinet?",
    answer:
      "Side cabinets are compact storage pieces such as console tables, sideboards, bedside and end tables, hallway cabinets and shoe cabinets. They add storage and style to spaces where a full cabinet would be too much.",
  },
  {
    question: "2. Where can I use a side cabinet?",
    answer:
      "They work well in entrances and hallways, living and dining rooms, bedrooms and offices, anywhere you need extra storage or a surface for décor, lamps or keys.",
  },
  {
    question: "3. Can I get a side cabinet made to a custom size?",
    answer:
      "Yes. Every piece is made to measure, so it fits the exact width, depth and height of your space, including narrow corridors and alcoves.",
  },
  {
    question: "4. What finishes and materials are available?",
    answer:
      "You can choose from wood veneers, matte and gloss lacquers, fluted fronts, stone or sintered-stone tops and metal accents, matched to the rest of your interior.",
  },
  {
    question: "5. Can a side cabinet double as shoe storage or an entryway console?",
    answer:
      "Yes. We can design entryway consoles with shoe compartments, ventilated storage, drawers for keys and a surface for décor, keeping your entrance tidy and welcoming.",
  },
  {
    question: "6. Do side cabinets come with drawers, doors or open shelves?",
    answer:
      "Any combination. We plan the interior around what you will store, mixing drawers, doors and open shelves as needed, with soft-close hardware throughout.",
  },
  {
    question: "7. Can you match a side cabinet to my existing furniture?",
    answer:
      "Yes. Share photos or samples of your current pieces, and we will match colours, finishes and detailing as closely as possible.",
  },
  {
    question: "8. Can side cabinets be wall-mounted?",
    answer:
      "Yes. Floating side cabinets keep floors clear and make small spaces feel bigger. We check your wall type first and use concealed fixings.",
  },
  {
    question: "9. How long does a side cabinet take?",
    answer:
      "Side cabinets are usually among our quicker projects, typically a few weeks from design approval depending on materials and finishes. We confirm the timeline when you approve the design.",
  },
]

export const diningFaqs: FAQItem[] = [
  {
    question: "1. What dining furniture and cabinetry do you make?",
    answer:
      "We make dining tables, sideboards and buffets, crockery and display cabinets, drinks cabinets and dining-room wall panelling, designed as one set or to complement your existing pieces.",
  },
  {
    question: "2. Can you make a dining table to fit my room and family size?",
    answer:
      "Yes. We size your table to the number of people you want to seat and the room it sits in, in rectangular, round or oval shapes, while leaving enough clearance for chairs to pull out and people to move around comfortably.",
  },
  {
    question: "3. Which tabletop materials do you recommend?",
    answer:
      "We offer sintered stone, marble-effect surfaces, wood veneer and glass. We will advise on heat, scratch and stain resistance so your table suits both everyday meals and entertaining.",
  },
  {
    question: "4. Can you include a sideboard or buffet?",
    answer:
      "Yes. A sideboard adds storage for cutlery, table linen and serveware, and gives you a surface for serving during gatherings. We can add soft lighting or glass display sections to make it a feature of the room.",
  },
  {
    question: "5. Can you design a dining area within an open-plan space?",
    answer:
      "Yes. We use cabinetry, wall panelling and lighting to define the dining zone, and match finishes so it flows naturally into your kitchen and living room.",
  },
  {
    question: "6. Can you add a bar or wine storage to my dining room?",
    answer:
      "Yes. We can design a drinks cabinet or bar wall with wine racks, glass holders, bottle storage and integrated lighting, built to match your dining furniture.",
  },
  {
    question: "7. Do you provide chairs to match the table?",
    answer:
      "We can recommend and coordinate dining chairs to complement your table's style, finish and upholstery, and where included in the project scope, supply them as part of the set.",
  },
  {
    question: "8. How do I keep a dining table looking its best?",
    answer:
      "Use coasters and placemats, wipe spills promptly with a soft damp cloth and avoid abrasive cleaners. We give you care guidance specific to the tabletop material you choose.",
  },
  {
    question: "9. How long does a custom dining project take?",
    answer:
      "A dining table or sideboard typically takes a few weeks from design approval, depending on materials and finishing. A full dining room with panelling and cabinetry takes longer, and we confirm your timeline after our assessment.",
  },
]

export const bathroomFaqs: FAQItem[] = [
  {
    question: "1. What toilet and bathroom cabinetry do you offer?",
    answer:
      "We design vanity units, mirror cabinets, tall storage units, over-toilet shelving and recessed niches, all made to measure for your bathroom or guest toilet.",
  },
  {
    question: "2. Are your bathroom cabinets resistant to water and humidity?",
    answer:
      "Yes. We use moisture-resistant and waterproof materials, sealed edges and hardware suited to wet areas. Wall-hung designs also keep cabinets off the floor, away from standing water.",
  },
  {
    question: "3. Which countertop and basin options are available?",
    answer:
      "We offer sintered stone, quartz and other durable surfaces, with countertop, undermount or integrated basins. We help you pick a combination that is beautiful and easy to clean.",
  },
  {
    question: "4. Can you include a lit or anti-fog mirror?",
    answer:
      "Yes. We can supply or integrate LED mirrors and mirror cabinets with lighting, and include demisting options where specified, so your mirror stays clear after a hot shower.",
  },
  {
    question: "5. Should I choose a wall-hung or floor-standing vanity?",
    answer:
      "Wall-hung vanities make a bathroom feel more spacious and are easier to clean beneath, while floor-standing units offer more storage. We recommend the best option for your space and wall type.",
  },
  {
    question: "6. Can you maximise storage in a small toilet or bathroom?",
    answer:
      "Yes. We use slim-depth vanities, corner units, mirror cabinets, over-toilet shelving and recessed wall niches to add storage without crowding the room.",
  },
  {
    question: "7. Do you work around my existing plumbing?",
    answer:
      "Yes. We design around your existing water and waste points wherever practical, and coordinate with your plumber if anything needs to be relocated.",
  },
  {
    question: "8. What hardware do you use in bathrooms?",
    answer:
      "We use soft-close, corrosion-resistant hinges, drawer runners and handles chosen for humid environments, so doors and drawers keep working smoothly over time.",
  },
  {
    question: "9. How do I care for my bathroom cabinets?",
    answer:
      "Wipe surfaces with a soft, damp cloth and mild cleaner, dry any standing water promptly and keep the room ventilated. Avoid harsh chemicals and abrasive pads on finishes and countertops.",
  },
]

export const wardrobeFaqs: FAQItem[] = [
  {
    question: "1. What wardrobe styles do you offer?",
    answer:
      "We design hinged-door, sliding-door, built-in, corner and open-concept wardrobes, as well as full walk-in closets. Each one is made to measure for your room, ceiling height and the way you like to dress.",
  },
  {
    question: "2. Can you design a walk-in closet?",
    answer:
      "Yes, wherever the space allows. A walk-in can include a central island with drawers, shoe walls, glass-front display sections for bags and accessories, a dressing table and full-length mirrors, all finished in one cohesive design.",
  },
  {
    question: "3. How can I customise the inside of my wardrobe?",
    answer:
      "You can choose double hanging rails, long-hanging sections for dresses and agbada, shelves, drawers, pull-out trouser racks, tie, belt and jewellery trays, shoe racks and luggage space. We plan the interior around your actual wardrobe so everything has a place.",
  },
  {
    question: "4. What door finishes and materials are available?",
    answer:
      "Options include matte or gloss lacquer, wood veneer, fluted panels, tinted glass in slim aluminium frames and mirrored doors. You can pair them with statement handles or go handle-less with push-to-open or recessed profiles.",
  },
  {
    question: "5. Do your wardrobes come with lighting?",
    answer:
      "We can add LED strips to hanging rails and shelves, motion-sensor lights that switch on when the doors open, and accent lighting for glass display sections, so you can see everything clearly at any time of day.",
  },
  {
    question: "6. Can you fit a wardrobe into an awkward space?",
    answer:
      "Yes. Because every wardrobe is made to measure, we can work floor-to-ceiling, around beams, sloped ceilings, alcoves and corners, making use of space that standard wardrobes leave empty.",
  },
  {
    question: "7. How do you keep clothes protected from humidity?",
    answer:
      "We use moisture-resistant boards and sealed edges, and plan ventilation into the design. Integrated lighting and well-spaced interiors also help air circulate, keeping clothes and shoes fresher in our climate.",
  },
  {
    question: "8. Can I add a dressing table or mirror to my wardrobe?",
    answer:
      "Yes. We can integrate a dressing table or vanity, full-length or pull-out mirrors and dedicated drawers for cosmetics and accessories, so your wardrobe doubles as a complete dressing area.",
  },
  {
    question: "9. How long does a custom wardrobe take?",
    answer:
      "A standard built-in wardrobe usually takes a few weeks from design approval, while a full walk-in closet takes longer because of its size and detailing. We confirm a project-specific timeline after measuring your space.",
  },
]

export const displayCabinetFaqs: FAQItem[] = [
  {
    question: "1. What can a display cabinet be used for?",
    answer:
      "Display cabinets showcase collectibles, glassware, china, awards, books, bags and décor. They protect your items from dust while turning them into a feature of the room.",
  },
  {
    question: "2. What glass options are available?",
    answer:
      "We offer clear, tinted (grey or bronze), fluted or reeded and frosted glass, using toughened glass for added safety. The choice depends on how visible you want your items to be.",
  },
  {
    question: "3. Can you add lighting inside the cabinet?",
    answer:
      "Yes. We integrate LED shelf and profile lighting, which you can operate with a switch or a door sensor, so your collection is beautifully lit at all times.",
  },
  {
    question: "4. What frame and body finishes can I choose?",
    answer:
      "Options include slim aluminium frames in black, champagne or gold, combined with lacquer or wood veneer bodies. We match the finish to your interior style.",
  },
  {
    question: "5. Can my display cabinet be lockable?",
    answer:
      "Yes. We can fit locks on glass doors and drawers to protect valuable or sentimental items.",
  },
  {
    question: "6. Can I combine display with closed storage?",
    answer:
      "Yes. A popular option is a glass-fronted upper section with closed drawers or doors below, giving you display space and hidden storage in one piece.",
  },
  {
    question: "7. Where can display cabinets be installed?",
    answer:
      "We install them in living and dining rooms, studies, hallways, walk-in closets, and in offices or showrooms. Each is sized to fit its space perfectly.",
  },
  {
    question: "8. Are the shelves adjustable and how much can they hold?",
    answer:
      "We can make shelves adjustable or fixed, in glass or wood, and design their thickness and support around the weight of the items you plan to display.",
  },
  {
    question: "9. How do I clean and maintain my display cabinet?",
    answer:
      "Use a soft microfibre cloth and a mild glass cleaner, and avoid abrasive products on frames and finishes. We give you care guidance for your specific materials at handover.",
  },
]

export const livingRoomFaqs: FAQItem[] = [
  {
    question: "1. What living room cabinetry do you design?",
    answer:
      "We design TV walls, media consoles, bookshelves, display units, storage cabinets and feature wall panelling. Each piece is made to measure so your living room feels organised, warm and ready for both family time and entertaining guests.",
  },
  {
    question: "2. Can you hide cables, decoders and other devices?",
    answer:
      "Yes. We build in cable channels and ventilated compartments for decoders, game consoles, routers and sound systems, so wires stay out of sight and devices can still be reached and operated easily.",
  },
  {
    question: "3. Can my living room cabinet match the rest of my home?",
    answer:
      "Yes. We can carry the same finishes, colours and detailing used in your kitchen, dining area or wall panels into your living room, creating a cohesive look throughout the home.",
  },
  {
    question: "4. Which finishes work well for living room cabinets?",
    answer:
      "Popular choices include warm wood veneers, fluted panels, stone or marble-effect accents, matte lacquers and slim metal trims in black, champagne or gold. We help you balance texture and colour with your furniture and flooring.",
  },
  {
    question: "5. Can you include lighting in the cabinetry?",
    answer:
      "Yes. We can add LED backlighting, shelf and display lighting, and soft ambient strips that highlight décor and create a relaxing atmosphere in the evenings.",
  },
  {
    question: "6. Can you combine open display and closed storage?",
    answer:
      "Absolutely. We mix open or glass-fronted shelves for books and décor with closed doors and drawers for everyday items, keeping the room styled while hiding clutter.",
  },
  {
    question: "7. Can the cabinet be wall-mounted or floating?",
    answer:
      "Yes. Floating, wall-hung units make a room feel lighter and are easier to clean under. We first assess your wall type to make sure it can carry the load, then use concealed fixings.",
  },
  {
    question: "8. Do you design for open-plan living and dining spaces?",
    answer:
      "Yes. We use cabinetry, panelling and lighting to define zones within an open-plan space, while keeping finishes consistent so the areas flow naturally together.",
  },
  {
    question: "9. How long does a living room cabinet project take?",
    answer:
      "A single media unit or bookshelf usually takes a few weeks from design approval, while a full feature wall with panelling and lighting takes longer. We share a project-specific timeline after our site assessment.",
  },
]

export const studyCabinetFaqs: FAQItem[] = [
  {
    question: "1. What study and home-office furniture do you make?",
    answer:
      "We design desks, bookshelves, filing and storage cabinets, home-office wall units and reading nooks, all made to measure so your study is productive, organised and comfortable.",
  },
  {
    question: "2. Can you design a home office for long working hours?",
    answer:
      "Yes. We set your desk height and depth for comfort, plan generous worktop space, add task lighting and position storage within easy reach, so you can work for hours without strain.",
  },
  {
    question: "3. How do you manage cables, power and devices?",
    answer:
      "We include cable grommets, under-desk cable trays, built-in power and USB modules and dedicated spaces for printers, routers and computer towers, keeping your workspace clean and practical.",
  },
  {
    question: "4. Will my bookshelves sag under heavy books?",
    answer:
      "No. We design shelf thickness, spans and supports around the weight of what you will store, and reinforce shelves meant for heavy books and files.",
  },
  {
    question: "5. Can you fit a study into a small room or a bedroom corner?",
    answer:
      "Yes. We can design wall-mounted or fold-down desks, compact study nooks and desks built into wardrobe or TV walls, giving you a dedicated workspace without needing a separate room.",
  },
  {
    question: "6. Can I get lockable storage for documents?",
    answer:
      "Yes. We can add lockable drawers and cabinets for important documents, laptops and valuables.",
  },
  {
    question: "7. Which finishes suit a study?",
    answer:
      "Warm wood veneers create a classic, focused feel, while matte lacquers and lighter tones keep things modern and bright. We can also add leather desk inlays, glass display sections or accent lighting.",
  },
  {
    question: "8. Do you design study areas for children?",
    answer:
      "Yes. We create durable, easy-to-clean study spaces for children, with storage for books and school supplies, and layouts that can be adjusted as they grow.",
  },
  {
    question: "9. How long does a study project take?",
    answer:
      "A desk or bookshelf typically takes a few weeks from design approval, while a full home-office wall takes longer. We confirm your timeline after our assessment.",
  },
]

export const tvCabinetFaqs: FAQItem[] = [
  {
    question: "1. What TV cabinet styles do you offer?",
    answer:
      "We design floating TV consoles, full TV feature walls, units combined with display shelving and panelled backdrops with integrated storage. Each design is tailored to your room, your screen and your style.",
  },
  {
    question: "2. Can you design around my TV size?",
    answer:
      "Yes. We design the cabinet around your TV's exact size and mounting method, and consider viewing distance and seating height so the screen sits at a comfortable eye level.",
  },
  {
    question: "3. How do you hide TV cables?",
    answer:
      "We build concealed cable channels behind the panels and inside the unit, with access points for power and HDMI, so your feature wall looks clean with no visible wires.",
  },
  {
    question: "4. Will my decoder, console and router have enough ventilation?",
    answer:
      "Yes. We include ventilated compartments and openings so devices stay cool, and we can use remote-friendly fronts so you can still control them with the doors closed.",
  },
  {
    question: "5. Can you integrate a soundbar or speakers?",
    answer:
      "Yes. We can design a recess or shelf for your soundbar and plan positions for surround speakers, with cable routing included in the design.",
  },
  {
    question: "6. Can my TV be wall-mounted on a panelled wall?",
    answer:
      "Yes. We reinforce the area behind the TV during installation so your bracket is mounted securely, and we finish the panelling neatly around it.",
  },
  {
    question: "7. Do you add lighting to TV walls?",
    answer:
      "We can add soft LED backlighting behind the TV and within shelves. It creates a premium look and helps reduce eye strain when watching in a dark room.",
  },
  {
    question: "8. Can the TV cabinet include storage for media and décor?",
    answer:
      "Yes. We combine drawers and closed cabinets for remotes, games and accessories with open or glass shelves for books, décor and family photos.",
  },
  {
    question: "9. How long does a TV cabinet project take?",
    answer:
      "A TV console typically takes a few weeks from design approval. A full TV wall with panelling, lighting and storage takes longer, and we confirm a timeline after measuring your space.",
  },
]

export const wallPanelFaqs: FAQItem[] = [
  {
    question: "What types of wall panelling do you offer?",
    answer:
      "We offer acoustic slatted wood panels, upholstered fabric panels, 3D fluted panels, mirrored and metallic feature trims, and floor-to-ceiling veneered boiserie.",
  },
  {
    question: "Can wall panels hide concealed doors and secret rooms?",
    answer:
      "Yes. We specialize in flush-fit hidden doors (jib doors) that seamlessly blend into the continuous wall panelling pattern.",
  },
  {
    question: "Do wall panels help with sound insulation?",
    answer:
      "Yes. Our acoustic slatted and upholstered wall panels significantly reduce echo and sound reverberation in bedrooms, media rooms, and living areas.",
  },
]

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  defaultOpenIndex?: number | null;
  className?: string;
}

function FAQ({
  faqs = aboutFaqs,
  title = "Frequently Asked Questions.",
  subtitle = "FAQs",
  description = "Need something cleared up? Here are our most frequently asked questions.",
  defaultOpenIndex = 0,
  className = "bg-[#f7f3ee] py-14 px-4 sm:px-6 md:py-20 md:py-28 lg:px-4",
}: FAQProps) {
  // Item 1 is open by default (index 0); on click, expands one open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={className}>
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
        {subtitle && (
          <p className="italic text-[#1f2440] text-sm md:text-[26px] mb-4 font-serif">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="font-serif text-[#1f2440] text-[28px] sm:text-[32px] md:text-[42px] leading-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-500 text-[14px] md:text-[14px] mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="px-0 sm:px-4 md:px-8 lg:px-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 py-5 text-left sm:py-6 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-[#1f2440] font-medium text-[14px] sm:text-[16px] md:text-[18px] pr-2 leading-relaxed">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-[10px] sm:text-xs">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed pb-5 pr-0 sm:pb-6 sm:pr-8 md:pr-10 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ