# IraSoft Technologies — Corporate Website

> **Engineering Technology for Business Growth**  
> Official Domain: [https://irasofttech.in/](https://irasofttech.in/)

A complete, responsive, conversion-focused corporate website for **IraSoft Technologies** built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Company Brand Identity & Details

* **Company Name:** IraSoft Technologies
* **Tagline:** Engineering Technology for Business Growth
* **Secondary Motto:** Innovate • Automate • Transform
* **Official Website:** [https://irasofttech.in/](https://irasofttech.in/)
* **Official Email Addresses:**
  * Project Enquiries: `enquiry@irasofttech.in`
  * Executive Office: `ceo@irasofttech.in`
  * Alternate: `irasofttechnologies@gmail.com`
* **Official Contact & WhatsApp Number:** `+91 82470 30301`
* **Brand Palette:**
  * Primary Navy: `#142B4A`
  * Dark Navy: `#0B192C`
  * Brand Teal: `#159B9A`
  * Light Teal: `#EAF7F6`
  * Neutral Surface: `#F5F8FA`
  * Text Primary: `#263445`
  * Text Muted: `#64748B`

---

## 2. Technology Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
* **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom brand theme tokens
* **Icons:** [Lucide React](https://lucide.dev/)
* **Transactional Email:** Resend REST API integration (with native `fetch` and fallback logger for local dev)
* **SEO:** Dynamic XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), OpenGraph meta, JSON-LD Schema (Organization, WebSite, Service, Breadcrumbs)

---

## 3. Website Structure & Pages

| Route | Page Name | Description |
| :--- | :--- | :--- |
| `/` | **Home Page** | High-converting landing page with 12 distinct sections, hero banners, service cards, featured hotel solution, industries overview, development methodology, and FAQs. |
| `/about` | **About Us** | Company philosophy, vision, mission, engineering approach, and core capabilities. |
| `/services` | **Services Overview** | Comprehensive breakdown of all 7 technology services with quick-action cards. |
| `/services/odoo-erp` | **Odoo ERP Development** | Implementation, custom module engineering, accounting, inventory, and sales automation. |
| `/services/hotel-management` | **Hotel & Resort Software** | Room availability grid, guest check-in/out folios, housekeeping boards, and revenue auditing. |
| `/services/custom-software` | **Custom Software** | Tailor-made business applications, internal portals, task engines, and REST APIs. |
| `/services/ai-automation` | **AI & Automation** | Document extraction, private knowledge search (RAG), and conversational business bots. |
| `/services/web-development` | **Website Development** | Fast Jamstack corporate websites, portfolio portals, and high-converting landing pages. |
| `/services/digital-marketing` | **Digital Marketing** | Targeted Meta Ads, SEO optimization, social creatives, and lead tracking. |
| `/services/it-support` | **IT Support & Consulting** | Infrastructure assistance, troubleshooting, bug fixes, and deployment maintenance. |
| `/solutions` | **Solutions Overview** | Connected platforms designed for end-to-end departmental operations. |
| `/solutions/hotel-management-system` | **Hotel Operations Platform** | Complete property management suite with role-based access for Managers, Reception, Housekeeping & Accounts. |
| `/solutions/enterprise-erp` | **Enterprise ERP Solutions** | Unified master data, procurement, multi-warehouse, and financial accounting. |
| `/solutions/ai-workflow-automation` | **AI Workflow Automation** | Zero-touch document data parsing with human-in-the-loop review. |
| `/industries` | **Industries We Serve** | Dedicated solutions for Hospitality, Manufacturing, Retail & Distribution, Education, Professional Services, and Startups. |
| `/portfolio` | **Project Portfolio** | Interactive, filterable project blueprints and architectural case study frameworks. |
| `/portfolio/[slug]` | **Project Detail Pages** | Dedicated blueprints detailing challenges, solutions, capabilities, and technology stacks. |
| `/insights` | **Technology Insights** | SEO-friendly knowledge hub with category filters, search, and reading times. |
| `/insights/[slug]` | **Article Detail Pages** | In-depth guides covering Odoo ERP migration, hotel software features, custom vs SaaS, and practical AI. |
| `/contact` | **Contact & Enquiry** | Multi-field project enquiry form with validation, honeypot spam protection, and official contact details. |
| `/privacy-policy` | **Privacy Policy** | Data collection, usage, third-party disclosure, and privacy contact information. |
| `/terms` | **Terms & Conditions** | Preliminary terms of use for website visitors and enquiry submissions. |
| `/cookie-policy` | **Cookie Policy** | Transparent disclosure regarding necessary and performance cookies. |
| `/sitemap.xml` | **XML Sitemap** | Dynamically generated search engine sitemap containing all 39 static and dynamic routes. |
| `/robots.txt` | **Robots File** | Search bot instructions directing crawlers to the sitemap. |

---

## 4. Local Development

### Prerequisites
* **Node.js:** v18.17+ or v20+ (tested on Node v24)
* **npm:** v9+ or v10+

### Setup
```bash
# 1. Clone or navigate to the repository directory
cd d:/Xampp/htdocs/ira

# 2. Install dependencies (if not already installed)
npm install

# 3. Copy environment configuration
cp .env.example .env.local

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 5. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Transactional Email (Resend)
# Obtain free API key from https://resend.com/api-keys
RESEND_API_KEY=

# From email address (e.g. IraSoft Technologies <enquiry@irasofttech.in>)
RESEND_FROM_EMAIL="IraSoft Technologies <enquiry@irasofttech.in>"

# Notification destination for new enquiries
ENQUIRY_NOTIFICATION_EMAIL=enquiry@irasofttech.in

# Site Metadata & Domain
NEXT_PUBLIC_SITE_URL=https://irasofttech.in

# Optional Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GSC_VERIFICATION=
```

> **Note on Email Fallback:** If `RESEND_API_KEY` is not provided, the contact form operates in a safe **development logged mode** where enquiries are logged to the console without throwing errors or misleading users.

---

## 6. Production Build & Deployment

### Build Command
```bash
npm run build
```
This produces an optimized production build in `.next` with all 39 pages statically pre-rendered.

### Start Production Server
```bash
npm start
```

### Deploying to Vercel
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository. Vercel automatically detects Next.js.
4. In the **Environment Variables** section, add:
   * `RESEND_API_KEY`
   * `RESEND_FROM_EMAIL`
   * `ENQUIRY_NOTIFICATION_EMAIL`
   * `NEXT_PUBLIC_SITE_URL` = `https://irasofttech.in`
5. Click **Deploy**.

### Connecting the Custom Domain (`irasofttech.in`)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Add `irasofttech.in` and `www.irasofttech.in`.
3. In your DNS registrar (GoDaddy, Namecheap, Hostinger, etc.), add:
   * **A Record:** `@` points to `76.76.21.21`
   * **CNAME Record:** `www` points to `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically by Vercel once DNS propagates.

---

## 7. Remaining Items for Company Approval

1. **Transactional Email Domain Verification:** Verify `irasofttech.in` in your [Resend](https://resend.com/domains) dashboard by adding SPF, DKIM, and DMARC DNS records to allow sending from `enquiry@irasofttech.in`.
2. **Social Media URLs:** Update the official LinkedIn and Instagram links in `data/company.ts` once official corporate handles are active.
3. **Approved Client Testimonials:** As verified client reviews and case studies are approved, add them to `APPROVED_TESTIMONIALS` in `data/testimonials.ts`.
4. **Analytics IDs:** Add your Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) into `.env.local` when ready.

