import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Full-Powered Experience for Desktop Browsing.",
    desc1: `The desktop view delivers a rich, expansive layout optimized for large screens, ensuring maximum functionality and detailed content display.`,
    desc2: `With multi-column layouts and high-resolution visuals, it offers users a comprehensive and immersive experience on larger devices.`,
    image: "/images/features/desktop_view.webp",
    imageDark: "/images/features/desktop_view.webp",
    width:1920,
    height:1024
  },
  {
    id: "tabTwo",
    title: "Perfect Balance for On-the-Go Browsing.",
    desc1: `The tablet view offers an adaptable layout for medium-sized screens, providing clear content and easy navigation with touch-friendly features.`,
    desc2: `Designed for mobility, it delivers a responsive experience without sacrificing essential functionality, ideal for users transitioning between devices.`,
    image: "/images/features/tablet_view.webp",
    imageDark: "/images/features/tablet_view.webp",
    width:768,
    height:1024
  },
  {
    id: "tabThree",
    title: "Effortless Access in the Palm of Your Hand.",
    desc1: `The mobile view offers a streamlined, single-column layout designed for small screens, ensuring easy navigation and quick access to content.`,
    desc2: `Optimized for speed, it features larger buttons and simplified menus, providing an intuitive browsing experience for users on the go.`,
    image: "/images/features/mobile_view.webp",
    imageDark: "/images/features/mobile_view.webp",
    width:360,
    height:480
  },
];

export default featuresTabData;
