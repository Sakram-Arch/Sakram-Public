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
        Sakram is iSPIRT's proposed solution to deal with the growing complexities of the cybersecurity world. 
        It is a comprehensive practice designed to help organizations strengthen their cybersecurity defenses 
        and protect their digital assets, along with those of their partners and customers. It's built on the 
        principle of continuous execution, facilitating what we call an <strong>"Always Secure"</strong> system
        </p>
        </div>
      </div>
    </section>
  );
}
