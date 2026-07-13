// i18n.js - International content and translations

// Shared content that doesn't need translation
const sharedContent = {
  branding: {
    brandName: "KACHICA",
    logo: "/logo/icon-white.png",
    logoPrimary: "/logo/icon-primary.png",
    favicon: "/logo/image-logo.png",
  },
  social: {
   
    instagram: "https://www.instagram.com/kachica.digital",
  },
};

export const i18n = {
  pt: {
    branding: {
      ...sharedContent.branding,
      tagline: "Soluções Online, Resultados Reais",
    },
    navigation: [
      { text: "INÍCIO", href: "/#hero" },
      { text: "IMPACTO", href: "/#stats" },
      { text: "SERVIÇOS", href: "/#services" },
      { text: "PORTFÓLIO", href: "/#case-studies" },
      { text: "CONTATO", href: "/#contact" },
    ],
    buttons: {
      contactUs: "Contacte-nos",
    },
    hero: {
      title: "Crescer Negócios com",
      highlight: " Soluções Digitais Estratégicas",
      cta: "Contactar",
      secondary: "Ver Nosso Trabalho",
    },
    stats: {
      title: "Nosso Impacto",
      subtitle: "Resultados Comprovados",
    },
    services: {
      title: "Expertise da Agência",
      subtitle: "Nossas Habilidades",
    },
    caseStudies: {
      title: "Estudos de Caso",
      subtitle: "Nossos Sucessos",
    },
    process: {
      title: "Como Trabalhamos",
    },
   
    whyChooseUs: {
      title: "Por Que Escolher KACHICA",
      subtitle: "O Que Nos Diferencia",
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Tem Dúvidas?",
    },
   
    mission: {
      subtitle: "NOSSA MISSÃO",
      title: "Seu Crescimento, Nosso Compromisso",
      description: "Na KACHICA, nossa missão é capacitar negócios com soluções de marketing inovadoras e orientadas por dados que impulsionem o crescimento e melhorem a visibilidade da marca. Somos dedicados a entender as necessidades únicas de nossos clientes e criar estratégias personalizadas que entreguem resultados mensuráveis.",
      cta: "Veja Como",
    },
    contact: {
      title: "Vamos Trabalhar Juntos",
      subtitle: "Entre em Contato",
      email: "hello@kachica.com",
      phone: "+1 (555) 123-4567",
      location: "Sua Cidade, País",
      formSubtitle: "Vamos trabalhar juntos",
      formTitle: "Trabalhe Conosco e Eleve Seu Negócio",
      formLabels: {
        fullName: "Nome Completo",
        email: "E-mail",
        phoneNumber: "Número de Telefone",
        message: "Mensagem",
        submit: "Enviar",
      },
      formPlaceholder: {
        fullName: "João Silva",
        email: "joao@gmail.com",
        phone: "+55 (11) 98765-4321",
        message: "Conte-nos sobre seu projeto...",
      },
      toastTitle: "Obrigado!",
      toastDescription: "Entraremos em contato com você em breve!",
      socialLabel: "Ou nos encontre em:",
    },
    social: sharedContent.social,
    statsData: [
      {
        value: "100%",
        label: "Satisfação do Cliente",
        description: "Comprometido com seu sucesso",
      },
      {
        value: "3+",
        label: "Anos de Experiência",
        description: "Entregando excelência digital",
      },
    {
    value: "100%",
    label: "Compromisso",
    description: "Foco em qualidade e resultados",
  },
    ],
    servicesData: [
      {
        name: "Gerenciamento de Redes Sociais",
        icon: "TbSpeakerphone",
        imagePath: "/services/social.jpg",
        description: "Gerenciamos suas redes sociais—desde criação de conteúdo até postagem e engajamento—ajudando você a construir uma voz de marca forte, crescer sua audiência e transformar seguidores em clientes leais.",
      },
      {
        name: "Anúncios Pagos no Facebook",
        icon: "TbSpeakerphone",
        imagePath: "/services/ads.jpg",
        description: "Criamos e gerenciamos campanhas de anúncios no Facebook de alto desempenho que impulsionam resultados reais—focando em segmentação, criatividade e otimização para maximizar seu retorno.",
      },
      {
        name: "Criação de Website",
        icon: "HiOutlineGlobeAlt",
        imagePath: "/services/website.jpg",
        description: "Projetamos e desenvolvemos websites rápidos, modernos e fáceis de usar—focados em conversões e customizados para refletir sua marca e transformar visitantes em clientes.",
      },
      {
        name: "Automação com IA",
        icon: "HiOutlineGlobeAlt",
        imagePath: "/services/ai.jpg",
        description: "Implementamos automações de IA para otimizar suas operações—reduzindo trabalho manual, aumentando eficiência e ajudando seu negócio a crescer de forma mais inteligente.",
      },
    ],
    
    faqData: [
      {
        question: "Quais serviços KACHICA oferece?",
        answer: "Oferecemos gerenciamento de redes sociais, anúncios no Facebook, criação de website e automações personalizadas com IA para suas necessidades comerciais.",
      },
      {
        question: "Quanto tempo leva um projeto típico?",
        answer: "Os prazos dos projetos variam dependendo do escopo e complexidade. Forneceremos um cronograma claro durante nossa consulta inicial.",
      },
      {
        question: "Qual é seu modelo de preços?",
        answer: "Oferecemos opções de preços flexíveis, incluindo modelos baseados em projeto, retainer e baseado em desempenho. Entre em contato para uma cotação personalizada.",
      },
      {
        question: "Vocês fornecem suporte contínuo?",
        answer: "Sim! Oferecemos pacotes de suporte abrangentes para garantir que seus projetos funcionem perfeitamente e continuem gerando resultados.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Resultados Baseados em Dados",
        description: "Cada decisão é apoiada por análises e insights em tempo real.",
        details: "Aproveitamos ferramentas analíticas avançadas e testes contínuos para tomar decisões informadas. Nossas estratégias são medidas em relação a KPIs claros e otimizadas com base em dados de desempenho real, garantindo máximo ROI.",
        icon: "BarChart3",
      },
      {
        title: "Estratégia Personalizada",
        description: "Soluções personalizadas construídas especificamente para seus objetivos comerciais.",
        details: "Não usamos uma abordagem única. Realizamos análise aprofundada da indústria e pesquisa competitiva para entender sua posição única, depois elaboramos estratégias que aproveitam seus pontos fortes e abordam seus desafios específicos.",
        icon: "Target",
      },
      {
        title: "Parceria Dedicada",
        description: "Seu sucesso é nossa prioridade com comunicação transparente.",
        details: "Você recebe uma equipe dedicada que age como uma extensão de seu negócio. Fornecemos atualizações regulares, relatórios detalhados e recomendações proativas. Seus objetivos se tornam nossos objetivos e estamos investidos em seu sucesso de longo prazo.",
        icon: "Users",
      },
      {
        title: "Excelência Comprovada",
        description: "Histórico consistente de entrega de impacto comercial mensurável.",
        details: "Com anos de experiência em diversos setores, provamos nossa capacidade de impulsionar o crescimento e transformar negócios. Nosso portfólio mostra resultados reais: aumento de receita, visibilidade melhorada da marca e lealdade sustentada dos clientes em vários setores.",
        icon: "Award",
      },
    ],
    caseStudiesData: [
           {
        id: 1,
        name: "Prumo Soalheiro",
        services: ["Website", "SEO", "Redes Sociais"],
        testimony: "Para esta empresa de construção especializada em reabilitações e construção civil, a KACHICA desenvolveu uma estratégia digital completa para fortalecer a sua presença online. O projeto incluiu a criação de um website moderno, rápido e responsivo, concebido para apresentar os serviços de forma clara e gerar novos contactos. Para reforçar a visibilidade nos motores de pesquisa, foi implementado um blog com conteúdos estratégicos e otimizados para SEO. Além disso, foram produzidas publicações direcionadas para o TikTok, Instagram e LinkedIn, aumentando o alcance da marca, promovendo os projetos realizados e criando uma comunicação consistente junto de diferentes públicos.",
        link: "https://prumo-blond.vercel.app/",
        src: "/case_studies/prumo.jpg",
        featured: true,
      },
      {
        id: 2,
        name: "Sónia Eliana",
        services: ["Website", "Redes Sociais"],
        testimony: "Para a Sónia Eliana, especialista em terapia capilar, a KACHICA desenvolveu um website moderno, elegante e totalmente orientado para a experiência do utilizador. O objetivo foi criar uma presença digital que transmitisse confiança, profissionalismo e o cuidado dedicado a cada cliente. O projeto incluiu um design responsivo, navegação intuitiva, apresentação clara dos serviços e otimização para dispositivos móveis. Também foram aplicadas boas práticas de SEO e performance, permitindo maior visibilidade online e uma experiência rápida e fluida. O resultado é um website que fortalece a marca, facilita o contacto com novos clientes e reflete a qualidade dos serviços prestados pela clínica.",
        link: "https://www.soniacapilar.pt/",
        src: "/case_studies/sonia.jpg",
        featured: false,
      },
 
      // {
      //   id: 3,
      //   name: "Barber PH",
      //   services: ["Site"],
      //   testimony: "Para esta barbearia, a KACHICA desenvolveu um website moderno que combina design atrativo, desempenho e funcionalidade. O principal objetivo foi simplificar a experiência dos clientes, permitindo que conhecessem os serviços disponíveis e realizassem agendamentos de forma rápida e intuitiva através da integração com uma plataforma de marcações. O website foi concebido para oferecer uma navegação fluida em qualquer dispositivo, reforçar a identidade da marca e aumentar a conveniência para os clientes. O resultado é uma presença digital profissional que otimiza a gestão dos agendamentos e contribui para o crescimento do negócio.",
      //   link: "https://example.com",
      //   src: "/case_studies/ph.jpg",
      //   featured: false,
      // },
    ],
    processSteps: [
      {
        step: 1,
        title: "Descoberta",
        description: "Entendemos seu negócio, objetivos e público-alvo",
      },
      {
        step: 2,
        title: "Estratégia",
        description: "Desenvolvemos uma estratégia personalizada alinhada com sua visão",
      },
      {
        step: 3,
        title: "Implementação",
        description: "Nossa equipe executa a estratégia com precisão e criatividade",
      },
      {
        step: 4,
        title: "Otimização",
        description: "Monitoramos continuamente e otimizamos para máximos resultados",
      },
    ],
  },
en: {
  branding: {
    ...sharedContent.branding,
    tagline: "Online Solutions, Real Results",
  },
  navigation: [
    { text: "HOME", href: "/#hero" },
    { text: "IMPACT", href: "/#stats" },
    { text: "SERVICES", href: "/#services" },
    { text: "PORTFOLIO", href: "/#case-studies" },
    { text: "CONTACT", href: "/#contact" },
  ],
  buttons: {
    contactUs: "Contact Us",
  },
  hero: {
    title: "Growing Businesses with",
    highlight: " Strategic Digital Solutions",
    cta: "Get in Touch",
    secondary: "View Our Work",
  },
  stats: {
    title: "Our Impact",
    subtitle: "Proven Results",
  },
  services: {
    title: "Agency Expertise",
    subtitle: "Our Skills",
  },
  caseStudies: {
    title: "Case Studies",
    subtitle: "Our Success Stories",
  },
  process: {
    title: "How We Work",
  },
  whyChooseUs: {
    title: "Why Choose KACHICA",
    subtitle: "What Sets Us Apart",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Have Questions?",
  },
  mission: {
    subtitle: "OUR MISSION",
    title: "Your Growth, Our Commitment",
    description:
      "At KACHICA, our mission is to empower businesses with innovative, data-driven marketing solutions that drive growth and strengthen brand visibility. We are dedicated to understanding each client's unique needs and crafting tailored strategies that deliver measurable results.",
    cta: "See How",
  },
  contact: {
    title: "Let's Work Together",
    subtitle: "Get in Touch",
    email: "hello@kachica.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    formSubtitle: "Let's Work Together",
    formTitle: "Work With Us and Grow Your Business",
    formLabels: {
      fullName: "Full Name",
      email: "Email",
      phoneNumber: "Phone Number",
      message: "Message",
      submit: "Send",
    },
    formPlaceholder: {
      fullName: "John Smith",
      email: "john@gmail.com",
      phone: "+1 (555) 123-4567",
      message: "Tell us about your project...",
    },
    toastTitle: "Thank You!",
    toastDescription: "We'll get back to you shortly!",
    socialLabel: "Or find us on:",
  },
  social: sharedContent.social,
  statsData: [
    {
      value: "100%",
      label: "Client Commitment",
      description: "Focused on quality and results",
    },
    {
      value: "3+",
      label: "Years of Experience",
      description: "Delivering digital excellence",
    },
    {
      value: "100%",
      label: "Dedication",
      description: "Committed to your success",
    },
  ],
  servicesData: [
    {
      name: "Social Media Management",
      icon: "TbSpeakerphone",
      imagePath: "/services/social.jpg",
      description:
        "We manage your social media—from content creation to publishing and engagement—helping you build a strong brand voice, grow your audience, and turn followers into loyal customers.",
    },
    {
      name: "Facebook Ads",
      icon: "TbSpeakerphone",
      imagePath: "/services/ads.jpg",
      description:
        "We create and manage high-performing Facebook ad campaigns that deliver real results by focusing on audience targeting, compelling creatives, and continuous optimization.",
    },
    {
      name: "Website Development",
      icon: "HiOutlineGlobeAlt",
      imagePath: "/services/website.jpg",
      description:
        "We design and develop fast, modern, and user-friendly websites focused on conversions, tailored to reflect your brand and transform visitors into customers.",
    },
    {
      name: "AI Automation",
      icon: "HiOutlineGlobeAlt",
      imagePath: "/services/ai.jpg",
      description:
        "We implement AI-powered automations to streamline your operations, reduce manual work, increase efficiency, and help your business scale smarter.",
    },
  ],
  faqData: [
    {
      question: "What services does KACHICA offer?",
      answer:
        "We provide social media management, Facebook advertising, website development, and custom AI automation solutions tailored to your business.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on the scope and complexity. We'll provide a clear schedule during our initial consultation.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing options, including project-based, retainer, and performance-based models. Contact us for a personalized quote.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer comprehensive support packages to ensure your digital solutions continue to perform and deliver results.",
    },
  ],
  whyChooseUsData: [
    {
      title: "Data-Driven Results",
      description: "Every decision is backed by analytics and real-time insights.",
      details:
        "We leverage advanced analytics tools and continuous testing to make informed decisions. Every strategy is measured against clear KPIs and optimized using real performance data to maximize ROI.",
      icon: "BarChart3",
    },
    {
      title: "Tailored Strategy",
      description: "Custom solutions designed specifically for your business goals.",
      details:
        "We don't believe in one-size-fits-all. We analyze your industry, competitors, and market position to build strategies that leverage your strengths and solve your unique challenges.",
      icon: "Target",
    },
    {
      title: "Dedicated Partnership",
      description: "Your success is our priority through transparent communication.",
      details:
        "You gain a dedicated team that acts as an extension of your business. We provide regular updates, detailed reports, and proactive recommendations while staying committed to your long-term success.",
      icon: "Users",
    },
    {
      title: "Proven Excellence",
      description: "A consistent track record of delivering measurable business impact.",
      details:
        "With years of experience across multiple industries, we've helped businesses grow through stronger branding, increased visibility, higher revenue, and lasting customer loyalty.",
      icon: "Award",
    },
  ],
  caseStudiesData: [
    {
      id: 1,
      name: "Prumo Soalheiro",
      services: ["Website", "SEO", "Social Media"],
      testimony:
        "For this construction company specializing in renovations and civil construction, KACHICA developed a complete digital strategy to strengthen its online presence. The project included a modern, fast, and responsive website designed to showcase services clearly and generate new leads. To improve search engine visibility, we implemented an SEO-focused blog with strategic content. Additionally, we created engaging content for TikTok, Instagram, and LinkedIn, increasing brand awareness, highlighting completed projects, and building consistent communication across multiple audiences.",
      link: "https://prumo-blond.vercel.app/",
      src: "/case_studies/prumo.jpg",
      featured: true,
    },
    {
      id: 2,
      name: "Sónia Eliana",
      services: ["Website", "Social Media"],
      testimony:
        "For Sónia Eliana, a specialist in hair therapy, KACHICA developed a modern, elegant, and user-focused website. The goal was to create a digital presence that conveyed trust, professionalism, and the personalized care offered to every client. The project included a responsive design, intuitive navigation, clear service presentation, and mobile optimization. We also implemented SEO and performance best practices, resulting in greater online visibility and a seamless browsing experience. The final website strengthens the brand, makes it easier for new clients to get in touch, and reflects the high quality of the clinic's services.",
      link: "https://www.soniacapilar.pt/",
      src: "/case_studies/sonia.jpg",
      featured: false,
    },
    // {
    //   id: 3,
    //   name: "Barber PH",
    //   services: ["Website"],
    //   testimony:
    //     "For this barbershop, KACHICA designed and developed a modern website that combines visual appeal, performance, and functionality. The primary objective was to simplify the customer experience by allowing visitors to explore available services and book appointments through an integrated scheduling platform. The website was built to provide a seamless experience across all devices, reinforce the brand identity, and improve customer convenience. The result is a professional digital presence that streamlines appointment management and supports the continued growth of the business.",
    //   link: "https://example.com",
    //   src: "/case_studies/ph.jpg",
    //   featured: false,
    // },
  ],
  processSteps: [
    {
      step: 1,
      title: "Discovery",
      description: "We learn about your business, goals, and target audience.",
    },
    {
      step: 2,
      title: "Strategy",
      description: "We develop a tailored strategy aligned with your vision.",
    },
    {
      step: 3,
      title: "Execution",
      description: "Our team brings the strategy to life with precision and creativity.",
    },
    {
      step: 4,
      title: "Optimization",
      description: "We continuously monitor, improve, and optimize for maximum results.",
    },
  ],
},
};

// Helper function to get content by language
export const getContent = (language = 'en') => {
  return i18n[language] || i18n.en;
};
