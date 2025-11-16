import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    फीस कैसे तय होती है?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    कार्यक्रम की अवधि, दूरी, और उपकरणों पर निर्भर। कॉल/व्हाट्सएप पर हिसाब बताया जाएगा।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    क्या उपकरण आप लाते हैं?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    हाँ — हार्मोनियम, तबला/ढोलक, और जरुरत अनुसार छोटा स्पीकर। बड़े सेटअप के लिए अलग से व्यवस्था हो सकती है।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    क्या आप Jaipur के बाहर भी जाते हैं?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    हाँ, लेकिन Jaipur के बाहर यात्रा शुल्क अतिरिक्त होगा। इसकी चर्चा हम कॉल/व्हाट्सएप पर करेंगे।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    मंडली में कितने सदस्य हैं?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    हमारी मंडली छोटी और पारिवारिक है — Badi Mummy के साथ 2-3 सहायक कलाकार। यह छोटे-मध्यम आयोजनों के लिए उपयुक्त है।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    बुकिंग कैसे कन्फर्म होगी?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    कॉल या व्हाट्सएप पर हमारी टीम आपकी तारीख़ और समय की उपलब्धता चेक करेगी। उसके बाद आपको कन्फर्मेशन मिलेगा।
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 border-2 border-accent/30 bg-accent/5">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">नोट:</strong> शुल्क कार्यक्रम की अवधि, स्थान एवं उपकरणों के आधार पर तय होंगे। 
                Jaipur के बाहर यात्रा पर अतिरिक्त यात्रा शुल्क होगा — कॉल/व्हाट्सएप पर चर्चा कर के चुकाना होगा।
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
