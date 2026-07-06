# KOV Technologies — Information Architecture

The full site blueprint. Everything renders from one taxonomy tree (`src/content/taxonomy.ts`)
via a catch-all route, so adding a page = adding a node. See [url-inventory.md](url-inventory.md)
for the legacy WordPress URLs being preserved.

## Placement rules

1. **Tied to a named vendor platform** (SAP, Oracle, Workday, Salesforce, ServiceNow, Shopify…)
   → **Platform Services** `/platform-services/…`
2. **Vendor-agnostic capability we deliver** (cybersecurity, managed, infra, advisory…)
   → **Horizontal Services** `/services/…`
3. **A product/license we sell** → **Hardware** `/hardware/…` or **Software** `/software/…`
4. **A strategic outcome/story** → **Solutions** `/solutions/…` (these are hubs that link across pillars)
5. Every page has ONE canonical URL (one `parent`). A page may be surfaced in other menus via
   `alsoFeaturedIn` without duplicating the URL (e.g. Cybersecurity appears in the Solutions hub).
6. Trailing slashes on every URL. Blog posts stay at root. Existing `/platform-services/sap-*` URLs untouched.

---

## 1. Hardware — `/hardware/`
- Computers `/hardware/computers/` — Desktops · Laptops · Workstations · Servers · Thin Clients
- Networking `/hardware/networking/` — Switches · Routers · Firewalls · Access Points · Cabling
- Storage & Backup `/hardware/storage/` — SSD · HDD · NAS · SAN · Backup Appliances
- Printers & Supplies `/hardware/printers-supplies/` — Printers · Scanners · Toner & Ink
- Monitors & Displays `/hardware/monitors-displays/` — Monitors · Signage · Projectors
- Accessories `/hardware/accessories/` — Keyboards & Mice · Docking · Webcams · Headsets
- Phones & Video `/hardware/phones-video/` — VoIP · Conferencing · Headsets
- Power & UPS `/hardware/power-ups/`
- Office Equipment `/hardware/office-equipment/`
- Point of Sale & Barcode `/hardware/point-of-sale/`

## 2. Software — `/software/`
- Business Applications `/software/business-applications/` — ERP · CRM · HCM · SCM · Finance
- Security `/software/security/` — Endpoint · Firewall · Email · Identity · SIEM
- Virtualization `/software/virtualization/`
- Operating Systems `/software/operating-systems/`
- Networking & Servers `/software/networking-servers/`
- Data & Databases `/software/data-databases/`
- Dev & Web `/software/development/` — IDEs · DevTools · Web Dev
- Graphics & Design `/software/graphics-design/`
- Communication & Collaboration `/software/communication/`
- Licensing & Subscriptions `/software/licensing/`
- Education & E-Learning `/software/education/`

## 3. Solutions — `/solutions/`  (cross-pillar story hubs)
- AI & Data `/solutions/ai-data/` — Generative AI · Data Engineering · Analytics & BI · MLOps
- Cloud & Infrastructure `/solutions/cloud-infrastructure/` — Cloud Migration · **DevOps** · Kubernetes · Hybrid Cloud · FinOps
- Digital Enablement `/solutions/digital-enablement/` — App Modernization · Low-Code · Integration/APIs · Digital Commerce
- Workplace Modernization `/solutions/workplace-modernization/` — Microsoft 365 · Endpoint Mgmt · VDI · Collaboration
- Security & Continuity `/solutions/security-continuity/` — Zero Trust · Disaster Recovery · Business Continuity · Compliance  ◆ *(cybersecurity hub)*

## 4. Services (pillar)

### 4a. Platform Services — `/platform-services/`  (vendor integration/implementation/staffing)
- SAP `/platform-services/sap/` — S/4HANA, SuccessFactors, Ariba, Fiori, BTP, Basis, Staffing *(existing `/platform-services/sap-*` pages live here — preserved)*
- Oracle `/platform-services/oracle/` — Fusion Cloud · NetSuite · EBS · Database
- Workday `/platform-services/workday/` — HCM · Financials · Adaptive Planning · Integrations
- Salesforce `/platform-services/salesforce/` — Sales Cloud · Service Cloud · Marketing Cloud · CPQ
- Microsoft Dynamics `/platform-services/microsoft-dynamics/`
- ServiceNow `/platform-services/servicenow/` — ITSM · ITOM · HRSD
- Shopify `/platform-services/shopify/` — Back Office Support *(existing page)*

### 4b. Horizontal Services — `/services/`  (vendor-agnostic)
- Cybersecurity `/services/cybersecurity/` — MDR/SOC · Pen Testing · GRC & Compliance · IAM · Security Staffing  ◆
- Managed Services `/services/managed-services/` — Managed IT · NOC · Helpdesk · Endpoint
- Infrastructure Services `/services/infrastructure/` — Data Center · Network · Cloud Ops
- Advisory & Consulting `/services/advisory/` — IT Strategy · Digital Transformation · Architecture
- Application Services `/services/application-services/` — Development · QA · Maintenance
- Talent Orchestration `/services/talent-orchestration/` — Contract · Permanent · Offshore · RPO
- Procurement & Renewals `/services/procurement/` — eProcurement · Custom Catalogs · Warranty

---

## 5. Content & Company
- Blog / Insights `/blog/` + posts at root *(29 existing posts preserved)*
- About `/about/` · Contact `/contact/` · FAQ `/faq/` · Testimonials `/testimonials/`
- Careers `/careers/` · Case Studies `/case-studies/` · Partners `/partners/`  *(new — B2B credibility)*

## 6. Utility
- Human sitemap `/sitemap/` · Privacy `/privacy-policy/` · Terms `/terms/`
- Generated `robots.txt` + `sitemap.xml` (sharded when catalog exceeds 50k URLs)

---

## Legend
- **★ plug-in leaf** — any node can be added under any parent (e.g. DevOps). It auto-joins the mega-menu, gets a page + breadcrumb + JSON-LD + sitemap entry.
- **◆ cross-cutting** — one canonical URL, surfaced in multiple menus via `alsoFeaturedIn` (e.g. Cybersecurity: canonical under `/services/`, featured in the Solutions › Security & Continuity hub).
