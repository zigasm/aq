import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Demo privacy policy for World of Aquariums, covering analytics, cookies, and advertising placeholders.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <PageHero title="Privacy Policy" subtitle="This privacy page is a starter template for a content-focused aquarium blog demo." />
      <section className="space-y-4 border border-slate-300 bg-white p-5 text-sm leading-6">
        <p>World of Aquariums is a demo project and does not collect account information or process payments.</p>
        <p>We may use basic analytics and cookie technologies in a real production deployment to understand page performance.</p>
        <p>Advertisement areas on this website are placeholders and do not load third-party scripts in this demo build.</p>
        <p>Contact page fields are for interface demonstration only and are not transmitted to a backend service.</p>
      </section>
    </div>
  );
}
