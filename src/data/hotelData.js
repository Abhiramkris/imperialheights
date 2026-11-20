export const hotelInfo = {
  name: "Gino Tourist Home",
  tagline: "Comfortable & Accessible Lodging in Kakkanad, Kochi",
  city: "Kakkanad, Kochi, Kerala",
  established: "1998",
  address: "Near Civil Station, Kakkanad, Kochi, Kerala – 682030",
  phone: "+91 98470 12345",
  whatsapp: "+91 98470 12345",
  email: "reservations@ginotouristhome.com",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  extraPersonRate: 350,
  taxNote: "Taxes as applicable by law",
  googleRating: "4.5",
  reviewCount: "480+",
  googleMapsUrl: "https://maps.google.com/?q=Kakkanad+Civil+Station+Kochi+Kerala",
  nearbyPoints: [
    { name: "Kakkanad Civil Station & Collectorate", distance: "2 mins (400 m)" },
    { name: "InfoPark Kochi Phase 1 & 2", distance: "6 mins (2.4 km)" },
    { name: "SmartCity Kochi", distance: "7 mins (2.8 km)" },
    { name: "Ernakulam North / South Railway Stations", distance: "20 mins (8.5 km)" },
    { name: "Cochin International Airport (COK)", distance: "45 mins (23 km)" },
  ]
};

export const roomCategories = [
  {
    id: "deluxe-king-ac",
    name: "Deluxe King A/C Room",
    type: "Rooms & Suites",
    price: 1850,
    bed: "King Size Comfort Bed",
    climate: "Split Air Conditioning",
    climateType: "ac",
    capacity: "Up to 3 Guests",
    size: "240 sq.ft (22 m²)",
    description: "Spacious air-conditioned room with king bed, pristine white linen, study desk, wardrobe, and modern attached bathroom.",
    longDescription: "Our Deluxe King A/C Room provides a restful sanctuary for business professionals and leisure travelers visiting Kakkanad and Kochi. Featuring a comfortable king-size mattress with fresh crisp linens, silent split air conditioning, work desk with power outlets, flat-screen LED TV with satellite channels, and a sparkling clean tiled attached bathroom with 24/7 hot water.",
    image: "/images/gino/gino_07_1cm-ZdUl.jpg",
    gallery: [
      "/images/gino/gino_07_1cm-ZdUl.jpg",
      "/images/gino/gino_12_1RBxeRq3.jpg",
      "/images/gino/gino_08_1wW__zvz.jpg"
    ],
    features: [
      "Silent Daikin/Voltas split air conditioning with remote",
      "Private attached bathroom with shower curtain and 24/7 hot water",
      "Wall-mounted Flat-screen LED TV with multi-language channels",
      "Dedicated wooden work desk, wardrobe & intercom telephone",
      "Daily fresh linen & attentive housekeeping"
    ]
  },
  {
    id: "executive-double-ac",
    name: "Executive Double A/C Room",
    type: "Rooms & Suites",
    price: 1650,
    bed: "Queen Double Bed",
    climate: "Split Air Conditioning",
    climateType: "ac",
    capacity: "Up to 2 Guests",
    size: "210 sq.ft (19 m²)",
    description: "Well-appointed climate-controlled room perfect for IT executives visiting InfoPark and SmartCity.",
    longDescription: "Tailored for IT professionals and corporate visitors needing a hassle-free stay near Kakkanad's tech hub. Features high-speed fiber Wi-Fi, ergonomic work seating, bedside reading lamps, split A/C, and rapid access to our ground-floor dining and front desk support.",
    image: "/images/gino/gino_13_1WbnGoOR.jpg",
    gallery: [
      "/images/gino/gino_13_1WbnGoOR.jpg",
      "/images/gino/gino_03_1I5BpHTm.jpg",
      "/images/gino/gino_08_1wW__zvz.jpg"
    ],
    features: [
      "Energy-efficient split air conditioning",
      "High-speed complimentary Wi-Fi across the room",
      "Attached modern washroom with western sanitary ware & mirror",
      "Bedside power outlets for laptop and mobile charging",
      "Direct room service & hot beverage delivery"
    ]
  },
  {
    id: "standard-double-non-ac",
    name: "Standard Double Non-A/C",
    type: "Rooms & Suites",
    price: 1150,
    bed: "Comfort Double Bed",
    climate: "High-Speed Ceiling Fan",
    climateType: "non-ac",
    capacity: "Up to 2 Guests",
    size: "190 sq.ft (18 m²)",
    description: "Clean, economical accommodation ideal for budget-conscious travelers, interviewees, and transit stays.",
    longDescription: "Offering honest, dependable comfort at direct desk pricing. Equipped with an attached private bathroom, continuous water supply, high-speed ceiling fan, clean bed linen, and secure room door locking.",
    image: "/images/gino/gino_12_1RBxeRq3.jpg",
    gallery: [
      "/images/gino/gino_12_1RBxeRq3.jpg",
      "/images/gino/gino_08_1wW__zvz.jpg"
    ],
    features: [
      "High-speed silent ceiling fan for cross-ventilation",
      "Clean attached bathroom with shower and hot water supply",
      "Daily room cleaning and fresh bath towels",
      "Wardrobe storage and mirror vanity"
    ]
  },
  {
    id: "family-suite-ac",
    name: "Family Comfort A/C Suite",
    type: "Rooms & Suites",
    price: 2450,
    bed: "King Bed + Extra Single Bed",
    climate: "Split Air Conditioning",
    climateType: "ac",
    capacity: "Up to 4 Guests",
    size: "340 sq.ft (31 m²)",
    description: "Generous room layout suited for families or groups traveling together, with direct lounge and dining access.",
    longDescription: "Designed for families attending events or traveling together in Kochi. Features flexible bedding configurations, ample floor space for luggage, television entertainment, air conditioning, and access to our executive lounge and in-house restaurant.",
    image: "/images/gino/gino_03_1I5BpHTm.jpg",
    gallery: [
      "/images/gino/gino_03_1I5BpHTm.jpg",
      "/images/gino/gino_07_1cm-ZdUl.jpg",
      "/images/gino/gino_10_152UIg0c.jpg",
      "/images/gino/gino_08_1wW__zvz.jpg"
    ],
    features: [
      "Spacious family layout accommodating up to 4 adults",
      "Powerful split air conditioning",
      "Private modern attached bathroom with hot shower",
      "Flat screen LED TV and high-speed Wi-Fi",
      "Close proximity to the executive guest waiting lounge"
    ]
  }
];

