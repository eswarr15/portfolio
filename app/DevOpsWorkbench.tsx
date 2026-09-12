"use client";

import { useMemo, useState } from "react";

type Tab = "labs" | "commands" | "troubleshooting" | "architecture" | "notes";

const commands = [
  { tech: "Kubernetes", command: "kubectl get pods -A", description: "List pods across every namespace.", use: "Start cluster workload triage.", issue: "Wrong context can show the wrong cluster." },
  { tech: "Kubernetes", command: "kubectl describe pod <pod> -n <ns>", description: "Inspect state, probes, mounts and events.", use: "Diagnose Pending or CrashLoopBackOff pods.", issue: "Always include the correct namespace." },
  { tech: "Kubernetes", command: "kubectl logs -f <pod> -n <ns>", description: "Stream application logs from a pod.", use: "Trace startup and runtime failures.", issue: "Use -c when the pod has multiple containers." },
  { tech: "OpenShift", command: "oc get routes -A", description: "List externally exposed OpenShift routes.", use: "Verify hostname-to-service routing.", issue: "TLS termination and target port must match." },
  { tech: "Docker", command: "docker build --platform linux/amd64 -t app:tag .", description: "Build an amd64 container image.", use: "Avoid ARM/AMD architecture mismatch.", issue: "The base image must support the selected platform." },
  { tech: "PostgreSQL", command: "pg_dump -Fc -d appdb -f appdb.dump", description: "Create a compressed custom-format backup.", use: "Portable backup before upgrades or migration.", issue: "Validate permissions and available disk space." },
  { tech: "Networking", command: "curl -vk https://service:443/health", description: "Inspect TLS and HTTP connectivity.", use: "Separate DNS, TLS and application errors.", issue: "-k is diagnostic only; do not normalize insecure TLS." },
  { tech: "Vault", command: "vault status", description: "Check initialization, seal and HA state.", use: "First step in Vault incident triage.", issue: "Never paste tokens or unseal keys into shared terminals." },
  { tech: "Kafka", command: "curl -s http://connect:8083/connectors", description: "List Kafka Connect connectors.", use: "Confirm connector registration and API health.", issue: "A registered connector can still have failed tasks." },
  { tech: "Observability", command: "kubectl logs -n observability deploy/grafana", description: "Read Grafana deployment logs.", use: "Investigate datasource and startup problems.", issue: "Check replicas and select the correct pod when needed." },
];

const issues = [
  { name: "CrashLoopBackOff", symptom: "Pod starts and repeatedly exits.", causes: "Bad config, missing secret, failed dependency or application crash.", commands: "get pods → describe pod → logs --previous → get events", fix: "Correct configuration or dependency, then restart and verify probes.", prevention: "Startup validation, resource limits and meaningful health probes." },
  { name: "Pending pod", symptom: "Pod remains unscheduled.", causes: "Insufficient resources, node selector mismatch, taint or unbound PVC.", commands: "describe pod → get events → get nodes --show-labels → get pvc", fix: "Resolve capacity, scheduling constraints or storage binding.", prevention: "Capacity alerts and tested affinity/taint policies." },
  { name: "ImagePullBackOff", symptom: "Kubelet cannot retrieve the image.", causes: "Wrong tag, registry auth, network or image architecture.", commands: "describe pod → get secret → inspect imagePullSecrets", fix: "Correct image reference or registry credentials and redeploy.", prevention: "Immutable tags, registry checks and deployment validation." },
  { name: "Database timeout", symptom: "Application cannot establish PostgreSQL connection.", causes: "DNS, network policy, firewall, max connections or credentials.", commands: "nslookup → nc -vz host 5432 → psql → pg_stat_activity", fix: "Repair the failing layer; do not rotate credentials blindly.", prevention: "Connection monitoring, pooling and documented network paths." },
  { name: "Vault sealed", symptom: "Secret reads return service unavailable or sealed errors.", causes: "Restart, quorum event or failed auto-unseal integration.", commands: "vault status → inspect pod logs → check Raft peers", fix: "Follow the approved unseal or auto-unseal recovery procedure.", prevention: "HA design, secure recovery material and tested runbooks." },
  { name: "Kafka connector failed", symptom: "Connector exists but one or more tasks fail.", causes: "Source schema, permissions, offsets, network or payload errors.", commands: "GET /connectors/name/status → task logs → validate source", fix: "Correct the root cause and restart only failed tasks.", prevention: "Task-state alerts, schema controls and replay procedures." },
];

