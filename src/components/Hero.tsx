import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import badiMummyProfile from "@/assets/badi-mummy-profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-devotional-pattern via-background to-background">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--devotional-saffron))_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(var(--devotional-gold))_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Maa Bhakti Bhajan Mandli
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed px-4 lg:px-0">
              "श्री राम • श्री कृष्ण • श्याम बाबा के आशीर्वाद से — आपके शुभ कार्यक्रम में भक्ति का सुंदर स्पर्श"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4 px-4 lg:px-0">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/919351704524" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  व्हाट्सएप करें
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                asChild
              >
                <a href="tel:+919351704524">
                  <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                  सीधा कॉल करें
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2 px-4">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={badiMummyProfile} 
                alt="Maa Bhakti Bhajan Mandli lead singer in traditional devotional attire"
                className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full border-2 md:border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
