import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronDown,
  Flame,
  Fuel,
  Gift,
  House,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  PhoneCall,
  Radio,
  SendHorizontal,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { BrandLogo } from "@/components/home/brand-logo";
import Navbar from "@/components/home/navbar";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

type OfferItem = {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  icon: LucideIcon;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

const services: ServiceItem[] = [
  {
    title: "HAULAGE / DISTRIBUTION",
    description:
      "Transport logistics, cargo movements between the origin of the product and the consumer is one of our expertise. Distribution logistics or physical distribution of petroleum, ensuring safe and efficient transportation.",
    image: "/images/service-haulage.jpg",
    icon: Truck,
  },
  {
    title: "PETROLEUM PRODUCT MARKETING",
    description:
      "We have over 20 years of cognate experience in the buying and selling of refined petroleum products pushing the boundaries of imagination and innovation, solving complex supply challenges.",
    image: "/images/service-marketing.jpg",
    icon: Fuel,
  },
  {
    title: "LIQUEFIED PETROLEUM GAS (LPG)",
    description:
      "Considered a clean and environmentally-friendly source of energy. If made available as a cooking energy fuel it could help to reduce the negative health impacts. Clean, efficient energy for homes and businesses across Nigeria.",
    image: "/images/service-lpg.jpg",
    icon: Flame,
  },
];

const offers: OfferItem[] = [
  {
    tag: "CONVENIENCE FIRST",
    title: "Home Delivery Service",
    description:
      "Experience the ultimate convenience with our doorstep fuel delivery. No more waiting in lines or worrying about fuel shortages.",
    bullets: [
      "Skip queues and save valuable time",
      "Avoid fuel shortages completely",
      "Energy delivered straight to your doorstep",
      "Reliable scheduling that fits your routine",
    ],
    image: "/images/offer-home-delivery.jpg",
    icon: House,
  },
  {
    tag: "FLEXIBLE SOLUTIONS",
    title: "Retail & Bulk Gas Supply",
    description:
      "From individual households to large-scale industrial operations, we provide flexible gas supply solutions at competitive rates.",
    bullets: [
      "Commercial volumes readily available",
      "Competitive retail pricing guaranteed",
      "Consistent quality assurance standards",
      "Tailored for industrial applications",
    ],
    image: "/images/offer-retail-bulk.jpg",
    icon: Package,
  },
  {
    tag: "REWARDS & BENEFITS",
    title: "Customer Loyalty Programs",
    description:
      "Join our loyalty program and enjoy exclusive benefits designed to reward your continued trust and patronage.",
    bullets: [
      "Exclusive rewards points on every purchase",
      "Member-only discounts and special offers",
      "Cashback rewards on bulk orders",
      "Free products & exclusive merchandise",
    ],
    image: "/images/offer-loyalty.jpg",
    icon: Gift,
  },
];

const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Special Offers", href: "#offers" },
];

const footerServices = [
  "Haulage & Distribution",
  "Petroleum Marketing",
  "LPG Solutions",
  "Home Delivery",
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: MessageSquare },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "LinkedIn", href: "https://linkedin.com", icon: BriefcaseBusiness },
  { label: "Twitter", href: "https://x.com", icon: Radio },
];

const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-20";

