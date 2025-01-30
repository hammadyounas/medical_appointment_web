import CardsSection from "@/components/CardsSection";
import Healthcare_Solutions from "@/components/Healthcare_Solutions";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      <Healthcare_Solutions />
      <CardsSection />
        
    </div>
  );
}
