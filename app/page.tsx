import type { Metadata } from "next";
import CommandLauncher from "./CommandLauncher";
import ContactForm from "./ContactForm";
import DevOpsWorkbench from "./DevOpsWorkbench";
import InteractiveTerminal from "./InteractiveTerminal";
import ModeControls from "./ModeControls";

export const metadata: Metadata = {
  title: "Eswar Krishnamoorthy | Cloud & DevOps Engineer",
  description:
    "Explore Eswar Krishnamoorthy's DevOps experience through an interactive Linux and Kubernetes command terminal.",
};

export const dynamic = "force-static";

const assetBasePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

const skillTracks = [
  {
    level: "Production",
    tone: "verified",
    description: "Professional experience across non-public staging, UAT and production operations.",
    items: [
      ["Kubernetes / AKS", "Administering workloads and troubleshooting across multiple environments."],
      ["Azure DevOps", "Building and maintaining multi-stage CI/CD and release pipelines."],
      ["Linux & Docker", "Deployment, configuration and day-to-day operational support."],
      ["Hybrid infrastructure", "Managing SaaS plus on-premises environments."],
    ],
  },
  {
    level: "Hands-on",
    tone: "active",
    description: "Implemented in professional work, delivery projects or operational support.",
    items: [
      ["AWS · OCI · OKD", "Cloud workloads, platform administration and multi-cloud delivery."],
      ["Migration & DR", "Azure account migration checks, recovery readiness and validation."],
      ["Observability", "Grafana, Prometheus, Mimir, Loki and Azure Monitor workflows."],
      ["Security tooling", "HashiCorp Vault, Key Vault, SonarQube, Trivy and OWASP."],
      ["AI & automation", "Python, REST APIs, MCP access patterns and AI-assisted troubleshooting."],
    ],
  },
  {
    level: "Learning lab",
    tone: "learning",
    description: "Actively strengthening through labs, documentation and applied practice.",
    items: [
      ["Terraform & Ansible", "Expanding infrastructure-as-code and configuration automation depth."],
      ["Platform engineering", "Developing reusable, secure self-service delivery patterns."],
      ["AI agents", "Exploring Claude, Cursor and Devin-style workflows with controlled access."],
    ],
  },
];

const experience = [
  {
    period: "Sep 2025 — Present",
    role: "DevOps Engineer",
    company: "Swiffylabs",
    summary:
      "Support hybrid infrastructure spanning SaaS, Kubernetes and on-premises operations.",
    points: [
      "Manage SaaS environments across staging, UAT and production.",
      "Manage on-premises infrastructure across multiple UAT and production environments.",
      "Support Kubernetes platforms, cloud operations, migration, DR, CI/CD and observability.",
    ],
    current: true,
  },
  {
    period: "Dec 2024 — Aug 2025",
    role: "Cloud and DevOps Engineer",
    company: "Cygnoz",
    summary:
      "Delivered microservices and cloud infrastructure across AWS, Azure and Hostinger.",
    points: [
      "Built GitHub, Jenkins and Docker delivery pipelines for multi-stage environments.",
      "Worked with EC2, ECS, ECR, load balancers, security scanning and production delivery.",
    ],
  },
  {
    period: "Aug 2024 — Nov 2024",
    role: "Cloud and DevOps Intern",
    company: "Cygnoz",
    summary: "Started in cloud delivery and progressed into an engineer role.",
    points: [
      "Deployed services with GitHub Actions, Docker and API gateways.",
      "Supported cloud access, Entra ID, AWS WorkSpaces and cost activities.",
    ],
  },
  {
    period: "Oct 2023 — Jun 2024",
    role: "Cloud and DevOps Intern",
    company: "Jio Platforms",
    summary: "Supported enterprise Azure DevOps operations and engineering request flows.",
    points: [
      "Tracked failed builds, service requests and operational reporting.",
      "Prepared Grafana reports and supported Scrum request tracking.",
    ],
  },
];

