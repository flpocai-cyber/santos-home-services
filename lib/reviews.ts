// Replace these sample reviews with verified customer reviews before production.
export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  comment: {
    en: string;
    pt: string;
    es: string;
  };
  isPlaceholder: boolean;
}

export const reviews: Review[] = [
  {
    id: "review-01",
    name: "Sample Client 01",
    location: "Danbury, CT",
    rating: 5,
    service: "Deck Construction",
    isPlaceholder: true,
    comment: {
      en: "The craftsmanship on our new cedar deck was exceptional. Punctual, polite and left the yard spotless every day.",
      pt: "O acabamento do nosso novo deck em cedro foi excepcional. Pontuais, educados e deixaram o quintal impecável todos os dias.",
      es: "La mano de obra en nuestro nuevo deck de cedro fue excepcional. Muy puntuales y dejaron todo limpio cada día.",
    },
  },
  {
    id: "review-02",
    name: "Sample Client 02",
    location: "Bethel, CT",
    rating: 5,
    service: "Finish Carpentry",
    isPlaceholder: true,
    comment: {
      en: "Incredible crown molding and custom wainscoting. The precision of the miter cuts transformed our living room completely.",
      pt: "Molduras e rodapés de alta qualidade. A precisão dos cortes e encaixes transformou completamente a nossa sala.",
      es: "Increíble trabajo de molduras y carpintería fina. La precisión de los cortes transformó nuestra sala.",
    },
  },
  {
    id: "review-03",
    name: "Sample Client 03",
    location: "Brookfield, CT",
    rating: 5,
    service: "Fence Installation",
    isPlaceholder: true,
    comment: {
      en: "Built a rock-solid privacy fence along our property line. Very durable materials and executed right on schedule.",
      pt: "Construíram uma cerca de privacidade muito sólida no nosso terreno. Materiais duráveis e prazo cumprido à risca.",
      es: "Construyeron una cerca de privacidad muy sólida. Materiales duraderos y entrega justo a tiempo.",
    },
  },
  {
    id: "review-04",
    name: "Sample Client 04",
    location: "New Fairfield, CT",
    rating: 5,
    service: "Exterior Painting",
    isPlaceholder: true,
    comment: {
      en: "Thorough scraping, priming and flawless paint finish. The house looks brand new and curb appeal doubled.",
      pt: "Preparação completa, primer e pintura impecável. A casa parece novinha e a fachada ficou linda.",
      es: "Excelente preparación de la superficie y acabado de pintura de primera. La casa luce como nueva.",
    },
  },
  {
    id: "review-05",
    name: "Sample Client 05",
    location: "Ridgefield, CT",
    rating: 5,
    service: "Structural Framing",
    isPlaceholder: true,
    comment: {
      en: "Reliable framing for our home addition. Straight lines, solid engineering and passed town inspections without a hitch.",
      pt: "Framing confiável para nossa ampliação. Estrutura sólida e aprovação imediata nas vistorias da cidade.",
      es: "Estructura de madera confiable para nuestra ampliación. Líneas rectas y aprobación sin ningún problema.",
    },
  },
  {
    id: "review-06",
    name: "Sample Client 06",
    location: "Danbury, CT",
    rating: 5,
    service: "Drywall & Level 5 Finish",
    isPlaceholder: true,
    comment: {
      en: "Seamless drywall work. Even under raking ceiling light, you cannot see a single joint or seam. Highly recommended!",
      pt: "Drywall perfeito. Mesmo com luz direta no teto não se vê uma única emenda. Recomendo muito!",
      es: "Trabajo impecable de drywall. Incluso con luz rasante, no se aprecia ninguna unión.",
    },
  },
  {
    id: "review-07",
    name: "Sample Client 07",
    location: "Bethel, CT",
    rating: 5,
    service: "Deck Repair & Refinish",
    isPlaceholder: true,
    comment: {
      en: "Saved our aging deck from rot and structural sagging. Replaced damaged joists and installed modern railings.",
      pt: "Salvaram nosso deck que estava desgastado. Trocaram vigas danificadas e colocaram guarda-corpos modernos.",
      es: "Rescataron nuestro deck del desgaste. Cambiaron vigas y colocaron barandas modernas.",
    },
  },
  {
    id: "review-08",
    name: "Sample Client 08",
    location: "Brookfield, CT",
    rating: 5,
    service: "Interior Painting",
    isPlaceholder: true,
    comment: {
      en: "Clean lines between ceilings and walls. They protected all our furniture and completed the whole first floor in 3 days.",
      pt: "Linhas perfeitas entre forro e paredes. Protegeram toda a mobília e finalizaram o piso térreo em 3 dias.",
      es: "Líneas muy limpias entre techos y paredes. Protegieron los muebles y terminaron a tiempo.",
    },
  },
  {
    id: "review-09",
    name: "Sample Client 09",
    location: "Danbury, CT",
    rating: 5,
    service: "Finish Carpentry & Doors",
    isPlaceholder: true,
    comment: {
      en: "Installed 8 solid core interior doors with matching trim. Everything closes with a satisfying, precision click.",
      pt: "Instalaram 8 portas internas maciças com molduras perfeitas. Todas fecham com precisão milimétrica.",
      es: "Instalaron 8 puertas interiores con sus molduras. Todo cierra con absoluta precisión.",
    },
  },
  {
    id: "review-10",
    name: "Sample Client 10",
    location: "New Fairfield, CT",
    rating: 5,
    service: "Custom Fence",
    isPlaceholder: true,
    comment: {
      en: "Very sturdy cedar fencing for our dogs. Gates swing smoothly and the posts are deep and solid.",
      pt: "Cerca de cedro muito resistente para nossos cães. Portões abrem suavemente e os mourões são bem firmes.",
      es: "Cerca de cedro muy resistente para nuestras mascotas. Puertas muy suaves y postes firmes.",
    },
  },
  {
    id: "review-11",
    name: "Sample Client 11",
    location: "Ridgefield, CT",
    rating: 5,
    service: "Drywall & Framing",
    isPlaceholder: true,
    comment: {
      en: "Finished our basement space with framing, insulation and drywall. Clean work from start to finish.",
      pt: "Finalizaram o porão com estrutura de madeira, isolamento e drywall. Serviço limpo do início ao fim.",
      es: "Terminaron nuestro sótano con estructura de madera y drywall. Gran limpieza de principio a fin.",
    },
  },
  {
    id: "review-12",
    name: "Sample Client 12",
    location: "Danbury, CT",
    rating: 5,
    service: "Deck Construction",
    isPlaceholder: true,
    comment: {
      en: "Great communication throughout the design and permit process. The finished composite deck is our favorite part of the home.",
      pt: "Ótima comunicação em todo o projeto. O deck compósito finalizado virou o cantinho favorito da nossa casa.",
      es: "Gran comunicación en todo el proyecto. El deck compuesto finalizado es nuestro espacio favorito.",
    },
  },
  {
    id: "review-13",
    name: "Sample Client 13",
    location: "Bethel, CT",
    rating: 5,
    service: "Exterior Painting",
    isPlaceholder: true,
    comment: {
      en: "Honest pricing, respectful crew and great quality paint. Will definitely call Santos Home Services for future work.",
      pt: "Preço justo, equipe respeitosa e tinta de ótima qualidade. Certamente chamaremos a Santos para novos serviços.",
      es: "Precios justos, equipo respetuoso y pintura de excelente calidad. Los volveremos a contratar.",
    },
  },
  {
    id: "review-14",
    name: "Sample Client 14",
    location: "Brookfield, CT",
    rating: 5,
    service: "Carpentry & Trim",
    isPlaceholder: true,
    comment: {
      en: "Custom fireplace mantle and coffered ceiling beams that look like they belong in an architectural magazine.",
      pt: "Lareira e forro de vigas aparentes que parecem ter saído de uma revista de arquitetura.",
      es: "Revestimiento de chimenea y vigas decorativas con acabado de revista de arquitectura.",
    },
  },
  {
    id: "review-15",
    name: "Sample Client 15",
    location: "Danbury, CT",
    rating: 5,
    service: "Full Exterior Renovation",
    isPlaceholder: true,
    comment: {
      en: "From framing repairs to new siding, deck and painting, Santos Home Services delivered beyond our expectations.",
      pt: "Desde reparos estruturais até novo siding, deck e pintura, a Santos Home Services superou nossas expectativas.",
      es: "Desde reparaciones estructurales hasta nuevo revestimiento, deck y pintura, superaron nuestras expectativas.",
    },
  },
];
