import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
            परिचय
          </h2>
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed text-center">
                हमारी भजन मंडली पारंपरिक और आधुनिक भजनों का सुंदर संगम प्रस्तुत करती है। 
                Badi Mummy की मधुर आवाज़ और छोटा मंडली आकार हर आयोजन में आध्यात्मिक शान्ति लाता है। 
                श्री राम, श्री कृष्ण और श्याम बाबा के आशीर्वाद से हम आपके विशेष क्षणों को और भी पवित्र बनाते हैं।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