const caseStudies = [
  {
    index: "01",
    status: "production",
    title: "Hybrid infrastructure operations",
    impact: "UAT + production operations",
    copy:
      "End-to-end setup, deployments, monitoring and operational support across Kubernetes, cloud and on-premises systems.",
    stack: ["AKS", "OKD", "Azure", "OCI", "On-prem"],
    detail: { problem: "Teams need isolated, repeatable UAT and production operations across different infrastructure models.", role: "Environment setup, deployments, platform checks, monitoring and operational support.", approach: "Applied reusable operational patterns for naming, release checks, access controls and post-deployment validation.", troubleshooting: "Checked workload state, events, routes, services, DNS and dependencies in a fixed diagnosis order.", outcome: "A repeatable operating approach across on-premises and cloud-hosted environments.", command: "kubectl get pods,svc,ingress -n <namespace>" },
  },
  {
    index: "02",
    status: "delivery",
    title: "SaaS release operations",
    impact: "Staging → UAT → production",
    copy:
      "Structured multi-environment releases with controlled promotion, configuration checks and post-deployment validation.",
    stack: ["Azure Pipelines", "YAML", "Python", "Docker"],
    detail: { problem: "The same application needed predictable promotion through staging, UAT and production.", role: "Pipeline operation, configuration validation, deployment support and release verification.", approach: "Used versioned artifacts, environment-specific configuration, approval boundaries and repeatable health checks.", troubleshooting: "Compared image tags, variables, secrets, deployment events and application health before rollback or retry.", outcome: "Clearer release flow with fewer configuration surprises between environments.", command: "kubectl rollout status deployment/<name> -n <namespace>" },
  },
  {
    index: "03",
    status: "resilience",
    title: "Azure migration & DR",
    impact: "Validate · migrate · recover",
    copy:
      "Supported account migration, access validation, infrastructure checks, recovery readiness and deployment validation.",
    stack: ["Azure", "Networking", "DR", "Key Vault"],
    detail: { problem: "Infrastructure and access had to remain dependable through account migration and recovery exercises.", role: "Inventory checks, identity and network validation, deployment verification and DR support.", approach: "Mapped dependencies, tested access paths, validated protected configuration and documented recovery checks.", troubleshooting: "Separated identity, DNS, routing, firewall, secret and application failures instead of changing multiple layers at once.", outcome: "Improved migration confidence and a repeatable recovery-validation checklist.", command: "az resource list --query '[].{name:name,type:type}'" },
  },
  {
    index: "04",
    status: "observability",
    title: "Observe and secure",
    impact: "Metrics · logs · secrets",
    copy:
      "Operational visibility and secure secrets workflows across applications, clusters and delivery pipelines.",
    stack: ["Grafana", "Prometheus", "Mimir", "Loki", "Vault"],
    detail: { problem: "Teams needed faster evidence when applications, clusters or dependencies became unhealthy.", role: "Dashboard, log and metric investigation plus secrets-platform operational support.", approach: "Correlated service health, Kubernetes events, logs and metrics while keeping credentials out of code and output.", troubleshooting: "Moved from symptom to component to dependency, then confirmed the same timeline across logs and metrics.", outcome: "Faster, evidence-based diagnosis and safer handling of operational secrets.", command: "kubectl logs -n <ns> deploy/<name> --since=15m" },
  },
  {
    index: "05",
    status: "automation",
    title: "AI-assisted DevOps",
    impact: "Investigate · automate · document",
    copy:
      "Python and API-based automation paired with AI-assisted troubleshooting and MCP access patterns.",
    stack: ["Python", "REST API", "MCP", "ChatGPT", "Claude"],
    detail: { problem: "Repeated checks across delivery and observability tools consumed time and encouraged manual mistakes.", role: "Built controlled scripts and explored AI-assisted read workflows for faster investigation.", approach: "Used least-privilege service connections, REST APIs, Python validation and human review before any operational change.", troubleshooting: "Logged request status, handled API errors and kept secrets out of prompts, source and generated documentation.", outcome: "Quicker information gathering while retaining review and access-control boundaries.", command: "python validate_release.py --environment demo --dry-run" },
  },
  {
    index: "06",
    status: "cloud",
    title: "AWS microservices delivery",
    impact: "Build · scan · deploy",
    copy:
      "Multi-stage microservice delivery with cloud compute, containers, load balancing and security tooling.",
    stack: ["EC2", "ECS", "ECR", "Jenkins", "Trivy"],
    detail: { problem: "Microservices needed repeatable build, security scanning and cloud deployment across environments.", role: "Container build pipelines, registry flow, cloud deployment and validation support.", approach: "Built immutable images, scanned artifacts, promoted known versions and checked load-balanced service health.", troubleshooting: "Verified build logs, image architecture, registry tags, task state, security groups and health checks.", outcome: "A traceable build-to-deploy path for containerized services.", command: "docker build --platform linux/amd64 -t service:<tag> ." },
  },
];

