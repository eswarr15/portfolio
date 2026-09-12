"use client";

import { FormEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

type Line = {
  command?: string;
  output?: string;
  tone?: "normal" | "success" | "info" | "warning";
};

const quickCommands = ["help", "tour", "linux basics", "kubernetes basics"];

const missionSteps = [
  { command: "whoami", label: "Identify the engineer" },
  { command: "ls skills", label: "Inspect production skills" },
  { command: "kubectl get projects", label: "Discover delivered systems" },
  { command: "linux basics", label: "Learn Linux operations" },
  { command: "kubernetes basics", label: "Trace Kubernetes flow" },
];

const responses: Record<string, { output: string; tone?: Line["tone"] }> = {
  help: {
    tone: "info",
    output: `PROFILE COMMANDS
  whoami                    Show Eswar's role
  ls                        List profile folders
  ls skills                 Show core DevOps skills
  cat about.md              Read the short profile
  cat experience.log        View career timeline
  kubectl get profile       Show Kubernetes-style profile
  kubectl get projects      List delivery case studies
  kubectl get certs         Show certifications
  skills                    Show the engineering stack
  projects                  List project case studies
  experience                Show the career timeline
  contact                   Show public contact links

LEARNING COMMANDS
  linux basics              Learn the Linux command flow
  kubernetes basics         Learn the Kubernetes request flow
  kubectl explain pod       Understand a Pod
  terraform plan            Preview safe infrastructure changes
  helm list                 List simulated releases
  vault status              Inspect simulated Vault health
  git status                Inspect this portfolio repository
  tour                      Start the guided profile tour
  clear                     Clear this terminal`,
  },
  whoami: {
    output: "Eswar Krishnamoorthy — CKA-certified DevOps Engineer",
    tone: "success",
  },
  pwd: { output: "/home/eswar/portfolio" },
  ls: {
    output: "about.md   skills/   experience.log   projects/   architecture.yaml   certifications/",
  },
  "ls skills": {
    output: `kubernetes/  linux/  docker/  azure/  aws/  oci/  okd/
azure-devops/  ci-cd/  observability/  vault/  python/  automation/`,
    tone: "success",
  },
  "cat about.md": {
    output:
      "DevOps Engineer with Kubernetes, multi-cloud and hybrid infrastructure experience across staging, UAT and production. Public details are deliberately generalized.",
  },
  "cat experience.log": {
    output: `2025—NOW  Swiffylabs  | DevOps Engineer
2024—2025 Cygnoz      | Cloud and DevOps Engineer
2024      Cygnoz      | Cloud and DevOps Intern
2023—2024 Jio         | Cloud and DevOps Intern`,
  },
  skills: { output: "Run: ls skills\nOr explore the Engineering Stack section below the command tour.", tone: "info" },
  projects: { output: "Run: kubectl get projects\nCase studies include hybrid infrastructure, SaaS releases, migration/DR, observability and CI/CD.", tone: "info" },
  experience: { output: "Run: cat experience.log", tone: "info" },
  contact: { output: "Email: K.Eswar7045@gmail.com\nLinkedIn: /in/eswarcloudanddevops\nGitHub: @eswarr15", tone: "success" },
  "kubectl get profile": {
    output: `NAME    ROLE              CERT   EXPERIENCE   STATUS
eswar   DevOps Engineer   CKA    2+ years     Ready`,
    tone: "success",
  },
  "kubectl describe profile eswar": {
    output: `Name:           Eswar Krishnamoorthy
Role:           DevOps Engineer
Certification:  CKA
Cloud:          Azure, AWS, OCI
Platforms:      Kubernetes, AKS, OKD
Environments:   Staging, UAT, Production
Operations:     SaaS and on-premises infrastructure
Focus:          Reliability, automation, observability and learning`,
    tone: "success",
  },
  "kubectl get skills": {
    output: `SKILL                    LEVEL
Kubernetes / AKS         Production
Azure DevOps / CI-CD     Production
Linux / Docker           Production
Hybrid infrastructure   Production
AWS / OCI / OKD          Hands-on
Observability / Vault    Hands-on
Terraform / Ansible      Learning lab`,
  },
  "kubectl get experience": {
    output: `2025—NOW  Swiffylabs  | DevOps Engineer
2024—2025 Cygnoz      | Cloud and DevOps Engineer
2024      Cygnoz      | Cloud and DevOps Intern
2023—2024 Jio         | Cloud and DevOps Intern`,
  },
  "kubectl get projects": {
    output: `NAME                    ENVIRONMENTS          STATUS
hybrid-infra-demo       UAT, Production       Simulated
saas-release-ops        Staging, UAT, Prod    Running
azure-migration-dr      Recovery validation   Complete
observe-and-secure      Metrics, Logs, Vault  Running`,
  },
  "kubectl get certs": {
    output: `NAME                                     ISSUER                   STATUS
Certified Kubernetes Administrator       CNCF / Linux Foundation  Verified
Microsoft Azure Fundamentals             Microsoft                Complete
Cloud Operations & Networking            AWS Educate              Complete`,
  },
  "kubectl get pods": {
    output: `NAME                         READY   STATUS    RESTARTS
profile-api-7d9c8           1/1     Running   0
skills-service-58b2         1/1     Running   0
continuous-learning-cka     1/1     Running   0`,
    tone: "success",
  },
  "kubectl get svc": {
    output: `NAME             TYPE           PORT(S)        PURPOSE
profile-service  ClusterIP      80/TCP         Internal access
ingress-nginx    LoadBalancer   80,443/TCP     External traffic`,
  },
  "kubectl get ingress": {
    output: `NAME               HOSTS                 SERVICE
portfolio-ingress  portfolio.example.test  profile-service:80

Flow: DNS → Load Balancer → Ingress → Service → Pod`,
    tone: "info",
  },
  "kubectl logs profile-api": {
    output: `[INFO] profile-api started
[INFO] readiness probe passed
[INFO] skills and project records loaded
[INFO] request completed: 200 OK`,
    tone: "success",
  },
  "kubectl config get-contexts": {
    output: `CURRENT   NAME       CLUSTER    NAMESPACE
*         demo-prod  demo-cluster  portfolio
          demo-uat   demo-cluster  portfolio-uat

Learning note: always confirm the context before running a cluster command.`,
    tone: "info",
  },
  "docker ps": {
    output: `CONTAINER ID   IMAGE                 STATUS
e5war2026      eswar/profile:cka     Up — healthy

Docker runs containers; Kubernetes schedules and manages them across a cluster.`,
  },
  "systemctl status portfolio": {
    output: `● portfolio.service — Eswar DevOps Portfolio
   Loaded: loaded
   Active: active (running)
   Health: observable and continuously learning`,
    tone: "success",
  },
  "journalctl -u portfolio": {
    output: `Jun 29 09:00 deployment validation passed
Jun 29 09:01 observability checks healthy
Jun 29 09:02 release promoted to production`,
  },
  "terraform plan": {
    output: `Terraform will perform the following actions:
  + create azurerm_monitor_diagnostic_setting.platform
  ~ update azurerm_kubernetes_cluster.aks tags

Plan: 1 to add, 1 to change, 0 to destroy.
Simulation only — no cloud resources are connected.`,
    tone: "info",
  },
  "helm list": {
    output: `NAME             NAMESPACE      REVISION  STATUS
profile-api      portfolio      12        deployed
observability    observability  8         deployed
vault            security       5         deployed`,
    tone: "success",
  },
  "vault status": {
    output: `Initialized    true
Sealed         false
Storage Type   raft
HA Enabled     true

Simulation only — no tokens, keys or production Vault are accessible.`,
    tone: "success",
  },
  "git status": {
    output: `On branch main
Your branch is up to date.
nothing to commit, working tree clean

Portfolio status: ready for review`,
    tone: "success",
  },
  "kubectl explain pod": {
    output:
      "A Pod is Kubernetes' smallest deployable unit. It contains one or more containers that share network and storage. In a real flow: Deployment → ReplicaSet → Pod → Container.",
    tone: "info",
  },
  "linux basics": {
    output: `1. pwd         — show your current directory
2. ls -la      — list files, including hidden files
3. cd <folder> — move into a directory
4. cat <file>  — read a text file
5. grep <text> — search inside output
6. ps / top    — inspect running processes
7. systemctl   — manage Linux services
8. journalctl  — inspect service logs`,
    tone: "info",
  },
  "kubernetes basics": {
    output: `REQUEST FLOW
User → DNS → Load Balancer → Ingress → Service → Pod

OPERATIONS FLOW
kubectl → API Server → Scheduler/Controllers → Kubelet → Container

Start with: kubectl get pods
Then try:  kubectl explain pod`,
    tone: "info",
  },
  tour: {
    output: `TOUR STARTED
Step 1: whoami
Step 2: ls skills
Step 3: kubectl describe profile eswar
Step 4: kubectl get projects
Step 5: linux basics
Step 6: kubernetes basics
Step 7: kubectl get ingress

Tip: You can also click any command chip above the prompt.`,
    tone: "success",
  },
};

const initialLines: Line[] = [
  { output: "Welcome to EswarOS — interactive DevOps portfolio", tone: "success" },
  { output: "Type help or click a suggested command to begin." },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [completed, setCompleted] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCommands = useMemo(
    () => [...Object.keys(responses), "clear", "history", "mission"].sort(),
    [],
  );

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const run = useCallback((raw: string) => {
    const command = raw.trim().toLowerCase().replace(/\s+/g, " ");
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      setValue("");
      return;
    }

    if (command === "history") {
      const output = history.length
        ? history.map((item, index) => `${index + 1}  ${item}`).join("\n")
        : "No commands in history yet.";
      setLines((current) => [...current, { command: raw.trim() }, { output }]);
      setValue("");
      return;
    }

    if (command === "mission") {
      const output = missionSteps
        .map((step, index) => `${completed.includes(step.command) ? "✓" : "○"} ${index + 1}. ${step.label} — ${step.command}`)
        .join("\n");
      setLines((current) => [...current, { command: raw.trim() }, { output, tone: "info" }]);
      setValue("");
      return;
    }

    const result = responses[command] ?? {
      output: `command not found: ${raw.trim()}\nType help to see supported commands.`,
      tone: "warning" as const,
    };
    setLines((current) => [...current, { command: raw.trim() }, result]);
    setHistory((current) => [...current, raw.trim()]);
    setHistoryIndex(-1);
    if (missionSteps.some((step) => step.command === command)) {
      setCompleted((current) => current.includes(command) ? current : [...current, command]);
    }
    setValue("");
    inputRef.current?.focus();
  }, [completed, history]);

  useEffect(() => {
    function receiveCommand(event: Event) {
      const command = (event as CustomEvent<{ command?: string }>).detail?.command;
      if (command) run(command);
    }
    window.addEventListener("portfolio-command", receiveCommand);
    return () => window.removeEventListener("portfolio-command", receiveCommand);
  }, [run]);

  function submit(event: FormEvent) {
    event.preventDefault();
    run(value);
  }

  function handleKeys(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Tab") {
      const match = allCommands.find((command) => command.startsWith(value.toLowerCase()));
      if (match) {
        event.preventDefault();
        setValue(match);
      }
      return;
    }

    if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const nextIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIndex);
      setValue(history[history.length - 1 - nextIndex] ?? "");
      return;
    }

    if (event.key === "ArrowDown" && historyIndex >= 0) {
      event.preventDefault();
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setValue(nextIndex < 0 ? "" : history[history.length - 1 - nextIndex] ?? "");
    }
  }

  return (
    <div className="interactive-terminal">
      <div className="mission-status" aria-label={`${completed.length} of ${missionSteps.length} mission steps complete`}>
        <div>
          <span>DEVOPS MISSION</span>
          <strong>{completed.length}/{missionSteps.length} complete</strong>
        </div>
        <div className="mission-progress" aria-hidden="true">
          <i style={{ width: `${(completed.length / missionSteps.length) * 100}%` }} />
        </div>
        <code>run: mission</code>
      </div>
      <div className="terminal-suggestions" aria-label="Suggested commands">
        {quickCommands.map((command) => (
          <button type="button" key={command} onClick={() => run(command)}>
            {command}
          </button>
        ))}
      </div>
      <div className="terminal-scroll" ref={scrollRef} aria-live="polite">
        {lines.map((line, index) => (
          <div className={`terminal-entry ${line.tone ?? "normal"}`} key={`${line.command ?? "output"}-${index}`}>
            {line.command && (
              <p><span className="green">eswar@devops</span>:<span className="blue">~</span>$ {line.command}</p>
            )}
            {line.output && <pre className="command-output">{line.output}</pre>}
          </div>
        ))}
      </div>
      <form className="terminal-prompt" onSubmit={submit}>
        <label htmlFor="portfolio-command" className="sr-only">Enter a Linux or Kubernetes portfolio command</label>
        <span><span className="green">eswar@devops</span>:<span className="blue">~</span>$</span>
        <input
          id="portfolio-command"
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeys}
          autoComplete="off"
          spellCheck={false}
          placeholder="help · Tab completes · ↑ shows history"
        />
        <i aria-hidden="true" />
        <button type="submit" className="terminal-run-button" aria-label="Run terminal command">
          Run
        </button>
      </form>
    </div>
  );
}
