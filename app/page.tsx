import { ArrowUpRight, Github, Linkedin, Mail } from "@/components/icons";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Reveal } from "@/components/reveal";
import { Terminal } from "@/components/terminal";
import { profile, projects, repositories } from "./data";

export default function Home() {
  return (
    <main>
      <div className="crt-overlay" aria-hidden="true" />

      <nav className="nav shell" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <span className="brand-mark">./</span>
          <span>sec.portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contato</a>
        </div>
        <span className="availability">
          <span className="pulse" />
          disponível
        </span>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span>root@portfolio:~$</span> whoami
          </p>
          <h1>
            <span className="hero-name" data-text={profile.name}>
              {profile.name}
            </span>
            <span className="hero-role">{profile.role}</span>
          </h1>
          <div className="hero-actions">
            <a className="button button-primary" href={profile.github}>
              <Github />
              GitHub
              <ArrowUpRight />
            </a>
            <a className="button button-secondary" href={profile.linkedin}>
              <Linkedin />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-console" delay={0.15}>
          <div className="console-bar">
            <div className="console-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>session_01</span>
            <span>SSH</span>
          </div>
          <div className="console-body">
            <p className="console-muted">Last login: now from 127.0.0.1</p>
            <p>
              <span className="console-path">~/focus</span> $ cat current.txt
            </p>
            <p className="console-output">
              Linux hardening
              <br />
              Network security
              <br />
              Web security
            </p>
            <p>
              <span className="console-path">~/status</span> $ ./check
            </p>
            <div className="status-line">
              <span>systems</span>
              <span className="status-ok">operational</span>
            </div>
            <div className="status-line">
              <span>curiosity</span>
              <span className="status-ok">always_on</span>
            </div>
            <p className="console-cursor">
              <span className="console-path">~</span> $ <span className="cursor" />
            </p>
          </div>
        </Reveal>

        <div className="hero-index" aria-hidden="true">
          00 / ACCESS_GRANTED
        </div>
      </header>

      <section className="projects-section shell" id="projects">
        <Reveal className="section-heading">
          <div>
            <p className="section-kicker">01 // CASE FILES</p>
            <h2>Projetos em destaque</h2>
          </div>
          <p>
            Um laboratório real, construído e documentado do fluxo de rede
            aos controles de acesso.
          </p>
        </Reveal>

        <ProjectsCarousel projects={projects} />
      </section>

      <section className="github-section shell" id="github">
        <Reveal className="github-panel">
          <div className="github-intro">
            <p className="section-kicker">02 // OPEN SOURCE</p>
            <h2>Repos selecionados</h2>
            <p>
              Configurações, arquitetura, testes e documentação do laboratório
              publicados para consulta.
            </p>
            <a className="text-link" href={profile.github}>
              Ver perfil completo <ArrowUpRight />
            </a>
          </div>
          <div className="repo-list">
            {repositories.map((repo) => (
              <a className="repo-card" href={repo.url} key={repo.name}>
                <div className="repo-topline">
                  <Github />
                  <span>{repo.label}</span>
                </div>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-meta">
                  <span className="language-dot" />
                  {repo.language}
                  <ArrowUpRight />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="terminal-section shell" id="terminal">
        <Reveal className="section-heading terminal-heading">
          <div>
            <p className="section-kicker">03 // COMMAND LINE</p>
            <h2>Explore pelo terminal</h2>
          </div>
          <p>Digite um comando. Sem pegadinhas.</p>
        </Reveal>
        <Terminal />
      </section>

      <footer className="footer shell" id="contact">
        <Reveal>
          <p className="section-kicker">04 // ESTABLISH CONNECTION</p>
          <h2>Vamos conversar.</h2>
          <p className="footer-copy">
            Aberto a oportunidades, colaboração em projetos e conversas sobre
            segurança.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail />
              {profile.email}
            </a>
            <a href={profile.github}>
              <Github />
              GitHub
            </a>
            <a href={profile.linkedin}>
              <Linkedin />
              LinkedIn
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>Built with intention // no trackers</span>
            <a href="#top">↑ voltar ao topo</a>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