const certifications = [
  {
    key: "cka",
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF / Linux Foundation",
    earned: "March 1, 2026",
    state: "verified",
  },
  {
    key: "az-900",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    earned: "AZ-900",
    state: "complete",
  },
  {
    key: "aws-educate",
    name: "Cloud Operations & Networking",
    issuer: "AWS Educate",
    earned: "Training badges",
    state: "complete",
  },
];

const learningModules = [
  {
    number: "01",
    title: "Meet the engineer",
    copy: "Begin like a Linux user: identify the account, inspect the directory and read the profile files.",
    commands: ["whoami", "pwd", "ls", "cat about.md"],
  },
  {
    number: "02",
    title: "Inspect DevOps evidence",
    copy: "Use Kubernetes-style discovery to inspect skills, experience, certifications and delivered systems.",
    commands: ["kubectl get profile", "kubectl get skills", "kubectl get projects", "kubectl get certs"],
  },
  {
    number: "03",
    title: "Learn Linux operations",
    copy: "Understand navigation, containers, services and logs—the daily foundation of DevOps troubleshooting.",
    commands: ["linux basics", "docker ps", "systemctl status portfolio", "journalctl -u portfolio"],
  },
  {
    number: "04",
    title: "Learn Kubernetes flow",
    copy: "Follow a request from ingress to service to pod, then inspect workloads, contexts and application logs.",
    commands: ["kubernetes basics", "kubectl get pods", "kubectl get ingress", "kubectl logs profile-api"],
  },
];

const engineeringStack = [
  { category: "Cloud", level: "Production", tools: ["Azure", "AWS", "OCI"] },
  { category: "Containers", level: "Production", tools: ["Docker", "Podman"] },
  { category: "Orchestration", level: "Production", tools: ["Kubernetes", "AKS", "OpenShift / OKD", "Minikube"] },
  { category: "CI/CD", level: "Production", tools: ["Azure DevOps", "GitHub Actions", "GitLab CI/CD", "Jenkins"] },
  { category: "Infrastructure", level: "Hands-on", tools: ["Helm", "Terraform", "Ansible", "YAML", "Bash"] },
  { category: "Registries", level: "Hands-on", tools: ["Azure Container Registry", "Harbor", "ECR"] },
  { category: "Databases", level: "Hands-on", tools: ["PostgreSQL", "ClickHouse", "MongoDB"] },
  { category: "Messaging & CDC", level: "Learning", tools: ["Kafka", "Kafka Connect", "Strimzi", "Debezium"] },
  { category: "Observability", level: "Production", tools: ["Grafana", "Prometheus", "Mimir", "Loki", "Tempo", "OpenTelemetry"] },
  { category: "Security", level: "Hands-on", tools: ["HashiCorp Vault", "Key Vault", "Kubernetes Secrets", "Certificates / TLS"] },
  { category: "Operations", level: "Production", tools: ["Linux", "Git", "curl", "grpcurl", "psql", "kubectl", "oc"] },
  { category: "AI for DevOps", level: "Exploring", tools: ["Python", "REST APIs", "MCP", "ChatGPT", "Claude", "Cursor"] },
];

