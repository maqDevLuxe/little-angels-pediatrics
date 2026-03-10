import Navbar from "@/components/clinic/Navbar";
import Hero from "@/components/clinic/Hero";
import Certifications from "@/components/clinic/Certifications";
import ServicesSection from "@/components/clinic/ServicesSection";
import Environment from "@/components/clinic/Environment";
import GrowthMetrics from "@/components/clinic/GrowthMetrics";
import AdvancedCare from "@/components/clinic/AdvancedCare";
import DoctorProfiles from "@/components/clinic/DoctorProfiles";
import ClinicImage from "@/components/clinic/ClinicImage";
import Counters from "@/components/clinic/Counters";
import Blog from "@/components/clinic/Blog";
import Telemedicine from "@/components/clinic/Telemedicine";
import Testimonials from "@/components/clinic/Testimonials";
import AppointmentCTA from "@/components/clinic/AppointmentCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Certifications />
      <ServicesSection />
      <Environment />
      <GrowthMetrics />
      <AdvancedCare />
      <DoctorProfiles />
      <ClinicImage />
      <Counters />
      <Blog />
      <Telemedicine />
      <Testimonials />
      <AppointmentCTA />
    </div>
  );
};

export default Index;
