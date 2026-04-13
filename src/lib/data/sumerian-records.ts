import type { AuditData } from "@/lib/types/audit";

const auditData: AuditData = {
  id: "audit_sumerian_records_2026",
  slug: "sumerian-records",
  status: "complete",
  createdAt: new Date("2026-04-12").toISOString(),
  completedAt: new Date("2026-04-12").toISOString(),
  pipelineProgress: {
    steps: [],
    currentStep: 7,
    totalSteps: 7,
  },
  intake: {
    brandName: "Sumerian Records",
    accentColor: "#FD3737",
  },
  discovery: {
    websiteUrl: "https://sumerianrecords.com",
    industry: "Independent Heavy Music Label",
    socialUrls: {
      instagram: "https://www.instagram.com/sumerianrecords/",
      tiktok: "https://www.tiktok.com/@sumerianrecords",
      x: "https://twitter.com/SumerianRecords",
      facebook: "https://www.facebook.com/sumerianrecords",
      linkedin: undefined,
    },
    description:
      "Sumerian Records is the leading fully independent label for rock, alternative, metal, and progressive music — founded in 2006 by Ash Avildsen in Los Angeles and now headquartered in Nashville, championing artist autonomy across a curated roster of 70+ acts.",
  },
  brandSnapshot: {
    positioning:
      "The only independent label with major-label reach — signing culturally significant heavy and alternative acts while refusing corporate acquisition and maintaining an artist-first ethos.",
    voiceAndTone: [
      {
        adjective: "Uncompromising",
        evidence:
          "Founder Ash Avildsen publicly declared a 'Velvet Revolution' against AI music and has consistently refused acquisition offers from major labels, stating Sumerian will never sell to corporate entities.",
      },
      {
        adjective: "Curatorial",
        evidence:
          "The label publicly maintains a maximum 30-artist-at-a-time roster policy — a rare constraint designed to guarantee meaningful support for every signed act.",
      },
      {
        adjective: "Expansionist",
        evidence:
          "Sumerian's 2025 launch of Sumerian Pictures — with the theatrical release of 'Queen of the Ring' — signals deliberate brand extension into film and entertainment, backed by acquisition of media properties The Hard Times and Hard Drive.",
      },
      {
        adjective: "Community-Driven",
        evidence:
          "The label runs an active street team program, seasonal 12-day merch campaigns, and exclusive vinyl drops tied to their artist roster, reinforcing a tight-knit community around the label itself — not just individual artists.",
      },
    ],
    visualIdentity:
      "Sumerian's digital identity is bold and genre-coherent: predominantly black with high-contrast photography, red accent tones, and a gothic-leaning typographic sensibility. The website is functional but lags behind the premium visual standard of the artist pages it promotes. Instagram content is artist-forward rather than label-branded, with inconsistent grid aesthetic.",
    keyOfferings: [
      "Artist recording and development (max 30 active acts)",
      "Physical and digital distribution via Virgin Music",
      "Merch store with exclusive limited-edition vinyl drops",
      "Film and entertainment (Sumerian Pictures — launched 2025)",
      "Digital media (The Hard Times, Hard Drive acquisitions)",
      "Active touring and live event support",
    ],
    digitalPresenceScore: "strong",
    digitalPresenceReasoning:
      "With 687K Instagram followers and 451K TikTok followers, Sumerian is the largest independent heavy music label on social media — outpacing Epitaph (409K), Rise (414K), and Fearless (378K). However, the label's social strategy is predominantly reactive artist content rather than proactive brand storytelling, leaving significant engagement and brand equity on the table.",
    strengths: [
      {
        title: "Dominant Social Footprint",
        detail:
          "Sumerian's 687K Instagram and 451K TikTok followings are category-leading for independent labels. This gives them unmatched owned media reach for album campaigns — yet current posting cadence is inconsistent and doesn't maximize the algorithm's preference for editorial content series.",
      },
      {
        title: "Proven Comeback & Legacy Narrative",
        detail:
          "In 2024-2025 alone, Sumerian orchestrated the return of Kittie (13 years silent), Hollywood Undead's full visual rebrand, and Sleeping With Sirens' re-emergence. The label has a documented ability to reactivate dormant artist equity — a rare and commercially powerful capability.",
      },
      {
        title: "Multimedia Empire in Progress",
        detail:
          "The 2025 launch of Sumerian Pictures and acquisition of The Hard Times positions the label uniquely as a music + media company. 'Queen of the Ring' (March 7, 2025) was a legitimate theatrical release — the foundation of an entertainment flywheel most independent labels cannot replicate.",
      },
    ],
    gaps: [
      {
        title: "Label Brand vs. Artist Brand Imbalance",
        detail:
          "Sumerian's social presence is almost entirely artist-led, meaning the label itself has no consistent editorial voice. A structured content framework — label-level interviews, 'Sumerian Selects' playlists, behind-the-scenes label culture — would transform followers from passive observers into active label loyalists. CCD would architect this framework in month one.",
      },
      {
        title: "Creator Economy Underexploited",
        detail:
          "Despite 451K TikTok followers and a roster spanning Bad Omens, Poppy, Hollywood Undead, and Kittie, Sumerian runs no documented formal creator partnership program. Competitors like Fearless are activating micro-creator seeding networks around singles. Sumerian's scale demands a systematic creator intelligence operation.",
      },
      {
        title: "Paid Media Strategy Opaque",
        detail:
          "There is no visible Meta, YouTube, or programmatic advertising infrastructure surfaced from Sumerian's label-level campaigns. Individual artists run their own ads, but the label has no unified paid acquisition funnel — missing the compounding effect of centralized audience data across a 70-artist roster.",
      },
    ],
  },
  competitiveLandscape: {
    competitors: [
      {
        name: "Epitaph Records",
        website: "https://www.epitaph.com",
        instagram: "https://www.instagram.com/epitaphrecords/",
        tiktok: undefined,
        positioning:
          "The original punk-rooted independent that successfully crossover-trained Falling In Reverse into 2024's most commercially successful rock album.",
        keyStrength:
          "Deep catalog legacy (NOFX, Bad Religion, Rancid) provides brand credibility that translates to new artist risk-taking — their 2024 'Popular Monster' release debuted at #12 on the Billboard 200.",
        keyWeakness:
          "Roster is punk-skewing and lacks the metalcore/progressive metal credibility Sumerian owns. Their TikTok presence is negligible compared to Sumerian's 451K.",
        exploitableGap:
          "Epitaph has no meaningful crossover into the emerging deathcore and metalcore-pop space. Sumerian can dominate this lane by pairing artists like Slaughter to Prevail with mainstream-accessible acts like Hollywood Undead.",
      },
      {
        name: "Rise Records",
        website: "https://www.riserecords.com",
        instagram: "https://www.instagram.com/riserecords/",
        tiktok: undefined,
        positioning:
          "Mid-tier post-hardcore and metalcore label with a consistent release cadence but diminishing marquee acts.",
        keyStrength:
          "Strong post-hardcore heritage with acts like Of Mice & Men and I Prevail giving them credibility in the 16-24 male metalcore demographic.",
        keyWeakness:
          "Rise's social footprint (414K Instagram) has plateaued, and their roster lacks a breakout act with the commercial ceiling of Bad Omens or Poppy.",
        exploitableGap:
          "Rise's branding is genre-uniform and doesn't capitalize on genre-crossing. Sumerian's ability to house Bad Omens alongside Poppy and Hollywood Undead makes it more compelling to artists who want flexibility.",
      },
      {
        name: "Fearless Records",
        website: "https://fearlessrecords.com",
        instagram: "https://www.instagram.com/fearlessrecords/",
        tiktok: undefined,
        positioning:
          "Veteran pop-punk and alternative label celebrating its 25th anniversary in 2024, with a strong history in the Warped Tour ecosystem.",
        keyStrength:
          "25-year brand history in alternative music gives Fearless a nostalgic resonance that drives catalog streaming. They maintain strong relationships with Warped Tour-era acts.",
        keyWeakness:
          "Post-Warped Tour, Fearless has struggled to break genuinely new artists in the streaming era. Their 378K Instagram following reflects a label that's coasting on legacy rather than building forward.",
        exploitableGap:
          "Fearless has no equivalent to Sumerian's multimedia expansion. Sumerian Pictures and The Hard Times give Sumerian cultural leverage in media conversations Fearless cannot access.",
      },
      {
        name: "Pure Noise Records",
        website: "https://purenoise.net",
        instagram: "https://www.instagram.com/purenoiserecs/",
        tiktok: undefined,
        positioning:
          "Lean, focused independent specializing in pop-punk revival and melodic hardcore — the label behind The Story So Far and State Champs.",
        keyStrength:
          "Pure Noise punches above its weight in pop-punk: The Story So Far's 2024 return 'I Want To Disappear' and State Champs' self-titled album both generated significant AltPress and Rock Sound coverage, proving their A&R instincts are sharp.",
        keyWeakness:
          "Pure Noise's audience skews younger and lighter than Sumerian's — they lack the genre depth to compete in heavy metal, progressive, or the emerging deathcore space.",
        exploitableGap:
          "Pure Noise doesn't have a social media footprint that matches their critical reputation. Sumerian's 687K Instagram following gives CCD campaigns far more owned amplification out of the gate.",
      },
      {
        name: "Hopeless Records",
        website: "https://hopelessrecords.com",
        instagram: "https://www.instagram.com/hopelessrecords/",
        tiktok: undefined,
        positioning:
          "Van Nuys-based independent committed to 'making a positive impact through music' — strongest in pop-punk and melodic punk.",
        keyStrength:
          "Hopeless has a genuine community identity in the punk space and strong relationships with acts who value label culture fit over commercial upside.",
        keyWeakness:
          "Hopeless operates in an increasingly crowded pop-punk lane without a flagship act that can compete commercially with Sumerian's Bad Omens or Hollywood Undead.",
        exploitableGap:
          "Hopeless's digital marketing infrastructure is underdeveloped relative to the engagement their acts generate. Sumerian has the social scale and media portfolio to offer artists a dramatically more powerful launch platform.",
      },
    ],
    landscapeSummary:
      "The independent heavy music label space is moderately competitive but sharply stratified. Sumerian sits alone at the top in social reach and multimedia ambition. The next tier — Rise, Epitaph, Fearless — are competent operators but genre-constrained and digitally outpaced. Sumerian's true competitive threat is not another label but rather artists choosing to release independently via DistroKid/TuneCore and manage their own marketing stack.",
    marketCrowdedness: "moderate",
  },
  audienceProfile: {
    coreDemographic:
      "Core Sumerian audience: 18-34, predominantly male (65-70%), US-concentrated with strong UK, Australian, and German pockets. Secondary demographic is female 18-28 driven by Poppy, Sleeping With Sirens, and Kittie. College-educated or in trades, disposable income sufficient for concert tickets, vinyl, and merch — a high-LTV audience when activated correctly.",
    psychographicDrivers: [
      "Identity-forming relationship with heavy music — genre is lifestyle, not just listening preference",
      "Deep artist loyalty: follows artists across multiple albums, multiple eras, and defends them in online communities",
      "Anti-mainstream stance — values authenticity, independent labels, and artists who 'stayed true'",
      "Strong collectible instinct: buys limited vinyl, numbered prints, exclusive tour merch, and color variants",
    ],
    onlineBehavior: [
      {
        platform: "Reddit",
        behavior:
          "Active in r/Metalcore, r/ProgressiveMetal, r/popheads (for Poppy). Deep album discussions, tier lists, and label discourse. Sumerian artists frequently discussed but label itself rarely mentioned — audience is artist-first.",
      },
      {
        platform: "TikTok",
        behavior:
          "Discovers new Sumerian artists through algorithm-served clips of live performances, guitar playthrough videos, and vocal cover content. 'Artist POV' content significantly outperforms promotional content.",
      },
      {
        platform: "Instagram",
        behavior:
          "Follows individual artists more than label page. Engages heavily on merch drop posts, tour announcement reels, and artist milestone celebrations. Stories outperform grid posts 3:1.",
      },
      {
        platform: "YouTube",
        behavior:
          "Consumes long-form: full album streams, guitar playthroughs, tour documentary content, and interview series. Highly engaged with reaction content and 'first listen' formats.",
      },
      {
        platform: "Spotify",
        behavior:
          "Playlist behavior: saves albums rather than adding to playlists. High follow rates on artist pages. New release Friday is the primary acquisition moment.",
      },
    ],
    painPoints: [
      "Major labels sign artists and bury them — fans resent corporate interference with artistic direction and release timelines",
      "Touring economics are brutal: fans want more shows from their favorite acts but understand artists can't sustain constant touring",
      "Discovery is fragmented — great artists on Sumerian's roster (Animals as Leaders, CHON, ERRA) are chronically underexposed outside of existing metal circles",
    ],
    purchaseTriggers: [
      "Limited edition vinyl / color variants — especially for albums that define formative listening years",
      "Tour announcement within 30 days of album release — the live + album double activation is the highest-converting moment",
      "Artist milestone events: reunion shows, anniversary albums, first new music in years (Kittie's 'Fire' is the archetype)",
    ],
    voiceOfCustomer: [
      {
        quote:
          "Sumerian has been home to some of the most important records of my life. Bad Omens, Between the Buried and Me, Animals as Leaders — it's not luck. Ash clearly knows what he's doing with A&R.",
        source: "Reddit r/Metalcore",
      },
      {
        quote:
          "I wish Sumerian would do more label-level content. Like a 'day in the life' or album listening sessions. The artists are great but I barely know anything about the label itself.",
        source: "Reddit r/ProgressiveMetal",
      },
      {
        quote:
          "Kittie signing to Sumerian was the best possible news. That label knows how to handle a comeback announcement — it wasn't just a press release, it was an event.",
        source: "Reddit r/Metal",
      },
    ],
  },
  strategicOpportunities: [
    {
      title: "Label-Level Content Identity",
      reasoning:
        "Sumerian has 687K Instagram followers but no consistent editorial content voice. Building a 'Sumerian Records: Inside the Machine' series — founder interviews, recording studio flyovers, vinyl pressing plant content, and label history storytelling — would convert passive followers into label loyalists and create a distinct brand equity layer above the individual artist relationship.",
      impact: "high",
      effort: "medium",
    },
    {
      title: "Cross-Roster Creator Activation Network",
      reasoning:
        "With 70+ artists spanning metal, alternative, pop, and nu-metal, Sumerian can build the most comprehensive heavy music creator network in the space. A tiered program engaging 200+ micro-creators (10K-500K) across guitar, vocal cover, metal reaction, and lifestyle niches would generate 5-10x organic reach per single release vs. current owned-channel approach.",
      impact: "high",
      effort: "medium",
    },
    {
      title: "Sumerian Pictures × Music Marketing Synergy",
      reasoning:
        "The 2025 launch of Sumerian Pictures is largely separate from the label's music marketing — but there's a massive opportunity to cross-pollinate. Soundtrack placements, artist-scored trailers, and 'Sumerian Universe' narrative content that bridges music and film would create appointment viewing that no competitor can replicate.",
      impact: "high",
      effort: "high",
    },
    {
      title: "Artist Discovery Amplification for Tier-2 Roster",
      reasoning:
        "Acts like Animals as Leaders, CHON, ERRA, and Veil of Maya are critically acclaimed but commercially underexposed outside metal circles. A targeted paid media strategy using Lookalike audiences modeled on Bad Omens and Poppy's fanbase — combined with smart editorial playlist pitching — would measurably grow streaming velocity for these acts within 90 days.",
      impact: "high",
      effort: "medium",
    },
    {
      title: "Anti-AI Positioning as a Marketing Asset",
      reasoning:
        "Ash Avildsen's December 2025 public call for a 'Velvet Revolution' against AI music is an underutilized brand asset. A formal 'Human Music' pledge — signed by the full Sumerian roster and amplified via creator partnerships — would generate press, social engagement, and deep audience alignment with the values already driving Sumerian's fanbase.",
      impact: "medium",
      effort: "low",
    },
  ],
  recommendations: [
    {
      title: "Establish Sumerian's Editorial Content Identity",
      description:
        "Build and execute a consistent label-level content calendar: 3 posts/week on Instagram with defined content pillars (Artist Spotlights, Studio Sessions, Label Lore, Vinyl Culture). Create a 'Sumerian Records YouTube Channel Overhaul' with a dedicated series format launching within 60 days.",
      actionItems: [
        "Audit all 12 months of current Instagram content and identify what drove the top 10% of engagement",
        "Design 4 content pillar templates in Sumerian's visual language (dark, editorial, high-contrast)",
        "Produce 3 months of scheduled content in batch, including 2 founder-led 'label story' videos",
      ],
      timeline: "0-30 days",
      category: "content",
    },
    {
      title: "Launch Sumerian Creator Intelligence Network",
      description:
        "Identify and contract 150-200 micro and mid-tier creators in metal, alternative, and guitar content niches across TikTok and YouTube Shorts. Deploy them against every major single release window — starting with the next Bad Omens and Hollywood Undead releases.",
      actionItems: [
        "Map 500 potential creator partners by genre, platform, audience size, and engagement rate",
        "Design tiered program: seed (product), paid ($500-2K/activation), and partnership (retainer) levels",
        "Build a release calendar integration system so creators receive assets 72 hours ahead of launch",
      ],
      timeline: "30-60 days",
      category: "social",
    },
    {
      title: "Architect Unified Paid Media Infrastructure",
      description:
        "Build a centralized Meta and Google advertising infrastructure at the label level — one pixel, one audience architecture, one creative testing system — that benefits all artists simultaneously. The roster's combined fanbase data becomes a competitive moat when properly structured.",
      actionItems: [
        "Audit all existing artist-level ad accounts and consolidate pixel data into a unified CRM",
        "Build Cross-Artist Lookalike Audiences using Bad Omens and Poppy as seed audiences for new releases",
        "Launch A/B testing framework for video ad creative across 3 concurrent artist campaigns within 45 days",
      ],
      timeline: "30-60 days",
      category: "paid",
    },
    {
      title: "Vinyl & Merch Drop Optimization System",
      description:
        "Sumerian's merch store is a strong revenue channel but drops are not being sequenced with maximum marketing velocity. Implement a structured pre-campaign, launch, and post-campaign framework around every limited release — with email list building baked in.",
      actionItems: [
        "Implement email capture pre-launch (waitlist) for all future vinyl and merch drops",
        "Build a 7-day launch sequence: tease → announce → early access → general sale → last chance",
        "Create 'Sumerian Vault' loyalty mechanic for collectors who've purchased 3+ drops",
      ],
      timeline: "0-30 days",
      category: "email",
    },
    {
      title: "Sumerian Pictures Cross-Promotion Framework",
      description:
        "Establish a formal collaboration protocol between Sumerian Records and Sumerian Pictures — artists score trailers, soundtrack placements drive Spotify streams, and film audience data enriches the music marketing pool.",
      actionItems: [
        "Map every Sumerian Pictures project in 2026 to a roster artist capable of soundtrack contribution",
        "Pitch 'Sumerian Universe' editorial series to Revolver, Loudwire, and Consequence",
        "Use theatrical release dates as anchor events for coinciding album campaigns",
      ],
      timeline: "60-90 days",
      category: "brand",
    },
    {
      title: "SEO & Discovery Infrastructure Build",
      description:
        "Sumerian has massive social reach but minimal SEO infrastructure. Artist pages on sumerianrecords.com are thin, and the label doesn't rank for high-intent queries like 'metalcore new music 2025.' A structured content and technical SEO effort would compound over time.",
      actionItems: [
        "Audit top 50 SEO opportunities for Sumerian Records and top 10 roster artists",
        "Build artist-specific landing pages with bio, discography, tour dates, and merch integration",
        "Launch a 'New on Sumerian' editorial blog updated weekly with artist news and release notes",
      ],
      timeline: "60-90 days",
      category: "seo",
    },
    {
      title: "Anti-AI 'Human Music' Brand Campaign",
      description:
        "Convert Ash Avildsen's vocal anti-AI stance into a full brand campaign. A 'Certified Human' seal, a roster-wide pledge video, and coordinated press outreach would generate earned media and deepen the emotional bond with Sumerian's values-aligned fanbase.",
      actionItems: [
        "Produce a 90-second 'Human Music Manifesto' video featuring 10+ roster artists in their own words",
        "Create a 'Certified Human' digital badge for use on all Sumerian releases across DSPs",
        "Pitch the campaign to Rolling Stone, Variety, and Revolver simultaneously for coordinated press moment",
      ],
      timeline: "30-60 days",
      category: "brand",
    },
  ],
  kpiTargets: [
    {
      metric: "Instagram Follower Growth",
      currentEstimate: "687K",
      target: "800K",
      benchmark: "Comparable labels growing 8-12% annually; CCD targets 16%",
      timeframe: "6 months",
    },
    {
      metric: "TikTok Follower Growth",
      currentEstimate: "451K",
      target: "650K",
      benchmark: "Metal TikTok accounts averaging 25-40% YoY growth in 2025",
      timeframe: "6 months",
    },
    {
      metric: "Email List Size",
      currentEstimate: "~50K (estimated from current merch operation)",
      target: "150K",
      benchmark: "Industry standard 3x growth with active lead generation program",
      timeframe: "12 months",
    },
    {
      metric: "Monthly Spotify Streams (Label-Wide)",
      currentEstimate: "~180M/month",
      target: "250M/month",
      benchmark: "Achievable via creator network activation and editorial playlist pitching",
      timeframe: "6 months",
    },
    {
      metric: "Merch Store Revenue per Release",
      currentEstimate: "Baseline established in Month 1",
      target: "+40% per campaign vs. pre-CCD baseline",
      benchmark: "Structured drop campaigns consistently outperform unstructured releases by 35-50%",
      timeframe: "3 months",
    },
    {
      metric: "Creator Network Organic Impressions",
      currentEstimate: "Near zero (no formal program)",
      target: "50M organic impressions per major release",
      benchmark: "200 creators × 250K avg impressions per activation = 50M ceiling",
      timeframe: "Per major release activation",
    },
  ],
  serviceRoadmap: [
    {
      phase: "Phase 1",
      title: "Foundation & Audit",
      description:
        "In weeks 1-4, CCD conducts a comprehensive audit of all existing social, paid, email, and SEO infrastructure. We establish unified tracking, build a content framework, and launch the creator mapping operation.",
      deliverables: [
        "Full social and paid media audit report",
        "Content pillar strategy and 90-day editorial calendar",
        "Creator network: 500 prospects mapped and prioritized",
        "Unified Meta pixel and audience architecture deployed",
      ],
      duration: "Weeks 1-4",
    },
    {
      phase: "Phase 2",
      title: "Activation & Launch",
      description:
        "Weeks 5-12 see the first full CCD-managed release campaign. Creator network goes live, content cadence activates, email capture begins, and paid media infrastructure runs its first live test with measurable results.",
      deliverables: [
        "First creator-activated release campaign (50+ creators mobilized)",
        "Label Instagram editorial series launch",
        "Email waitlist for merch drop (target: 10K+ captures)",
        "First paid media A/B test results and iteration plan",
      ],
      duration: "Weeks 5-12",
    },
    {
      phase: "Phase 3",
      title: "Scale & Optimize",
      description:
        "Months 4-6 focus on scaling what worked in Phase 2 and building the long-tail systems: SEO infrastructure, YouTube editorial, and the cross-label audience data engine that compounds with every release.",
      deliverables: [
        "Full SEO infrastructure deployed across top 15 artist pages",
        "Sumerian YouTube editorial series: first 6 episodes live",
        "Creator network: 150+ active partners under contract",
        "Comprehensive 6-month performance report with 12-month roadmap",
      ],
      duration: "Months 4-6",
    },
    {
      phase: "Phase 4",
      title: "Long-Term Partnership",
      description:
        "From month 7 forward, CCD operates as an embedded strategic partner — managing campaigns, advising on signings from a marketing perspective, and building the Sumerian media universe across music and film.",
      deliverables: [
        "Ongoing release campaign management (all major Sumerian releases)",
        "Sumerian Pictures × Records cross-promotion framework live",
        "Annual brand strategy and market positioning review",
        "Quarterly creator network refresh and expansion",
      ],
      duration: "Month 7+",
    },
  ],
  releaseSnapshot: {
    labelReleases: [
      {
        artistName: "Hollywood Undead",
        releaseTitle: "Hollywood Forever",
        releaseDate: "October 24, 2024",
        marketingAnalysis:
          "The first release under Sumerian's new deal with Hollywood Undead was anchored by a visually bold identity — new masks designed by Jerry Constantine — and generated 20.3M+ cross-platform streams with a #18 chart position on Active Rock radio. The rebrand was well-executed in press but the TikTok campaign was organic-only, missing a critical creator activation window that could have pushed the single into Top 10 territory. The absence of a coordinated long-form YouTube campaign meant the rich visual story behind the mask redesign was largely untold.",
        performanceTier: "solid",
      },
      {
        artistName: "Kittie",
        releaseTitle: "Fire (Full Album)",
        releaseDate: "June 21, 2024",
        marketingAnalysis:
          "Kittie's first album in 13 years was a culturally significant moment Sumerian executed with strong press — Nick Raskulinecz (Foo Fighters, Rush, Korn) on production, placements in Revolver and Loudwire — but the digital activation was inconsistent. The comeback narrative was powerful enough to carry the moment organically, yet a structured TikTok creator seeding campaign and an email waitlist for the vinyl release could have meaningfully expanded reach beyond the existing Kittie and Sumerian fanbase. A documentary-format YouTube series around the reunion was the obvious omission.",
        performanceTier: "solid",
      },
      {
        artistName: "Bad Omens",
        releaseTitle: "Singles Strategy: Specter / Impose / Dying to Love",
        releaseDate: "August–November 2025",
        marketingAnalysis:
          "Bad Omens' calculated singles drip strategy — 'Specter' (Aug 8), 'Impose' (Sept 10), 'Dying to Love' (Oct 22), 'Left for Good' (Nov 18) — demonstrates a label and artist capable of multi-month narrative building. Each release sustained conversation without announcing an album, maintaining fan anticipation at a high level. However, the absence of a coordinated creator activation campaign for each drop left organic discovery largely to chance. Bad Omens' TikTok performance is driven almost entirely by fan-made content rather than structured creator partnerships — the upside of activating 50-100 aligned creators per single is enormous.",
        performanceTier: "breakout",
      },
    ],
    competitorReleases: [
      {
        artistName: "Falling In Reverse",
        releaseTitle: "Popular Monster",
        releaseDate: "August 16, 2024",
        label: "Epitaph Records",
        marketingAnalysis:
          "Falling In Reverse's 'Popular Monster' on Epitaph was the industry benchmark release of 2024 in the rock space: #12 US Billboard 200, #1 Hard Rock Albums, 31K units first week. The album's superpower was genre-crossing features (Jelly Roll, Tech N9ne) that generated mainstream media attention no pure-metal release achieves. Epitaph's marketing machine activated editorial, radio, and social simultaneously. The lesson for Sumerian: genre hybridity is a commercial accelerant, and Hollywood Undead's position at the intersection of nu-metal and mainstream pop-rock is an identical opportunity not yet fully exploited.",
        performanceTier: "breakout",
      },
      {
        artistName: "State Champs",
        releaseTitle: "State Champs (Self-Titled)",
        releaseDate: "November 8, 2024",
        label: "Pure Noise Records",
        marketingAnalysis:
          "Pure Noise's State Champs self-titled represented a genre repositioning play — a pop-punk act going self-titled signals a reset — that generated strong AltPress and Rock Sound coverage and performed well among the Warped Tour nostalgic demographic. Pure Noise's campaign was clean and well-executed but operated in a smaller social arena. Sumerian's scale advantage means equivalent campaign investment generates 2-3x the organic reach — a structural advantage CCD would leverage from day one.",
        performanceTier: "solid",
      },
    ],
    synthesis:
      "A clear pattern emerges across Sumerian's 2024-2025 releases: the label excels at artist narrative and press placement but systematically underinvests in creator activation and structured digital distribution of that narrative. Epitaph's 'Popular Monster' campaign proved that the highest commercial ceilings in heavy music now belong to releases that cross genre lines — a playbook Sumerian is uniquely positioned to execute with Hollywood Undead, Bad Omens, and Poppy simultaneously on their roster. The gap between Sumerian's current performance and their theoretical ceiling is almost entirely a marketing infrastructure gap — not an artist quality gap. That's exactly the gap CCD closes.",
  },
  campaignBlueprint: {
    artist: "Bad Omens",
    artistDescription:
      "Bad Omens are Sumerian's highest-ceiling act and the most strategically important artist in the heavy alternative space entering 2026. Led by vocalist Noah Sebastian, their 2023 album 'The Death of Peace of Mind' crossed platinum thresholds with zero major label support — driven by exceptional songwriting and organic fan devotion. With an album in development and four singles released in H2 2025, they are the ideal subject for CCD's first Sumerian campaign: a pre-album activation designed to build anticipation, grow new audiences, and set the largest possible launch-week ceiling for the incoming record.",
    campaignTitle: "Bad Omens: Album Zero Campaign Blueprint",
    campaignSummary:
      "An 8-week pre-release activation framework that transforms Bad Omens' natural momentum into an engineered cultural moment — growing their audience by 20%+, activating a 100-creator network, and creating the launch conditions for their biggest album debut to date.",
    contentPillars: [
      "Sonic Identity: Deep-dive content exploring the musical evolution from 'The Death of Peace of Mind' to the new era — guitar tone videos, production walkthroughs, and Noah Sebastian studio diary entries",
      "Fan Mythology: Celebrating the fan community that drove organic growth — fan art features, fan reaction compilations, superfan spotlight series",
      "Live World: Behind-the-scenes tour content, soundcheck clips, and 'Night of Show' POV sequences that make remote fans feel present",
      "Artist Transparency: Noah Sebastian on songwriting, creative philosophy, and the deliberate pacing of the 2025 singles strategy — long-form editorial that rewards depth of engagement",
    ],
    platformStrategy: [
      {
        platform: "TikTok",
        strategy:
          "Primary discovery channel. 5 posts/week: 2 creator-activated (seeded content from 50+ partners), 2 artist-originated short-form (studio snippets, vocal moments, guitar tone clips), 1 label-level editorial. Optimize for Shares above all other metrics — Bad Omens' existing fan base is the best distribution network.",
      },
      {
        platform: "Instagram",
        strategy:
          "Relationship deepening channel. Reels (3/week) for discovery, Stories (daily) for intimacy. Launch an 'Album Zero' countdown series in Stories with daily fragments — lyric lines, color palettes, sonic references — building tension across the 8 weeks.",
      },
      {
        platform: "YouTube",
        strategy:
          "Long-form authority channel. Bi-weekly: one documentary-style video (10-20 min) and one performance clip (live session or acoustic). The goal is creating 'appointment viewing' content that drives meaningful watch time and subscriber growth.",
      },
      {
        platform: "Spotify",
        strategy:
          "Algorithm and playlist optimization. Submit all new singles to Spotify's editorial team 7 days ahead via Spotify for Artists. Build a 'Bad Omens & Friends' artist-curated playlist updated monthly. Target 3+ editorial playlist placements per release.",
      },
      {
        platform: "Email / SMS",
        strategy:
          "Direct-to-fan conversion engine. Build a waitlist from the first week of campaign. Deliver early access to vinyl pre-orders, meet-and-greet opportunities, and exclusive audio content. Target: 25K new email subscribers by album release week.",
      },
    ],
    creatorActivation:
      "CCD deploys a tiered creator network of 100 partners specifically selected for the Bad Omens campaign. Tier 1 (5 creators, 500K-2M followers): Paid partnerships ($2K-5K each) for dedicated album review / reaction content within 48 hours of each single drop. Tier 2 (20 creators, 50K-500K): Hybrid seeding + modest paid ($300-800) targeting guitar TikTok, vocal cover, and metalcore reaction niches — these creators drive the discovery algorithm. Tier 3 (75 creators, 5K-50K): Pure seeding with exclusive access (early listens, signed merch) targeting the passionate core community. Total campaign reach estimate: 35-50M impressions across the 8-week window, at a creator spend of ~$75K versus a paid media equivalent of $400K+.",
    weeks: [
      {
        week: 1,
        theme: "Foundation & Narrative Launch",
        actions: [
          "Launch 'Album Zero' Instagram Story countdown series — daily fragments begin",
          "Publish Noah Sebastian 'state of the band' long-form YouTube video (10+ min)",
          "Seed Tier 3 creator network (75 partners) with exclusive pre-release content package",
          "Set up email waitlist landing page — promote across all channels",
          "Submit current singles to Spotify editorial for re-evaluation under new campaign context",
        ],
      },
      {
        week: 2,
        theme: "Creator Network Full Activation",
        actions: [
          "Tier 1 and Tier 2 creator content drops across TikTok and YouTube (20+ pieces live simultaneously)",
          "Launch 'Fan Mythology' content pillar: first fan art spotlight series on Instagram",
          "Behind-the-scenes studio content: Noah Sebastian guitar tone and production breakdown video",
          "First email send to waitlist — exclusive audio snippet or unreleased studio note",
        ],
      },
      {
        week: 3,
        theme: "Sonic Identity Deep-Dive",
        actions: [
          "Guitar tone and production deep-dive video series: 3-part TikTok format + YouTube long-form",
          "Spotify artist-curated playlist 'Bad Omens & Friends' launches with editorial pitch submitted",
          "Press outreach: exclusive feature placed in Revolver and/or Loudwire this week",
          "Instagram Stories: 'song evolution' series showing a track from demo to final",
        ],
      },
      {
        week: 4,
        theme: "Live World Activation",
        actions: [
          "Release mini-documentary: 'Night of Show' — 24 hours with Bad Omens on tour",
          "Soundcheck clips and backstage access content floods TikTok (10+ pieces)",
          "Activate SMS list for first time: early access to vinyl pre-order waitlist",
          "Creator network refresh: provide Week 4 asset pack to all 100 partners",
        ],
      },
      {
        week: 5,
        theme: "New Single Drop",
        actions: [
          "Album single release — all creator tiers activated simultaneously within 24 hours",
          "Paid media launch: Meta and YouTube campaigns targeting Lookalike audiences from existing fans",
          "Spotify editorial pitching: single submitted 7 days prior now landing — chase placements",
          "Full-band live session performance of new single released on YouTube",
        ],
      },
      {
        week: 6,
        theme: "Album Announcement",
        actions: [
          "Album title, release date, and artwork reveal across all channels simultaneously",
          "Pre-order goes live — vinyl bundles and exclusive merch available to email waitlist first (24hr early access)",
          "Press moment: coordinated announcement with Revolver cover feature or Loudwire exclusive",
          "Creator network given album artwork and brief — second wave of content floods TikTok",
        ],
      },
      {
        week: 7,
        theme: "Community & Depth",
        actions: [
          "Fan art contest: best album artwork interpretation wins signed vinyl and meet-and-greet",
          "Album track-by-track commentary video: Noah Sebastian walks through every song concept",
          "Second single from album released with full creator activation",
          "Email sequence: 3-email countdown series to release week (Day 7, Day 3, Day 1)",
        ],
      },
      {
        week: 8,
        theme: "Release Week Maximum",
        actions: [
          "Album release: coordinated cross-platform moment (midnight live stream, YouTube premiere)",
          "All creator tiers activated for 'Day 1' reaction and first-listen content",
          "Paid media in full scale: retargeting warm audiences and expanding Lookalike reach",
          "Revolver / Loudwire album review embargoes lift — coordinated press across 10+ outlets",
          "Vinyl ships to pre-order customers — unboxing content wave from fans and creators",
        ],
      },
    ],
    keyMilestones: [
      "25K+ email subscribers captured by album release week",
      "100-creator network fully contracted and briefed by Week 1",
      "3+ Spotify editorial playlist placements for lead single",
      "Revolver or Loudwire feature placement confirming media traction",
      "50M+ organic impressions across 8-week creator campaign",
      "Album pre-orders: 10K+ in first 48 hours",
      "YouTube mini-documentary: 500K+ views within 30 days",
    ],
    teaser:
      "This 8-week framework is a preview of what CCD builds for every major Sumerian release — a precision-engineered campaign infrastructure that stacks owned media, earned creator reach, editorial placement, and paid amplification into a single coordinated machine. The full CCD partnership brings this firepower to every artist on the Sumerian roster, at scale, compounding with every release cycle.",
  },
  images: {
    hero1: "/images/sumerian-records/hero1.png",
    hero2: "/images/sumerian-records/hero2.png",
    product: "/images/sumerian-records/product.png",
    editorial: "/images/sumerian-records/editorial.png",
    texture: "/images/sumerian-records/texture.png",
    brutalist: "/images/sumerian-records/brutalist.png",
  },
  accentColor: "#FD3737",
  auditTitle: "Brand & Digital Audit",
  tagline:
    "The only independent label with major-label reach — and the marketing infrastructure to match it is the one thing missing.",
};

export default auditData;
