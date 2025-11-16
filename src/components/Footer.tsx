import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-primary/20 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Maa Bhakti Bhajan Mandli
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              श्रद्धा, भक्ति और सरलता
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <MessageCircle className="h-4 w-4" />
              </div>
              <a href="tel:+919351704524" className="block text-foreground hover:text-primary transition-colors">
                +91 9351704524
              </a>
              <a href="https://wa.me/919351704524" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                WhatsApp पर संपर्क करें
              </a>
            </div>

            <div className="space-y-2">
              <Mail className="h-4 w-4 text-primary mx-auto" />
              <a href="mailto:dixitabhishek8525@gmail.com" className="block text-foreground hover:text-primary transition-colors">
                dixitabhishek8525@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <MapPin className="h-4 w-4 text-primary mx-auto" />
              <p className="text-foreground">
                Yogesh Residency,<br />
                Near Marriage Garden,<br />
                Opposite of CKS Hospital Road,<br />
                Jaipur
              </p>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-border">
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2025 Maa Bhakti Bhajan Mandli. सर्वाधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Mobile Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary/20 p-2 sm:p-3 flex gap-2 md:hidden z-50 shadow-lg">
        <a
          href="https://wa.me/919351704524"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          व्हाट्सएप
        </a>
        <a
          href="tel:+919351704524"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-secondary text-secondary-foreground py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
        >
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
          कॉल करें
        </a>
      </div>
    </footer>
  );
};

export default Footer;