export const interactiveExperiences = [
  {
    id: 1,
    tag: "Prime Kakkanad Hub",
    title: "Centrally Situated in Kakkanad",
    description: "Located within walking distance of the Kakkanad Civil Station and minutes away from InfoPark Phase 1 & 2 and SmartCity.",
    image: "/images/gino/gino_01_1dUKQXr5.jpg",
    subtitle: "Strategic Location"
  },
  {
    id: 2,
    tag: "Restful Rooms",
    title: "AC & Non-AC Rooms",
    description: "Spotlessly clean bedrooms equipped with comfortable spring mattresses, attached bathrooms, LED TVs, and study desks.",
    image: "/images/gino/gino_07_1cm-ZdUl.jpg",
    subtitle: "Pristine Comfort"
  },
  {
    id: 3,
    tag: "In-House Dining",
    title: "Restaurant & Bar Facilities",
    description: "Enjoy hot, flavorful Kerala favorites, South Indian breakfast, and refreshing beverages in our on-site dining hall.",
    image: "/images/gino/gino_04_1eCHsywG.jpg",
    subtitle: "Fresh Dining"
  },
  {
    id: 4,
    tag: "Warm Reception",
    title: "24/7 Front Desk & Care",
    description: "Helpful, courteous front desk team ready around the clock for rapid check-ins, local cab bookings, and transit assistance.",
    image: "/images/gino/gino_02_1Euqs07q.jpg",
    subtitle: "24/7 Service"
  }
];

export const curatedServices = [
  {
    title: "Secure On-Site Parking",
    description: "Spacious vehicle and two-wheeler parking within premises with CCTV surveillance.",
    category: "Property Amenity",
    icon: "ShieldCheck"
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Fiber internet connectivity throughout rooms, reception lobby, and guest lounge.",
    category: "Connectivity",
    icon: "Wifi"
  },
  {
    title: "In-House Restaurant & Bar",
    description: "Freshly prepared Kerala specialties, biryanis, quick bites, and drinks on property.",
    category: "Dining",
    icon: "UtensilsCrossed"
  },
  {
    title: "24/7 Hot Water & Power Backup",
    description: "Uninterrupted power supply with generator backup and 24-hour hot water showers.",
    category: "Comfort",
    icon: "Zap"
  },
  {
    title: "Transit & Cab Assistance",
    description: "Quick taxi and auto arrangements to InfoPark, railway stations, and Cochin Airport.",
    category: "Convenience",
    icon: "Car"
  },
  {
    title: "24/7 Front Desk Reception",
    description: "Round-the-clock check-in, wake-up calls, room service, and local travel guidance.",
    category: "Hospitality",
    icon: "Clock"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Very convenient place to stay if you have work in InfoPark or the Kakkanad Collectorate. The rooms are clean, AC cools quickly, and the staff at the reception are polite and efficient. Great value for money in Kochi.",
    name: "Arun Mathew",
    tripType: "Business Travel",
    source: "Google Review"
  },
  {
    id: 2,
    quote: "Gino Tourist Home provides exactly what a frequent traveler needs — spotless beds, working hot water, quiet rooms, and safe car parking. The in-house restaurant is handy for a quick dinner after a long drive.",
    name: "Sudheesh Kumar",
    tripType: "Solo Traveler",
    source: "Google Review"
  },
  {
    id: 3,
    quote: "Stayed here for 3 days with family during an exam in Kakkanad. The Deluxe AC room was spacious and the attached bathroom was clean. Direct desk rates are transparent with no hidden surprises.",
    name: "Priya Chandran",
    tripType: "Family Stay",
    source: "Google Review"
  },
  {
    id: 4,
    quote: "Great location right near the Civil Station. Fast Wi-Fi helped me work from the room seamlessly. Staff arranged an early morning cab to Cochin Airport promptly.",
    name: "Fahad Rahman",
    tripType: "Work Trip",
    source: "Google Review"
  }
];

