import {
  Landmark,
  SearchCheck,
  Siren,
  Users,
  IterationCcw,
} from "lucide-react";

const pillars = [
  {
    icon: Landmark,
    title: "Governance & Leadership",
    description:
      "When the leadership is committed, cybersecurity becomes part of a company's culture rather than just a technical concern.",
  },
  {
    icon: SearchCheck,
    title: "Risk Management & Assessment",
    description:
      "Regular assessments help identify critical assets, vulnerabilities, and potential impacts. Understanding what needs the most protection helps you allocate resources efficiently.",
  },
  {
    icon: Siren,
    title: "Incident Response & Recovery",
    description:
      "Even strong defenses can fail. A well-tested incident response and recovery plan ensures quick detection, containment, and recovery while minimizing downtime and damage.",
  },
  {
    icon: Users,
    title: "Employee Awareness & Training",
    description:
      "Human error is still a leading cause of breaches. Regular training transforms employees from potential vulnerabilities into active defenders.",
  },
  {
    icon: IterationCcw,
    title: "Continuous Improvement",
    description:
      "Threats evolve daily, so your defenses must adapt too. Cybersecurity is an ongoing journey of learning, testing, and improvement.",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="bg-sakram-gray py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-sakram-brown sm:text-4xl">
          The Five Pillars of Resilience
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-sakram-text">
          In cybersecurity, risk never disappears — it only changes owners. A
          strong cybersecurity strategy rests on five pillars that work together
          to build organizational resilience.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-sakram-orange/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-sakram-green/10">
                <p.icon className="text-sakram-green" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-sakram-brown">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sakram-text">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
