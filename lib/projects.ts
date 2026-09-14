export interface ProjectItem {
  id: string;
  category: "basement" | "deck" | "fence" | "framing" | "paint" | "drywall" | "carpentry" | "flooring" | "tiles" | "bathroom";
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
  beforeCount?: number;
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
    id: "proj-accessibility-ramp-1",
    category: "carpentry",
    title: {
      en: "Custom Accessibility Ramp",
      pt: "Rampa de Acessibilidade Sob Medida",
      es: "Rampa de Accesibilidad a Medida",
    },
    location: "Fairfield County, CT",
    type: {
      en: "Accessibility Upgrade",
      pt: "Melhoria de Acessibilidade",
      es: "Mejora de Accesibilidad",
    },
    image: "/SERVICES/Custom Accessibility Ramp/9.jpg",
    images: [
      "/SERVICES/Custom Accessibility Ramp/7.jpg",
      "/SERVICES/Custom Accessibility Ramp/8.jpg",
      "/SERVICES/Custom Accessibility Ramp/9.jpg",
    ],
    beforeImage: "/SERVICES/Custom Accessibility Ramp/7.jpg",
    afterImage: "/SERVICES/Custom Accessibility Ramp/9.jpg",
    beforeCount: 1,
    description: {
      en: "A custom wooden accessibility ramp was built to provide safer and easier access to the home. The project includes a sturdy walking surface, protective railing, and clean exterior finishing designed to integrate naturally with the property.",
      pt: "Uma rampa de acessibilidade em madeira foi construída sob medida para oferecer acesso mais seguro e fácil à residência. O projeto conta com superfície resistente e antiderrapante, guarda-corpo de proteção e acabamento externo impecável integrado à propriedade.",
      es: "Se construyó una rampa de accesibilidad de madera a medida para brindar un acceso más seguro y fácil al hogar. El proyecto incluye una superficie resistente, barandal de seguridad y terminaciones exteriores diseñadas para integrarse armoniosamente a la propiedad.",
    },
    highlights: [
      "Custom Wood Ramp",
      "Safety Railing",
      "Improved Home Access",
      "Exterior Carpentry",
      "Functional & Secure Design",
    ],
  },
  {
    id: "proj-bathroom-remodel-1",
    category: "bathroom",
    title: {
      en: "Modern Bathroom Remodel",
      pt: "Reforma Moderna de Banheiro",
      es: "Remodelación Moderna de Baño",
    },
    location: "Brookfield, CT",
    type: {
      en: "Bathroom Renovation",
      pt: "Reforma de Banheiro",
      es: "Renovación de Baño",
    },
    image: "/SERVICES/Modern Bathroom Remodel/22.jpg",
    images: [
      "/SERVICES/Modern Bathroom Remodel/21.jpg",
      "/SERVICES/Modern Bathroom Remodel/22.jpg",
    ],
    beforeImage: "/SERVICES/Modern Bathroom Remodel/21.jpg",
    afterImage: "/SERVICES/Modern Bathroom Remodel/22.jpg",
    description: {
      en: "This bathroom was fully refreshed with a cleaner layout, brighter finishes, and a more modern design. The renovation included a new vanity, updated shower area, fresh paint, and finish details that brought more comfort, style, and functionality to the space.",
      pt: "Este banheiro foi completamente revitalizado com layout mais limpo, acabamentos iluminados e design moderno. A reforma incluiu nova bancada com cuba, área de chuveiro renovada com revestimentos modernos, pintura fresca e detalhes que proporcionam conforto, elegância e funcionalidade.",
      es: "Este baño fue completamente renovado con una distribución más despejada, acabados luminosos y un diseño moderno. La remodelación incluyó un nuevo tocador, área de ducha actualizada, pintura fresca y detalles de terminación que aportan mayor confort, estilo y funcionalidad al espacio.",
    },
    highlights: [
      "New Vanity Installation",
      "Updated Shower Area",
      "Fresh Paint & Trim",
      "Modern Fixture Upgrades",
      "Clean & Functional Design",
    ],
  },
  {
    id: "proj-basement-finishing-full",
    category: "basement",
    title: {
      en: "Full Basement Finishing & Living Space Upgrade",
      pt: "Reforma Completa de Porão & Espaço de Convivência",
      es: "Remodelación Integral de Sótano en Espacio Familiar",
    },
    location: "Fairfield County, CT",
    type: {
      en: "Basement Renovation",
      pt: "Reforma de Porão",
      es: "Renovación de Sótano",
    },
    image: "/SERVICES/Full Basement Finishing & Living Space Upgrade/13.jpg",
    images: [
      "/SERVICES/Full Basement Finishing & Living Space Upgrade/12.jpg",
      "/SERVICES/Full Basement Finishing & Living Space Upgrade/13.jpg",
      "/SERVICES/Full Basement Finishing & Living Space Upgrade/14.jpg",
      "/SERVICES/Full Basement Finishing & Living Space Upgrade/15.jpg",
      "/SERVICES/Full Basement Finishing & Living Space Upgrade/16.jpg",
    ],
    beforeImage: "/SERVICES/Full Basement Finishing & Living Space Upgrade/12.jpg",
    afterImage: "/SERVICES/Full Basement Finishing & Living Space Upgrade/13.jpg",
    beforeCount: 1,
    description: {
      en: "This unfinished basement was completely transformed into a clean, modern, and functional living area. The project included finished rooms, a new bathroom, updated flooring, bright finishes, and a compact kitchen setup, creating a comfortable and versatile lower-level space.",
      pt: "Este porão inacabado foi totalmente transformado em uma área de convivência limpa, moderna e funcional. O projeto incluiu quartos finalizados, um banheiro novinho, novo piso, acabamentos iluminados e uma cozinha compacta, criando um ambiente confortável e versátil.",
      es: "Este sótano rústico e inacabado se transformó por completo en una zona de estar limpia, moderna y funcional. El proyecto incluyó habitaciones terminadas, baño nuevo, pisos modernos, acabados claros y una cocina compacta, creando un espacio cómodo y versátil.",
    },
    highlights: [
      "Full Basement Finishing",
      "New Bathroom Installation",
      "Kitchenette Setup",
      "New Flooring & Trim",
      "Bright, Modern Interior",
      "Added Functional Living Space",
    ],
  },
  {
    id: "proj-deck-composite-1",
    category: "deck",
    title: {
      en: "Elevated Composite Deck with Modern Railing System",
      pt: "Deck Elevado em Composite com Guarda-Corpo Moderno",
      es: "Deck Elevado de Compuesto con Barandales Modernos",
    },
    location: "Fairfield County, CT",
    type: {
      en: "Deck Renovation",
      pt: "Reforma & Construção de Deck",
      es: "Renovación de Deck",
    },
    image: "/SERVICES/Elevated Composite Deck with Modern Railing System/18.jpg",
    images: [
      "/SERVICES/Elevated Composite Deck with Modern Railing System/17.jpg",
      "/SERVICES/Elevated Composite Deck with Modern Railing System/18.jpg",
      "/SERVICES/Elevated Composite Deck with Modern Railing System/19.jpg",
      "/SERVICES/Elevated Composite Deck with Modern Railing System/20.jpg",
    ],
    beforeImage: "/SERVICES/Elevated Composite Deck with Modern Railing System/17.jpg",
    afterImage: "/SERVICES/Elevated Composite Deck with Modern Railing System/18.jpg",
    beforeCount: 1,
    description: {
      en: "This outdoor area was transformed into a spacious elevated deck designed for comfort, durability, and everyday use. The project features composite decking, a clean white-and-black railing system, and integrated stairs, creating a modern and functional extension of the home.",
      pt: "Esta área externa foi transformada em um espaçoso deck elevado projetado para conforto, durabilidade e convivência. O projeto conta com tábuas ecológicas de composite, sistema de guarda-corpo moderno preto e branco e escada integrada, criando uma extensão moderna e funcional da casa.",
      es: "Esta área al aire libre se transformó en un amplio deck elevado diseñado para brindar comodidad, durabilidad y funcionalidad. El proyecto cuenta con entarimado de composite, un moderno sistema de barandales en blanco y negro y escaleras integradas, creando una extensión moderna y práctica del hogar.",
    },
    highlights: [
      "Elevated Deck Construction",
      "Composite Decking",
      "Modern Railing System",
      "Integrated Stair Access",
      "Durable Low-Maintenance Materials",
      "Expanded Outdoor Living Space",
    ],
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
