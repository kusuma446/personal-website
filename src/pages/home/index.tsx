import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import End from "./components/end";
// npm run dev

export default function HomeView() {
    return (
        <div className="bg-gray-800 text-gray-500 -top-16">
            <Hero />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Testimonial />
            <Contact />
            <End />
        </div>
    );
}