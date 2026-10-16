export const navLinks = [
  { label: "Core Thesis", href: "#thesis" },
  { label: "Institutional Strength", href: "#strength" },
  { label: "Leadership Profiles", href: "#leadership" },
  { label: "Advisory Verticals", href: "#verticals" },
  { label: "Sector Coverage", href: "#sectors" },
  { label: "Engagement Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export const problemCards = [
  {
    title: "Bid-Level Margin Compression",
    body: "Intense competitive pricing pressures eroding margin buffers across competitive bids and tenders.",
  },
  {
    title: "Stretched Working Capital",
    body: "Elongated collections and trade financing operational cycles creating persistent liquidity friction across long-term asset development.",
  },
  {
    title: "Enterprise Value Risks",
    body: "Unmitigated project execution, design mismatches, and contract complexities damaging asset valuations.",
  },
]

export const benchmarks = [
  {
    value: 150,
    suffix: "+",
    label: "Years of Combined Leadership",
    body: "Led directly by senior operators who have built, scaled, governed, and restructured high-impact enterprises across multiple jurisdictions.",
  },
  {
    value: 100,
    suffix: "+",
    label: "Countries of Business Exposure",
    body: "Deep operational and financial visibility spanning cross-border transaction networks and key trade corridors globally.",
  },
  {
    value: 50,
    suffix: "k+ Cr",
    label: "Debt Mobilization Footprint",
    body: "Demonstrated execution capability across high-value debt syndications, structured products, and capital market arrangements.",
  },
]

export const standOut = [
  {
    title: "Senior-Led Execution",
    body: "Engagements led directly by experienced principals who understand institutional decision-making.",
  },
  {
    title: "Outcome-Oriented Model",
    body: "Success-linked fee structures aligned entirely with client metrics and value creation.",
  },
  {
    title: "Strategic Ecosystem Access",
    body: "Direct connectivity across domestic/international lenders, ECAs, and capital market pools.",
  },
]

export const leadership = [
  {
    name: "Shivdutt Das",
    role: "Promoter & Managing Partner",
    body: "Management professional with over 23 years of global experience spanning strategic finance, international business, manufacturing, risk management, structured finance, and project advisory. Has held senior leadership positions with United Spirits, ICICI Prudential, Bharti AXA, Tata AIA, Reliance Nippon, Ajeenkya DY Patil Healthcare, and Vishwa Samudra Group.",
    image: "/shivdutt-das.jpg",
  },
  

  {
    name: "Anand Rathod",
    role: "Partner – Corporate Finance, Treasury & CFO Advisory",
    body: "Chartered Accountant with over 20 years of experience across strategic financial planning, treasury management, project finance, debt syndication, and banking relationships. Over his career, Anand has been associated with cumulative debt mobilization exceeding INR 50,000 crore.",
    image: "/anand-rathod.jpg",
  },
  {
    name: "Parvez Damania",
    role: "Partner – Infrastructure, Aviation & Public Sector Advisory",
    body: "Recognized as a pioneering figure in India's post-liberalization private aviation sector. With over three decades of experience across aviation, shipping, infrastructure, agribusiness, and financial services, he brings exceptional credibility and insight via past associations with Damania Airways, Air Sahara, Kingfisher Airlines, and JNPT.",
    image: "/parvez-damania.png",
  },

]

export const executionTeam = [
  {
    name: "Harish Agrawal",
    role: "Senior Advisor – Strategic Planning, Finance & Controls",
    body: "MBA (Finance) and Cost & Works Accountant with 25+ years in strategic planning, corporate finance, and infrastructure business management. Senior leadership roles at JMC Projects, GVK Airports, and HCC Infrastructure, managing ₹5,000+ Cr in debt and equity raising, credit ratings, business valuation, and claims management.",
  },
  {
    name: "Dinesh Chandak",
    role: "Corporate Finance & Capital Markets",
    body: "Chartered Accountant with 20+ years in treasury management, structured debt formulation including NCDs and Commercial Paper, and institutional credit rating liaison.",
  },
  {
    name: "Gaurav Bhadada",
    role: "Trade Finance & Working Capital",
    body: "Specialist in off-balance sheet trade financing instruments, factoring structures, liquidity optimization, and compression of corporate cash conversion cycles.",
  },
  {
    name: "Pushpak Kakkar",
    role: "Insurance Distribution & Risk Solutions",
    body: "MBA from NMIMS with 22+ years across telecom and asset risk transfer. Specializes in structuring Contractors' All Risks policies and Bid/Surety Bonds.",
  },
  {
    name: "Ganesh P. Chaturvedi",
    role: "Human Capital & Organisational Advisory",
    body: "33+ years of public/private organizational performance engineering, workforce structuring, and advanced corporate risk optimization; certified by the Insurance Institute of India.",
  },
  {
    name: "Ajay Agarwal",
    role: "Strategic Stakeholder & Investor Relations",
    body: "Manages institutional investor communications, capital market messaging, and analytics-driven operational interventions to safeguard enterprise margins.",
  },
  {
    name: "Ajay Gawande",
    role: "Business Analytics & Project Execution",
    body: "Acts as the key analytical bridge tracking operational milestones, delivery discipline, cross-functional coordination, and core enterprise KPI alignment.",
  },
]

export type VerticalGroup = {
  heading: string
  outcome?: string
  points: string[]
}

export type Vertical = {
  id: string
  index: string
  title: string
  subtitle: string
  groups: VerticalGroup[]
  footprint?: {
    title: string
    columns: { heading: string; items: string[] }[]
  }
}

export const verticals: Vertical[] = [
  {
    id: "infrastructure",
    index: "I",
    title: "Infrastructure Project Advisory",
    subtitle: "Delivering infrastructure projects from bid readiness to financial closure and execution governance",
    groups: [
      {
        heading: "Pre-Qualification (PQ) Support",
        points: [
          "Rigorous review and structured evaluation of complex tender eligibility criteria.",
          "Detailed mapping of technical and financial qualification requirements.",
          "Strategic consortium structuring and partner qualification matching.",
          "End-to-end pre-qualification document compliance verification and experience credential mapping.",
        ],
        outcome: "Optimized qualification success rates and defensible strategic positioning for large mandates.",
      },
      {
        heading: "Bid Advisory & Stakeholder Management",
        points: [
          "Commercial, technical, and contractual risk allocation analysis.",
          "Pre-bid representation and query governance with project authorities.",
          "Preparation and packaging of integrated technical and commercial tender submissions.",
          "Regulatory compliance tracking, statutory coordination, and tender amendment interpretation.",
        ],
        outcome: "Competitive, structurally compliant, and commercially de-risked tender bids.",
      },
      {
        heading: "Financial Closure Execution",
        points: [
          "Building, scaling, and stress-testing bankable project financial models.",
          "Information memorandum synthesis for syndicated commercial debt raising.",
          "Lender mapping, institutional outreach, and multi-agency due diligence coordination.",
          "Financing documentation management through successful financial closure.",
        ],
        outcome: "Efficient capital mobilization and compressed timelines to first financial drawdown.",
      },
      {
        heading: "Stakeholder Liaising",
        points: [
          "Liaisoning with the relevant Authority to understand the project requirement.",
          "Discussion on best-suited modalities of the project execution.",
        ],
        outcome: "Project development requirement and clarity on the mode of execution.",
      },
      {
        heading: "Project Evaluation & Collaboration",
        points: [
          "Identification of project requirements and forming collaborations best suited to the tender conditions.",
          "Collaboration with the interested parties to participate in the tenders.",
        ],
      },
    ],
  },
  {
    id: "capital",
    index: "II",
    title: "Capital Advisory",
    subtitle: "Domestic Corporate Debt, International Project Finance & Liquidity Enhancement",
    groups: [
      {
        heading: "Project Term Financing",
        points: [
          "Capital structuring and institutional credit placement for large-scale infrastructure developments.",
          "Project term loans with repayment architecture tied to long-term project cash flows.",
          "Syndicated placements across local commercial banks, NBFCs, and financial institutions.",
          "Mezzanine debt, refinancing, debt restructuring, and project divestment support.",
        ],
        outcome: "Optimized capital structures and improved financial flexibility.",
      },
      {
        heading: "Equipment & Asset Financing",
        points: [
          "Equipment loans",
          "Lease financing",
          "Sale and leaseback transactions",
          "Construction equipment financing",
          "Industrial machinery funding",
          "Fleet and transportation asset financing",
        ],
        outcome: "Efficient asset acquisition with optimized capital deployment.",
      },
      {
        heading: "Mezzanine & Hybrid Debt",
        points: [
          "Custom subordinated debt and credit structures to bridge funding gaps between promoter equity and senior debt.",
          "Flexible hybrid instruments balancing risk profiles.",
          "Mitigation of promoter equity dilution during growth phases.",
        ],
      },
      {
        heading: "Refinancing & Recycling",
        points: [
          "Balance sheet refinancing, loan repricing, and maturity tenor extension.",
          "Strategic asset monetization and equity exits to InvITs and private credit pools.",
          "Enterprise liquidity optimization and lower weighted average cost of capital.",
        ],
      },
      {
        heading: "Cross-Border Capital Architecture",
        points: [
          "Non-recourse and limited-recourse international financing packages backed by Export Credit Agencies.",
          "Structures designed to unlock long tenors, optimized pricing, and political/commercial risk insulation.",
          "ECA-backed project finance structures.",
          "Untied ECA Push Facility arrangements.",
          "Sovereign and commercial enhancements.",
        ],
      },
      {
        heading: "Trade Finance & Liquidity Enhancement",
        points: [
          "Off-balance sheet frameworks: structured trade credit networks to expand operational capacity without inflating leverage.",
          "Supply chain finance, non-recourse factoring, and structured trade finance mechanisms.",
          "Banking limit optimization: LC and BG placement, structuring, and issuance advisory.",
          "Restructuring of fund-based and non-fund-based credit lines; cash credit line alignment and overdraft review.",
          "Bespoke cash flow engineering: vendor financing, distributor networks, invoice discounting, receivables financing, structured bill discounting, and inventory funding to unlock latent cash flows.",
        ],
      },
    ],
    footprint: {
      title: "Active Institutional Footprint",
      columns: [
        {
          heading: "Export Credit Agencies (ECAs)",
          items: [
            "SERV, Switzerland",
            "Atradius DSB, Netherlands",
            "EKN, Sweden",
            "Euler Hermes / Allianz Trade, Germany",
            "OeKB, Austria",
            "SACE, Italy",
            "ICIEC, Middle East",
            "India EXIM Bank",
          ],
        },
        {
          heading: "Global Banking Access Lines",
          items: [
            "DZ Bank",
            "Deutsche Bank",
            "Santander",
            "Citi Bank",
            "Commerzbank",
            "Raiffeisen Bank International AG",
            "Multilateral & Bilateral Guarantee Pools",
          ],
        },
      ],
    },
  },
  {
    id: "insurance",
    index: "III",
    title: "Insurance Advisory & Risk Transfer",
    subtitle: "Asset Insulation, Project Surety Systems & Specialty Liability Coverage",
    groups: [
      {
        heading: "Bidding Capacity & Surety Engineering",
        points: [
          "Substitution of commercial bank guarantees through customized Performance Surety Bonds.",
          "Advance Payment, Retention Money, and Maintenance Bond structuring.",
          "Preservation of bank lines and reduction in collateral lock-ups.",
        ],
      },
      {
        heading: "Construction Risk Insurance Placement",
        points: [
          "Contractors' All Risks and Erection All Risks placement.",
          "Protection against physical asset damage, natural catastrophes, design hazards.",
          "ALOP, third-party liability, testing, and delay-in-start protection modeling.",
        ],
      },
      {
        heading: "Reinsurance Advisory & Capacity Enhancement",
        points: [
          "Facultative and treaty reinsurance alignment.",
          "Connects large corporate projects with global underwriting capacity.",
          "Mitigates catastrophic exposure while maintaining financial logic and cost optimization.",
        ],
      },
      {
        heading: "Corporate Specialty Liability & Risk Mitigation",
        points: [
          "Executive Indemnity: Directors & Officers liability, Errors & Omissions frameworks, and professional indemnity for engineering and design-and-build consultants.",
          "Specialty Domain Risks: media and film production risk insulation; sports league, athlete accident, team travel, and stadium venue policies; event cancellation risk mitigation models.",
          "Enterprise Coverage: cyber risk governance and liability frameworks; marine cargo, transit protection, fire, special perils, and asset protection; business interruption policies to protect ongoing corporate cash flows.",
        ],
      },
    ],
  },
  {
    id: "esg",
    index: "IV",
    title: "ESG, GRC & Compliance Audits",
    subtitle: "Institutional Sustainability Frameworks & Risk Controls",
    groups: [
      {
        heading: "ESG Strategy & Green Readiness",
        points: [
          "Integration of sustainability principles into project workflows.",
          "BRSR design and disclosures.",
          "Materiality assessments, impact reviews, climate risk metrics, and carbon mapping.",
          "Strategic positioning to capture ESG financing premiums from global capital markets.",
        ],
      },
      {
        heading: "GRC Systems & Forensic Governance",
        points: [
          "Enterprise Risk Management architecture, risk registers, and operational control mapping.",
          "Risk-based operational, process, compliance, internal control, and location audits.",
          "Fraud tracking controls, vigilance monitoring, and forensic audits to halt revenue leakages.",
          "Whistleblower frameworks, ethics programs, and crisis management support.",
        ],
      },
    ],
  },
]

export const sectors = [
  {
    index: "01",
    title: "Infrastructure",
    body: "Highways, arterial roads, metro rails, structural transit bridges, maritime shipping ports, airport logistics, and housing.",
  },
  {
    index: "02",
    title: "Energy & Power",
    body: "Utility-scale solar and wind farms, transmission networks, power distribution corridors, and oil & gas pipeline networks.",
  },
  {
    index: "03",
    title: "Social Infra",
    body: "Healthcare networks, pharmaceutical manufacturing hubs, commercial real estate, and urban water/wastewater networks.",
  },
  {
    index: "04",
    title: "Economic Development",
    body: "Advanced industrial parks, smart cities, heavy manufacturing hubs, and heavy capital goods procurement pipelines.",
  },
]

export const engagementPhases = [
  {
    step: "1",
    title: "Assess",
    body: "Comprehensive audit of current corporate capital structures, leverage baselines, and tender eligibility metrics.",
  },
  {
    step: "2",
    title: "Structure",
    body: "Strategic engineering of bankable credit structures, custom risk transfers, and GRC compliance matrices.",
  },
  {
    step: "3",
    title: "Arrange",
    body: "Execution of global lender matching across domestic banks, international pools, and sovereign ECAs.",
  },
  {
    step: "4",
    title: "Execute",
    body: "Management of information memorandums, pre-bid query interfaces, and financial closure tracking.",
  },
]

export const contactDetails = [
  { label: "Email", value: "info@aegle-marmelos.com", href: "mailto:info@aegle-marmelos.com" },
  { label: "Website", value: "aegle-marmelos.com", href: "https://aegle-marmelos.com" },
  {
    label: "LinkedIn",
    value: "Aegle Marmelos Capital Advisors LLP",
    href: "https://linkedin.com/in/aegle-marmelos-capital-advisors-llp-ba1a1b426",
  },
  {
    label: "Instagram",
    value: "@aeglemarmelosllp",
    href: "https://instagram.com/aeglemarmelosllp?igsh=ZHA1Z2FwbmxvdThh&utm_source=qr",
  },
]

export const disclaimerParagraphs = [
  "The content of this website has been prepared by Aegle Marmelos Capital Advisors LLP solely for general information purposes. Nothing on this website constitutes, or should be construed as, investment, legal, tax, accounting, or financial advice, nor an offer, solicitation, or recommendation to enter into any transaction or engagement.",
  "The information presented is indicative in nature, may include forward-looking statements and illustrative references, and is subject to change without notice. While reasonable care has been taken in its preparation, Aegle Marmelos Capital Advisors LLP makes no representation or warranty, express or implied, as to the accuracy, completeness, timeliness, or reliability of any information contained herein. References to institutions, agencies, or counterparties reflect ecosystem relationships and do not imply endorsement, affiliation, or guaranteed outcomes.",
  "Aegle Marmelos Capital Advisors LLP, its partners, employees, and representatives accept no liability whatsoever for any direct, indirect, or consequential loss or damage arising from any use of, or reliance upon, this website or its contents. Visitors should conduct their own independent assessment and obtain appropriate professional advice before acting on any information presented. Access to and use of this website constitutes acceptance of this disclaimer in full.",
]
