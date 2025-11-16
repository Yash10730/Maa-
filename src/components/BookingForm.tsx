import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    eventType: "",
    preferredDate1: "",
    preferredDate2: "",
    location: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `नया बुकिंग अनुरोध:%0A
नाम: ${formData.name}%0A
मोबाइल: ${formData.mobile}%0A
ईमेल: ${formData.email}%0A
इवेंट प्रकार: ${formData.eventType}%0A
तारीख़ (पहला विकल्प): ${formData.preferredDate1}%0A
तारीख़ (दूसरा विकल्प): ${formData.preferredDate2}%0A
स्थान: ${formData.location}%0A
समय: ${formData.time}%0A
संदेश: ${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/919351704524?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "बुकिंग अनुरोध भेजा गया!",
      description: "हम जल्द ही आपसे संपर्क करेंगे।",
    });

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      eventType: "",
      preferredDate1: "",
      preferredDate2: "",
      location: "",
      time: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="py-12 md:py-20 bg-devotional-pattern pb-24 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            बुकिंग / संपर्क
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-foreground">संपर्क जानकारी</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <a 
                  href="https://wa.me/919351704524" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">व्हाट्सएप</p>
                    <p className="text-muted-foreground">+91 9351704524</p>
                  </div>
                </a>

                <a 
                  href="tel:+919351704524"
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">कॉल करें</p>
                    <p className="text-muted-foreground">+91 9351704524</p>
                  </div>
                </a>

                <a 
                  href="mailto:dixitabhishek8525@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">ईमेल</p>
                    <p className="text-muted-foreground text-sm">dixitabhishek8525@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">पता</p>
                    <p className="text-muted-foreground">
                      Yogesh Residency, Near Marriage Garden,<br />
                      Opposite of CKS Hospital Road,<br />
                      Jaipur
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-foreground">बुकिंग फॉर्म</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Label htmlFor="name">नाम *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="mobile">मोबाइल *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="email">ईमेल (वैकल्पिक)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="eventType">इवेंट प्रकार *</Label>
                  <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kirtan">कीर्तन</SelectItem>
                      <SelectItem value="wedding">विवाह भजन</SelectItem>
                      <SelectItem value="birthday">जन्मदिन</SelectItem>
                      <SelectItem value="griha-pravesh">गृह-प्रवेश</SelectItem>
                      <SelectItem value="satsang">सत्संग</SelectItem>
                      <SelectItem value="other">अन्य</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date1">पसंदीदा तारीख़ 1 *</Label>
                    <Input
                      id="date1"
                      type="date"
                      required
                      value={formData.preferredDate1}
                      onChange={(e) => setFormData({ ...formData, preferredDate1: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="date2">पसंदीदा तारीख़ 2</Label>
                    <Input
                      id="date2"
                      type="date"
                      value={formData.preferredDate2}
                      onChange={(e) => setFormData({ ...formData, preferredDate2: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">स्थान *</Label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="time">अपेक्षित समय</Label>
                  <Input
                    id="time"
                    placeholder="उदाहरण: शाम 6 बजे"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="message">संदेश</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  अपनी बुकिंग भेजें
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
