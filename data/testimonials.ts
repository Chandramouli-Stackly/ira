export interface TestimonialItem {
  id: string;
  isVerifiedReview: boolean;
  clientName?: string;
  designation?: string;
  company?: string;
  feedback: string;
  category?: string;
  projectType?: string;
}

export const TESTIMONIAL_SECTION_HEADER = {
  heading: "What Our Clients Say",
  subheading:
    "Building technology partnerships through clear communication, practical solutions, and a steadfast commitment to business goals.",
  placeholderNotice:
    "At IraSoft Technologies, we believe in transparent, verified relationships. As client reviews are officially approved and released, they are published directly here.",
};

export const CORE_VALUE_PROPOSITIONS = [
  {
    title: "Business-First Engineering",
    description: "We don't build technology for technology's sake. Every line of code and ERP workflow is designed to solve a tangible business problem and generate operational ROI.",
    iconName: "Target"
  },
  {
    title: "Transparent Communication",
    description: "Clear milestone roadmaps, honest timelines, and proactive updates. You always know exactly what is being built, when it will be delivered, and how it will work.",
    iconName: "MessageSquare"
  },
  {
    title: "Scalable Architecture",
    description: "Solutions built on battle-tested frameworks like Next.js, Python, and PostgreSQL that scale seamlessly as your user volume and branches multiply.",
    iconName: "ShieldCheck"
  },
  {
    title: "End-to-End Ownership",
    description: "From requirement gathering and UI/UX design to production deployment, staff onboarding, and ongoing technical support, we manage the complete lifecycle.",
    iconName: "Sparkles"
  }
];

// Component is ready for future verified client testimonials
export const APPROVED_TESTIMONIALS: TestimonialItem[] = [];
