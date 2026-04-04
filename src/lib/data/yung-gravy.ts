import type { AuditData } from "@/lib/types/audit";

const auditData: AuditData = {
  id: "audit_1743782400",
  slug: "yung-gravy",
  status: "complete",
  createdAt: "2026-04-04T14:00:00Z",
  completedAt: "2026-04-04T16:00:00Z",
  pipelineProgress: {
    steps: [],
    currentStep: 7,
    totalSteps: 7,
  },

  intake: {
    brandName: "Yung Gravy",
    accentColor: "#FD3737",
  },

  discovery: {
    websiteUrl: "https://yunggravy.com/",
    industry: "Music / Entertainment",
    socialUrls: {
      instagram: "https://www.instagram.com/yunggravy/",
      tiktok: "https://www.tiktok.com/@yunggravy",
      x: "https://x.com/yunggravy",
      facebook: "https://www.facebook.com/yunggravy/",
      linkedin: undefined,
    },
    description:
      "American rapper, singer, and internet personality known for blending trap music with vintage soul and funk samples, humor-driven lyrics, and a larger-than-life retro persona. Signed to Republic Records with 4.5M+ Spotify monthly listeners.",
  },

  brandSnapshot: {
    positioning:
      "The internet's favorite retro-funk party rapper — a 6'8\" charisma machine who blends 1950s-70s nostalgia with modern trap production, tongue-in-cheek humor, and a ladies-man persona that plays equally well on TikTok and at sold-out college shows.",
    voiceAndTone: [
      {
        adjective: "Irreverent",
        evidence:
          "Song titles like '1 Thot 2 Thot Red Thot Blue Thot' and 'Mr. Clean' — plus a recurring shtick of sampling iconic oldies tracks and flipping them into party anthems — establish Gravy as someone who doesn't take himself seriously.",
      },
      {
        adjective: "Nostalgic",
        evidence:
          "Consistent sampling of 1950s-70s hits (The Chordettes' 'Mr. Sandman,' Maxine Nightingale's 'Right Back Where We Started From') creates a vintage sonic identity that's become his signature.",
      },
      {
        adjective: "Charismatic",
        evidence:
          "His 6'8\" physical presence, confident stage persona, and willingness to lean into absurdity — from collaborating with Martha Stewart to walking the VMAs with Shania Twain's mom — make him a natural entertainer beyond just the music.",
      },
      {
        adjective: "Accessible",
        evidence:
          "Music is deliberately catchy, non-confrontational party rap. His college tour circuit and brand collabs (Dr Pepper, Crocs, Champion) position him as mainstream-friendly without trying to be 'serious' hip-hop.",
      },
    ],
    visualIdentity:
      "Yung Gravy's visual world is anchored in retro Americana — vintage suits, gold chains, 70s color palettes (amber, cream, avocado green), and a consistent 'suave throwback playboy' aesthetic. His website is clean but minimal. Social media photography alternates between polished promotional shots and candid, humor-driven content. The visual identity is strong conceptually but lacks a cohesive design system across platforms.",
    keyOfferings: [
      "Original music (6 studio albums, 8 EPs)",
      "Live performances & touring (college circuit + theaters)",
      "Brand partnerships & endorsements (Dr Pepper, Crocs, Champion, Vans)",
      "Social media entertainment (7.4M TikTok, 2M Instagram)",
      "Merchandise & limited-edition collaborations",
    ],
    digitalPresenceScore: "strong",
    digitalPresenceReasoning:
      "Yung Gravy commands 7.4M TikTok followers, 2M Instagram followers (with a 10.4% engagement rate — well above industry average), 1.8M YouTube subscribers, and 4.5M Spotify monthly listeners. His content consistently goes viral and he's proven he can convert internet attention into real-world ticket sales and brand deals. The gap is that his official website is underutilized — basic Divi template with no real content hub, e-commerce integration, or fan community features.",
    strengths: [
      {
        title: "Unmatched Virality-to-Touring Pipeline",
        detail:
          "Gravy has built one of the most effective TikTok-to-ticket-sales funnels in music. His 7.4M TikTok followers and 197M+ likes translate directly into sold-out college shows and theater tours. The Voluptuous Voyage tour (2025) hit 20+ cities across North America, proving his internet fame converts to real-world demand.",
      },
      {
        title: "Distinctive Sonic Brand Identity",
        detail:
          "By consistently sampling vintage soul and funk tracks and pairing them with modern trap production, Gravy has carved out a sonic niche that's instantly recognizable. 'Betty (Get Money)' (#30 Billboard Hot 100, RIAA Platinum) proved this formula can chart, and the nostalgic sound gives him natural licensing and sync appeal.",
      },
      {
        title: "Brand Partnership Magnet",
        detail:
          "His humor-driven, non-controversial persona makes him the ideal brand collaborator. The Dr Pepper x Yung Gravy campaign (custom single + merch drop) and sell-out Crocs collaboration demonstrate he can move product. His marketing degree from UW-Madison means he understands the game from both sides.",
      },
    ],
    gaps: [
      {
        title: "Website Is a Missed Revenue Engine",
        detail:
          "yunggravy.com is a basic Divi WordPress site with minimal content — no integrated merch store, no content hub, no email capture, no fan community. For an artist with 13M+ social followers, the website should be a direct-to-fan commerce and engagement platform generating significant revenue.",
      },
      {
        title: "Critical Perception of Artistic Longevity",
        detail:
          "Critics and fans on Album of the Year and Reddit increasingly voice concern that the novelty formula is wearing thin. 'Serving Country' (2024) received mixed reviews, with fans saying it lacked the charm of earlier work. Without artistic evolution, he risks being seen as a one-trick act — there's an urgent need for narrative diversification.",
      },
      {
        title: "YouTube Underperformance vs. Social Reach",
        detail:
          "Despite 1.8M subscribers, YouTube averages only ~23K monthly views — a fraction of what his TikTok and Instagram reach would suggest. YouTube is the #2 music discovery platform and a major revenue source. His channel needs a dedicated content strategy beyond just music video uploads.",
      },
    ],
  },

  competitiveLandscape: {
    competitors: [
      {
        name: "bbno$",
        website: "https://bbnomula.com/",
        instagram: "https://www.instagram.com/bbnomula/",
        tiktok: "https://www.tiktok.com/@bbnotiktok",
        positioning:
          "Canadian SoundCloud-era rapper and Gravy's closest creative partner — co-created the Baby Gravy franchise. Leans more into global pop-rap crossovers with tracks like 'Lalala' (5B+ streams).",
        keyStrength:
          "Massive global streaming numbers and a diversified sound that ranges from pop to EDM to hip-hop, making him more playlist-friendly.",
        keyWeakness:
          "Less distinctive brand identity — blends into the broader pop-rap landscape without Gravy's retro-nostalgia hook.",
        exploitableGap:
          "bbno$ has moved toward a more serious sound. Gravy can double down on the fun, nostalgic party-rap lane that bbno$ is vacating.",
      },
      {
        name: "Lil Dicky",
        website: "https://www.lildicky.com/",
        instagram: "https://www.instagram.com/lildickygram/",
        tiktok: "https://www.tiktok.com/@lildicky",
        positioning:
          "Comedy rapper turned actor/showrunner — pivoted from viral music ('$ave Dat Money,' 'Earth') to creating the FXX series 'Dave,' rebranding as a multi-hyphenate entertainer.",
        keyStrength:
          "Successfully transitioned from novelty rapper to legitimate entertainment brand with a critically acclaimed TV show, proving comedy-rap artists can have longevity beyond music.",
        keyWeakness:
          "Has essentially abandoned music releases to focus on acting — his music audience is underserved and looking for alternatives.",
        exploitableGap:
          "Lil Dicky left a vacuum in the 'smart, funny rapper who makes catchy music' lane. Gravy can capture that audience by expanding his content universe (podcasts, video series) while staying musically active.",
      },
      {
        name: "Oliver Tree",
        website: "https://www.olivertree.com/",
        instagram: "https://www.instagram.com/olivertree/",
        tiktok: "https://www.tiktok.com/@olivertree",
        positioning:
          "Genre-bending artist and internet personality who blends indie rock, electronic, and hip-hop with an absurdist, character-driven persona and viral social media stunts.",
        keyStrength:
          "14.5M TikTok followers and a fully committed character-driven brand that extends into fashion, stunts, and narrative storytelling — every post is part of the mythology.",
        keyWeakness:
          "His confrontational, chaotic persona can alienate mainstream brand partners. Less approachable than Gravy for corporate collaborations.",
        exploitableGap:
          "Oliver Tree's audience craves character-driven internet entertainment but his abrasive edge limits brand deals. Gravy can offer brands the same viral reach with a friendlier, more partnership-ready persona.",
      },
      {
        name: "T-Pain",
        website: "https://www.tpainsworld.com/",
        instagram: "https://www.instagram.com/tpain/",
        tiktok: "https://www.tiktok.com/@tpain",
        positioning:
          "Veteran hitmaker who reinvented himself as a beloved internet personality and Twitch streamer, proving hip-hop artists can build durable second-act careers through personality-driven content.",
        keyStrength:
          "Decades of hit records provide credibility, while his Twitch and social media reinvention showed the blueprint for artists staying relevant through authenticity and humor.",
        keyWeakness:
          "As a legacy act, T-Pain's new music doesn't drive the same cultural conversation. His streaming audience skews older than Gravy's core demo.",
        exploitableGap:
          "T-Pain proved the 'funny, self-aware rapper who embraces the internet' model works long-term. Gravy should study his playbook for community building (Twitch, Discord) to build a more durable fan ecosystem beyond just TikTok.",
      },
      {
        name: "Shotgun Willy",
        website: "https://shotgunwilly.com/",
        instagram: "https://www.instagram.com/shotgunwilly/",
        tiktok: "https://www.tiktok.com/@shotgunwilly",
        positioning:
          "SoundCloud-era comedy rapper known for absurdist humor and a devoted niche following. Occupies the irreverent party-rap lane but at a smaller scale.",
        keyStrength:
          "Extremely loyal fanbase and authentic internet-native brand. His Fortnite collaborations show gaming/internet culture crossover potential.",
        keyWeakness:
          "Hasn't scaled beyond niche internet fame — 114K Instagram, 446K TikTok. Limited mainstream breakthrough or brand partnership portfolio.",
        exploitableGap:
          "Shotgun Willy's ceiling is Gravy's floor. This validates that the humor-rap lane has a spectrum from niche to mainstream — Gravy should continue pushing toward mainstream crossovers to stay ahead.",
      },
    ],
    landscapeSummary:
      "The humor-driven rap space is a spectrum from niche internet acts (Shotgun Willy) to mainstream crossovers (Yung Gravy, Lil Dicky). The key trend is that comedy rappers who diversify beyond music (TV, streaming, brand partnerships) have the longest careers. Gravy sits in a strong middle position — bigger than the niche acts, more musically active than Lil Dicky — but faces a critical inflection point: evolve the brand or risk the novelty wearing off.",
    marketCrowdedness: "moderate",
  },

  audienceProfile: {
    coreDemographic:
      "18-28 year olds, predominantly male (65-70%), concentrated in the US Midwest and college towns. Mix of Gen Z and young Millennials with some college education, middle-class backgrounds, and disposable income for concerts, merch, and streaming.",
    psychographicDrivers: [
      "Nostalgia for a pre-internet era they never experienced — the 50s-70s Americana aesthetic feels 'cool' and ironic",
      "Humor as a social currency — sharing Yung Gravy songs and memes is a low-stakes way to entertain friend groups",
      "Anti-seriousness — rejection of the hyper-competitive, flex-heavy mainstream rap culture in favor of fun and self-awareness",
      "Party culture and social bonding — his music soundtracks tailgates, pregames, and college parties",
    ],
    onlineBehavior: [
      {
        platform: "TikTok",
        behavior:
          "Primary discovery platform. Fans create lip-sync, dance, and comedy videos using Gravy's songs. His tracks frequently trend as sounds, driving streams and concert awareness.",
      },
      {
        platform: "Instagram",
        behavior:
          "Engagement hub — 10.4% engagement rate with ~186K likes per post. Fans interact heavily with meme-style captions and behind-the-scenes content. Stories and Reels drive merch drops.",
      },
      {
        platform: "Spotify / Apple Music",
        behavior:
          "Playlist-driven listening. Fans add Gravy to party playlists alongside bbno$, Jack Harlow, and Doja Cat. Discovery often happens via algorithmic recommendations after viral TikTok moments.",
      },
      {
        platform: "Reddit / Twitter",
        behavior:
          "Discussion and opinion-forming. Subreddits and music Twitter are where the 'artistic longevity' debate plays out — hardcore fans defend him, casual listeners question whether the formula is sustainable.",
      },
    ],
    painPoints: [
      "Feeling like mainstream rap takes itself too seriously — wanting music that's fun without being 'corny'",
      "Desire for a community around humor-rap that goes beyond just streaming — no Discord, no fan club, no interactive experiences",
      "Frustration with inconsistent content output — long gaps between albums and tours leave fans disengaged",
    ],
    purchaseTriggers: [
      "Viral TikTok moment or new single drop creates urgency to buy concert tickets before they sell out",
      "Limited-edition merch drops (Crocs collab, Dr Pepper bundle) create scarcity-driven purchases",
      "Tour announcement in their city — Gravy's live reputation is a major conversion driver, with word-of-mouth from friends who attended previous shows",
    ],
    voiceOfCustomer: [
      {
        quote:
          "His shows are literally the most fun I've had at a concert. It's just vibes, no pretension. Everyone's there to have a good time.",
        source: "Reddit r/hiphopheads",
      },
      {
        quote:
          "I wish he'd drop more music. He teases stuff on TikTok then goes quiet for months. When he's on, nobody does it better.",
        source: "Twitter/X fan replies",
      },
      {
        quote:
          "The country album was a miss but I'll always show up for Gravy. He just needs to get back to the retro samples — that's his lane.",
        source: "Album of the Year user reviews",
      },
    ],
  },

  strategicOpportunities: [
    {
      title: "Build a Direct-to-Fan Commerce & Community Platform",
      reasoning:
        "With 13M+ social followers and no real website infrastructure, Gravy is leaving millions in potential revenue on the table. A rebuilt yunggravy.com with integrated merch (Shopify), email capture, a fan community (Discord/Circle), and exclusive content drops would create a revenue engine that doesn't depend on platform algorithms.",
      impact: "high",
      effort: "medium",
    },
    {
      title: "Launch a 'Gravy's World' Content Universe",
      reasoning:
        "Lil Dicky proved comedy rappers can build media empires. A YouTube series, podcast, or episodic social content that expands Gravy's character beyond just music would address the artistic longevity concern while creating sponsorable inventory. His marketing degree and natural charisma make this a natural extension.",
      impact: "high",
      effort: "high",
    },
    {
      title: "Strategic Sync & Licensing Push",
      reasoning:
        "Gravy's retro-sample sound is tailor-made for TV, film, and advertising sync placements. His tracks have the nostalgic warmth brands crave without the lyrical controversy that blocks most hip-hop sync deals. A proactive sync strategy targeting major ad agencies and music supervisors could generate significant passive income.",
      impact: "high",
      effort: "low",
    },
    {
      title: "YouTube Content Strategy Overhaul",
      reasoning:
        "1.8M subscribers generating only 23K monthly views is a crisis. A dedicated YouTube strategy — behind-the-scenes series, studio sessions, food/travel content that leans into the 'gravy' brand, and short-form Shorts — could 10x monthly views and unlock YouTube's superior monetization.",
      impact: "medium",
      effort: "medium",
    },
    {
      title: "Expand Brand Partnership Portfolio Into Lifestyle",
      reasoning:
        "Dr Pepper and Crocs proved Gravy can move product. The next tier is lifestyle brand ambassador deals — think food brands (hot sauce, snack lines), fashion (vintage-inspired capsule collections), and hospitality (festival hosting, venue partnerships). His approachable persona makes him brand-safe for categories most rappers can't touch.",
      impact: "medium",
      effort: "low",
    },
  ],

  recommendations: [
    {
      title: "Rebuild yunggravy.com as a Revenue Platform",
      description:
        "Replace the current basic WordPress site with a modern, mobile-first platform that integrates Shopify for merch, captures email subscribers, hosts exclusive content, and serves as the central hub for all Gravy activity.",
      actionItems: [
        "Audit and rebuild on Shopify Plus or headless Next.js + Shopify Storefront API",
        "Implement email capture with a '10% off first merch order' incentive — target 100K subscribers in 6 months",
        "Add a content section with exclusive behind-the-scenes videos, unreleased tracks, and tour diary entries",
      ],
      timeline: "30-60 days",
      category: "web",
    },
    {
      title: "Launch 'Gravy Train' YouTube Series",
      description:
        "Create a recurring YouTube series that follows Gravy through his world — sampling vintage records at thrift stores, cooking segments (lean into the 'gravy' brand literally), surprise fan meetups, and collaborator sessions. Think 'Hot Ones' meets 'Cribs' with Gravy's humor.",
      actionItems: [
        "Develop 3 pilot episode concepts and shoot over a 2-week window",
        "Hire a dedicated videographer/editor for consistent weekly uploads",
        "Cross-promote every episode with TikTok and Instagram clips to drive YouTube subscriptions",
      ],
      timeline: "30-60 days",
      category: "content",
    },
    {
      title: "Email & SMS Marketing Infrastructure",
      description:
        "Build an owned-audience communication channel to reduce dependency on social media algorithms. Email and SMS lists are the only audience you truly own — and they convert at 5-10x the rate of social posts for merch and ticket sales.",
      actionItems: [
        "Set up Klaviyo for email + SMS with automated welcome series",
        "Create a 'Gravy Hotline' SMS list with exclusive drops and presale codes",
        "Segment audiences: casual listeners, concert-goers, merch buyers, superfans",
      ],
      timeline: "0-30 days",
      category: "email",
    },
    {
      title: "Proactive Sync & Licensing Campaign",
      description:
        "Gravy's retro-sampled tracks are sync goldmines. Launch a targeted outreach campaign to music supervisors, ad agencies, and sync licensing companies. Tracks like 'Betty (Get Money)' and 'Gravy Train' have obvious commercial appeal.",
      actionItems: [
        "Compile a sync-ready catalog of 15-20 tracks with cleared samples",
        "Build relationships with 5-10 top sync agencies (Musicbed, Marmoset, Artlist)",
        "Create a sync sizzle reel showing Gravy's music over sample brand/TV/film footage",
      ],
      timeline: "30-60 days",
      category: "brand",
    },
    {
      title: "Community Platform Launch",
      description:
        "Build a Discord or Circle community for Gravy's most engaged fans. Offer tiered access: free tier for general chat, paid tier ($5/mo) for exclusive music previews, merch early access, and virtual hangouts with Gravy. This converts casual followers into paying superfans.",
      actionItems: [
        "Launch Discord server with branded channels (music-chat, memes, tour-meetups, gravy-recipes)",
        "Offer founding member perks: exclusive merch, presale access, and a launch-week AMA with Gravy",
        "Set monthly engagement targets: 5K members month 1, 15K by month 3, 50K by month 6",
      ],
      timeline: "30-60 days",
      category: "social",
    },
    {
      title: "Artistic Evolution: 'Vintage Vault' Album Concept",
      description:
        "Address the artistic longevity critique head-on by releasing a concept album that deepens the retro brand rather than abandoning it. Think a full concept album that tells a story through different decades of music — 50s doo-wop, 60s soul, 70s funk, 80s synth — showing range while staying on-brand.",
      actionItems: [
        "Commission a music director/producer to map a 12-track concept across decades",
        "Collaborate with legacy artists from each era (similar to the T-Pain and Shania Twain playbook)",
        "Create a visual album experience with era-specific music videos",
      ],
      timeline: "90+ days",
      category: "brand",
    },
    {
      title: "Paid Social & Retargeting for Merch + Tickets",
      description:
        "Gravy's organic social reach is massive, but there's no paid amplification strategy. A targeted Meta and TikTok ad campaign retargeting website visitors and engaged followers could dramatically increase merch sales and ticket conversions, especially during tour announcements.",
      actionItems: [
        "Install Meta Pixel and TikTok Pixel on yunggravy.com and merch store",
        "Build lookalike audiences from email list and past purchasers",
        "Run always-on retargeting for merch + launch campaigns for ticket drops — target 5:1 ROAS",
      ],
      timeline: "0-30 days",
      category: "paid",
    },
  ],

  kpiTargets: [
    {
      metric: "Website Monthly Visitors",
      currentEstimate: "~15K/month (estimated)",
      target: "150K/month",
      benchmark:
        "Artists with comparable social followings typically drive 100-200K monthly website visits when the site is properly optimized and promoted.",
      timeframe: "6 months",
    },
    {
      metric: "Email Subscriber List",
      currentEstimate: "Unknown (likely minimal)",
      target: "100,000 subscribers",
      benchmark:
        "Artists at Gravy's scale with active email capture typically build 50-150K lists within the first year. 100K is achievable with merch incentives.",
      timeframe: "6 months",
    },
    {
      metric: "YouTube Monthly Views",
      currentEstimate: "~23K/month",
      target: "500K/month",
      benchmark:
        "Artists with 1.8M YouTube subscribers and active content strategies (2-3 uploads/week) typically generate 500K-2M monthly views.",
      timeframe: "6 months",
    },
    {
      metric: "Spotify Monthly Listeners",
      currentEstimate: "4.5M",
      target: "8M",
      benchmark:
        "With sync placements, a strong album cycle, and TikTok virality, a jump from 4.5M to 8M is achievable. bbno$ maintains 15M+ with similar production volume.",
      timeframe: "12 months",
    },
    {
      metric: "Direct-to-Fan Revenue (Merch + Community)",
      currentEstimate: "Unknown",
      target: "$500K annually",
      benchmark:
        "Artists with 10M+ social followers and active D2C operations typically generate $300K-$1M annually from merch, memberships, and exclusive content.",
      timeframe: "12 months",
    },
    {
      metric: "Sync Licensing Placements",
      currentEstimate: "Unknown",
      target: "10+ placements",
      benchmark:
        "Artists with distinctive, sample-cleared catalogs and proactive sync strategies typically land 5-15 placements per year across TV, film, and advertising.",
      timeframe: "12 months",
    },
  ],

  serviceRoadmap: [
    {
      phase: "Phase 1",
      title: "Foundation & Infrastructure",
      description:
        "Rebuild the digital infrastructure — website, email/SMS capture, analytics, and paid media pixels. This is the foundation everything else builds on.",
      deliverables: [
        "New yunggravy.com with integrated Shopify merch store",
        "Klaviyo email/SMS setup with automated flows",
        "Meta Pixel, TikTok Pixel, and GA4 implementation",
        "Brand style guide and digital asset library",
      ],
      duration: "Weeks 1-4",
    },
    {
      phase: "Phase 2",
      title: "Content Engine & Community",
      description:
        "Launch the YouTube content strategy, Discord community, and establish a consistent content calendar that feeds all platforms from a central content engine.",
      deliverables: [
        "YouTube 'Gravy Train' series — 3 pilot episodes",
        "Discord community launch with founding member campaign",
        "Content calendar: 3x weekly YouTube, daily TikTok/Reels, 2x weekly email",
        "Paid social campaign launch: retargeting + lookalike audiences",
      ],
      duration: "Weeks 5-8",
    },
    {
      phase: "Phase 3",
      title: "Revenue Activation & Partnerships",
      description:
        "Activate the revenue streams: sync licensing push, expanded brand partnerships, community monetization, and merch drops tied to content moments.",
      deliverables: [
        "Sync catalog preparation and agency outreach",
        "3 brand partnership pitches (food, fashion, lifestyle)",
        "Community monetization: paid tier launch",
        "Quarterly merch collection tied to content themes",
      ],
      duration: "Weeks 9-16",
    },
    {
      phase: "Phase 4",
      title: "Scale & Artistic Evolution",
      description:
        "Scale what's working, prepare the concept album rollout, and build toward a 2027 tour cycle that integrates all the new content, community, and commerce infrastructure.",
      deliverables: [
        "'Vintage Vault' concept album creative direction",
        "Visual album / music video production pipeline",
        "2027 tour strategy with VIP fan experiences",
        "Annual brand review and KPI assessment",
      ],
      duration: "Weeks 17-24",
    },
  ],

  images: {
    hero1: "/images/yung-gravy/hero1.png",
    hero2: "/images/yung-gravy/hero2.png",
    product: "/images/yung-gravy/product.png",
    editorial: "/images/yung-gravy/editorial.png",
    texture: "/images/yung-gravy/texture.png",
    brutalist: "/images/yung-gravy/brutalist.png",
  },

  accentColor: "#FD3737",
  auditTitle: "Brand & Digital Audit",
  tagline: "Retro Soul, Modern Sauce — Turning Viral Moments Into a Lasting Empire",
};

export default auditData;
