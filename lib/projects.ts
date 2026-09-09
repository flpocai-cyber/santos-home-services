export interface ProjectItem {
  id: string;
  category: "deck" | "fence" | "framing" | "paint" | "drywall" | "carpentry";
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
  description: {
    en: string;
    pt: string;
    es: string;
  };
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    category: "deck",
    title: {
      en: "Custom Red Cedar Deck & Pergola",
      pt: "Deck em Cedro Vermelho & Pérgola",
      es: "Deck de Cedro Rojo & Pérgola",
    },
    location: "Danbury, CT",
    type: {
      en: "Deck Renovation",
      pt: "Reforma de Deck",
      es: "Renovación de Deck",
    },
    image: "/images/deck em cedro.png",
    description: {
      en: "Complete structural deck engineering utilizing premium red cedar and weather-resistant composite materials. Features reinforced joists, custom hand-built pergola rafters, integrated perimeter bench seating, and safety handrails compliant with Connecticut building codes.",
      pt: "Engenharia completa de deck estrutural utilizando cedro vermelho nobre e materiais compósitos de alta resistência às intempéries. Inclui vigas reforçadas, pérgola sob medida, bancos perimetrais integrados e guarda-corpos seguros de acordo com as normas construtivas de Connecticut.",
      es: "Ingeniería integral de deck estructural con cedro rojo premium y materiales compuestos resistentes al clima. Incluye vigas reforzadas, pérgola a la medida, barandales de seguridad y acabados impecables según las normas de Connecticut.",
    },
    highlights: ["Premium Red Cedar", "Pergola & Integrated Benches", "Code Compliant Framing", "Weather Sealing"],
  },
  {
    id: "proj-2",
    category: "carpentry",
    title: {
      en: "Coffered Ceiling & Architectural Trim",
      pt: "Forro Caixotão e Molduras Nobres",
      es: "Techo Artesonado y Molduras",
    },
    location: "Ridgefield, CT",
    type: {
      en: "Finish Carpentry",
      pt: "Carpintaria de Acabamento",
      es: "Carpintería Fina",
    },
    image: "/images/services/carpentry.png",
    description: {
      en: "Precision architectural millwork and master carpentry. Intricate coffered ceiling grid installations, custom 7-inch baseboards, crisp mitered door casing and detailed wainscoting panels designed to enrich luxury residential interiors.",
      pt: "Carpintaria arquitetônica fina de alta precisão. Instalação de forro caixotão (coffered ceiling), rodapés de 7 polegadas com cortes em esquadria precisos, guarnições de portas personalizadas e painéis decorativos que elevam o padrão residencial.",
      es: "Carpintería fina de precisión milimétrica. Instalación de techos artesonados con vigas decorativas, zócalos de 7 pulgadas, molduras de puertas y paneles arquitectónicos de lujo.",
    },
    highlights: ["Custom Miter Joints", "Coffered Beams Grid", "Architectural Crown & Trim", "Level 5 Prep"],
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
    image: "/images/drywall.png",
    description: {
      en: "Premium hanging and taping across an expansive open-concept living area. Skim coated to a true Level 5 smoothness, eliminating seams under raking ceiling light and primed ready for flawless paint application.",
      pt: "Instalação, colocação de fita e emassamento em conceito aberto amplo. Acabamento fino Nível 5 que elimina qualquer percepção de emenda sob iluminação rasante, pronto para pintura impecável.",
      es: "Colocación, encintado y enlucido de drywall en espacios abiertos. Acabado nivel 5 ultra liso que elimina sombras y uniones bajo cualquier tipo de luz.",
    },
    highlights: ["Level 5 Skim Coating", "Concealed Joints", "Reinforced Corner Beads", "Dustless Sanding"],
  },
];
