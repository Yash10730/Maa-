import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <BookingForm />
      <FAQ />
      <Footer />

      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Maa Bhakti Bhajan Mandli",
          "description": "पारंपरिक भजन मंडली — श्री राम • श्री कृष्ण • श्याम बाबा के आशीर्वाद से कीर्तन, भजन, विवाह व गृह-प्रवेश के लिए बुकिंग",
          "image": "https://lovable.dev/opengraph-image-p98pqg.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Yogesh Residency, Near Marriage Garden, Opposite of CKS Hospital Road",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "telephone": "+919351704524",
          "email": "dixitabhishek8525@gmail.com",
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "50"
          }
        })}
      </script>
    </div>
  );
};

export default Index;