export const banquetFeatures = [
  {
    title: "Event & Meeting Hall",
    description: "Equipped hall space suitable for corporate gatherings, team meetings, or family functions.",
    icon: "Users"
  },
  {
    title: "Projector & AV Setup",
    description: "Screen projection setup and sound system for presentations and seminars.",
    icon: "Mic"
  },
  {
    title: "In-House Event Catering",
    description: "Delicious Kerala sadya, multi-dish buffets, and tea/snack services.",
    icon: "Utensils"
  },
  {
    title: "Central Kakkanad Location",
    description: "Conveniently reachable for attendees across Kochi, Aluva, and Ernakulam.",
    icon: "Sparkles"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Reception Lobby & Front Desk",
    category: "Lobby",
    image: "/images/gino/gino_01_1dUKQXr5.jpg",
    description: "Welcoming reception lobby with contemporary marble counter and world clocks."
  },
  {
    id: 2,
    title: "Check-in Desk Counter",
    category: "Lobby",
    image: "/images/gino/gino_02_1Euqs07q.jpg",
    description: "Efficient 24-hour reception desk ready to assist incoming guests."
  },
  {
    id: 3,
    title: "Executive Guest Lounge",
    category: "Lobby",
    image: "/images/gino/gino_03_1I5BpHTm.jpg",
    description: "Comfortable waiting lounge with wooden slatted ceiling, modern lighting, and plush sofas."
  },
  {
    id: 4,
    title: "Deluxe King Bedroom",
    category: "Rooms",
    image: "/images/gino/gino_07_1cm-ZdUl.jpg",
    description: "Bright, clean bedroom featuring king bed, blue runners, split AC, and study desk."
  },
  {
    id: 5,
    title: "Attached Clean Restroom",
    category: "Rooms",
    image: "/images/gino/gino_08_1wW__zvz.jpg",
    description: "Modern tiled bathroom with shower area, vanity mirror, and 24/7 hot water."
  },
  {
    id: 6,
    title: "In-House Restaurant & Cafe",
    category: "Dining",
    image: "/images/gino/gino_04_1eCHsywG.jpg",
    description: "Dining area featuring warm exposed brick accents and comfortable seating."
  },
  {
    id: 7,
    title: "Interior Green Feature Corridor",
    category: "Ambience",
    image: "/images/gino/gino_05_1S8IhMJ3.jpg",
    description: "Textured accent wall and tranquil pebble garden walkway."
  },
  {
    id: 8,
    title: "Dining Hall & Lounge",
    category: "Dining",
    image: "/images/gino/gino_06_1MMa731c.jpg",
    description: "Spacious restaurant area serving Kerala specialties and beverages."
  },
  {
    id: 9,
    title: "Executive Room Setup",
    category: "Rooms",
    image: "/images/gino/gino_12_1RBxeRq3.jpg",
    description: "Comfortable double bed room with bedside controls and reading lights."
  },
  {
    id: 10,
    title: "Room Workstation & Wardrobe",
    category: "Rooms",
    image: "/images/gino/gino_13_1WbnGoOR.jpg",
    description: "Functional room workspace with flat-screen TV and spacious wardrobe."
  },
  {
    id: 11,
    title: "Event & Meeting Space",
    category: "Events",
    image: "/images/gino/gino_16_1vjke-z8.jpg",
    description: "Air-conditioned multi-purpose hall equipped with projector screen."
  },
  {
    id: 12,
    title: "On-Site Refreshment Counter",
    category: "Dining",
    image: "/images/gino/gino_15_1-sHcFec.jpg",
    description: "Beverage and refreshment counter for guests and visitors."
  }
];

export const faqList = [
  {
    question: "What are the standard check-in and check-out timings?",
    answer: "Check-in is at 12:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can be accommodated based on room availability upon request."
  },
  {
    question: "How close is Gino Tourist Home to InfoPark and Kakkanad Civil Station?",
    answer: "We are situated in Kakkanad right near the Civil Station (about 2 minutes walk). InfoPark Phase 1 & 2 and SmartCity are just 5–7 minutes drive (2.4 km) from our property."
  },
  {
    question: "Are AC and Non-AC rooms available?",
    answer: "Yes, we offer both Split Air-Conditioned rooms and budget-friendly Non-AC rooms. All rooms feature clean attached private bathrooms with 24/7 hot water."
  },
  {
    question: "Is vehicle parking available at the property?",
    answer: "Yes, we provide secure on-site vehicle and two-wheeler parking for our staying guests with CCTV monitoring free of charge."
  },
  {
    question: "Is there an in-house restaurant or dining option?",
    answer: "Yes, we have an on-site restaurant serving breakfast, Kerala meals, and dinner, along with room service options."
  },
  {
    question: "How do I book directly at the best rate?",
    answer: "You can book directly using our website reservation form, call our desk directly, or click our WhatsApp button for immediate confirmation without third-party commission fees."
  }
];
