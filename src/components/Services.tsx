import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Home, Heart, Sparkles, Church } from "lucide-react";

const services = [
  {
    icon: Church,
    title: "कीर्तन व भजन संध्या",
    description: "मंदिर / सभा",
  },
  {
    icon: Heart,
    title: "विवाह भजन",
    description: "हल्दी / पीठी",
  },
  {
    icon: Sparkles,
    title: "जन्मदिन व सालगिरह भजन",
    description: "विशेष अवसर",
  },
  {
    icon: Home,
    title: "गृह-प्रवेश / सत्संग",
    description: "निजी अनुष्ठान",
  },
  {
    icon: Music,
    title: "मंदिर कीर्तन कार्यक्रम",
    description: "धार्मिक आयोजन",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            हमारी सेवाएँ
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            हमारी भजन मंडली पारंपरिक और आधुनिक भजनों का सुंदर संगम प्रस्तुत करती है
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center text-foreground mb-3 md:mb-4">हाइलाइट्स</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 md:space-y-4 text-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 md:mr-3 text-xl md:text-2xl">•</span>
                <span className="text-base md:text-lg">
                  <strong>अनुभवी मुखिया</strong> — मधुर, भक्तिमय आवाज़
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 md:mr-3 text-xl md:text-2xl">•</span>
                <span className="text-base md:text-lg">
                  हार्मोनियम, तबला/ढोलक उपलब्ध; छोटा माइक/स्पीकर उपलब्ध
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 md:mr-3 text-xl md:text-2xl">•</span>
                <span className="text-base md:text-lg">
                  छोटे-स्थानीय और मध्यम कार्यक्रमों के लिए उपयुक्त
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 md:mr-3 text-xl md:text-2xl">•</span>
                <span className="text-base md:text-lg">
                  यात्रा शुल्क और अतिरिक्त व्यवस्था के लिए कॉल पर चर्चा
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
