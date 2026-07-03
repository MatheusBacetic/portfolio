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
  repositoryNewTab?: boolean;
  website?: string;
  featured?: boolean;
  visual: "firewall" | "evoluzione" | "honeypot" | "active-directory" | "ad-monitor" | "cloud-security" | "soc-lab";
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
    title: "Cloud Security Lab AWS",
    slug: "cloud-security-lab-aws",
    category: "Cloud Security / AWS / Monitoring & Compliance",
    description:
      "Laboratório prático de Cloud Security desenvolvido na AWS Academy, com uma instância EC2 Ubuntu executando Nginx e controles de segurança, monitoramento, compliance, auditoria e detecção de ameaças. O ambiente utiliza Security Groups, CloudWatch, SNS, AWS Config, CloudTrail, S3, GuardDuty e Security Hub.",
    problem:
      "Construir visibilidade e controle de segurança sobre uma infraestrutura cloud, reduzindo sua superfície de exposição, monitorando eventos e avaliando sua conformidade. O projeto também exigiu investigar falhas causadas pelas restrições de IAM do AWS Academy e documentar findings e riscos residuais.",
    learning:
      "Arquitetura e segurança na AWS, hardening de EC2, Security Groups, monitoramento com CloudWatch e SNS, compliance com AWS Config, auditoria com CloudTrail, detecção de ameaças com GuardDuty e Security Hub, gestão de riscos e documentação de resposta a incidentes.",
    technologies: [
      "AWS",
      "Cloud Security",
      "EC2",
      "CloudWatch",
      "AWS Config",
      "CloudTrail",
      "GuardDuty",
      "Security Hub",
      "Incident Response",
    ],
    status: "Concluído",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/cloud-cyber",
    repositoryNewTab: true,
    featured: true,
    visual: "cloud-security",
  },
  {
    title: "SOC Home Lab",
    slug: "soc-home-lab",
    category: "Cyber Security / SOC / SIEM / Detection Engineering",
    description:
      "Laboratório SOC isolado construído para praticar coleta centralizada de logs, detecção de ameaças, threat hunting, resposta ativa e investigação de incidentes com Wazuh, Sysmon, Active Directory, Linux e Kali Linux.",
    problem:
      "Entender SIEM apenas pela teoria não demonstra como eventos de diferentes endpoints são coletados, correlacionados, investigados e transformados em alertas acionáveis dentro de uma operação de segurança.",
    learning:
      "Construção de um fluxo SOC completo com Wazuh, Sysmon, regras customizadas, MITRE ATT&CK, investigação em logs brutos, Active Response com nftables e integração de ferramentas próprias ao SIEM.",
    technologies: [
      "Wazuh",
      "SIEM",
      "Sysmon",
      "MITRE ATT&CK",
      "Threat Hunting",
      "Blue Team",
      "Active Directory",
      "Linux",
      "nftables",
      "Python",
      "C",
      "Detection Engineering",
    ],
    status: "Concluído",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/soc-homelab",
    repositoryNewTab: true,
    featured: true,
    visual: "soc-lab",
  },
  {
    title: "AD Security Monitor",
    slug: "ad-security-monitor",
    category: "Blue Team / Detection Engineering / Active Directory",
    description:
      "Monitor defensivo para Active Directory que acompanha o Windows Security Event Log em tempo real, correlaciona sessões por Logon ID e IP de origem e transforma eventos dispersos em alertas e incidentes contextualizados.",
    problem:
      "Eventos isolados do Windows geram muito ruído e oferecem pouco contexto operacional. O monitor reúne autenticação, Kerberos, LDAP, grupos privilegiados e acessos SMB para identificar padrões suspeitos sem depender da análise manual de cada registro.",
    learning:
      "Engenharia de detecção, parsing do Windows Event Log, correlação temporal, Risk Score por usuário, detecção de Kerberoasting e password spraying, rotação de logs e desenho seguro de resposta automática com quarentena em modo dry run.",
    technologies: [
      "Python",
      "PowerShell",
      "Active Directory",
      "Windows Event Log",
      "Kerberos",
      "Detection Engineering",
      "Blue Team",
    ],
    status: "Concluído",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/ad-security-monitor",
    featured: true,
    visual: "ad-monitor",
  },
  {
    title: "Active Directory Security Lab",
    slug: "active-directory-security-lab",
    category: "Windows Security / Identity / Active Directory",
    description:
      "Laboratório corporativo em Windows Server 2022 para estudar a administração e a segurança de identidades. O domínio treino.local conecta usuários, grupos, estações, contas de serviço e compartilhamentos em uma estrutura controlada e auditável.",
    problem:
      "Compreender como autenticação, permissões e políticas se relacionam em um domínio real — e como configurações legítimas podem formar caminhos de ataque quando privilégios, delegações e contas de serviço não são acompanhados de perto.",
    learning:
      "Arquitetura do AD DS, autenticação Kerberos, SPNs, delegação de permissões, GPOs, controle de acesso por grupos, compartilhamentos SMB, políticas de bloqueio, auditoria com Windows Event Logs e análise de relações com BloodHound CE.",
    technologies: [
      "Windows Server 2022",
      "Active Directory",
      "Kerberos",
      "GPO",
      "PowerShell",
      "BloodHound CE",
      "Windows Event Logs",
    ],
    status: "Concluído",
    github:
      "https://github.com/MatheusBacetic/cyber-security/tree/main/active-directory-security-lab",
    featured: true,
    visual: "active-directory",
  },
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