const labs = [
  {
    id: "kubernetes",
    label: "Kubernetes incident",
    brief: "A demo-api pod is in CrashLoopBackOff after a simulated release.",
    objective: "Find the failure without changing the cluster.",
    steps: [
      ["kubectl get pods", "demo-api-7f9d  0/1  CrashLoopBackOff  6"],
      ["kubectl describe pod demo-api-7f9d", "Events: Readiness probe failed. SecretRef demo-secret is missing key <required-key>."],
      ["kubectl logs demo-api-7f9d --previous", "FATAL: required demo configuration is not set"],
      ["kubectl get events", "Warning  BackOff  Back-off restarting failed container"],
    ],
    lesson: "The pod events and previous logs agree: deployment configuration is incomplete. Fix the secret mapping, redeploy, then validate readiness.",
  },
  {
    id: "networking",
    label: "Service connectivity",
    brief: "The frontend cannot reach the internal profile API.",
    objective: "Check each layer from name resolution to application health.",
    steps: [
      ["nslookup demo-api", "Name resolves to <service>.<namespace>.svc.cluster.local"],
      ["nc -vz profile-api 8080", "Connection to profile-api 8080 succeeded"],
      ["curl -sS profile-api:8080/health", "HTTP 503 — dependency postgres is unavailable"],
      ["kubectl get endpoints demo-api", "<pod-ip-a>:8080  <pod-ip-b>:8080"],
    ],
    lesson: "DNS, port and endpoints are healthy. The 503 is an application dependency problem, not Kubernetes networking.",
  },
  {
    id: "postgres",
    label: "PostgreSQL operations",
    brief: "Prepare a safe backup and verify application access before migration.",
    objective: "Validate connection, roles and backup without exposing credentials.",
    steps: [
      ["psql -d appdb -c '\\conninfo'", "Connected to appdb using TLS on port 5432."],
      ["psql -d appdb -c '\\du'", "app_readonly, app_writer, backup_operator"],
      ["pg_dump -Fc -d appdb -f appdb.dump", "Backup completed: custom format archive created."],
      ["pg_restore --list appdb.dump", "Archive verified: schema, tables, sequences and data entries found."],
    ],
    lesson: "A backup is useful only when it can be inspected and restored. Validate the archive and rehearse recovery.",
  },
];

const architecture = [
  { id: "edge", label: "DNS + WAF", detail: "Resolves the public hostname, terminates TLS and blocks common web threats before traffic reaches the cluster." },
  { id: "ingress", label: "Ingress", detail: "Applies host/path routing and forwards validated HTTP traffic to the correct Kubernetes Service." },
  { id: "service", label: "Service", detail: "Provides stable discovery and load balancing even while Pods are replaced during releases." },
  { id: "pod", label: "Pod", detail: "Runs the application container with probes, resource controls, configuration and secret references." },
  { id: "data", label: "PostgreSQL", detail: "Lives on a private route; access is restricted, monitored and validated independently from the application." },
  { id: "observe", label: "OTel + Grafana", detail: "Collects metrics, logs and traces so health, latency and failures can be diagnosed across components." },
];

const notes = [
  { topic: "Kubernetes", title: "CrashLoopBackOff: a practical diagnosis order", summary: "Events first, current and previous logs next, then configuration, probes and dependencies." },
  { topic: "Scheduling", title: "nodeSelector vs affinity vs taints", summary: "Selectors require labels, affinity expresses preferences or rules, and taints repel workloads without tolerations." },
  { topic: "PostgreSQL", title: "Permissions without guesswork", summary: "Separate database CONNECT, schema USAGE and object privileges; verify role inheritance explicitly." },
  { topic: "Networking", title: "Debug connectivity layer by layer", summary: "Resolve DNS, test the port, verify TLS, inspect HTTP, then check the destination application." },
  { topic: "Vault", title: "What sealed really means", summary: "A sealed Vault cannot decrypt its data key; recovery must follow the approved unseal or auto-unseal design." },
  { topic: "Containers", title: "amd64 vs arm64 image failures", summary: "Match build platform and runtime nodes, then confirm every base image supports the target architecture." },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }
  return <button type="button" className="copy-button" onClick={copy}>{copied ? "Copied" : "Copy"}</button>;
}