export default function Home() {
  const hasLogo = fs.existsSync(path.join(process.cwd(), "public", "logo.png"));

  return (
    <main className="overflow-x-hidden bg-white text-slate-900">
      <Navbar hasLogo={hasLogo} navItems={navItems} />

      <section
        id="home"
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-sky-950 pb-16 pt-28 sm:min-h-[720px] sm:pb-20 sm:pt-32 lg:min-h-[980px] lg:pt-36"
      >
        <Image
          src="/images/hero-refinery-night.png"
          alt="Illuminated petroleum refinery at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-sky-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950 via-sky-950/70 to-sky-950/20" />

        <div className={`${containerClass} relative z-10`}>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <span className="rounded-lg border border-orange-500/30 bg-orange-600/20 px-4 py-1 text-sm font-bold uppercase tracking-widest text-orange-200">
              PREMIUM ENERGY SOLUTIONS
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
              Your Trusted Petroleum Partner
            </h1>
            <p className="mt-5 max-w-3xl text-base font-light text-white/80 sm:text-lg md:text-2xl">
              Home Delivery &bull; Retail &amp; Bulk Supply &bull; LPG Solutions
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-8 py-4 font-heading text-lg font-bold text-white shadow-[0px_0px_15px_0px_rgba(255,98,0,0.30)] transition-all hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Request Home Delivery
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-heading text-lg font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center sm:flex">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Scroll
            </span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-white py-24 lg:py-28">
        <div
          className={`${containerClass} grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16`}
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              ABOUT US
            </p>
            <h2 className="mt-2 max-w-2xl font-heading text-3xl font-extrabold leading-tight text-sky-950 sm:text-4xl">
              Reliability, convenience, and care in every drop.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-7 text-gray-600 sm:text-lg">
              <p>
                At Gegu Oil, we believe that how you handle your vehicle
                reflects your inner drive &mdash; and every journey deserves
                reliability, convenience, and care.
              </p>
              <p>
                As your trusted petroleum partner, we offer seamless fuel
                solutions tailored to your lifestyle and business.
              </p>
              <div className="rounded-lg border-l-4 border-orange-600 bg-sky-950/5 p-5 text-sky-950">
                <p className="font-medium">
                  Whether you need to fill up at the pump, get gas delivered to
                  your doorstep, or power a full-scale operation, we&apos;ve got
                  you covered&mdash;on time and with zero hassle.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-xl bg-orange-600/10" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-xl bg-sky-950/5" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
                <Image
                  src="/images/about-refinery.jpg"
                  alt="Large petroleum refinery complex"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex max-w-[290px] items-center gap-3 rounded-xl border border-gray-100 bg-white/95 p-3 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-none sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-orange-600 text-white sm:h-12 sm:w-12">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-sky-950 sm:text-base">
                  20+ Years
                </p>
                <p className="text-sm text-gray-500">Cognate Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-28 bg-slate-50 py-24 lg:py-28"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className={containerClass}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              WHAT WE DO BEST
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-sky-950 sm:text-4xl">
              Our Core Services
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-950/30 to-transparent" />
                    <span className="absolute right-4 top-4 font-heading text-6xl font-extrabold text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-950 text-orange-500 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="space-y-4 p-7">
                    <h3 className="font-heading text-xl font-bold leading-tight text-sky-950">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="offers" className="scroll-mt-28 bg-white py-24 lg:py-32">
        <div className={containerClass}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              SPECIAL PROGRAMS
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-sky-950 sm:text-5xl">
              Exclusive Offers &amp; Solutions
            </h2>
          </div>

          <div className="mt-14 space-y-10">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={offer.title}
                  className="overflow-hidden rounded-3xl border-2 border-gray-200 bg-gray-50 shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className={`relative h-72 sm:h-96 lg:h-full lg:min-h-[440px] ${reverse ? "lg:order-2" : ""}`}
                    >
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div
                      className={`space-y-6 p-6 sm:p-8 lg:p-16 ${reverse ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600/10 text-orange-600 ring-1 ring-orange-600/20">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                            {offer.tag}
                          </p>
                          <h3 className="mt-1 font-heading text-2xl font-extrabold text-sky-950 sm:text-3xl">
                            {offer.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base leading-7 text-gray-600">
                        {offer.description}
                      </p>

                      <ul className="space-y-3 pt-1">
                        {offer.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-orange-600 text-white">
                              <Check className="h-4 w-4" />
                            </span>
                            <span className="leading-6">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 relative overflow-hidden bg-sky-950 py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.16) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className={containerClass}>
          <div className="rounded-3xl border border-white/10 bg-cyan-900 p-6 shadow-2xl sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-7 text-white">
                <div>
                  <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                    Ready to Refuel?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-7 text-white/80">
                    Let us make fueling easier for you. Contact us today to
                    learn more about our products and how we can serve you
                    better.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-orange-500">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Call Us 24/7</p>
                      <p className="font-heading text-lg font-bold">
                        +234 905 410 8284
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-orange-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Email Us</p>
                      <p className="font-heading text-lg font-bold">
                        info@geguoil.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-orange-500">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Head Office</p>
                      <p className="font-heading text-lg font-bold leading-snug">
                        Kubwa-Gwarinpa / Zuba Expressway, Abuja
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:info@geguoil.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-8 py-4 font-heading text-lg font-bold text-white shadow-[0px_0px_15px_0px_rgba(255,98,0,0.30)] transition-colors hover:bg-orange-500"
                >
                  Email Us Directly
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-sky-950">
                  Send a Message
                </h3>
                <form className="mt-6 space-y-4" aria-label="Contact form">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition-colors focus:border-sky-950"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition-colors focus:border-sky-950"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone-number"
                      name="phone"
                      type="tel"
                      placeholder="+234 ..."
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition-colors focus:border-sky-950"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service-interest"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service-interest"
                      name="serviceInterest"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-700 outline-none transition-colors focus:border-sky-950"
                      defaultValue="Haulage & Distribution"
                    >
                      <option>Haulage & Distribution</option>
                      <option>Petroleum Product Marketing</option>
                      <option>LPG Solutions</option>
                      <option>Home Delivery Service</option>
                      <option>Retail & Bulk Gas Supply</option>
                      <option>Customer Loyalty Program</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition-colors focus:border-sky-950"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-950 px-5 py-4 font-heading text-base font-bold text-white transition-colors hover:bg-sky-900"
                  >
                    Submit Request
                    <SendHorizontal className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-900 text-white">
        <div className={`${containerClass} py-16`}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <BrandLogo hasLogo={hasLogo} size="md" />
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                Your trusted petroleum partner offering seamless fuel solutions
                tailored to your lifestyle and business across Nigeria.
              </p>

              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-orange-400"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="mt-6 space-y-3">
                {footerQuickLinks.map((linkItem) => (
                  <li key={linkItem.href}>
                    <Link
                      href={linkItem.href}
                      className="text-sm text-white/60 transition-colors hover:text-orange-400"
                    >
                      {linkItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="mt-6 space-y-3">
                {footerServices.map((service) => (
                  <li key={service} className="text-sm text-white/60">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Contact Info
              </h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-orange-600" />
                  <span>
                    Kubwa-Gwarinpa / Zuba Expressway, Abuja, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <PhoneCall className="h-4 w-4 flex-none text-orange-600" />
                  <span>+234 905 410 8284</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <Mail className="h-4 w-4 flex-none text-orange-600" />
                  <span>info@geguoil.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Gegu Oil. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="transition-colors hover:text-white/70">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-white/70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

