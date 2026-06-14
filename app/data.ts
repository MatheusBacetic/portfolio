export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  problem: string;
  learning: string;
  technologies: string[];
  status: "Concluído" | "Em evolução" | "Pesquisa";
  github?: string;
  website?: string;
  featured?: boolean;
  visual: "firewall" | "evoluzione" | "honeypot";
};

export const profile = {
  name: "MATHEUS BACETIC",
  role: "Cybersecurity Portfolio",
  email: "matheusbacetic@gmail.com",
  github: "https://github.com/MatheusBacetic",
  linkedin:
    "https://www.linkedin.com/in/matheus-veiga-bacetic-joaquim-a6552723a/",
  location: "Brasil / UTC−03",
};

export const projects: Project[] = [
  {
    title: "Evoluzione",
    slug: "evoluzione",
    category: "Product Design / Business Platform / Front-End",
    description:
      "Plataforma de gestão empresarial concebida para transformar uma operação fragmentada em um fluxo claro, conectado e controlado. Além da experiência integrada, implementei controles de segurança para autenticação, proteção de dados e redução de riscos comuns em aplicações web.",
    problem:
      "Empresas operam com informações espalhadas, retrabalho, baixa rastreabilidade e decisões dependentes de memória ou planilhas. O projeto organiza esse fluxo em uma central de comando com hierarquia clara e menor esforço operacional.",
    learning:
      "Arquitetura de informação orientada ao fluxo, autenticação e autorização, prevenção de XSS e SQL injection, proteção contra exposição indevida por cache e aplicação de outros controles defensivos no front-end e na camada de dados.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "Authentication",
      "Web Security",
      "UX/UI",
      "Responsive Design",
    ],
    status: "Em evolução",
    website: "https://evoluzione-site.vercel.app/",
    featured: true,
    visual: "evoluzione",
  },
  {
    title: "SSH Honeypot + IDS",
    slug: "honeypot-ids",
    category: "Cyber Security / C / Intrusion Detection",
    description:
      "Honeypot SSH desenvolvido em C para Linux, com captura de conexões, registro de eventos e um mecanismo básico de detecção de intrusão. Ao identificar tentativas recorrentes de acesso, o sistema gera alertas e automatiza o bloqueio do endereço de origem via nftables.",
    problem:
      "Observar tentativas de acesso malicioso em um ambiente controlado e transformar sinais de brute force em uma resposta defensiva automática, conectando monitoramento, análise e contenção.",
    learning:
      "Programação de baixo nível em C, sockets TCP/IP, organização modular, logging de eventos, contagem de tentativas por IP, detecção de brute force e integração entre uma aplicação Linux e regras dinâmicas do nftables.",
    technologies: [
      "C",
      "Linux",
      "Sockets TCP/IP",
      "nftables",
      "GCC",
      "Make",
      "IDS",
    ],
    status: "Concluído",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/honeypot-ids",
    featured: true,
    visual: "honeypot",
  },
  {
    title: "Servidor Nginx com Firewall Stateful",
    slug: "server-nginx-firewall",
    category: "Linux / Network Security / Web Security",
    description:
      "Laboratório de servidor web seguro construído em uma máquina virtual Kali Linux. O Nginx é protegido por um firewall nftables com política default deny, connection tracking e whitelist por IP, permitindo acesso ao serviço apenas para dispositivos autorizados.",
    problem:
      "Reduzir a superfície de ataque de um servidor web e compreender, na prática, como os pacotes atravessam a pilha de rede do Linux, são avaliados pelas chains do firewall e chegam ao Nginx.",
    learning:
      "Administração Linux, fluxo TCP/IP, tables e chains do nftables, hooks, priorities, counters, handles, firewall stateful, logging centralizado, tracing de pacotes e validação de controles de acesso.",
    technologies: [
      "Kali Linux",
      "Nginx",
      "nftables",
      "Conntrack",
      "VirtualBox",
      "TCP/IP",
    ],
    status: "Em evolução",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/serverNginx-firewall",
    featured: true,
    visual: "firewall",
  },
];

export const repositories = [
  {
    name: "honeypot-ids",
    description:
      "Honeypot SSH em C com logging, detecção de brute force e bloqueio automático de IPs via nftables.",
    language: "C",
    label: "Intrusion Detection",
    url: "https://github.com/MatheusBacetic/cyber-security/tree/main/honeypot-ids",
  },
  {
    name: "serverNginx-firewall",
    description:
      "Servidor Nginx protegido por nftables, whitelist, firewall stateful, logging e tracing de pacotes.",
    language: "nftables",
    label: "Network Security",
    url: "https://github.com/MatheusBacetic/cyber-security/tree/main/serverNginx-firewall",
  },
];
