export interface ProjectItem {
  id: string;
  category: "basement" | "deck" | "fence" | "framing" | "paint" | "drywall" | "carpentry" | "flooring" | "tiles";
  title: {
    en: string;
    pt: string;
    es: string;
  };
  location: string;
  type: {
    en: string;
    pt: string;
    es: string;
  };
  image: string;
  images?: string[];
  beforeImage?: string;
  afterImage?: string;
  description: {
    en: string;
    pt: string;
    es: string;
  };
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-basement-1",
    category: "basement",
    title: {
      en: "Modern Finished Basement Living Space",
      pt: "Reforma Moderna de Espaço de Convivência no Porão",
      es: "Remodelación Moderna de Sótano en Espacio Familiar",
    },
    location: "Danbury, CT",
    type: {
      en: "Basement Transformation",
      pt: "Transformação de Porão",
      es: "Transformación de Sótano",
    },
    image: "/SERVICES/Modern Finished Basement Living Space/2.jpg",
    images: [
      "/SERVICES/Modern Finished Basement Living Space/1.jpg",
      "/SERVICES/Modern Finished Basement Living Space/2.jpg",
    ],
    beforeImage: "/SERVICES/Modern Finished Basement Living Space/1.jpg",
    afterImage: "/SERVICES/Modern Finished Basement Living Space/2.jpg",
    description: {
      en: "This basement was transformed from an unfinished area into a clean, comfortable, and functional living space. The project features custom built-ins, a modern media wall, upgraded lighting, and refined finish details for everyday use and entertaining.",
      pt: "Este porão foi transformado de uma área inacabada em um espaço de convivência limpo, confortável e totalmente funcional. O projeto conta com marcenaria sob medida embutida, uma parede multimídia moderna, iluminação embutida aprimorada e acabamentos refinados para uso diário e entretenimento.",
      es: "Este sótano se transformó de un área rústica e inacabada a un espacio de estar limpio, cómodo y muy funcional. El proyecto incluye estanterías empotradas a medida, pared multimedia moderna, iluminación empotrada renovada y detalles refinados para el día a día y reuniones familiares.",
    },
    highlights: [
      "Custom Built-In Shelving",
      "Media Wall Installation",
      "Recessed Lighting Upgrade",
      "Finished Ceiling Details",
      "Warm & Functional Design",
    ],
  },
  {
    id: "proj-retaining-wall-1",
    category: "carpentry",
    title: {
      en: "Custom Backyard Retaining Wall & Garden Upgrade",
      pt: "Muro de Contenção Sob Medida & Paisagismo de Quintal",
      es: "Muro de Contención a Medida & Jardinería de Patio",
    },
    location: "Ridgefield, CT",
    type: {
      en: "Landscaping & Retaining Wall",
      pt: "Paisagismo & Muro de Contenção",
      es: "Paisajismo & Muro de Contención",
    },
    image: "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/4.jpg",
    images: [
      "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/3.jpg",
      "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/4.jpg",
      "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/5.jpg",
      "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/6.jpg",
    ],
    beforeImage: "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/3.jpg",
    afterImage: "/SERVICES/Custom Backyard Retaining Wall & Garden Upgrade/4.jpg",
    description: {
      en: "This backyard was upgraded with a custom wood-finish retaining wall, integrated steps, and clean landscaping details that create a more organized, functional, and attractive outdoor space.",
      pt: "Este quintal foi revitalizado com um muro de contenção sob medida com acabamento amadeirado, degraus integrados e detalhes de paisagismo impecáveis que criam uma área externa mais organizada, funcional e atraente.",
      es: "Este patio trasero fue renovado con un muro de contención personalizado con acabado en madera, escalones integrados y detalles de paisajismo que crean un espacio al aire libre más organizado, funcional y atractivo.",
    },
    highlights: [
      "Custom Retaining Wall",
      "Integrated Garden Steps",
      "Wood-Finish Detail",
      "Backyard Landscaping Upgrade",
      "Clean & Functional Design",
    ],
  },
  {
    id: "proj-3",
    category: "fence",
    title: {
      en: "Modern Horizontal Cedar Privacy Fence",
      pt: "Cerca de Privacidade em Cedro Horizontal",
      es: "Cerca de Privacidad en Cedro Horizontal",
    },
    location: "Bethel, CT",
    type: {
      en: "Fence Installation",
      pt: "Instalação de Cerca",
      es: "Instalación de Cerca",
    },
    image: "/images/cedar fence.png",
    description: {
      en: "Contemporary horizontal privacy fence crafted from select-grade Western Red Cedar. Deep set concrete footings, heavy-duty post brackets and reinforced dual-swing gate hardware engineered for extreme New England winters.",
      pt: "Cerca contemporânea de privacidade com réguas horizontais em cedro nobre. Fundações profundas em concreto estrutural, suportes antiferrugem e portões reforçados projetados para suportar tempestades e invernos rigorosos.",
      es: "Cerca de privacidad horizontal contemporánea de cedro selecto. Cimentación profunda de postes en concreto, herrajes de uso rudo y portón reforzado diseñado para resistir las inclemencias del clima.",
    },
    highlights: ["Western Red Cedar", "Deep Concrete Footers", "Rust-Proof Hardware", "Heavy Duty Gates"],
  },
  {
    id: "proj-4",
    category: "framing",
    title: {
      en: "Two-Story Master Suite Framing",
      pt: "Framing Estrutural de Suíte Master",
      es: "Estructura para Suite Principal",
    },
    location: "Brookfield, CT",
    type: {
      en: "Framing",
      pt: "Framing",
      es: "Framing",
    },
    image: "/images/framing suite maste.png",
    description: {
      en: "Full structural load-bearing timber framing for a two-story luxury residential expansion. Engineered LVL headers, accurate laser-leveled wall studs, wind-bracing sheer walls and cathedral roof truss systems.",
      pt: "Framing estrutural autoportante para ampliação de dois andares de suíte master. Vigas LVL dimensionadas por engenharia, prumo a laser em todas as paredes, travamentos estruturais e suporte de forro catedral.",
      es: "Estructura de madera para ampliación de suite de dos pisos. Vigas de ingeniería LVL, alineación láser de montantes, refuerzos contra viento y estructura de techo tipo catedral.",
    },
    highlights: ["Engineered LVL Headers", "Laser-Leveled Framing", "Cathedral Roof Trusses", "Passed City Inspection"],
  },
  {
    id: "proj-5",
    category: "paint",
    title: {
      en: "Full Colonial Exterior Restoration",
      pt: "Restauração de Pintura Externa Colonial",
      es: "Restauración de Pintura Exterior",
    },
    location: "New Fairfield, CT",
    type: {
      en: "Exterior Painting",
      pt: "Pintura Externa",
      es: "Pintura Exterior",
    },
    image: "/images/pintura externa.png",
    description: {
      en: "Full historic home exterior preservation and recoat. Comprehensive power washing, hand scraping of deteriorated coats, wood hardening primer, seamless caulking and two coats of premium architectural exterior enamel.",
      pt: "Preservação e pintura completa de residência colonial exterior. Lavagem sob pressão, raspagem minuciosa de tintas antigas, selamento de juntas, primer de alta aderência e aplicação dupla de esmalte de alta durabilidade.",
      es: "Restauración integral de pintura exterior colonial. Lavado a presión, raspado manual de pintura vieja, sellado de juntas, imprimación premium y dos capas de esmalte exterior resistente.",
    },
    highlights: ["Full Surface Stripping", "Elastomeric Caulking", "Premium UV Resistant Paint", "Flawless Edge Lines"],
  },
  {
    id: "proj-6",
    category: "drywall",
    title: {
      en: "Open-Concept Level 5 Smooth Drywall",
      pt: "Drywall Acabamento Nível 5 em Conceito Aberto",
      es: "Drywall Nivel 5 en Concepto Abierto",
    },
    location: "Danbury, CT",
    type: {
      en: "Drywall",
      pt: "Drywall",
      es: "Drywall",
    },
    image: "/images/drywall projeto certo.png",
    description: {
      en: "Premium hanging and taping across an expansive open-concept living area. Skim coated to a true Level 5 smoothness, eliminating seams under raking ceiling light and primed ready for flawless paint application.",
      pt: "Instalação, colocação de fita e emassamento em conceito aberto amplo. Acabamento fino Nível 5 que elimina qualquer percepção de emenda sob iluminação rasante, pronto para pintura impecável.",
      es: "Colocación, encintado y enlucido de drywall en espacios abiertos. Acabado nivel 5 ultra liso que elimina sombras y uniones bajo cualquier tipo de luz.",
    },
    highlights: ["Level 5 Skim Coating", "Concealed Joints", "Reinforced Corner Beads", "Dustless Sanding"],
  },
  {
    id: "proj-7",
    category: "flooring",
    title: {
      en: "Luxury Natural Oak Hardwood Flooring",
      pt: "Pisos em Madeira Nobre Carvalho Natural",
      es: "Pisos de Madera Noble Roble Natural",
    },
    location: "Danbury, CT",
    type: {
      en: "Flooring",
      pt: "Flooring",
      es: "Flooring",
    },
    image: "/images/hardwood flooring.png",
    description: {
      en: "Precision-installed natural oak engineered hardwood planks across open living and dining spaces. Featuring acoustic underlayment, subfloor leveling, expansion gap compliance, and custom flush threshold transitions.",
      pt: "Instalação de alta precisão de réguas em madeira nobre carvalho natural em salas integradas. Inclui nivelamento perfeito de contrapiso, manta acústica, juntas de dilatação adequadas e acabamento impecável de soleiras.",
      es: "Instalación de pisos de madera noble de roble natural en áreas abiertas. Cuenta con aislamiento acústico, nivelación previa de superficie, zócalos combinados y transiciones al ras de máxima durabilidad.",
    },
    highlights: ["Select Natural Oak", "Acoustic Underlayment", "Subfloor Leveling", "Custom Flush Transitions"],
  },
  {
    id: "proj-8",
    category: "tiles",
    title: {
      en: "Master Bathroom Large-Format Porcelain Tiles",
      pt: "Porcelanato de Grande Formato em Suíte Master",
      es: "Porcelanato y Azulejos de Gran Formato en Suite",
    },
    location: "Ridgefield, CT",
    type: {
      en: "Tiles",
      pt: "Tiles",
      es: "Tiles",
    },
    image: "/images/custom tiles bathroom.png",
    description: {
      en: "Complete master bathroom luxury tile renovation. Large-format Italian marble-style porcelain slabs installed floor-to-ceiling, waterproof schluter membrane systems, curbless walk-in shower pan slope, and built-in recessed niche shelving.",
      pt: "Reforma completa e luxuosa de revestimentos em suíte master. Placas de porcelanato de grande formato com efeito mármore do chão ao teto, impermeabilização com sistema Schluter, box nivelado com ralo linear oculto e nichos embutidos sob medida.",
      es: "Renovación completa de baño principal con azulejos y porcelanatos de gran formato. Revestimiento de piso a techo con diseño de mármol, membrana impermeable de alta tecnología, ducha a ras de piso con desagüe lineal y nicho iluminado.",
    },
    highlights: ["Large-Format Porcelain", "Waterproof Schluter System", "Curbless Shower Pan", "Precision Miter Corners"],
  },
];
