import { ShieldCheck, TrendingUp, RefreshCw } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Beyond Defense",
    text: "Cybersecurity is no longer just about blocking threats or fulfilling compliance requirements. It plays a direct role in driving business growth and building long-term resilience.",
  },
  {
    icon: TrendingUp,
    title: "Business Continuity",
    text: "Instead of focusing only on how to prevent breaches, businesses now ask how to stay operational, recover quickly, and maintain trust when incidents happen.",
  },
  {
    icon: RefreshCw,
    title: "Foundation for Resilience",
    text: "This reflects an important shift from seeing cybersecurity as simple protection to recognizing it as a foundation for resilience across the entire organization.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-sakram-brown sm:text-4xl">
          Rethinking Cybersecurity
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-sakram-text">
          For a long time, cybersecurity was seen as a defensive measure — a
          burdensome cost handled by the IT team alone. As technology has
          evolved, so has our perspective. Today, cybersecurity needs to align
          with your business strategy, executive decisions, operational
          planning, and customer expectations.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-gray-100 bg-sakram-gray p-8 transition-shadow hover:shadow-md"
            >
              <h.icon className="mb-4 text-sakram-orange" size={36} />
              <h3 className="text-lg font-semibold text-sakram-brown">
                {h.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sakram-text">
                {h.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-sakram-text">
          Whether you&apos;re running an IT services company, a financial
          institution, a manufacturing unit, or a startup — your business runs
          on digital infrastructure. Data, applications, and platforms are core
          business assets, and when these are at risk, your entire business is
          at risk.
        </p>
      </div>
    </section>
  );
}
