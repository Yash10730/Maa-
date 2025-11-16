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
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Maa Bhakti Bhajan Mandli
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                By Badi Mummy
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              "श्री राम • श्री कृष्ण • श्याम बाबा के आशीर्वाद से — आपके शुभ कार्यक्रम में भक्ति का सुंदर स्पर्श"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="https://wa.me/919351704524" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  व्हाट्सएप करें
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+919351704524">
                  <Phone className="mr-2 h-5 w-5" />
                  सीधा कॉल करें
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={badiMummyProfile} 
                alt="Badi Mummy - Maa Bhakti Bhajan Mandli lead singer in traditional devotional attire"
                className="relative rounded-3xl shadow-2xl max-w-md w-full border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
