export interface ServiceDetail {
  slug: string;
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedProjectCategory: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "finish-carpentry",
    id: "carpentry",
    name: "Finish Carpentry & Architectural Woodwork",
    shortDesc: "Custom crown molding, baseboards, wainscoting, built-ins and architectural trim that add timeless distinction.",
    longDesc: "Santos Home Services LLC provides master-level finish carpentry in Danbury, CT and throughout Fairfield County. From intricate crown moldings and custom coffered ceilings to precision wainscoting, bespoke baseboards, and built-in shelving, our craftsmen transform living spaces with timeless New England architectural elegance.",
    icon: "Hammer",
    image: "/images/services/carpentry.png",
    features: [
      "Custom Crown Molding & Ceiling Coffers",
      "Interior Trim, Baseboards & Door Casings",
      "Wainscoting & Custom Wall Paneling",
      "Built-In Bookshelves & Entertainment Centers",
      "Custom Window Sills, Aprons & Jambs",
    ],
    benefits: [
      "Substantially elevates property value and aesthetic charm",
      "Flawless mitered joints and seamless paint/stain finishes",
      "Customized design tailored to your home architectural style",
    ],
    faqs: [
      {
        question: "What types of finish carpentry projects do you handle?",
        answer: "We specialize in crown molding, interior door and window casing, wainscoting, board and batten, custom fireplace mantels, and built-in shelving throughout Danbury and Fairfield County.",
      },
      {
        question: "Are you licensed and insured for carpentry in Connecticut?",
        answer: "Yes, Santos Home Services LLC is fully licensed (CT License HIC.0705313) and insured as a Home Improvement Contractor in Connecticut.",
      },
    ],
    relatedProjectCategory: "carpentry",
  },
  {
    slug: "deck-construction",
    id: "deck",
    name: "Deck Construction, Expansion & Repair",
    shortDesc: "Custom wood and composite outdoor decks engineered for longevity, outdoor living and elevated curb appeal.",
    longDesc: "Expand your outdoor living space with durable, expertly engineered decks built by Santos Home Services LLC. We design and build elevated, multi-level, and ground-level decks using premium composite (Trex, TimberTech) and pressure-treated natural wood. Every deck is built strictly to Connecticut building codes with reinforced structural footings, integrated staircases, and modern railing systems.",
    icon: "Grid",
    image: "/images/services/deck.jpg",
    features: [
      "Custom Composite (Trex / TimberTech) & Pressure-Treated Wood Decks",
      "Modern Cable, Glass & Metal Railing Systems",
      "Integrated Staircases & Safety Landings",
      "Multi-Level, Poolside & Walk-Out Deck Designs",
      "Structural Framing, Post Footings & Code Compliance Inspections",
    ],
    benefits: [
      "Built to withstand harsh New England winter freezes and summer humidity",
      "Low-maintenance composite materials with 25+ year lifespans",
      "Expands functional entertaining and relaxation space for family and guests",
    ],
    faqs: [
      {
        question: "Do you install composite decking like Trex in Danbury?",
        answer: "Yes, we are experienced installers of premium composite decking brands including Trex and TimberTech, as well as traditional cedar and pressure-treated lumber.",
      },
      {
        question: "Do you handle building permits for deck construction in CT?",
        answer: "Yes, as a licensed CT Home Improvement Contractor (HIC.0705313), we ensure all deck construction and expansion projects comply with local municipality building codes and permit requirements.",
      },
    ],
    relatedProjectCategory: "deck",
  },
  {
    slug: "fence-installation",
    id: "fence",
    name: "Fence Installation & Perimeter Security",
    shortDesc: "Sturdy privacy, cedar picket and perimeter security fences built to withstand New England seasons.",
    longDesc: "Secure your property, protect your privacy, and elevate your curb appeal with custom fencing solutions from Santos Home Services LLC. Serving Danbury, Brookfield, Ridgefield, and Fairfield County, we install wood privacy fences, classic cedar pickets, durable vinyl fencing, and decorative perimeter enclosures built with deep post footings to resist frost heave.",
    icon: "Shield",
    image: "/images/services/fence.png",
    features: [
      "Full Privacy & Semi-Privacy Wood Fences",
      "New England Cedar Picket & Post-and-Rail Systems",
      "Low-Maintenance Vinyl & Composite Perimeter Fences",
      "Custom Walk & Driveway Access Gates with Heavy-Duty Hardware",
      "Deep Frost-Resistant Concrete Post Footings",
    ],
    benefits: [
      "Enhanced safety for children, pets, and backyard amenities",
      "Clear property boundary definition and increased privacy",
      "Long-lasting New England weather resistance",
    ],
    faqs: [
      {
        question: "How deep do you set fence posts in Connecticut?",
        answer: "In Connecticut, we set posts at least 36 to 42 inches below grade (below the frost line) in solid concrete to prevent post shifting and frost heave during freezing winters.",
      },
      {
        question: "What fence materials last longest in Fairfield County?",
        answer: "High-grade vinyl and rot-resistant Western Red Cedar with proper sealing offer the best long-term durability against Connecticut temperature swings and moisture.",
      },
    ],
    relatedProjectCategory: "fence",
  },
  {
    slug: "framing",
    id: "framing",
    name: "Structural Timber Framing & Additions",
    shortDesc: "Precision structural timber framing for home additions, partitions, open concepts and structural modifications.",
    longDesc: "Solid structural framing is the backbone of every safe, durable home. Santos Home Services LLC provides precision wood and timber framing services for room additions, basement divisions, open-concept conversions, dormers, load-bearing wall removals (with engineer-specified LVL beams), and exterior porch structures across Fairfield County.",
    icon: "Layers",
    image: "/images/services/framing.png",
    features: [
      "Load-Bearing Wall Removals & LVL Beam Installations",
      "Room Additions & Second-Story Framing",
      "Basement & Attic Partition Framing",
      "Roof Trusses, Rafters & Dormer Framing",
      "Subfloor Systems & Structural Reinforcements",
    ],
    benefits: [
      "Laser-precise plumb, level, and square framing ensuring smooth drywall and finish work",
      "Safe, code-compliant open floor plan layouts",
      "Long-term structural integrity backed by CT contractor licensing",
    ],
    faqs: [
      {
        question: "Can you remove a load-bearing wall to create an open concept?",
        answer: "Yes, we safely remove load-bearing walls by installing properly sized structural headers or LVL beams with temporary shoring according to structural engineering specifications.",
      },
      {
        question: "Do you frame basements for finishing?",
        answer: "Yes, we frame moisture-protected perimeter stud walls, closet partitions, soffits around ductwork, and bathroom layouts for complete basement finishes.",
      },
    ],
    relatedProjectCategory: "framing",
  },
  {
    slug: "painting",
    id: "painting",
    name: "Interior & Exterior Painting Services",
    shortDesc: "Meticulous surface preparation, premium coatings and crisp lines for durable, magazine-worthy transformations.",
    longDesc: "Transform the look and feel of your home with professional interior and exterior painting from Santos Home Services LLC. We believe 90% of a superior paint job lies in meticulous preparation: thorough sanding, power washing, caulking, priming, and repairing drywall flaws before applying ultra-premium coatings from Benjamin Moore and Sherwin-Williams.",
    icon: "Paintbrush",
    image: "/images/services/paint.png",
    features: [
      "Comprehensive Surface Prep, Scraping, Sanding & Caulking",
      "Interior Walls, Ceilings, Doors, Baseboards & Millwork",
      "Exterior Siding, Trim, Fascia & Exterior Door Painting",
      "Deck & Porch Staining, Sealing & Restorations",
      "Cabinet Painting & Factory-Smooth Spray Finishes",
    ],
    benefits: [
      "Flawless, streak-free surfaces with razor-sharp cut lines",
      "Long-lasting protection against moisture, UV rays, and New England weather",
      "Premium low-VOC paints for healthy indoor air quality",
    ],
    faqs: [
      {
        question: "Which paint brands do you recommend and use?",
        answer: "We predominantly apply top-tier paints from Benjamin Moore (Regal Select, Aura) and Sherwin-Williams (Emerald, Duration) for maximum coverage and longevity.",
      },
      {
        question: "Do you repair damaged drywall or wood before painting?",
        answer: "Absolutely. We patch holes, repair water-damaged drywall, caulk all trim joints, and replace rotted exterior wood before any primer or paint is applied.",
      },
    ],
    relatedProjectCategory: "paint",
  },
  {
    slug: "drywall",
    id: "drywall",
    name: "Drywall Hanging, Taping & Smooth Finishing",
    shortDesc: "Flawless drywall hanging, seamless taping and Level 5 smooth finishes ready for impeccable paint coats.",
    longDesc: "Get mirror-smooth walls and ceilings with drywall installation and finishing by Santos Home Services LLC. Whether you are finishing a basement, repairing ceiling water damage, or completing a full home renovation in Danbury or Fairfield County, our expert tapers deliver seamless Level 4 and Level 5 finishes with zero visible joints or fastener indentations.",
    icon: "Square",
    image: "/images/services/drywall.png",
    features: [
      "Drywall Hanging, Sheetrock Installation & Soundproofing",
      "Multi-Coat Joint Taping, Mudding & Sanding",
      "Level 5 Ultra-Smooth Wall & Ceiling Finishes",
      "Water Damage, Plaster & Crack Repairs",
      "Popcorn Ceiling Removal & Skim Coating",
    ],
    benefits: [
      "Perfect flat surfaces that make interior paint look luxurious",
      "Dust-controlled sanding procedures protecting your home interior",
      "Rapid turnaround on water damage patches and full room drywalling",
    ],
    faqs: [
      {
        question: "What is a Level 5 drywall finish?",
        answer: "A Level 5 finish includes a full skim coat of joint compound applied over the entire surface, ensuring completely uniform texture and light reflection under harsh critical lighting.",
      },
      {
        question: "Can you fix water-damaged drywall on ceilings?",
        answer: "Yes, we cut away damaged drywall, inspect for mold, install new Sheetrock, and blend tape and compound so the repair is completely invisible once painted.",
      },
    ],
    relatedProjectCategory: "drywall",
  },
  {
    slug: "flooring",
    id: "flooring",
    name: "Hardwood, Engineered & Luxury Vinyl Plank Flooring",
    shortDesc: "Expert installation of solid and engineered hardwood, luxury vinyl plank (LVP), subfloor leveling and transitions.",
    longDesc: "Upgrade your floors with durable, high-traffic flooring installations from Santos Home Services LLC. We install solid hardwood, engineered wood, and waterproof luxury vinyl plank (LVP) throughout Danbury, CT. We also ensure thorough subfloor prep, leveling, moisture barrier placement, and custom wood shoe molding and threshold transitions.",
    icon: "Disc3",
    image: "/images/services/FLOORING SERVICE.png",
    features: [
      "Solid & Engineered Hardwood Installation",
      "100% Waterproof Luxury Vinyl Plank (LVP) & Tile (LVT)",
      "Subfloor Leveling, Reinforcement & Moisture Barriers",
      "Stair Treads, Risers & Nosing Installation",
      "Custom Thresholds, Reducers & Base Shoe Transitions",
    ],
    benefits: [
      "Exceptional durability against pet claws, spills, and foot traffic",
      "Quiet, solid feel underfoot with zero creaks or uneven spots",
      "Instant modernization of living rooms, basements, and hallways",
    ],
    faqs: [
      {
        question: "What flooring is best for basements in Connecticut?",
        answer: "Luxury Vinyl Plank (LVP) with an integrated pad and vapor barrier is ideal for CT basements because it is 100% waterproof, resistant to temperature fluctuations, and easy to maintain.",
      },
      {
        question: "Do you level uneven subfloors before laying new floors?",
        answer: "Yes, we inspect and level subfloors using self-leveling underlayments or grinding down high spots to ensure a flat, stable foundation for your new flooring.",
      },
    ],
    relatedProjectCategory: "flooring",
  },
  {
    slug: "tile-installation",
    id: "tiles",
    name: "Custom Tile, Porcelain & Mosaic Installation",
    shortDesc: "Master installation of large-format porcelain, marble tiles, custom bathroom surrounds, backsplashes and curbless showers.",
    longDesc: "Santos Home Services LLC provides precision tile setting for kitchens, bathrooms, entryways, and fireplaces. From large-format porcelain slabs and natural marble to herringbone subway backsplashes and zero-threshold curbless showers, we ensure 100% waterproof Schluter-Kerdi membranes and laser-aligned grout lines that stand the test of time.",
    icon: "Grid",
    image: "/images/services/TILES.png",
    features: [
      "Large-Format Porcelain & Ceramic Tile Setting",
      "Custom Walk-In Shower Pans & Curbless Shower Systems",
      "Schluter-Kerdi & Hydro Ban Waterproofing Systems",
      "Kitchen Backsplashes (Herringbone, Mosaic, Subway)",
      "Heated Tile Floor Underlayments (Schluter DITRA-HEAT)",
    ],
    benefits: [
      "Guaranteed waterproof shower assemblies preventing structural rot",
      "Laser-straight grout lines with durable stain-resistant epoxy grouts",
      "Luxurious, spa-like aesthetic that elevates everyday living",
    ],
    faqs: [
      {
        question: "What waterproofing method do you use in shower stalls?",
        answer: "We strictly utilize industry-leading waterproofing assemblies like Schluter-Kerdi membranes and integrated drain systems before setting any shower tiles.",
      },
      {
        question: "Can you install radiant heated floors under bathroom tiles?",
        answer: "Yes, we frequently install electric radiant floor heating systems (such as Schluter DITRA-HEAT) beneath bathroom floor tiles for comfortable warmth.",
      },
    ],
    relatedProjectCategory: "tiles",
  },
  {
    slug: "basement-remodeling",
    id: "basement",
    name: "Full Basement Finishing & Lower-Level Living",
    shortDesc: "Turn cold, dark, unfinished basements into warm, modern, functional family suites, media rooms, and home offices.",
    longDesc: "Unlock valuable square footage right under your feet. Santos Home Services LLC transforms damp, unfinished basements across Danbury, Brookfield, and Ridgefield into bright, modern lower-level living spaces. Our full basement finishing includes moisture mitigation, structural framing, plumbing for full bathrooms and kitchenettes, recessed lighting, and durable waterproof flooring.",
    icon: "Layers",
    image: "/SERVICES/Modern Finished Basement Living Space/2.jpg",
    features: [
      "Comprehensive Moisture Barrier & Thermal Insulation",
      "Open Family Rooms, Home Theaters & Game Rooms",
      "Full Bathroom Additions & Compact Kitchenettes",
      "Custom Entertainment Built-Ins & LED Lighting",
      "Code-Compliant Egress Window & Stairway Finishing",
    ],
    benefits: [
      "Adds hundreds of square feet of livable space at a fraction of addition costs",
      "Warm, dry, comfortable lower level engineered against New England groundwater",
      "Significant boost to property market resale valuation",
    ],
    faqs: [
      {
        question: "How do you protect finished basements from moisture in CT?",
        answer: "We inspect the foundation, seal concrete, install vapor barriers on exterior stud walls, use rigid insulation, and install moisture-impermeable subfloor and LVP flooring.",
      },
      {
        question: "Can you add a full bathroom in our basement?",
        answer: "Yes, we coordinate concrete trenching, underground drain plumbing, ejector pumps if needed, and build full bathrooms with tiled showers and modern vanities.",
      },
    ],
    relatedProjectCategory: "basement",
  },
  {
    slug: "bathroom-remodeling",
    id: "bathroom",
    name: "Complete Bathroom Remodeling & Renovation",
    shortDesc: "Complete master and guest bath renovations featuring custom tile showers, modern vanities, and premium fixtures.",
    longDesc: "Turn your outdated bathroom into a pristine, functional sanctuary. Santos Home Services LLC delivers complete bathroom renovations in Danbury and Fairfield County, CT. From custom walk-in tiled showers and freestanding soaking tubs to modern double vanities, ambient LED mirrors, and water-efficient plumbing fixtures, we handle every detail with expert craftsmanship.",
    icon: "Grid",
    image: "/SERVICES/Full Bathroom Remodel & Tile Upgrade/2.jpg",
    features: [
      "Custom Walk-In Showers with Frameless Glass Doors",
      "Double Vanities, Quartz Countertops & Modern Faucets",
      "Complete Schluter Waterproofing & Tile Installation",
      "Recessed Niche Shelves, Benches & Curbless Entries",
      "Upgraded Ventilation, Exhaust Fans & Recessed Lighting",
    ],
    benefits: [
      "One of the highest return-on-investment renovations for home resale",
      "Superior leak prevention with multi-stage waterproofing",
      "Crisp, contemporary design tailored to your morning routine",
    ],
    faqs: [
      {
        question: "How long does a typical bathroom remodel take?",
        answer: "A standard full bathroom remodel typically takes 2 to 3 weeks from demolition to final punch-list, depending on tile complexity and custom glass fabrication.",
      },
      {
        question: "Do you supply the materials or do I purchase them?",
        answer: "We supply all structural, waterproofing, framing, and setting materials. You can choose fixtures, tiles, and vanities of your choice, or we can assist in sourcing them.",
      },
    ],
    relatedProjectCategory: "bathroom",
  },
];
