export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  secondaryTagline: string;
  domain: string;
  websiteUrl: string;
  emails: {
    primary: string;
    enquiry: string;
    ceo: string;
    gmail: string;
  };
  phone: {
    display: string;
    raw: string;
    countryCode: string;
    whatsappUrl: string;
  };
  social: {
    linkedin?: string;
    instagram?: string;
  };
  brandColors: {
    navy: string;
    teal: string;
    lightTeal: string;
    amber: string;
  };
}

export const COMPANY: CompanyInfo = {
  name: "IraSoft Technologies",
  legalName: "IraSoft Technologies",
  tagline: "Engineering Technology for Business Growth",
  secondaryTagline: "Innovate • Automate • Transform",
  domain: "irasofttech.in",
  websiteUrl: "https://irasofttech.in",
  emails: {
    primary: "enquiry@irasofttech.in",
    enquiry: "enquiry@irasofttech.in",
    ceo: "ceo@irasofttech.in",
    gmail: "irasofttechnologies@gmail.com",
  },
  phone: {
    display: "+91 82470 303031",
    raw: "+9182470303031",
    countryCode: "+91",
    whatsappUrl: "https://wa.me/9182470303031?text=Hello%20IraSoft%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/irasofttech",
    instagram: "https://www.instagram.com/irasofttech",
  },
  brandColors: {
    navy: "#142B4A",
    teal: "#159B9A",
    lightTeal: "#EAF7F6",
    amber: "#F59E0B",
  },
};

