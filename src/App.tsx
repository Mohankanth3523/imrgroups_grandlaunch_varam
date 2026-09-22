import { Amenities } from "./components/Amenities";
import { Announcement } from "./components/Announcement";
import { Approvals } from "./components/Approvals";
import { Closing } from "./components/Closing";
import { Countdown } from "./components/Countdown";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Location } from "./components/Location";
import { MasterPlan } from "./components/MasterPlan";
import { PriceHighlight } from "./components/PriceHighlight";
import { SiteVisit } from "./components/SiteVisit";
import { StickyBar } from "./components/StickyBar";

function App() {
  return (
    <div className="app-shell relative mx-auto min-h-screen max-w-app overflow-hidden shadow-[0_0_120px_rgba(11,48,73,0.10)]">
      <Hero />
      <Announcement />
      <Countdown />
      <Intro />
      <PriceHighlight />
      <Approvals />
      <Amenities />
      <MasterPlan />
      <Location />
      <SiteVisit />
      <Closing />
      <StickyBar />
    </div>
  );
}

export default App;
