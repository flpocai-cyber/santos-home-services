export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
}

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  image: string;
  specialties: string[];
  bio: string;
  email: string;
  linkedin: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  area: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const OFFICE_INFO = {
  name: "Santos Home Services LLC",
  tagline: "Quality Craftsmanship & Home Improvement",
  phone: "(475) 251-6504",
  whatsapp: "14752516504",
  email: "Santoshomeservices2026@gmail.com",
  address: "95 Main St Apt 2B - Danbury, CT 06810",
  openingHours: "Monday to Saturday, 7:00 AM - 6:00 PM",
  license: "HIC.0694862",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "empresarial",
    title: "Direito Empresarial",
    subtitle: "Estruturação & Fusões",
    iconName: "Briefcase",
    shortDesc: "Assessoria estratégica em M&A, governança corporativa, conformidade e reorganização societária de alto valor.",
    fullDesc: "Atuação consultiva e contenciosa especializada na estruturação de negócios, acordos de acionistas, reestruturações financeiras e proteção patrimonial de grupos empresariais.",
    keyPoints: ["Fusões e Aquisições (M&A)", "Governança Corporativa e Compliance", "Proteção de Ativos e Blindagem Societária"]
  },
  {
    id: "civil",
    title: "Direito Civil & Contratos",
    subtitle: "Litígios & Negociações",
    iconName: "FileText",
    shortDesc: "Resolução de disputas contratuais complexas, responsabilidade civil e elaboração de instrumentos de alta blindagem.",
    fullDesc: "Redação minuciosa e auditoria contratual para prevenir passivos, além de atuação combativa em litígios cíveis de expressiva repercussão econômica.",
    keyPoints: ["Contratos Empresariais Complexos", "Responsabilidade Civil e Indenizações", "Execuções e Cobranças Estratégicas"]
  },
  {
    id: "tributario",
    title: "Direito Tributário",
    subtitle: "Planejamento & Defesa",
    iconName: "Scale",
    shortDesc: "Planejamento tributário inteligente, recuperação de créditos fiscais e defesa contenciosa contra autuações.",
    fullDesc: "Diagnóstico profundo das operações fiscais para redução lícita da carga tributária, aliada a uma defesa intransigente em execuções fiscais federais e estaduais.",
    keyPoints: ["Recuperação de Créditos Tributários", "Planejamento e Otimização Fiscal", "Contencioso Administrativo e Judicial"]
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista Corporativo",
    subtitle: "Preventivo & Contencioso",
    iconName: "Users",
    shortDesc: "Gestão estratégica de passivos trabalhistas, consultoria para executivos e auditorias de conformidade com a CLT.",
    fullDesc: "Prevenção sistemática de riscos trabalhistas com defesas personalizadas para médias e grandes corporações, além de negociações de rescisões executivas.",
    keyPoints: ["Auditoria Preventiva de Riscos", "Defesa em Reclamatórias Coletivas", "Contratos Especiais de Executivos"]
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    subtitle: "Patrimônio & Incorporações",
    iconName: "Building2",
    shortDesc: "Estruturação jurídica de empreendimentos, regularização fundiária, incorporações e compra e venda segura.",
    fullDesc: "Segurança jurídica total para aquisições de imóveis de luxo, incorporações imobiliárias, shopping centers, contratos de locação built to suit e due diligence.",
    keyPoints: ["Due Diligence Imobiliária Rigorosa", "Incorporações e Loteamentos", "Ações Possessórias e Renovatórias"]
  },
  {
    id: "familia-sucessoes",
    title: "Família & Planejamento Sucessório",
    subtitle: "Herança & Governança Familiar",
    iconName: "Shield",
    shortDesc: "Criação de holdings familiares, inventários de alta complexidade e proteção da perpetuidade patrimonial.",
    fullDesc: "Abordagem técnica e humana na estruturação sucessória para evitar litígios futuros, preservando a harmonia familiar e a integridade do patrimônio construído.",
    keyPoints: ["Holdings Familiares e Rurais", "Inventários e Partilhas Judiciais/Extrajudiciais", "Pactos Antenupciais e Testamentos"]
  },
  {
    id: "previdenciario",
    title: "Previdenciário Estratégico",
    subtitle: "Planejamento & Concessões",
    iconName: "Clock",
    shortDesc: "Planejamento previdenciário minucioso para profissionais liberais, empresários e servidores públicos.",
    fullDesc: "Cálculos atuariais aprofundados para concessão dos melhores benefícios possíveis, revisões estratégicas e regimes próprios de previdência.",
    keyPoints: ["Planejamento Previdenciário para Executivos", "Revisões de Benefícios de Alto Valor", "Aposentadorias Especiais e Médicas"]
  },
  {
    id: "penal-economico",
    title: "Direito Penal Econômico",
    subtitle: "Defesa Técnica & Compliance",
    iconName: "ShieldAlert",
    shortDesc: "Defesa criminal estratégica em crimes contra a ordem tributária, sistema financeiro e lavagem de capitais.",
    fullDesc: "Atuação intransigente em investigações criminais corporativas, CPIs e inquéritos policiais, com sigilo rigoroso e técnica processual refinada.",
    keyPoints: ["Crimes Financeiros e Tributários", "Atuação Preventiva e Compliance Criminal", "Recursos nos Tribunais Superiores (STJ/STF)"]
  },
  {
    id: "indenizacoes",
    title: "Acidentes & Indenizações",
    subtitle: "Danos Morais & Materiais",
    iconName: "AlertTriangle",
    shortDesc: "Reparação integral de danos patrimoniais e extrapatrimoniais decorrentes de acidentes e ilícitos graves.",
    fullDesc: "Busca contundente pelo ressarcimento integral de prejuízos econômicos e humanos com perícias técnicas detalhadas e sólida jurisprudência.",
    keyPoints: ["Danos Morais de Alta Repercussão", "Acidentes e Lucros Cessantes", "Responsabilidade por Erro Técnico"]
  },
  {
    id: "contratos-internacionais",
    title: "Comércio & Contratos Internacionais",
    subtitle: "Cross-Border & Arbitragem",
    iconName: "Globe",
    shortDesc: "Representação de interesses multinacionais, exportação/importação e câmaras de arbitragem nacional e estrangeira.",
    fullDesc: "Assessoria fluente e segura em operações cross-border, resolução de controvérsias arbitrais e adaptação de diretrizes internacionais à legislação brasileira.",
    keyPoints: ["Câmaras de Arbitragem (CCI, CAM-CCBC)", "Estruturação de Joint Ventures Internacionais", "Contratos de Distribuição e Franquias Globais"]
  }
];

