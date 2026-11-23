// Textos da landing em PT e EN. Chaves com sufixo "Html" aceitam tags (<br>, <strong>).
export type Lang = "pt" | "en";

export const CASE_STUDIES_URL = "https://www.merusonline.com/case-studies/";

export const dict = {
  pt: {
    htmlLang: "pt-BR",
    meta: {
      title: "MERUS — Tratamento Físico de Fluidos para Oil & Gas",
      description:
        "O anel MERUS previne incrustação, corrosão e biofouling em sistemas de fluido industrial e offshore. Sem químicos, sem paradas, sem alteração de processo. Fabricado na Alemanha.",
    },
    nav: {
      home: "MERUS — página inicial",
      main: "Navegação principal",
      footer: "Navegação do rodapé",
      solucao: "Solução",
      tecnologia: "Tecnologia",
      aplicacoes: "Aplicações",
      clientes: "Clientes",
      cases: "Estudo de Casos",
      cta: "Solicitar Avaliação",
      ctaShort: "Contato",
      lang: "Idioma",
    },
    hero: {
      market: "Mercado Oil & Gas",
      eyebrow: "Fabricado na Alemanha — Oil & Gas / Industrial",
      h1: "Keeps your pipes clean.",
      sub: "Tubos livres de incrustações",
      corpo:
        "Instalado externamente à tubulação, o MERUS Ring transmite oscilações físicas para a água, ajudando a reduzir depósitos, corrosão e biofilme no sistema.",
      bullets: ["Menos manutenção.", "Mais eficiência.", "Maior vida útil."],
    },
    sol: {
      label: "01 — Solução",
      h2Html: "Menos impacto,<br>mais eficiência.",
      corpo:
        "Tecnologia alemã para tratamento de água, com alta eficiência operacional e menor impacto ambiental.",
      bullets: [
        "Sem químicos.",
        "Sem consumo de energia.",
        "Sem manutenção recorrente.",
        "ROI em poucos meses.",
        "05 anos de duração.",
      ],
    },
    stats: {
      aria: "Indicadores MERUS",
      items: ["Países", "Anos em campo", "Químicos adicionados", "Menos incrustações"],
      ate: "até",
    },
    cine: {
      aria: "MERUS Ring instalado em tubulação industrial",
      eyebrow: "Instalação externa",
      frase: "Montado por fora da tubulação existente, sem corte, solda ou parada de operação.",
    },
    tec: {
      label: "02 — A Tecnologia",
      h2: "Como o MERUS funciona",
      corpo:
        "O MERUS Ring é instalado ao redor da tubulação e transmite oscilações físicas para a água através da parede do tubo. Essas oscilações influenciam o comportamento das partículas no fluxo, contribuindo para maior solubilidade e evita a formação de depósitos.",
      destaqueTitulo: "Instalação rápida, sem parar a operação",
      destaqueTexto:
        "Instalado na infraestrutura existente, sem modificação de tubulação, soldagem ou penetração.",
      dataAria: "Comparativo de taxa de corrosão em campo",
      modelosTitulo: "Dois modelos, o mesmo princípio",
      modelos: [
        {
          nome: "MERUS Ring",
          tag: "Instalação externa",
          desc: "Anel de alumínio tratado em um processo especial que permite emitir oscilações ativas. É montado ao redor da tubulação, em pontos como trocadores, chillers, compressores e linhas de combate a incêndio.",
          alt: "MERUS Ring instalado em uma tubulação industrial",
        },
        {
          nome: "MERUS Chain",
          tag: "Instalação submersa",
          desc: "Módulos articulados fixados em volta do tubo, para pontos submersos como captação de água do mar, risers e bombas submersíveis.",
          alt: "MERUS Chain instalado em um tubo de captação de água do mar",
        },
      ],
      com: "Com MERUS",
      sem: "Sem MERUS",
      trocador: "Trocador",
      deltaHtml: "<strong>64% menos</strong> corrosão no trocador tratado",
      mpyHtml:
        "<strong>MPY</strong> — Milésimos de polegada por ano: usado para indicar a taxa de corrosão em um tubo, sistema de tubulação ou outras superfícies metálicas.",
      nota:
        "Comparação lado a lado: trocadores 101-E9A (com MERUS) e 101-E9B (sem), na mesma plataforma, mesmo fluido e mesmo período de 3 meses de monitoramento de campo. A diferença medida é atribuível ao tratamento. Resultados refletem as condições da instalação monitorada.",
    },
    video: {
      kicker: "MERUS em ação",
      h2: "Veja o MERUS funcionando.",
      lead: "Do problema dentro da tubulação ao resultado medido em campo, em pouco mais de um minuto.",
      phTitulo: "Vídeo em breve",
      phTexto: "Espaço reservado para o vídeo MERUS",
      iframeTitle: "Vídeo MERUS",
    },
    res: {
      label: "03 — Antes e Depois",
      h2Html: "Menos incrustação.<br>Mais eficiência no fluxo.",
      corpo:
        "A atuação do MERUS contribui para superfícies internas mais limpas, evitando e melhorando a estabilidade operacional.",
      antes: "Antes",
      depois: "Depois",
      comparar: "Comparar antes e depois",
      cards: [
        {
          nome: "trocador de calor",
          altDepois: "Trocador de calor após o MERUS: superfície mais limpa",
          altAntes: "Trocador de calor antes do MERUS: depósitos acumulados",
          capAntes: "Depósitos acumulados e redução da passagem interna.",
          capDepois: "Superfície mais limpa e melhor condição de fluxo.",
        },
        {
          nome: "corrosão e biofilme",
          altDepois: "Tubulação após o MERUS: menor acúmulo e corrosão",
          altAntes: "Tubulação antes do MERUS: corrosão e biofilme",
          capAntes: "Corrosão visível e formação de biofilme no sistema.",
          capDepois: "Menor acúmulo, melhor estabilidade e manutenção reduzida.",
        },
        {
          nome: "caldeira a vapor",
          altDepois: "Caldeira após o MERUS: superfície tratada",
          altAntes: "Caldeira antes do MERUS: incrustação na superfície",
          capAntes: "Incrustação e perda de eficiência térmica.",
          capDepois: "Superfície tratada e melhor desempenho operacional.",
        },
      ],
      micro:
        "Resultados podem variar conforme fluido, material, histórico do sistema e condições operacionais.",
    },
    verde: {
      aria: "Destaque MERUS",
      fraseHtml:
        "Mais do que tratar a água, o MERUS <strong>preserva a eficiência do sistema</strong> ao longo do tempo, sem químicos, sem paradas e sem alterar o processo.",
    },
    aplic: {
      kicker: "Onde o MERUS pode ser aplicado",
      h2Html: "O seu ativo.<br>Os seus sistemas.",
      lead:
        "Embarcações, FPSOs e plataformas offshore compartilham desafios de circulação de fluidos. A aplicação começa pela identificação do circuito.",
      assets: [
        { nome: "Vessel", label: "Embarcações", desc: "Circuitos de fluido a bordo, da geração de água ao resfriamento." },
        { nome: "FPSO", label: "Unidades flutuantes", desc: "Sistemas de utilidades e infraestrutura de processamento offshore." },
        { nome: "Offshore Platform", label: "Plataformas offshore", desc: "Equipamentos e circuitos em instalações de operação no mar." },
      ],
      listaTitulo: "Aplicações usuais",
      listaTexto:
        "O ponto de instalação e a adequação de cada sistema fazem parte da avaliação técnica.",
      cta: "Avaliar minha aplicação",
      lista: [
        "Trocadores de calor (placa, casco e tubo)",
        "Circuitos de resfriamento",
        "Plantas de dessalinização",
        "Geradores de água doce (FWG)",
        "Caixas de mar",
        "Tanques de lastro",
        "Sistemas de pressurização (hidróforos)",
        "Sistema sanitário a vácuo",
        "Sistema de interligação (crossover)",
        "Linhas de alimentação (bombordo e boreste)",
      ],
    },
    caso: {
      label: "05 — Em Operação",
      h2Html: "Cliente internacional<br>em operação no Brasil",
      contrato: "Contrato Petrobras",
    },
    casos: {
      kicker: "Estudos de caso",
      h2Html: "Resultados documentados<br>por quem opera.",
      lead: "Dois testes de campo, acompanhados antes e depois da instalação do MERUS.",
      caco3: {
        tag: "Incrustação de carbonato de cálcio",
        titulo: "Linha de 4 polegadas após a cabeça de poço",
        texto:
          "O trecho entupia com frequência por depósito de carbonato de cálcio. Depois da instalação do MERUS Ring, a dosagem de inibidores foi reduzida mês a mês, com a pressão da linha estável.",
        fotoAlt: "Tubo de 4 polegadas com depósito de carbonato de cálcio antes do MERUS",
        legenda: "Antes da instalação",
        fatos: [
          { n: "100 → 11", l: "ppm de inibidor de incrustação" },
          { n: "15 → 9", l: "ppm de inibidor de corrosão" },
          { n: "4 meses", l: "de monitoramento em campo" },
        ],
      },
      aguaMar: {
        tag: "Água do mar",
        titulo: "Linha de resfriamento de 16 polegadas em plataforma",
        texto:
          "Três seções da linha foram inspecionadas visualmente em setembro, outubro e dezembro de 2017, com o MERUS Ring instalado.",
        fotoAltSet: "Interior da linha de água do mar em setembro de 2017",
        fotoAltDez: "Interior da linha de água do mar em dezembro de 2017",
        legendaSet: "Setembro de 2017",
        legendaDez: "Dezembro de 2017",
        conclusaoTitulo: "Conclusão do relatório",
        conclusao:
          "O ring não apenas evita a formação de incrustações, mas também remove as já existentes no interior da tubulação ao longo do tempo.",
      },
      mais: "Ver mais estudos de caso da MERUS",
    },
    cl: {
      label: "06 — Histórico em Campo",
      h2Html: "Validado por operadoras<br>que não aceitam promessas.",
      corpo:
        "Mais de 30 anos de instalações documentadas em plataformas offshore, FPSOs, refinarias e plantas industriais.",
      logosAria: "Operadoras que utilizam MERUS",
      nota:
        "Referências disponíveis mediante solicitação sob NDA. Dados de campo e relatórios de inspeção compartilhados durante avaliação técnica.",
    },
    brand: {
      frase: "Energia que transforma o futuro.",
      sub: "Tecnologia MERUS para operações de Oil & Gas mais limpas, eficientes e duradouras.",
      rep: "Representante da MERUS GmbH no Brasil. Uma empresa Gavea Group.",
    },
    ct: {
      label: "07 — Contato",
      h2Html: "Avalie o MERUS<br>na sua operação.",
      corpo:
        "Conte seu desafio com incrustação, corrosão ou biofilme. A equipe da Gavea Green retorna com uma avaliação técnica para o seu sistema.",
      falar: "Fale direto com a equipe",
      emailPara: "Enviar e-mail para",
      ligarPara: "Ligar para",
      mailSubject: "MERUS - Avaliação técnica",
      mercado: "Mercado",
      mercadoTexto: "Oil & Gas, offshore e industrial",
      nome: "Nome *",
      empresa: "Empresa",
      email: "E-mail *",
      tel: "Telefone",
      msg: "Como podemos ajudar?",
      enviar: "Solicitar avaliação técnica",
      nota: "Seus dados são usados apenas para esta avaliação técnica.",
    },
    footer: {
      taglineHtml: "Tratamento físico de fluidos.<br>Fabricado na Alemanha desde 1995.",
      legal: "Gavea Green — Tratamento físico de fluidos para Oil & Gas.",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "MERUS — Physical Fluid Treatment for Oil & Gas",
      description:
        "The MERUS Ring prevents scaling, corrosion and biofouling in industrial and offshore fluid systems. No chemicals, no shutdowns, no process changes. Made in Germany.",
    },
    nav: {
      home: "MERUS — home",
      main: "Main navigation",
      footer: "Footer navigation",
      solucao: "Solution",
      tecnologia: "Technology",
      aplicacoes: "Applications",
      clientes: "Clients",
      cases: "Case Studies",
      cta: "Request Assessment",
      ctaShort: "Contact",
      lang: "Language",
    },
    hero: {
      market: "Oil & Gas Market",
      eyebrow: "Made in Germany — Oil & Gas / Industrial",
      h1: "Keeps your pipes clean.",
      sub: "Scale-free pipes",
      corpo:
        "Installed on the outside of the pipe, the MERUS Ring transmits physical oscillations into the water, helping to reduce deposits, corrosion and biofilm throughout the system.",
      bullets: ["Less maintenance.", "Higher efficiency.", "Longer service life."],
    },
    sol: {
      label: "01 — Solution",
      h2Html: "Less impact,<br>more efficiency.",
      corpo:
        "German technology for water treatment, with high operational efficiency and a lower environmental footprint.",
      bullets: [
        "No chemicals.",
        "No energy consumption.",
        "No recurring maintenance.",
        "ROI within months.",
        "5-year service life.",
      ],
    },
    stats: {
      aria: "MERUS key figures",
      items: ["Countries", "Years in the field", "Chemicals added", "Less scaling"],
      ate: "up to",
    },
    cine: {
      aria: "MERUS Ring installed on industrial piping",
      eyebrow: "External installation",
      frase: "Fitted around the existing pipe, with no cutting, welding or operational shutdown.",
    },
    tec: {
      label: "02 — The Technology",
      h2: "How MERUS works",
      corpo:
        "The MERUS Ring is installed around the pipe and transmits physical oscillations into the water through the pipe wall. These oscillations influence how particles behave in the flow, increasing solubility and preventing deposits from forming.",
      destaqueTitulo: "Fast installation, no downtime",
      destaqueTexto:
        "Installed on existing infrastructure, with no pipe modification, welding or penetration.",
      dataAria: "Field corrosion rate comparison",
      modelosTitulo: "Two models, one principle",
      modelos: [
        {
          nome: "MERUS Ring",
          tag: "External installation",
          desc: "A ring made of aluminium treated in a special process that allows it to emit active oscillations. It is fitted around the pipe, at points such as heat exchangers, chillers, compressors and fire fighting lines.",
          alt: "MERUS Ring installed on industrial piping",
        },
        {
          nome: "MERUS Chain",
          tag: "Submerged installation",
          desc: "Hinged modules fastened around the pipe, for submerged points such as seawater intakes, risers and submersible pumps.",
          alt: "MERUS Chain installed on a seawater intake pipe",
        },
      ],
      com: "With MERUS",
      sem: "Without MERUS",
      trocador: "Heat exchanger",
      deltaHtml: "<strong>64% less</strong> corrosion in the treated exchanger",
      mpyHtml:
        "<strong>MPY</strong> — Mils per year: used to express the corrosion rate of a pipe, piping system or other metal surfaces.",
      nota:
        "Side-by-side comparison: exchangers 101-E9A (with MERUS) and 101-E9B (without), on the same platform, with the same fluid and over the same 3-month field monitoring period. The measured difference is attributable to the treatment. Results reflect the conditions of the monitored installation.",
    },
    video: {
      kicker: "MERUS in action",
      h2: "See MERUS at work.",
      lead: "From the problem inside the pipe to the result measured in the field, in just over a minute.",
      phTitulo: "Video coming soon",
      phTexto: "Reserved for the MERUS video",
      iframeTitle: "MERUS video",
    },
    res: {
      label: "03 — Before and After",
      h2Html: "Less scaling.<br>Better flow efficiency.",
      corpo:
        "MERUS helps keep internal surfaces cleaner, preventing build-up and improving operational stability.",
      antes: "Before",
      depois: "After",
      comparar: "Compare before and after",
      cards: [
        {
          nome: "heat exchanger",
          altDepois: "Heat exchanger after MERUS: cleaner surface",
          altAntes: "Heat exchanger before MERUS: accumulated deposits",
          capAntes: "Accumulated deposits and reduced internal passage.",
          capDepois: "Cleaner surface and better flow conditions.",
        },
        {
          nome: "corrosion and biofilm",
          altDepois: "Piping after MERUS: less build-up and corrosion",
          altAntes: "Piping before MERUS: corrosion and biofilm",
          capAntes: "Visible corrosion and biofilm formation in the system.",
          capDepois: "Less build-up, better stability and reduced maintenance.",
        },
        {
          nome: "steam boiler",
          altDepois: "Boiler after MERUS: treated surface",
          altAntes: "Boiler before MERUS: scaling on the surface",
          capAntes: "Scaling and loss of thermal efficiency.",
          capDepois: "Treated surface and better operating performance.",
        },
      ],
      micro:
        "Results may vary depending on fluid, material, system history and operating conditions.",
    },
    verde: {
      aria: "MERUS highlight",
      fraseHtml:
        "More than treating water, MERUS <strong>preserves system efficiency</strong> over time, with no chemicals, no shutdowns and no process changes.",
    },
    aplic: {
      kicker: "Where MERUS can be applied",
      h2Html: "Your asset.<br>Your systems.",
      lead:
        "Vessels, FPSOs and offshore platforms share the same fluid circulation challenges. Application starts with identifying the circuit.",
      assets: [
        { nome: "Vessel", label: "Marine vessels", desc: "Onboard fluid circuits, from water generation to cooling." },
        { nome: "FPSO", label: "Floating units", desc: "Utility systems and offshore processing infrastructure." },
        { nome: "Offshore Platform", label: "Offshore platforms", desc: "Equipment and circuits on offshore operating facilities." },
      ],
      listaTitulo: "Typical applications",
      listaTexto:
        "The installation point and the suitability of each system are part of the technical assessment.",
      cta: "Assess my application",
      lista: [
        "Heat exchangers (plate, shell and tube)",
        "Cooling circuits",
        "Desalination plants",
        "Fresh water generators (FWG)",
        "Sea chests",
        "Ballast tanks",
        "Pressurization systems (hydrophores)",
        "Vacuum sanitary system",
        "Crossover system",
        "Supply lines (port and starboard)",
      ],
    },
    caso: {
      label: "05 — In Operation",
      h2Html: "International client<br>operating in Brazil",
      contrato: "Petrobras contract",
    },
    casos: {
      kicker: "Case studies",
      h2Html: "Results documented<br>by the operators.",
      lead: "Two field tests, followed before and after the MERUS installation.",
      caco3: {
        tag: "Calcium carbonate scaling",
        titulo: "4-inch line downstream of the wellhead",
        texto:
          "The spool fouled frequently due to calcium carbonate deposits. After the MERUS Ring was installed, inhibitor dosing was reduced month by month while flow line pressure remained stable.",
        fotoAlt: "4-inch pipe with calcium carbonate deposit before MERUS",
        legenda: "Before installation",
        fatos: [
          { n: "100 → 11", l: "ppm of scale inhibitor" },
          { n: "15 → 9", l: "ppm of corrosion inhibitor" },
          { n: "4 months", l: "of field monitoring" },
        ],
      },
      aguaMar: {
        tag: "Seawater",
        titulo: "16-inch cooling line on a rig",
        texto:
          "Three sections of the line were visually inspected in September, October and December 2017, with the MERUS Ring installed.",
        fotoAltSet: "Inside the seawater line in September 2017",
        fotoAltDez: "Inside the seawater line in December 2017",
        legendaSet: "September 2017",
        legendaDez: "December 2017",
        conclusaoTitulo: "Report conclusion",
        conclusao:
          "The ring not only prevents incrustation from forming, it also removes existing incrustation from the pipe internals over time.",
      },
      mais: "See more MERUS case studies",
    },
    cl: {
      label: "06 — Field Track Record",
      h2Html: "Validated by operators<br>who don't settle for promises.",
      corpo:
        "Over 30 years of documented installations on offshore platforms, FPSOs, refineries and industrial plants.",
      logosAria: "Operators using MERUS",
      nota:
        "References available on request under NDA. Field data and inspection reports are shared during the technical assessment.",
    },
    brand: {
      frase: "Energy that transforms the future.",
      sub: "MERUS technology for cleaner, more efficient and longer-lasting Oil & Gas operations.",
      rep: "Representative of MERUS GmbH in Brazil. A Gavea Group company.",
    },
    ct: {
      label: "07 — Contact",
      h2Html: "Assess MERUS<br>in your operation.",
      corpo:
        "Tell us about your scaling, corrosion or biofilm challenge. The Gavea Green team will get back to you with a technical assessment for your system.",
      falar: "Talk directly to the team",
      emailPara: "Send an e-mail to",
      ligarPara: "Call",
      mailSubject: "MERUS - Technical assessment",
      mercado: "Market",
      mercadoTexto: "Oil & Gas, offshore and industrial",
      nome: "Name *",
      empresa: "Company",
      email: "E-mail *",
      tel: "Phone",
      msg: "How can we help?",
      enviar: "Request technical assessment",
      nota: "Your data is used solely for this technical assessment.",
    },
    footer: {
      taglineHtml: "Physical fluid treatment.<br>Made in Germany since 1995.",
      legal: "Gavea Green — Physical fluid treatment for Oil & Gas.",
    },
  },
} as const;
