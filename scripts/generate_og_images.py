"""
Generate unique OpenGraph social-share images (1200x630) for each KOV service page.

Brand: cobalt #1E22B4 + flame #FF5A00. Output -> public/og/<slug>.png
Run:  python scripts/generate_og_images.py
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og"
OUT.mkdir(parents=True, exist_ok=True)
LOGO = ROOT / "public" / "logo-mark.png"

W, H = 1200, 630
COBALT = (30, 34, 180)
NAVY = (16, 19, 74)
FLAME = (255, 90, 0)
WHITE = (255, 255, 255)
COBALT100 = (206, 210, 255)

# (slug, eyebrow, title, tagline)
SERVICES = [
    ("cybersecurity", "HORIZONTAL SERVICE", "Cybersecurity Services",
     "24/7 detection & response, testing, compliance and IAM"),
    ("managed-services", "HORIZONTAL SERVICE", "Managed IT Services",
     "Proactive monitoring, helpdesk and support — around the clock"),
    ("infrastructure", "HORIZONTAL SERVICE", "Infrastructure Services",
     "Data center, network and cloud operations engineering"),
    ("advisory", "HORIZONTAL SERVICE", "Advisory & Consulting",
     "IT strategy, architecture and digital transformation"),
    ("application-services", "HORIZONTAL SERVICE", "Application Services",
     "Custom development, QA and application maintenance"),
    ("talent-orchestration", "HORIZONTAL SERVICE", "Talent Orchestration",
     "Contract, permanent and offshore delivery talent"),
    ("procurement", "HORIZONTAL SERVICE", "Procurement & Renewals",
     "eProcurement, custom catalogs, warranty and renewals"),
    ("sap", "PLATFORM SERVICE", "SAP Services",
     "Implementation, migration, integration and staffing"),
    ("oracle", "PLATFORM SERVICE", "Oracle Services",
     "Fusion Cloud, NetSuite, EBS and Oracle Database"),
    ("workday", "PLATFORM SERVICE", "Workday Services",
     "HCM, Financials, Adaptive Planning and integrations"),
    ("salesforce", "PLATFORM SERVICE", "Salesforce Services",
     "Sales, Service, Marketing Cloud and CPQ"),
    ("microsoft-dynamics", "PLATFORM SERVICE", "Microsoft Dynamics 365",
     "Finance, Supply Chain, Sales and Business Central"),
    ("servicenow", "PLATFORM SERVICE", "ServiceNow Services",
     "ITSM, ITOM, HR Service Delivery and SecOps"),
    ("shopify-back-office-support", "PLATFORM SERVICE", "Shopify Services",
     "Store setup, back-office support and optimization"),
    ("sap-s-4-hana-implementation", "SAP MODULE", "SAP S/4HANA Implementation", "Greenfield, brownfield and selective migration"),
    ("sap-successfactors-implementation", "SAP MODULE", "SAP SuccessFactors", "Cloud HXM implementation and payroll"),
    ("sap-ariba", "SAP MODULE", "SAP Ariba", "Sourcing, procurement and supplier collaboration"),
    ("sap-fiori", "SAP MODULE", "SAP Fiori", "Role-based UX and app development"),
    ("sap-hybris", "SAP MODULE", "SAP Hybris / Commerce", "B2B and B2C enterprise commerce"),
    ("sap-crm", "SAP MODULE", "SAP CRM", "Sales, service and marketing"),
    ("sap-concur", "SAP MODULE", "SAP Concur", "Travel, expense and invoice management"),
    ("sap-finance-and-controlling", "SAP MODULE", "SAP Finance & Controlling", "FICO configuration, close and reporting"),
    ("sap-materials-management", "SAP MODULE", "SAP Materials Management", "Procurement, inventory and valuation"),
    ("sap-supply-chain-management", "SAP MODULE", "SAP Supply Chain", "Planning and execution with IBP"),
    ("sap-extended-warehouse-management", "SAP MODULE", "SAP EWM", "Extended warehouse management"),
    ("sap-human-capital-management", "SAP MODULE", "SAP HCM", "Personnel, payroll and time"),
    ("sap-business-intelligence", "SAP MODULE", "SAP Business Intelligence", "Data warehousing, reporting and analytics"),
    ("sap-plant-maintenance", "SAP MODULE", "SAP Plant Maintenance", "Preventive and corrective maintenance"),
    ("sap-sales-and-distribution", "SAP MODULE", "SAP Sales & Distribution", "Order-to-cash, pricing and billing"),
    ("sap-production-planning", "SAP MODULE", "SAP Production Planning", "MRP, scheduling and manufacturing"),
    ("sap-treasury-and-risk-management", "SAP MODULE", "SAP Treasury & Risk", "Cash, liquidity and financial risk"),
    ("sap-security-and-grc", "SAP MODULE", "SAP Security & GRC", "Access control and compliance"),
    ("sap-permanent-staffing", "SAP STAFFING", "SAP Permanent Staffing", "Certified SAP professionals, permanent"),
    ("sap-flexi-staffing", "SAP STAFFING", "SAP Flexi Staffing", "Flexible SAP resourcing on demand"),
    ("sap-contract-staffing", "SAP STAFFING", "SAP Contract Staffing", "Certified SAP contractors, fast"),
    ("crm-sales-and-marketing-automation", "PLATFORM SERVICE", "CRM & Marketing Automation", "Unify sales and marketing on one platform"),
    ("erp-and-enterprise-systems", "PLATFORM SERVICE", "ERP & Enterprise Systems", "SAP, Oracle, Dynamics and NetSuite"),
]


def load_font(size, weight="regular"):
    candidates = {
        "bold": ["seguibl.ttf", "segoeuib.ttf", "arialbd.ttf", "Arialbd.ttf"],
        "semibold": ["seguisb.ttf", "segoeuib.ttf", "arialbd.ttf"],
        "regular": ["segoeui.ttf", "arial.ttf", "Arial.ttf"],
    }[weight]
    for name in candidates:
        p = Path("C:/Windows/Fonts") / name
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def gradient_bg():
    base = Image.new("RGB", (W, H), COBALT)
    top, bot = COBALT, NAVY
    for y in range(H):
        t = y / H
        r = int(top[0] + (bot[0] - top[0]) * t)
        g = int(top[1] + (bot[1] - top[1]) * t)
        b = int(top[2] + (bot[2] - top[2]) * t)
        for x in (0,):  # draw full-width line
            pass
        ImageDraw.Draw(base).line([(0, y), (W, y)], fill=(r, g, b))
    return base


def add_glow(img):
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    # orange radial glow, bottom-right
    d.ellipse([W - 520, H - 420, W + 180, H + 260], fill=(255, 90, 0, 120))
    # cobalt highlight, top-right
    d.ellipse([W - 360, -260, W + 260, 300], fill=(90, 100, 255, 90))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB"), (0, 0))
    return img


def add_dots(img):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    step = 40
    for y in range(60, H, step):
        for x in range(60, 720, step):
            d.ellipse([x, y, x + 2, y + 2], fill=(255, 255, 255, 26))
    img.paste(Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB"), (0, 0))
    return img


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def tracked(draw, pos, text, font, fill, tracking=4):
    x, y = pos
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def render(slug, eyebrow, title, tagline):
    img = gradient_bg()
    img = add_glow(img)
    img = add_dots(img)
    d = ImageDraw.Draw(img)

    margin = 72

    # logo + wordmark
    logo_bottom = 118
    if LOGO.exists():
        logo = Image.open(LOGO).convert("RGBA").resize((64, 64))
        img.paste(logo, (margin, 54), logo)
    d.text((margin + 78, 60), "KOV", font=load_font(30, "bold"), fill=WHITE)
    tracked(d, (margin + 80, 96), "TECHNOLOGIES", load_font(15, "regular"), COBALT100, 3)

    # eyebrow
    tracked(d, (margin, 232), eyebrow, load_font(22, "semibold"), FLAME, 5)

    # title (wrapped)
    tfont = load_font(74, "bold")
    lines = wrap(d, title, tfont, W - margin * 2)
    y = 274
    for ln in lines:
        d.text((margin, y), ln, font=tfont, fill=WHITE)
        y += 84

    # tagline
    y += 8
    for ln in wrap(d, tagline, load_font(30, "regular"), W - margin * 2):
        d.text((margin, y), ln, font=load_font(30, "regular"), fill=COBALT100)
        y += 42

    # bottom accent bar + url
    d.rectangle([margin, H - 96, margin + 64, H - 90], fill=FLAME)
    d.text((margin, H - 78), "kovtechnologies.com", font=load_font(24, "semibold"), fill=WHITE)

    img.save(OUT / f"{slug}.png", "PNG")
    print(f"  wrote og/{slug}.png")


if __name__ == "__main__":
    print(f"Generating OG images -> {OUT}")
    for s in SERVICES:
        render(*s)
    print("Done.")