const devOpsJourney = [
  ["01", "Linux", "foundation"], ["02", "Git", "foundation"], ["03", "Docker", "production"],
  ["04", "Kubernetes", "production"], ["05", "CI/CD", "production"], ["06", "Cloud", "production"],
  ["07", "Observability", "hands-on"], ["08", "Infrastructure as Code", "learning"], ["09", "Platform Engineering", "roadmap"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eswar Krishnamoorthy",
  jobTitle: "DevOps Engineer",
  url: "https://eswarr15.github.io/portfolio/",
  sameAs: [
    "https://www.linkedin.com/in/eswarcloudanddevops/",
    "https://github.com/eswarr15",
  ],
  knowsAbout: [
    "Kubernetes",
    "Microsoft Azure",
    "Azure DevOps",
    "Linux",
    "Docker",
    "CI/CD",
    "Cloud infrastructure",
  ],
};

export default function Home() {
  return (
    <main className="site-shell" id="main-content">
      <a className="skip-link" href="#experience">Skip to professional experience</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Eswar portfolio home">
          <span className="prompt-mark">&gt;_</span>
          <span>eswar@devops</span>
        </a>
        <div className="nav-links">
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#workbench">workbench</a>
          <a href="#contact">contact</a>
        </div>
        <span className="system-state"><i /> systems ready</span>
      </nav>

      <aside className="public-safety-notice section-wrap" aria-label="Public portfolio disclosure">
        <strong>Independent public portfolio</strong>
        <span>
          Not affiliated with or endorsed by any employer or client. All diagrams, commands,
          environments, outputs and case studies are fictional or deliberately generalized.
          No client identifiers, production topology, proprietary documents or credentials are shown.
        </span>
      </aside>

      <ModeControls />

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>⎈</span> CKA · DEVOPS · CLOUD INFRASTRUCTURE</div>
          <h1>
            Explore my DevOps work<br />
            <span>through Linux &amp; Kubernetes.</span>
          </h1>
          <p className="intro">
            I’m <strong>Eswar Krishnamoorthy</strong>, a DevOps Engineer. This portfolio works
            like a safe terminal: run commands, inspect my real experience and learn the
            Linux and Kubernetes flow while you explore.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View my work</a>
            <a className="button secondary" href="#workbench">Explore DevOps labs</a>
            <a className="button secondary" href={`${assetBasePath}/Eswar_Krishnamoorthy_DevOps_Resume.pdf`} download>
              View résumé
            </a>
            <a className="icon-button" href="https://github.com/eswarr15" target="_blank" rel="noreferrer" aria-label="Open Eswar's GitHub profile">GH</a>
            <a className="icon-button" href="https://www.linkedin.com/in/eswarcloudanddevops/" target="_blank" rel="noreferrer" aria-label="Open Eswar's LinkedIn profile">in</a>
          </div>
          <div className="impact-strip" aria-label="Professional impact">
            <div><strong>Hybrid</strong><span>cloud + on-prem</span></div>
            <div><strong>3</strong><span>SaaS stages</span></div>
            <div><strong>2+</strong><span>years hands-on</span></div>
            <div><strong>CKA</strong><span>earned 2026</span></div>
          </div>
        </div>

        <div className="terminal-wrap" id="terminal" aria-label="Interactive Linux and Kubernetes portfolio terminal">
          <div className="playground-label"><span className="live-dot" /><strong>DevOps Playground</strong><small>Safe interactive simulation · no production connection</small></div>
          <div className="cluster-orbit" aria-hidden="true">
            <span className="node node-one">pod</span>
            <span className="node node-two">svc</span>
            <span className="node node-three">ops</span>
          </div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>eswar — bash — 120×34</span>
              <span className="terminal-kube">⎈ demo-cluster</span>
            </div>
            <InteractiveTerminal />
          </div>
        </div>
      </section>

      <section className="tour-section section-wrap engineer-surface" id="tour">
        <div className="section-heading split-heading">
          <div>
            <span>00 / man eswar-portfolio</span>
            <h2>Learn the profile like a real system.</h2>
          </div>
          <p>
            No command-line knowledge is required. This is a safe portfolio simulator:
            it only reads prepared profile and learning content and cannot access your device.
          </p>
        </div>

        <div className="how-to-run" aria-label="How to use the command terminal">
          <div><b>1</b><strong>Open the terminal</strong><span>Scroll to the black terminal above and click the command box.</span></div>
          <div><b>2</b><strong>Type a command</strong><span>Start with <code>help</code> or click one of the suggested command chips.</span></div>
          <div><b>3</b><strong>Press Enter</strong><span>Read the output, then continue through the guided command path.</span></div>
        </div>

        <div className="learning-grid">
          {learningModules.map((module) => (
            <article className="learning-card" key={module.number}>
              <div className="learning-card-head">
                <span>{module.number}</span>
                <code>interactive lesson</code>
              </div>
              <h3>{module.title}</h3>
              <p>{module.copy}</p>
              <div className="command-stack">
                {module.commands.map((command) => <CommandLauncher key={command} command={command} />)}
              </div>
              <a href="#terminal">Open terminal ↑</a>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section section-wrap" id="stack">
        <div className="section-heading split-heading">
          <div>
            <span>01 / engineering-stack.json</span>
            <h2>A stack mapped to real usage.</h2>
          </div>
          <p>Tools are grouped by capability and labelled by experience—never reduced to fake percentage scores.</p>
        </div>
        <div className="stack-explorer">
          {engineeringStack.map((group) => (
            <article key={group.category}>
              <div className="stack-head"><h3>{group.category}</h3><span className={`level-${group.level.toLowerCase().replace("-", "")}`}>{group.level}</span></div>
              <div>{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="workbench-section section-wrap engineer-surface" id="workbench">
        <div className="section-heading split-heading">
          <div>
            <span>02 / devops-workbench</span>
            <h2>Practice the way production is operated.</h2>
          </div>
          <p>Explore safe simulations, searchable commands, diagnosis flows, architecture components and concise engineering notes.</p>
        </div>
        <DevOpsWorkbench />
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-heading split-heading">
          <div>
            <span>01 / skill-evidence.yaml</span>
            <h2>Evidence, not logo collecting.</h2>
          </div>
          <p>
            Every skill is grouped by real usage. Production means professional environments;
            hands-on means delivered work; learning means active labs and deeper practice.
          </p>
        </div>

        <div className="skill-columns">
          {skillTracks.map((track) => (
            <article className="skill-track" key={track.level}>
              <div className="track-head">
                <span className={`status-dot ${track.tone}`} />
                <div>
                  <h3>{track.level}</h3>
                  <p>{track.description}</p>
                </div>
                <code>{track.tone}</code>
              </div>
              <div className="evidence-list">
                {track.items.map(([skill, evidence]) => (
                  <div className="evidence-item" key={skill}>
                    <strong>{skill}</strong>
                    <span>{evidence}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-wrap recruiter-detail" id="experience">
        <div className="section-heading split-heading">
          <div>
            <span>02 / git log --experience</span>
            <h2>Progress built in real environments.</h2>
          </div>
          <p>
            A path from enterprise DevOps support to supporting hybrid infrastructure,
            release operations and platform reliability.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={`${item.company}-${item.period}`}>
              <div className="timeline-period">
                <span className={item.current ? "pulse-dot" : "timeline-dot"} />
                <time>{item.period}</time>
              </div>
              <div className="timeline-role">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <div className="timeline-detail">
                <strong>{item.summary}</strong>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading split-heading">
          <div>
            <span>03 / ls ./case-studies</span>
            <h2>Systems I’ve helped run and improve.</h2>
          </div>
          <p>
            These are generalized experience summaries—not official employer or client case studies.
            Names, identifiers, topology, metrics and proprietary implementation details are excluded.
          </p>
        </div>

        <div className="project-grid">
          {caseStudies.map((project) => (
            <article className="project-card" key={project.index}>
              <div className="project-top">
                <span>{project.index}</span>
                <code>{project.status}</code>
              </div>
              <h3>{project.title}</h3>
              <strong>{project.impact}</strong>
              <p>{project.copy}</p>
              <div className="stack-list" aria-label="Technology stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <details className="case-detail">
                <summary>Open case study</summary>
                <dl>
                  <div><dt>Problem</dt><dd>{project.detail.problem}</dd></div>
                  <div><dt>My role</dt><dd>{project.detail.role}</dd></div>
                  <div><dt>Implementation</dt><dd>{project.detail.approach}</dd></div>
                  <div><dt>Troubleshooting</dt><dd>{project.detail.troubleshooting}</dd></div>
                  <div><dt>Outcome</dt><dd>{project.detail.outcome}</dd></div>
                  <div><dt>Example command</dt><dd><code>{project.detail.command}</code></dd></div>
                </dl>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section section-wrap engineer-surface" id="architecture">
        <div className="section-heading split-heading">
          <div>
            <span>04 / kubectl describe platform</span>
            <h2>A generic request flow, end to end.</h2>
          </div>
          <p>
            A fictional reference pattern for learning only. It does not reproduce or document
            any employer, client or production architecture.
          </p>
        </div>

        <div className="architecture-board">
          <div className="arch-toolbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>platform-topology.yaml</span>
            <code>healthy</code>
          </div>
          <div className="flow-group">
            <div className="flow-label"><span>01</span> User traffic</div>
            <div className="flow-row">
              <div className="flow-node"><small>EDGE</small><strong>DNS</strong><span>public route</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node"><small>SECURE</small><strong>Gateway + WAF</strong><span>TLS & policy</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node featured"><small>PLATFORM</small><strong>⎈ AKS ingress</strong><span>services & pods</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node"><small>DATA</small><strong>Database</strong><span>private access</span></div>
            </div>
          </div>
          <div className="flow-group">
            <div className="flow-label"><span>02</span> Delivery</div>
            <div className="flow-row compact-flow">
              <div className="flow-node"><small>CODE</small><strong>Git</strong><span>reviewed source</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node"><small>CI/CD</small><strong>Azure Pipelines</strong><span>build & scan</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node"><small>IMAGE</small><strong>Registry</strong><span>versioned artifact</span></div>
              <i className="flow-arrow">→</i>
              <div className="flow-node featured"><small>RELEASE</small><strong>Staging → UAT → Prod</strong><span>validated promotion</span></div>
            </div>
          </div>
          <div className="flow-group">
            <div className="flow-label"><span>03</span> Observe & secure</div>
            <div className="ops-grid">
              <div><span className="ops-icon">⌁</span><strong>Metrics</strong><small>Prometheus · Mimir</small></div>
              <div><span className="ops-icon">≡</span><strong>Logs</strong><small>Loki · Azure Monitor</small></div>
              <div><span className="ops-icon">◫</span><strong>Dashboards</strong><small>Grafana</small></div>
              <div><span className="ops-icon">◇</span><strong>Secrets</strong><small>Vault · Key Vault</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section section-wrap engineer-surface" id="journey">
        <div className="section-heading split-heading">
          <div><span>05 / learning-roadmap.yaml</span><h2>From Linux fundamentals to platform engineering.</h2></div>
          <p>My learning path grows outward from operations: understand the system, automate repeatable work, observe the result and improve the platform.</p>
        </div>
        <div className="journey-path">
          {devOpsJourney.map(([step, name, state], index) => (
            <div className={`journey-step state-${state}`} key={name}>
              <span>{step}</span><strong>{name}</strong><small>{state}</small>{index < devOpsJourney.length - 1 && <i>→</i>}
            </div>
          ))}
        </div>
      </section>

      <section className="certs-section section-wrap recruiter-detail" id="certifications">
        <div className="section-heading split-heading">
          <div>
            <span>05 / cat credentials.json</span>
            <h2>Credentials and continuous learning.</h2>
          </div>
          <p>
            Certification supports the work; hands-on operations, troubleshooting and
            consistent learning turn it into engineering capability.
          </p>
        </div>
        <div className="cert-layout">
          <div className="cert-terminal">
            <div className="terminal-bar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>credentials.json</span>
              <span />
            </div>
            <div className="cert-list">
              {certifications.map((cert) => (
                <article key={cert.key}>
                  <div className="cert-key">{cert.key}</div>
                  <div>
                    <h3>{cert.name}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                  <div className="cert-state">
                    <span>{cert.earned}</span>
                    <code>✓ {cert.state}</code>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="education-card">
            <span>EDUCATION</span>
            <h3>B.E. Computer Science & Engineering</h3>
            <p>E.G.S. Pillay Engineering College · Anna University</p>
            <div>
              <strong>2020 — 2024</strong>
              <strong>CGPA 8.04 / 10</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <span>06 / open connection</span>
            <h2>Let’s ship something reliable.</h2>
            <p>
              Open to DevOps, Cloud and Platform Engineering opportunities where I can
              contribute across Kubernetes, automation, migration, DR and production operations.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:K.Eswar7045@gmail.com"><small>EMAIL</small><strong>K.Eswar7045@gmail.com</strong><span>↗</span></a>
            <a href="https://www.linkedin.com/in/eswarcloudanddevops/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><strong>/in/eswarcloudanddevops</strong><span>↗</span></a>
            <a href="https://github.com/eswarr15" target="_blank" rel="noreferrer"><small>GITHUB</small><strong>@eswarr15</strong><span>↗</span></a>
          </div>
          <div className="download-row">
            <a className="button primary" href={`${assetBasePath}/Eswar_Krishnamoorthy_DevOps_Resume.pdf`} download>Download résumé</a>
            <a className="button secondary" href={`${assetBasePath}/Eswar_Krishnamoorthy_DevOps_Cover_Letter.pdf`} download>Download cover letter</a>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer section-wrap">
        <div><span className="prompt-mark">&gt;_</span> eswar@devops</div>
        <p>Independent portfolio · generalized simulations · no employer or client endorsement.</p>
        <a href="#top">back to top ↑</a>
      </footer>
    </main>
  );
}
