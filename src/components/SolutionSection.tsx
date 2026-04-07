import { Shield } from "lucide-react";

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sakram-orange/10">
          <Shield className="text-sakram-orange" size={32} />
        </div>

        <h2 className="text-3xl font-bold text-sakram-brown sm:text-4xl">
          About Sakram
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-sakram-text">
          At iSPIRT, <strong className="text-sakram-brown">Sakram</strong> is
          our proposed solution to comprehensively deal with cybersecurity
          threats. It is a comprehensive practice designed to help organizations
          strengthen their cybersecurity defenses and protect their digital
          assets, along with those of their partners and customers.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-sakram-text">
          Built on the principle of{" "}
          <strong className="text-sakram-brown">continuous execution</strong>,
          Sakram facilitates what we call an{" "}
          <span className="inline-block rounded-full bg-sakram-green/10 px-4 py-1 font-semibold text-sakram-green">
            Always Secure
          </span>{" "}
          system — an ongoing practice rather than a one-time project.
        </p>

        <p className="mt-6 text-base leading-relaxed text-sakram-text">
          An effective cybersecurity program requires continuous focus and
          adaptation from every department and individual in the organization,
          working in loops to address alerts, issues, vulnerabilities, and
          changes as they happen.
        </p>

        <div className="mt-12 rounded-2xl border border-sakram-orange/20 bg-gradient-to-r from-sakram-orange/5 to-sakram-pink/5 p-8">
          <p className="text-sm font-medium text-sakram-brown">
            Sakram is a National Level DPI — like Aadhaar for identity or UPI
            for payments, but for cybersecurity. Built for small vendors to
            build organizations that are resilient by design.
          </p>
        </div>
      </div>
    </section>
  );
}
