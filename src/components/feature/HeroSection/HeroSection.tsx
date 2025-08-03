import { Button } from "@/components/ui/button";
import heroImage from "@assets/image/hero.png";

const HeroSection = () => {

    const heroInfo = [
        { total: 200, description: "International Brands" },
        { total: 2000, description: "High-Quality Products" },
        { total: 30000, description: "Happy Customers" },
    ]

    return (
        <section className="flex flex-col bg-gray px-small py-large sm:px-medium lg:flex-row md:px-large">
            <div className="flex flex-col gap-4 w-[100%] lg:w-[50%]">
                <h1 className="text-[56px] text-center font-extrabold w-[100%] lg:text-left sm:text-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="font-light text-center lg:text-left">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Button className="bg-black text-white rounded-2xl w-[100%] max-w-[160px] min-h-[48px] m-auto lg:m-0">Shop Now</Button>
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    {heroInfo.map((info, index) => (
                        <div key={index} className={`justify-self-center lg:justify-self-start ${index === heroInfo.length - 1 ? "col-span-2 lg:col-span-1 lg:jus" : ""}`}>
                            <p className="text-[40px]">{`${info.total.toLocaleString('en-US')}+`}</p>
                            <p className="font-light text-center lg:text-left">{info.description}</p>
                        </div>))}
                </div>
            </div>
            <div className="max-w-[560px] lg:w-[50%] m-auto text-center px-2">
                <img src={heroImage} className="w-[100%] max-w-[360px] h-[400px] object-[90%-100%] object-cover sm:object-[90%-100%] sm:h-[574px] sm:max-w-[100%]" />
            </div>
        </section>
    );
};

export default HeroSection;
