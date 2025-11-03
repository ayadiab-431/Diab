import HeroSection from "../../Components/HeroSection/HeroSection";
import OurStory from "../../Components/OurStory/OurStory";
import OurValues from "../../Components/OurValues/OurValues";

export default function AboutUsPage () {
    return (
        <div className="about-us">
            <HeroSection/>
            <OurStory/>
            <OurValues/>
        </div>
    );
}