import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Demo contact page for World of Aquariums. Static form UI with no backend processing.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageHero title="Contact" subtitle="This is a static demo contact page. Form submissions are not processed." />
      <section className="border border-slate-300 bg-white p-5">
        <form className="grid gap-4 md:max-w-2xl">
          <label className="text-sm font-semibold">Name<input className="mt-1 w-full border border-slate-300 p-2" /></label>
          <label className="text-sm font-semibold">Email<input type="email" className="mt-1 w-full border border-slate-300 p-2" /></label>
          <label className="text-sm font-semibold">Message<textarea rows={6} className="mt-1 w-full border border-slate-300 p-2" /></label>
          <button type="button" className="w-fit border border-ocean-900 bg-ocean-800 px-4 py-2 font-semibold text-white">Demo Submit</button>
        </form>
      </section>
    </div>
  );
}