export const LAWYERS: Lawyer[] = [
  {
    id: "dr-eduardo-valenca",
    name: "Dr. Eduardo Valença",
    role: "Sócio Fundador | Head de Direito Empresarial & Societário",
    oab: "OAB/SP 134.821",
    image: "/images/lawyer-hero.jpg",
    specialties: ["M&A e Reestruturação", "Direito Tributário", "Arbitragem"],
    bio: "Mais de 22 anos de atuação liderando operações societárias complexas e litígios estratégicos perante os Tribunais Superiores. Mestre em Direito Comercial pela USP e especialista em Negociações Internacionais por Harvard.",
    email: "eduardo.valenca@valencaadvocacia.com.br",
    linkedin: "https://linkedin.com"
  },
  {
    id: "dra-helena-cavalcanti",
    name: "Dra. Helena Cavalcanti",
    role: "Sócia | Especialista em Planejamento Sucessório & Família",
    oab: "OAB/SP 189.442",
    image: "/images/lawyer-1.jpg",
    specialties: ["Holdings Familiares", "Inventários Complexos", "Blindagem Patrimonial"],
    bio: "Referência nacional em governança de famílias empresárias e mediação patrimonial. Doutoranda em Direito Civil pela PUC-SP, autora de artigos renomados sobre sucessões e heranças.",
    email: "helena.cavalcanti@valencaadvocacia.com.br",
    linkedin: "https://linkedin.com"
  },
  {
    id: "dr-marcos-antonio-rezende",
    name: "Dr. Marcos Rezende",
    role: "Sócio | Coordenador de Contencioso Cível & Penal Econômico",
    oab: "OAB/SP 210.903",
    image: "/images/lawyer-2.jpg",
    specialties: ["Tribunais Superiores (STJ/STF)", "Penal Corporativo", "Compliance"],
    bio: "Ex-conselheiro da OAB com vasta vivência em sustentação oral e estratégias defensivas de alta complexidade contra acusações econômicas e litígios civis bilionários.",
    email: "marcos.rezende@valencaadvocacia.com.br",
    linkedin: "https://linkedin.com"
  }
];

