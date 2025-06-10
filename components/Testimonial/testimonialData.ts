import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Startup Founder @InnoTech",
    image: image1,
    content:
      "Using the AI-Powered Website Builder was a game changer for our startup. We built and launched our landing page in under an hour—no coding required. The prompt-based interface is intuitive and saved us thousands in development costs.",
  },
  {
    id: 2,
    name: "Jhon Sharma",
    designation: "College Student @MIT",
    image: image2,
    content:
      "I used this platform for my final year project and it worked perfectly! Just by describing what I wanted, I got a fully functional website for my portfolio. Deployment was just a click away—super helpful for non-tech users like me.",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    designation: "Freelance Designer",
    image: image1,
    content:
      "As a freelancer, I needed a professional-looking portfolio without spending days on design and code. This tool delivered exactly that. The AI even suggested layouts and content structure based on my prompt!",
  },
  {
    id: 4,
    name: "Ravi Deshmukh",
    designation: "Small Business Owner @CraftCorner",
    image: image2,
    content:
      "I never imagined I could build a website for my handmade crafts business all by myself. This builder made it so easy—type what you need, and it just creates it. I had my online shop live within a day.",
  },
];


