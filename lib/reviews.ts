export interface Review {
  id: string;
  name: string;
  url?: string;
  time: {
    en: string;
    pt: string;
    es: string;
  };
  rating: number;
  service?: {
    en: string;
    pt: string;
    es: string;
  };
  comment: {
    en: string;
    pt: string;
    es: string;
  };
}

export const reviews: Review[] = [
  {
    id: "review-01",
    name: "Mahogany Drk Brown",
    url: "https://www.facebook.com/StarBrown",
    time: {
      en: "2 years ago",
      pt: "2 anos atrás",
      es: "Hace 2 años",
    },
    rating: 5,
    service: {
      en: "Verified Review • Facebook",
      pt: "Avaliação Verificada • Facebook",
      es: "Reseña Verificada • Facebook",
    },
    comment: {
      en: "Mr. Santos is an exceptional craftsman who exceeds the regular standards of work ethic. He is meticulous in his work and pays close attention to every detail of the project requirements specified by his patrons. In the projects he has completed, my husband and I have been thoroughly impressed with the quality of his artistry. From the precise cuts to the carefully chosen materials, every aspect of his work is a testament to his dedication and skill. We are delighted with all the projects he has completed for us, and we would not hesitate to recommend him to anyone seeking fine, detailed craftsmanship for their projects.",
      pt: "O Sr. Santos é um profissional excepcional que supera todos os padrões comuns de ética de trabalho. Ele é meticuloso em sua atuação e presta atenção a cada detalhe das exigências especificadas por seus clientes. Nos projetos que realizou para nós, meu marido e eu ficamos profundamente impressionados com a qualidade de sua arte. Dos cortes precisos aos materiais cuidadosamente escolhidos, cada detalhe de seu trabalho é uma prova de sua dedicação e habilidade. Estamos encantados com todos os projetos que ele concluiu para nós e não hesitamos em recomendá-lo a qualquer pessoa que busque um trabalho artesanal fino e detalhado.",
      es: "El Sr. Santos es un artesano excepcional que supera los estándares habituales de ética laboral. Es meticuloso en su trabajo y presta máxima atención a cada detalle especificado por sus clientes. En los proyectos que ha completado, mi esposo y yo quedamos profundamente impresionados con la calidad de su labor. Desde los cortes precisos hasta los materiales cuidadosamente seleccionados, cada aspecto de su trabajo demuestra su dedicación y destreza. Estamos encantados con todos los proyectos que ha hecho para nosotros y lo recomendamos sin dudarlo a quien busque una mano de obra fina y detallada.",
    },
  },
  {
    id: "review-02",
    name: "Robert Russo",
    url: "https://www.facebook.com/BodgieR",
    time: {
      en: "4 weeks ago",
      pt: "4 semanas atrás",
      es: "Hace 4 semanas",
    },
    rating: 5,
    service: {
      en: "Verified Review • Facebook",
      pt: "Avaliação Verificada • Facebook",
      es: "Reseña Verificada • Facebook",
    },
    comment: {
      en: "You do amazing work. All my friends use you and everything come out fantastic.",
      pt: "Vocês fazem um trabalho incrível. Todos os meus amigos contratam vocês e tudo sempre fica fantástico.",
      es: "Hacen un trabajo increíble. Todos mis amigos los contratan y todo queda fantástico.",
    },
  },
  {
    id: "review-03",
    name: "patriciaoc21888",
    url: "https://www.instagram.com/patriciaoc21888/",
    time: {
      en: "19 weeks ago",
      pt: "19 semanas atrás",
      es: "Hace 19 semanas",
    },
    rating: 5,
    service: {
      en: "Verified Review • Instagram",
      pt: "Avaliação Verificada • Instagram",
      es: "Reseña Verificada • Instagram",
    },
    comment: {
      en: "You cannot go wrong hiring this crew. They clean up the mess and even helped me put out the trash on nights I couldn’t be there . They are trustworthy with the keys… they even went to the house to let the plumber in when I couldn’t be there and I was nervous about someone I didn’t know in the house when I wasn’t there. Their craftsmanship and attention to detail is excellent . They take care to accommodate clients requests . They worked with me to find affordable materials . Honestly I will miss them when the work is finished !!",
      pt: "Você não tem como errar contratando essa equipe. Eles limpam toda a bagunça e até me ajudaram a colocar o lixo para fora nas noites em que eu não podia estar presente. São totalmente confiáveis com as chaves... chegaram a ir até a casa para abrir para o encanador quando eu não podia estar lá e estava receosa com alguém desconhecido em casa sem mim. A mão de obra e a atenção aos detalhes são excelentes. Fazem questão de atender a todos os pedidos dos clientes e colaboraram comigo para encontrar materiais acessíveis. Sinceramente, vou sentir falta deles quando a obra terminar!!",
      es: "Es imposible equivocarse contratando a este equipo. Limpian todo el desorden e incluso me ayudaron a sacar la basura en noches que no pude estar. Son completamente confiables con las llaves... incluso fueron a la casa a abrirle al plomero cuando yo no podía ir y me daba desconfianza dejar a un desconocido solo. Su mano de obra y atención al detalle son excelentes. Se esmeran en cumplir las peticiones de los clientes y me ayudaron a buscar materiales accesibles. ¡Sinceramente los voy a extrañar cuando termine el trabajo!!",
    },
  },
  {
    id: "review-04",
    name: "Anita Albrycht",
    url: "https://www.facebook.com/anita.albrycht.2025",
    time: {
      en: "10 weeks ago",
      pt: "10 semanas atrás",
      es: "Hace 10 semanas",
    },
    rating: 5,
    service: {
      en: "Porch, Railings & Deck • Facebook",
      pt: "Alpendre, Grades e Deck • Facebook",
      es: "Porche, Barandas y Deck • Facebook",
    },
    comment: {
      en: "Yes they did an amazing job on my home as well. I had my front porch redone new posts, railings and trex stairs and my back deck was all redone with trellis placed underneath for some added storage area. Just waiting for a permit and will be getting a deck around the pool built by Santos Home Services as well. If anyone needs any home improvements, roofing, deck needs, flooring etc please call Santos Home you will be pleased.",
      pt: "Sim, eles fizeram um trabalho incrível na minha casa também. Reformei minha varanda da frente com novos postes, corrimãos e escadas de Trex, e meu deck dos fundos foi todo refeito com treliça na parte de baixo para criar uma área extra de armazenamento. Só estou aguardando a licença para construir também um deck ao redor da piscina com a Santos Home Services. Se alguém estiver precisando de reformas residenciais, telhados, decks, pisos, etc., por favor ligue para a Santos Home, você vai ficar muito satisfeito.",
      es: "Sí, hicieron un trabajo asombroso en mi casa también. Me rehicieron el porche delantero con nuevos postes, barandas y escaleras de Trex, y mi deck trasero fue completamente remodelado con celosías debajo para crear espacio de almacenamiento. Solo estoy esperando el permiso y la Santos Home Services me construirá también un deck alrededor de la piscina. Si alguien necesita mejoras en el hogar, techos, decks, pisos, etc., llame a Santos Home, quedará encantado.",
    },
  },
  {
    id: "review-05",
    name: "Lester Walters",
    url: "https://www.facebook.com/lester.walters.7",
    time: {
      en: "10 weeks ago",
      pt: "10 semanas atrás",
      es: "Hace 10 semanas",
    },
    rating: 5,
    service: {
      en: "Structural Posts & Vinyl • Facebook",
      pt: "Postes Estruturais e Vinil • Facebook",
      es: "Postes Estructurales y Vinilo • Facebook",
    },
    comment: {
      en: "Santos Home Services did an amazing job on my Home. Removing the old rotted posts and replacing them with new vynal covered ones. I highly recommend them for any work you may need to have done to your home. Just give them a call and know you will be very happy you did.",
      pt: "A Santos Home Services fez um trabalho impecável na minha casa. Removeram os postes antigos apodrecidos e os substituíram por novos revestidos de vinil. Eu os recomendo com total certeza para qualquer serviço que você precise fazer na sua casa. Basta ligar para eles e você ficará muito feliz por ter contratado.",
      es: "Santos Home Services hizo un trabajo excelente en mi casa. Removieron los postes viejos podridos y los reemplazaron por unos nuevos revestidos de vinilo. Los recomiendo ampliamente para cualquier trabajo que necesite en su hogar. Simplemente llámelos y estará muy contento de haberlo hecho.",
    },
  },
  {
    id: "review-06",
    name: "Sheila DiCicco",
    url: "https://www.facebook.com/sheila.duncan.50",
    time: {
      en: "3 weeks ago",
      pt: "3 semanas atrás",
      es: "Hace 3 semanas",
    },
    rating: 5,
    service: {
      en: "Kitchen Backsplash & Tile • Facebook",
      pt: "Backsplash e Azulejos • Facebook",
      es: "Salpicadero y Azulejos • Facebook",
    },
    comment: {
      en: "Santos Home did a great job removing and replacing my backsplash in my kitchen and installing new tile in my bathroom. Great service and pricing! Will do business with again soon.",
      pt: "A Santos Home fez um excelente trabalho removendo e substituindo o backsplash da minha cozinha e instalando azulejos novos no meu banheiro. Ótimo atendimento e preço excelente! Com certeza farei negócio novamente em breve.",
      es: "Santos Home hizo un trabajo magnífico removiendo y reemplazando el salpicadero de mi cocina e instalando azulejos nuevos en el baño. ¡Excelente servicio y gran precio! Volveré a hacer proyectos con ellos muy pronto.",
    },
  },
  {
    id: "review-07",
    name: "Richard Auger",
    url: "https://www.facebook.com/richard.auger.56",
    time: {
      en: "42 weeks ago",
      pt: "42 semanas atrás",
      es: "Hace 42 semanas",
    },
    rating: 5,
    service: {
      en: "Full Home Renovation • Facebook",
      pt: "Reforma Completa • Facebook",
      es: "Renovación Completa • Facebook",
    },
    comment: {
      en: "Absolutely amazing, thankyou, wonderful job completed in a timely manner, was at job site early everyday, neat, polite, transformed this home from shabby to looking fantastic. Highly recommended.",
      pt: "Absolutamente incrível, muito obrigado, trabalho maravilhoso concluído dentro do prazo previsto, estavam na obra cedo todos os dias, caprichosos, educados, transformaram esta casa de desgastada para uma aparência fantástica. Altamente recomendado.",
      es: "Absolutamente increíble, muchas gracias, maravilloso trabajo terminado justo a tiempo, llegaban temprano a la obra todos los días, limpios, amables, transformaron esta casa deteriorada en un lugar fantástico. Muy recomendado.",
    },
  },
  {
    id: "review-08",
    name: "Patricia O. (patriciaoc21888)",
    url: "https://www.instagram.com/patriciaoc21888/",
    time: {
      en: "19 weeks ago",
      pt: "19 semanas atrás",
      es: "Hace 19 semanas",
    },
    rating: 5,
    service: {
      en: "Home Renovation • Instagram",
      pt: "Reforma Residencial • Instagram",
      es: "Renovación Residencial • Instagram",
    },
    comment: {
      en: "Santos Home Services crew are amazing!! They have been renovating my new home . I highly recommend them . As a single female they are courteous, friendly and very trustworthy! They have given me amazing counsel, helped me pick up heavy materials , worked long hours to complete jobs on time and have offered great pricing helping me stay in my budget !!",
      pt: "A equipe da Santos Home Services é sensacional!! Eles estão reformando minha nova casa. Eu os recomendo muito. Como mulher que mora sozinha, achei a equipe extremamente cortês, amigável e de total confiança! Eles me deram ótimos conselhos técnicos, me ajudaram a carregar materiais pesados, trabalharam horas extras para entregar os serviços no prazo e ofereceram preços excelentes que me mantiveram dentro do orçamento!!",
      es: "¡¡El equipo de Santos Home Services es increíble!! Han estado renovando mi nuevo hogar. Los recomiendo de todo corazón. Como mujer que vive sola, ¡son sumamente corteses, amables y 100% de confianza! Me brindaron asesoría excelente, me ayudaron a cargar materiales pesados, trabajaron jornadas largas para terminar todo a tiempo y me ofrecieron excelentes precios adaptados a mi presupuesto!!",
    },
  },
];
