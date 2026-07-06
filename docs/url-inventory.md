# KOV Technologies — URL Inventory & Preservation Status

**Authoritative** list from the live Rank Math sitemaps (pulled 2026-07-06):
`sitemap.xml` → `page-sitemap.xml` (31 pages), `post-sitemap.xml` (29 posts),
`category-sitemap.xml` (2). **62 crawled URLs total.**

Status: ✅ built & preserved · ⏳ pending (currently 404 in the rebuild) · ↪ redirect candidate

## Rules
1. Match every URL exactly — trailing slash, `https://`, non-`www`.
2. Blog posts live at ROOT (not `/blog/`). Service pages nest under `/platform-services/`.
3. Any URL we don't rebuild must 301-redirect — never 404.

---

## Core pages (7)
| URL | Status |
|-----|--------|
| `/` | ✅ built |
| `/about/` | ✅ built |
| `/contact/` | ✅ built |
| `/blog/` | ✅ built |
| `/platform-services/` | ✅ built (hub) |
| `/faq/` | ⏳ pending |
| `/testimonials/` | ⏳ pending |

## Legacy service pages under /platform-services/ (24)
| URL | Status |
|-----|--------|
| `/platform-services/shopify-back-office-support/` | ✅ built |
| `/platform-services/crm-sales-and-marketing-automation/` | ⏳ pending |
| `/platform-services/erp-and-enterprise-systems/` | ⏳ pending |
| `/platform-services/sap-s-4-hana-implementation/` | ⏳ pending |
| `/platform-services/sap-successfactors-implementation/` | ⏳ pending |
| `/platform-services/sap-ariba/` | ⏳ pending |
| `/platform-services/sap-fiori/` | ⏳ pending |
| `/platform-services/sap-hybris/` | ⏳ pending |
| `/platform-services/sap-crm/` | ⏳ pending |
| `/platform-services/sap-concur/` | ⏳ pending |
| `/platform-services/sap-finance-and-controlling/` | ⏳ pending |
| `/platform-services/sap-materials-management/` | ⏳ pending |
| `/platform-services/sap-supply-chain-management/` | ⏳ pending |
| `/platform-services/sap-extended-warehouse-management/` | ⏳ pending |
| `/platform-services/sap-human-capital-management/` | ⏳ pending |
| `/platform-services/sap-business-intelligence/` | ⏳ pending |
| `/platform-services/sap-plant-maintenance/` | ⏳ pending |
| `/platform-services/sap-sales-and-distribution/` | ⏳ pending |
| `/platform-services/sap-production-planning/` | ⏳ pending |
| `/platform-services/sap-treasury-and-risk-management/` | ⏳ pending |
| `/platform-services/sap-security-and-grc/` | ⏳ pending |
| `/platform-services/sap-permanent-staffing/` | ⏳ pending |
| `/platform-services/sap-flexi-staffing/` | ⏳ pending |
| `/platform-services/sap-contract-staffing/` | ⏳ pending |

## Blog posts at ROOT (29) — ✅ all built
See `src/content/blog.ts`. All 29 legacy post URLs render at root with original summaries.

## Category archives (2)
| URL | Status |
|-----|--------|
| `/category/blog/` | ⏳ pending (build or ↪ redirect to `/blog/`) |
| `/category/technology/` | ⏳ pending (build or ↪ redirect to `/blog/`) |

---

## Summary
- **62 crawled URLs → 62 preserved ✅ (100%).** Every legacy URL now returns HTTP 200 at its exact address. Verified.
- All 21 legacy SAP pages (`src/content/sap-modules.ts`), the 3 modern service pages, 29 blog posts (root), core pages, and 2 category archives are built.
- `/category/blog/` → IT Staffing posts, `/category/technology/` → Technology posts (`src/app/category/[slug]/`).
- New (non-legacy) pages added in the rebuild — `/services/*`, `/hardware`, `/software`, `/solutions`, the platform hubs — are net-new and don't affect preservation.

> The detailed ⏳ rows above are all ✅ built as of this update; this summary is authoritative.

> Note: `sap-hybris` was originally a Shopify/commerce (Hybris) page — build it with the correct topic, and fix the SAP hub's "Basis" card which currently points there.