export default function DevOpsWorkbench() {
  const [tab, setTab] = useState<Tab>("labs");
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("All");
  const [labId, setLabId] = useState(labs[0].id);
  const [labOutput, setLabOutput] = useState("Select a diagnostic command to inspect the simulated environment.");
  const [selectedIssue, setSelectedIssue] = useState(issues[0]);
  const [selectedNode, setSelectedNode] = useState(architecture[0]);

  const filteredCommands = useMemo(() => commands.filter((item) =>
    (tech === "All" || item.tech === tech) &&
    `${item.tech} ${item.command} ${item.description}`.toLowerCase().includes(query.toLowerCase())
  ), [query, tech]);
  const filteredNotes = useMemo(() => notes.filter((item) =>
    `${item.topic} ${item.title} ${item.summary}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);
  const currentLab = labs.find((lab) => lab.id === labId) ?? labs[0];

  return (
    <div className="workbench-shell">
      <div className="workbench-topline">
        <div><span className="live-dot" /><strong>DevOps Workbench</strong><small>Fictional public simulations · no production access or copied topology</small></div>
        <label className="workbench-search">
          <span>⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands, notes and topics" />
        </label>
      </div>
      <div className="workbench-tabs" role="tablist" aria-label="DevOps workbench tools">
        {(["labs", "commands", "troubleshooting", "architecture", "notes"] as Tab[]).map((item) => (
          <button key={item} type="button" role="tab" aria-selected={tab === item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>
            {item === "notes" ? "Learn" : item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {tab === "labs" && <div className="workbench-panel lab-layout">
        <div className="lab-sidebar">
          {labs.map((lab) => <button type="button" className={lab.id === labId ? "active" : ""} key={lab.id} onClick={() => { setLabId(lab.id); setLabOutput("Select a diagnostic command to inspect the simulated environment."); }}><span>LAB</span><strong>{lab.label}</strong></button>)}
        </div>
        <div className="lab-main">
          <div className="lab-brief"><span>SCENARIO</span><h3>{currentLab.brief}</h3><p>{currentLab.objective}</p></div>
          <div className="lab-command-grid">
            {currentLab.steps.map(([command, output]) => <button type="button" key={command} onClick={() => setLabOutput(output)}><code>$ {command}</code><span>run</span></button>)}
          </div>
          <div className="lab-console"><div><i /><i /><i /><span>simulated terminal output</span></div><pre>{labOutput}</pre></div>
          <div className="lab-lesson"><strong>Diagnosis</strong><p>{currentLab.lesson}</p></div>
        </div>
      </div>}

      {tab === "commands" && <div className="workbench-panel">
        <div className="filter-row">
          {["All", ...Array.from(new Set(commands.map((item) => item.tech)))].map((item) => <button type="button" key={item} className={tech === item ? "active" : ""} onClick={() => setTech(item)}>{item}</button>)}
        </div>
        <div className="command-library">
          {filteredCommands.map((item) => <article key={item.command}>
            <div><span>{item.tech}</span><CopyButton text={item.command} /></div>
            <code>{item.command}</code><p>{item.description}</p>
            <dl><div><dt>When to use</dt><dd>{item.use}</dd></div><div><dt>Watch for</dt><dd>{item.issue}</dd></div></dl>
          </article>)}
          {!filteredCommands.length && <p className="empty-state">No matching commands. Try a broader search.</p>}
        </div>
      </div>}

      {tab === "troubleshooting" && <div className="workbench-panel troubleshooting-layout">
        <div className="issue-list">{issues.map((issue) => <button type="button" className={selectedIssue.name === issue.name ? "active" : ""} key={issue.name} onClick={() => setSelectedIssue(issue)}><span>ISSUE</span>{issue.name}</button>)}</div>
        <article className="issue-detail"><span>GENERALIZED TROUBLESHOOTING PRACTICE</span><h3>{selectedIssue.name}</h3><dl><div><dt>Symptoms</dt><dd>{selectedIssue.symptom}</dd></div><div><dt>Likely causes</dt><dd>{selectedIssue.causes}</dd></div><div><dt>Diagnosis flow</dt><dd><code>{selectedIssue.commands}</code></dd></div><div><dt>Possible fix</dt><dd>{selectedIssue.fix}</dd></div><div><dt>Prevention</dt><dd>{selectedIssue.prevention}</dd></div></dl></article>
      </div>}

      {tab === "architecture" && <div className="workbench-panel architecture-playground">
        <div className="architecture-path">{architecture.slice(0, 5).map((node, index) => <div key={node.id}><button type="button" className={selectedNode.id === node.id ? "active" : ""} onClick={() => setSelectedNode(node)}><small>{String(index + 1).padStart(2, "0")}</small><strong>{node.label}</strong></button>{index < 4 && <i>→</i>}</div>)}</div>
        <button type="button" className={`observe-node ${selectedNode.id === "observe" ? "active" : ""}`} onClick={() => setSelectedNode(architecture[5])}><span>OBSERVE EVERY HOP</span><strong>{architecture[5].label}</strong></button>
        <article className="node-explainer"><span>SELECTED COMPONENT</span><h3>{selectedNode.label}</h3><p>{selectedNode.detail}</p></article>
      </div>}

      {tab === "notes" && <div className="workbench-panel notes-grid">
        {filteredNotes.map((note) => <article key={note.title}><span>{note.topic}</span><h3>{note.title}</h3><p>{note.summary}</p><code>public engineering note</code></article>)}
        {!filteredNotes.length && <p className="empty-state">No matching notes. Try Kubernetes, networking or PostgreSQL.</p>}
      </div>}
    </div>
  );
}
