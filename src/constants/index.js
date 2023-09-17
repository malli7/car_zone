import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  new1,
  new2,
  new3,
  new4,
  paint1,
  paint2,
  paint3,
  paint4,
  repair1,
  repair2,
  repair3,
  repair4,
  wash1,
  wash2,
  wash3,
  wash4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "packages",
    title: "Packages",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Oil Changes",
    description:
      "Ensure your engine's peak performance with our quick and efficient oil change service.",
    icon: service1,
  },
  {
    title: "Wash & Clean",
    description:
      "Revitalize your vehicle's appearance with our comprehensive wash and cleaning treatment.",
    icon: service2,
  },
  {
    title: "ABS Breaks",
    description:
      "Trust our experts to fix ABS brake issues, enhancing your car's safety on the road.",
    icon: service3,
  },
  {
    title: "Transmission",
    description:
      "Keep your transmission running smoothly with our expert maintenance and repairs.",
    icon: service4,
  },
  {
    title: "Tires & Wheels",
    description:
      "Improve your car's traction and handling with our tire and wheel services.",
    icon: service5,
  },
  {
    title: "Engine Tuning",
    description:
      "Optimize your engine's performance and fuel efficiency with our precise tuning service.",
    icon: service6,
  },
];

export const packages = [
  {
    name: "Starter",
    price: "$25",
    tags: [
      {
        name: "Wiper Blade Installation",
        color: "blue-text-gradient",
      },
      {
        name: "Check Engine Light",
        color: "green-text-gradient",
      },
      {
        name: "Air Filter Replacement",
        color: "pink-text-gradient",
      },
      {
        name: "Starting and Charging",
        color: "blue-text-gradient",
      },
      {
        name: "Engine Flush Service",
        color: "green-text-gradient",
      },
      {
        name: "Transmission Fluid Service",
        color: "pink-text-gradient",
      },
      {
        name: "Brake Fluid Exchange",
        color: "blue-text-gradient",
      },
      {
        name: "Coolant Drain and Fill",
        color: "green-text-gradient",
      },
      {
        name: "Headlight Restoration",
        color: "pink-text-gradient",
      },
      {
        name: "Small Bulb Installation",
        color: "blue-text-gradient",
      },
      {
        name: "Cabin Air Filter Install",
        color: "green-text-gradient",
      },
      {
        name: "Spring Maintenance",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Advance",
    price: "$40",
    tags: [
      {
        name: "Spring Maintenance",
        color: "blue-text-gradient",
      },
      {
        name: "Summer Maintenance",
        color: "green-text-gradient",
      },
      {
        name: "Winter Maintenance",
        color: "pink-text-gradient",
      },
      {
        name: "Smoke Test Diagnostic Service",
        color: "blue-text-gradient",
      },
      {
        name: "A/C System Leak Evaluation",
        color: "green-text-gradient",
      },
      {
        name: "Steering and Suspension System",
        color: "pink-text-gradient",
      },
      {
        name: "Transmission service",
        color: "blue-text-gradient",
      },
      {
        name: "2nd A/C System Reapir Evaluation",
        color: "green-text-gradient",
      },
      {
        name: "Small Bulb Installation",
        color: "pink-text-gradient",
      },
      {
        name: "Cranks No Start Diagnostic Service",
        color: "blue-text-gradient",
      },
      {
        name: "Engine Cooling System Check",
        color: "green-text-gradient",
      },
      {
        name: "Headlight Restoration",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Premium",
    price: "$50",
    tags: [
      {
        name: "Spring Maintenance",
        color: "blue-text-gradient",
      },
      {
        name: "Summer Maintenance",
        color: "green-text-gradient",
      },
      {
        name: "Winter Maintenance",
        color: "pink-text-gradient",
      },
      {
        name: "Smoke Test Diagnostic Service",
        color: "blue-text-gradient",
      },
      {
        name: "A/C System Leak Evaluation",
        color: "green-text-gradient",
      },
      {
        name: "Steering and Suspension System",
        color: "pink-text-gradient",
      },
      {
        name: "Transmission Service",
        color: "blue-text-gradient",
      },
      {
        name: "2nd A/C System Reapir Evaluation",
        color: "green-text-gradient",
      },
      {
        name: "Small Bulb Installation",
        color: "pink-text-gradient",
      },
      {
        name: "Cranks No Start Diagnostic Service",
        color: "blue-text-gradient",
      },
      {
        name: "Engine Cooling System Check",
        color: "green-text-gradient",
      },
      {
        name: "Headlight Restoration",
        color: "pink-text-gradient",
      },
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I've been a customer for years, and this place never disappoints. The wash and repair services are top-notch, and the team is friendly and professional. My car has never looked better, and I always feel safe on the road after their repairs. Highly recommended!",
    name: "Sara Lee",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I brought my car in for an oil change and a wash, and I couldn't be happier with the results. The staff here is efficient, and they truly care about the well-being of your vehicle. I'll definitely be returning for all my car care needs.",
    name: "Chris Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I had a brake issue that needed immediate attention. These guys not only fixed it quickly but also explained everything in a way I could understand. Their transparency and expertise were greatly appreciated. This is my go-to place for car maintenance now!",
    name: "Lisa Wang",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const imageMap = {
  newCars: [new1, new2, new3, new4],
  carPaint: [paint1, paint2, paint3, paint4],
  carWash: [wash1, wash2, wash3, wash4],
  Repairing: [repair1, repair2, repair3, repair4],
  default: [],
};
