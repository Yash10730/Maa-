import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxhrr3o9FyVVKJx4of16A0GtUnaanHvVeB7OAqvmS1yFgRgjptoICwXy5kOXfUxgWOb/exec";
const SECRET_TOKEN = "Dixit@740";

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

  const buildWhatsAppMessage = (data: typeof formData) => {
    return (
      `नया बुकिंग अनुरोध:%0A` +
      `नाम: ${encodeURIComponent(data.name)}%0A` +
      `मोबाइल: ${encodeURIComponent(data.mobile)}%0A` +
      `ईमेल: ${encodeURIComponent(data.email || "")}%0A` +
      `इवेंट प्रकार: ${encodeURIComponent(data.eventType)}%0A` +
      `तारीख़ 1: ${encodeURIComponent(data.preferredDate1)}%0A` +
      `तारीख़ 2: ${encodeURIComponent(data.preferredDate2 || "")}%0A` +
      `स्थान: ${encodeURIComponent(data.location)}%0A` +
      `समय: ${encodeURIComponent(data.time || "")}%0A` +
      `संदेश: ${encodeURIComponent(data.message || "")}`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.eventType ||
      !formData.preferredDate1 ||
      !formData.location
    ) {
      toast({
        title: "कृपया आवश्यक जानकारी भरें",
        description: "सभी * वाले फ़ील्ड अनिवार्य हैं।",
      });
      return;
    }

    const payload = {
      ...formData,
      _token: SECRET_TOKEN,
    };

    const url = `${WEB_APP_URL}?token=${encodeURIComponent(SECRET_TOKEN)}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = null;
      try {
        data = JSON.parse(text);
      } catch {}

      if (res.ok && data?.status === "success") {
        toast({
          title: "बुकिंग सफल!",
          description: "आपकी जानकारी Google Sheet में सेव हो चुकी है।",
        });

        const waMsg = buildWhatsAppMessage(formData);
        window.open(`https://wa.me/919351704524?text=${waMsg}`, "_blank");

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
      } else {
        throw new Error(data?.message || "Submission failed");
      }
    } catch (err: any) {
      toast({
        title: "सबमिशन विफल",
        description: err?.message || "कृपया बाद में प्रयास करें।",
      });

      const waMsg = buildWhatsAppMessage(formData);
      window.open(`https://wa.me/919351704524?text=${waMsg}`, "_blank");
    }
  };

  return (
    <section id="booking" className="py-12 md:py-20 bg-devotional-pattern pb-24 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            बुकिंग / संपर्क
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* CONTACT CARD */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">संपर्क जानकारी</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <a
                href="https://wa.me/919351704524"
                target="_blank"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10"
              >
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">व्हाट्सएप</p>
                  <p className="text-muted-foreground">+91 9351704524</p>
                </div>
              </a>

              <a
                href="tel:+919351704524"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10"
              >
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">कॉल करें</p>
                  <p className="text-muted-foreground">+91 9351704524</p>
                </div>
              </a>

              <a
                href="mailto:dixitabhishek8525@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10"
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">ईमेल</p>
                  <p className="text-muted-foreground">dixitabhishek8525@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">पता</p>
                  <p className="text-muted-foreground">
                    Yogesh Residency, Near Marriage Garden,
                    <br />
                    Opposite CKS Hospital Road,
                    <br />
                    Jaipur
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BOOKING FORM */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">बुकिंग फॉर्म</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <Label>नाम *</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Mobile */}
                <div>
                  <Label>मोबाइल *</Label>
                  <Input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div>
                  <Label>ईमेल</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* FIXED SELECT */}
                <div>
                  <Label>इवेंट प्रकार *</Label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full border rounded-md p-2 mt-1 bg-background"
                  >
                    <option value="">चुनें</option>
                    <option value="kirtan">कीर्तन</option>
                    <option value="wedding">विवाह भजन</option>
                    <option value="birthday">जन्मदिन</option>
                    <option value="griha-pravesh">गृह-प्रवेश</option>
                    <option value="satsang">सत्संग</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>तारीख़ 1 *</Label>
                    <Input
                      type="date"
                      required
                      value={formData.preferredDate1}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate1: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>तारीख़ 2</Label>
                    <Input
                      type="date"
                      value={formData.preferredDate2}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate2: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label>स्थान *</Label>
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Time */}
                <div>
                  <Label>अपेक्षित समय</Label>
                  <Input
                    placeholder="उदाहरण: शाम 6 बजे"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div>
                  <Label>संदेश</Label>
                  <Textarea
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