export const STATS = [
  { value: 20, suffix: "+", label: "Anos de Tradição", detail: "Atuação ininterrupta pautada em rigor ético e técnica jurídica" },
  { value: 1500, suffix: "+", label: "Clientes Atendidos", detail: "Empresas e pessoas físicas respaldadas com sigilo total" },
  { value: 95, suffix: "%", label: "Índice de Êxito", detail: "Casos solucionados com resultados favoráveis aos clientes" },
  { value: 150, suffix: "M+", label: "Patrimônio Protegido (R$)", detail: "Em litígios, reestruturações e planejamentos patrimoniais" }
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento Personalizado & Exclusivo",
    desc: "Cada caso é tratado de forma singular pelos sócios, garantindo atenção minuciosa aos detalhes e sigilo absoluto.",
    iconName: "UserCheck"
  },
  {
    title: "Estratégia Jurídica Sob Medida",
    desc: "Não utilizamos teses padronizadas. Criamos soluções sob medida antecipando riscos e maximizando probabilidades de vitória.",
    iconName: "Target"
  },
  {
    title: "Transparência & Comunicação Ativa",
    desc: "Relatórios periódicos claros e canal direto de comunicação para que você tenha ciência em tempo real de cada andamento.",
    iconName: "Eye"
  },
  {
    title: "Experiência Comprovada em Cortes Superiores",
    desc: "Histórico consistente de defesas e sustentações orais perante o Tribunal de Justiça, TRFs, STJ e STF.",
    iconName: "Award"
  },
  {
    title: "Agilidade & Resposta Imediata",
    desc: "Estrutura moderna capaz de atuar em situações emergenciais como liminares, medidas cautelares e auditorias urgentes.",
    iconName: "Zap"
  },
  {
    title: "Atendimento Presencial e Digital",
    desc: "Infraestrutura de ponta na Faria Lima para reuniões reservadas e suporte remoto criptografado para todo o Brasil e exterior.",
    iconName: "Laptop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Drummond de Paula",
    role: "CEO",
    company: "Grupo Apex Empreendimentos",
    rating: 5,
    area: "Direito Empresarial & M&A",
    content: "A condução da fusão de nossas empresas pelo Dr. Eduardo Valença foi impecável. A visão estratégica e a capacidade de blindar nossos ativos societários superaram todas as expectativas."
  },
  {
    id: "2",
    name: "Dra. Beatriz Sanches",
    role: "Diretora Clínica",
    company: "Instituto Médico Integrado",
    rating: 5,
    area: "Tributário & Planejamento",
    content: "Conseguimos recuperar valores tributários significativos e reorganizar toda a estrutura societária da clínica com segurança total. Transparência e rigor técnico inquestionáveis."
  },
  {
    id: "3",
    name: "Fernando Moreira Lima",
    role: "Empresário & Investidor",
    company: "Moreira Lima Agro",
    rating: 5,
    area: "Família & Planejamento Sucessório",
    content: "O planejamento sucessório e a constituição da nossa holding familiar trouxeram paz e estabilidade para a continuidade dos negócios entre gerações. Atendimento verdadeiramente sofisticado."
  },
  {
    id: "4",
    name: "Renata Vasconcellos Prado",
    role: "VP de Operações",
    company: "LogTech Soluções Globais",
    rating: 5,
    area: "Contencioso Trabalhista Corporativo",
    content: "A equipe nos defendeu em um processo coletivo de alto risco com maestria. A dedicação aos detalhes e a agilidade nas sustentações orais fizeram toda a diferença."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "holding-familiar-planejamento-patrimonial-2026",
    title: "Holding Familiar e a Nova Reforma Tributária: Como Proteger o Patrimônio da Família",
    excerpt: "Entenda os impactos das mudanças fiscais sobre heranças, doações e como a holding familiar continua sendo a ferramenta mais segura de perpetuidade patrimonial.",
    category: "Planejamento Sucessório",
    date: "14 Jan 2026",
    readTime: "5 min de leitura",
    image: "/images/blog-1.jpg"
  },
  {
    id: "2",
    slug: "clausulas-fundamentais-contratos-societarios",
    title: "Cláusulas Essenciais em Acordos de Acionistas para Prevenir Litígios Societários",
    excerpt: "Tag along, drag along, shot-gun e direito de preferência: como redigir instrumentos societários robustos que evitam a paralisia do negócio.",
    category: "Direito Empresarial",
    date: "28 Jan 2026",
    readTime: "7 min de leitura",
    image: "/images/blog-2.jpg"
  },
  {
    id: "3",
    slug: "recuperacao-tributaria-teses-stf-stj",
    title: "Oportunidades Tributárias Recentes no STJ: Créditos Fiscais para Médias e Grandes Empresas",
    excerpt: "Panorama atualizado sobre exclusões de bases tributárias e estratégias legítimas para otimização de fluxo de caixa e restituição de valores pagos indevidamente.",
    category: "Direito Tributário",
    date: "05 Fev 2026",
    readTime: "6 min de leitura",
    image: "/images/blog-3.jpg"
  }
];
