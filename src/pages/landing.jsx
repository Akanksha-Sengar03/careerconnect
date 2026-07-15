import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Build Your Dream Career
          <span className="flex items-center gap-2 sm:gap-6">
            with
            <img
              src="/logo.png"
              className="h-20 sm:h-28 lg:h-36 w-auto object-contain"
              alt="CareerConnect Logo"
            />
          </span>
        </h1>

        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl max-w-3xl mx-auto">
          Discover thousands of verified job opportunities, connect with leading
          companies, and take the next step toward your dream career with
          CareerConnect.
        </p>
      </section>

      {/* Buttons */}
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Explore Jobs
          </Button>
        </Link>

        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Hire Talent
          </Button>
        </Link>
      </div>

      {/* Companies */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <img src="/banner.jpeg" className="w-full rounded-xl" alt="Career Banner" />

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              For Job Seekers
            </CardTitle>
          </CardHeader>

          <CardContent>
            Search thousands of verified jobs, apply with one click,
            manage your applications, and track your interview progress.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              For Recruiters
            </CardTitle>
          </CardHeader>

          <CardContent>
            Post job openings, manage applications, discover skilled
            professionals, and hire the best talent faster.
          </CardContent>
        </Card>

      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </main>
  );
};

export default LandingPage;