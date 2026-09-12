import type { IconName } from "@/app/components/Icon";

/**
 * Every string on the landing page lives here, mirroring the `renderVals()`
 * block of the design source (project/ManagerOX Landing.dc.html).
 *
 * Icon tints are stored as utility classes rather than raw hex so Tailwind can
 * see them at build time.
 */

export const nav = {
  brand: { lead: "Manager", accent: "OX" },
  tagline: "Organize · Engage · Grow",
  links: [
    { label: "Home", href: "#", active: true },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#industries" },
    { label: "Why ManagerOX", href: "#why" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Get Started Free",
};

export const hero = {
  eyebrow: "All-in-One CRM for Modern Businesses",
  /** Rendered with the line breaks the design specifies. */
  headingLines: ["Manage Relationships.", "Drive Growth.", "Do More with"],
  headingAccent: "ManagerOX.",
  body: "A powerful, easy-to-use CRM that helps you manage customers, streamline your sales process, and build lasting business relationships.",
  primaryCta: "Get Started Free",
  secondaryCta: "Watch Demo",
  assurancesInline: ["No credit card required", "Setup in minutes"],
  assurancesBlock: ["Trusted by growing businesses"],
  annotation: { first: "↖ Your Business", second: "in Your Hands" },
};

type Feature = {
  icon: IconName;
  title: string;
  desc: string;
  tint: string;
  ink: string;
};

export const featuresSection = {
  eyebrow: "Powerful Features",
  heading: "Everything You Need in One Platform",
  body: "ManagerOX brings your people, processes, and data together to help you work smarter and grow faster.",
};

export const features: Feature[] = [
  {
    icon: "person_add",
    title: "Lead & Contact Management",
    desc: "Capture, organize, and track every lead and customer.",
    tint: "bg-blue-100",
    ink: "text-blue-600",
  },
  {
    icon: "filter_alt",
    title: "Sales Pipeline",
    desc: "Visualize your deals and move them to closure.",
    tint: "bg-green-100",
    ink: "text-green-600",
  },
  {
    icon: "event_available",
    title: "Task & Activity Tracking",
    desc: "Stay on top of your follow-ups and meetings.",
    tint: "bg-orange-100",
    ink: "text-orange-600",
  },
  {
    icon: "monitoring",
    title: "Reports & Analytics",
    desc: "Get real-time insights into your business performance.",
    tint: "bg-violet-100",
    ink: "text-violet-600",
  },
  {
    icon: "groups",
    title: "Team Collaboration",
    desc: "Work together, stay aligned, and achieve more.",
    tint: "bg-emerald-100",
    ink: "text-emerald-600",
  },
  {
    icon: "tune",
    title: "Customizable & Flexible",
    desc: "Tailor ManagerOX to fit your business needs.",
    tint: "bg-blue-100",
    ink: "text-blue-500",
  },
];

export const whySection = {
  eyebrow: "Why ManagerOX?",
  headingLines: ["A Smarter Way", "to Grow Your Business"],
  body: "Whether you're a small business or a large enterprise, ManagerOX gives you the tools to manage, engage, and grow — all in one place.",
  cta: "Learn More",
};

export const whyPoints: Feature[] = [
  {
    icon: "check_circle",
    title: "Easy to Use",
    desc: "Get started quickly with an intuitive interface.",
    tint: "bg-green-100",
    ink: "text-green-600",
  },
  {
    icon: "verified_user",
    title: "Secure & Reliable",
    desc: "Your data is protected with enterprise-grade security.",
    tint: "bg-blue-100",
    ink: "text-blue-600",
  },
  {
    icon: "trending_up",
    title: "Scalable for Any Business",
    desc: "From startups to large enterprises.",
    tint: "bg-violet-100",
    ink: "text-violet-600",
  },
  {
    icon: "support_agent",
    title: "Dedicated Support",
    desc: "We're here whenever you need help.",
    tint: "bg-orange-100",
    ink: "text-orange-600",
  },
];

export const industriesSection = {
  eyebrow: "Built for Every Industry",
  heading: "Trusted Across Industries",
  body: "ManagerOX adapts to your business needs, no matter your industry.",
};

export const industries: { icon: IconName; label: string }[] = [
  { icon: "apartment", label: "Real Estate" },
  { icon: "construction", label: "Construction" },
  { icon: "shopping_cart", label: "Retail & E-commerce" },
  { icon: "school", label: "Education" },
  { icon: "favorite", label: "Health & Wellness" },
  { icon: "work", label: "Professional Services" },
  { icon: "more_horiz", label: "And More" },
];

export const testimonialsSection = {
  eyebrow: "What Our Customers Say",
  heading: "Loved by Businesses Like Yours",
};

export const testimonials = [
  {
    quote:
      "ManagerOX has completely transformed how we manage our clients and sales pipeline. It's simple, powerful, and reliable.",
    name: "Ahsan Malik",
    role: "CEO, Zameen Group",
    initials: "AM",
  },
  {
    quote:
      "The best CRM we've used so far. Our team is more productive and our sales have grown significantly.",
    name: "Sara Khan",
    role: "Director, Al-Fatah",
    initials: "SK",
  },
  {
    quote:
      "ManagerOX gives us real-time insights and helps us stay organized. Highly recommended!",
    name: "Bilal Ahmed",
    role: "Founder, Skyline Developers",
    initials: "BA",
  },
];

export const cta = {
  eyebrow: "Get Started Today",
  heading: "Ready to Grow with ManagerOX?",
  body: "Join businesses that trust ManagerOX to manage their most important relationships.",
  primaryCta: "Get Started Free",
  secondaryCta: "Watch Demo",
  assurances: [
    "No credit card required",
    "Setup in minutes",
    "Trusted by growing businesses",
  ],
};

export const faqSection = {
  eyebrow: "Frequently Asked Questions",
  heading: "Got Questions? We've Got Answers.",
  cta: "View All FAQs",
};

export const faqs = [
  {
    question: "What is ManagerOX?",
    answer:
      "ManagerOX is an all-in-one CRM that helps you manage leads, contacts, deals, and tasks in a single easy-to-use platform.",
  },
  {
    question: "Can I try it for free?",
    answer:
      "Yes — start with a free plan, no credit card required. Upgrade whenever your team is ready.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Plans scale with your team size. See the Pricing page for full details, or contact us for enterprise pricing.",
  },
  {
    question: "Can I customize it for my business?",
    answer:
      "Absolutely. Custom fields, pipelines, and workflows let you tailor ManagerOX to how your business works.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is protected with enterprise-grade encryption, regular backups, and role-based access controls.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes — our support team is available Mon–Fri, with a full Help Center and product guides anytime.",
  },
];

export const footer = {
  blurb:
    "A modern CRM to help you manage relationships, streamline your sales process, and grow your business.",
  socials: [
    { mark: "in", label: "LinkedIn" },
    { mark: "f", label: "Facebook" },
    { mark: "x", label: "X" },
    { mark: "ig", label: "Instagram" },
  ],
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "Features", href: "#features" },
        { label: "Solutions", href: "#industries" },
        { label: "Pricing", href: "#" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Product Guide", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    rows: [
      { icon: "location_on", text: "Islamabad, Pakistan" },
      { icon: "mail", text: "info@managerox.com" },
      { icon: "call", text: "+92 300 1234567" },
      { icon: "schedule", text: "Mon – Fri, 9:00 AM – 6:00 PM" },
    ] satisfies { icon: IconName; text: string }[],
  },
  legal: "© 2026 ManagerOX. All rights reserved.",
  note: "Built for businesses that believe in better relationships.",
};
