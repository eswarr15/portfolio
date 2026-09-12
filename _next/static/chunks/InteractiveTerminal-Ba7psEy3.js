import{r as e}from"./rolldown-runtime-DOKJ5Yo2.js";import{i as t,r as n}from"./framework-blcsuaHx.js";var r=e(n(),1),i=t(),a=[`help`,`tour`,`linux basics`,`kubernetes basics`],o=[{command:`whoami`,label:`Identify the engineer`},{command:`ls skills`,label:`Inspect production skills`},{command:`kubectl get projects`,label:`Discover delivered systems`},{command:`linux basics`,label:`Learn Linux operations`},{command:`kubernetes basics`,label:`Trace Kubernetes flow`}],s={help:{tone:`info`,output:`PROFILE COMMANDS
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
  clear                     Clear this terminal`},whoami:{output:`Eswar Krishnamoorthy — CKA-certified DevOps Engineer`,tone:`success`},pwd:{output:`/home/eswar/portfolio`},ls:{output:`about.md   skills/   experience.log   projects/   architecture.yaml   certifications/`},"ls skills":{output:`kubernetes/  linux/  docker/  azure/  aws/  oci/  okd/
azure-devops/  ci-cd/  observability/  vault/  python/  automation/`,tone:`success`},"cat about.md":{output:`DevOps Engineer with Kubernetes, multi-cloud and hybrid infrastructure experience across staging, UAT and production. Public details are deliberately generalized.`},"cat experience.log":{output:`2025—NOW  Swiffylabs  | DevOps Engineer
2024—2025 Cygnoz      | Cloud and DevOps Engineer
2024      Cygnoz      | Cloud and DevOps Intern
2023—2024 Jio         | Cloud and DevOps Intern`},skills:{output:`Run: ls skills
Or explore the Engineering Stack section below the command tour.`,tone:`info`},projects:{output:`Run: kubectl get projects
Case studies include hybrid infrastructure, SaaS releases, migration/DR, observability and CI/CD.`,tone:`info`},experience:{output:`Run: cat experience.log`,tone:`info`},contact:{output:`Email: K.Eswar7045@gmail.com
LinkedIn: /in/eswarcloudanddevops
GitHub: @eswarr15`,tone:`success`},"kubectl get profile":{output:`NAME    ROLE              CERT   EXPERIENCE   STATUS
eswar   DevOps Engineer   CKA    2+ years     Ready`,tone:`success`},"kubectl describe profile eswar":{output:`Name:           Eswar Krishnamoorthy
Role:           DevOps Engineer
Certification:  CKA
Cloud:          Azure, AWS, OCI
Platforms:      Kubernetes, AKS, OKD
Environments:   Staging, UAT, Production
Operations:     SaaS and on-premises infrastructure
Focus:          Reliability, automation, observability and learning`,tone:`success`},"kubectl get skills":{output:`SKILL                    LEVEL
Kubernetes / AKS         Production
Azure DevOps / CI-CD     Production
Linux / Docker           Production
Hybrid infrastructure   Production
AWS / OCI / OKD          Hands-on
Observability / Vault    Hands-on
Terraform / Ansible      Learning lab`},"kubectl get experience":{output:`2025—NOW  Swiffylabs  | DevOps Engineer
2024—2025 Cygnoz      | Cloud and DevOps Engineer
2024      Cygnoz      | Cloud and DevOps Intern
2023—2024 Jio         | Cloud and DevOps Intern`},"kubectl get projects":{output:`NAME                    ENVIRONMENTS          STATUS
hybrid-infra-demo       UAT, Production       Simulated
saas-release-ops        Staging, UAT, Prod    Running
azure-migration-dr      Recovery validation   Complete
observe-and-secure      Metrics, Logs, Vault  Running`},"kubectl get certs":{output:`NAME                                     ISSUER                   STATUS
Certified Kubernetes Administrator       CNCF / Linux Foundation  Verified
Microsoft Azure Fundamentals             Microsoft                Complete
Cloud Operations & Networking            AWS Educate              Complete`},"kubectl get pods":{output:`NAME                         READY   STATUS    RESTARTS
profile-api-7d9c8           1/1     Running   0
skills-service-58b2         1/1     Running   0
continuous-learning-cka     1/1     Running   0`,tone:`success`},"kubectl get svc":{output:`NAME             TYPE           PORT(S)        PURPOSE
profile-service  ClusterIP      80/TCP         Internal access
ingress-nginx    LoadBalancer   80,443/TCP     External traffic`},"kubectl get ingress":{output:`NAME               HOSTS                 SERVICE
portfolio-ingress  portfolio.example.test  profile-service:80

Flow: DNS → Load Balancer → Ingress → Service → Pod`,tone:`info`},"kubectl logs profile-api":{output:`[INFO] profile-api started
[INFO] readiness probe passed
[INFO] skills and project records loaded
[INFO] request completed: 200 OK`,tone:`success`},"kubectl config get-contexts":{output:`CURRENT   NAME       CLUSTER    NAMESPACE
*         demo-prod  demo-cluster  portfolio
          demo-uat   demo-cluster  portfolio-uat

Learning note: always confirm the context before running a cluster command.`,tone:`info`},"docker ps":{output:`CONTAINER ID   IMAGE                 STATUS
e5war2026      eswar/profile:cka     Up — healthy

Docker runs containers; Kubernetes schedules and manages them across a cluster.`},"systemctl status portfolio":{output:`● portfolio.service — Eswar DevOps Portfolio
   Loaded: loaded
   Active: active (running)
   Health: observable and continuously learning`,tone:`success`},"journalctl -u portfolio":{output:`Jun 29 09:00 deployment validation passed
Jun 29 09:01 observability checks healthy
Jun 29 09:02 release promoted to production`},"terraform plan":{output:`Terraform will perform the following actions:
  + create azurerm_monitor_diagnostic_setting.platform
  ~ update azurerm_kubernetes_cluster.aks tags

Plan: 1 to add, 1 to change, 0 to destroy.
Simulation only — no cloud resources are connected.`,tone:`info`},"helm list":{output:`NAME             NAMESPACE      REVISION  STATUS
profile-api      portfolio      12        deployed
observability    observability  8         deployed
vault            security       5         deployed`,tone:`success`},"vault status":{output:`Initialized    true
Sealed         false
Storage Type   raft
HA Enabled     true

Simulation only — no tokens, keys or production Vault are accessible.`,tone:`success`},"git status":{output:`On branch main
Your branch is up to date.
nothing to commit, working tree clean

Portfolio status: ready for review`,tone:`success`},"kubectl explain pod":{output:`A Pod is Kubernetes' smallest deployable unit. It contains one or more containers that share network and storage. In a real flow: Deployment → ReplicaSet → Pod → Container.`,tone:`info`},"linux basics":{output:`1. pwd         — show your current directory
2. ls -la      — list files, including hidden files
3. cd <folder> — move into a directory
4. cat <file>  — read a text file
5. grep <text> — search inside output
6. ps / top    — inspect running processes
7. systemctl   — manage Linux services
8. journalctl  — inspect service logs`,tone:`info`},"kubernetes basics":{output:`REQUEST FLOW
User → DNS → Load Balancer → Ingress → Service → Pod

OPERATIONS FLOW
kubectl → API Server → Scheduler/Controllers → Kubelet → Container

Start with: kubectl get pods
Then try:  kubectl explain pod`,tone:`info`},tour:{output:`TOUR STARTED
Step 1: whoami
Step 2: ls skills
Step 3: kubectl describe profile eswar
Step 4: kubectl get projects
Step 5: linux basics
Step 6: kubernetes basics
Step 7: kubectl get ingress

Tip: You can also click any command chip above the prompt.`,tone:`success`}},c=[{output:`Welcome to EswarOS — interactive DevOps portfolio`,tone:`success`},{output:`Type help or click a suggested command to begin.`}];function l(){let[e,t]=(0,r.useState)(c),[n,l]=(0,r.useState)(``),[u,d]=(0,r.useState)([]),[f,p]=(0,r.useState)(-1),[m,h]=(0,r.useState)([]),g=(0,r.useRef)(null),_=(0,r.useRef)(null),v=(0,r.useMemo)(()=>[...Object.keys(s),`clear`,`history`,`mission`].sort(),[]);(0,r.useEffect)(()=>{_.current?.scrollTo({top:_.current.scrollHeight,behavior:`smooth`})},[e]);let y=(0,r.useCallback)(e=>{let n=e.trim().toLowerCase().replace(/\s+/g,` `);if(!n)return;if(n===`clear`){t([]),l(``);return}if(n===`history`){let n=u.length?u.map((e,t)=>`${t+1}  ${e}`).join(`
`):`No commands in history yet.`;t(t=>[...t,{command:e.trim()},{output:n}]),l(``);return}if(n===`mission`){let n=o.map((e,t)=>`${m.includes(e.command)?`✓`:`○`} ${t+1}. ${e.label} — ${e.command}`).join(`
`);t(t=>[...t,{command:e.trim()},{output:n,tone:`info`}]),l(``);return}let r=s[n]??{output:`command not found: ${e.trim()}\nType help to see supported commands.`,tone:`warning`};t(t=>[...t,{command:e.trim()},r]),d(t=>[...t,e.trim()]),p(-1),o.some(e=>e.command===n)&&h(e=>e.includes(n)?e:[...e,n]),l(``),g.current?.focus()},[m,u]);(0,r.useEffect)(()=>{function e(e){let t=e.detail?.command;t&&y(t)}return window.addEventListener(`portfolio-command`,e),()=>window.removeEventListener(`portfolio-command`,e)},[y]);function b(e){e.preventDefault(),y(n)}function x(e){if(e.key===`Tab`){let t=v.find(e=>e.startsWith(n.toLowerCase()));t&&(e.preventDefault(),l(t));return}if(e.key===`ArrowUp`&&u.length){e.preventDefault();let t=f<u.length-1?f+1:f;p(t),l(u[u.length-1-t]??``);return}if(e.key===`ArrowDown`&&f>=0){e.preventDefault();let t=f-1;p(t),l(t<0?``:u[u.length-1-t]??``)}}return(0,i.jsxs)(`div`,{className:`interactive-terminal`,children:[(0,i.jsxs)(`div`,{className:`mission-status`,"aria-label":`${m.length} of ${o.length} mission steps complete`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{children:`DEVOPS MISSION`}),(0,i.jsxs)(`strong`,{children:[m.length,`/`,o.length,` complete`]})]}),(0,i.jsx)(`div`,{className:`mission-progress`,"aria-hidden":`true`,children:(0,i.jsx)(`i`,{style:{width:`${m.length/o.length*100}%`}})}),(0,i.jsx)(`code`,{children:`run: mission`})]}),(0,i.jsx)(`div`,{className:`terminal-suggestions`,"aria-label":`Suggested commands`,children:a.map(e=>(0,i.jsx)(`button`,{type:`button`,onClick:()=>y(e),children:e},e))}),(0,i.jsx)(`div`,{className:`terminal-scroll`,ref:_,"aria-live":`polite`,children:e.map((e,t)=>(0,i.jsxs)(`div`,{className:`terminal-entry ${e.tone??`normal`}`,children:[e.command&&(0,i.jsxs)(`p`,{children:[(0,i.jsx)(`span`,{className:`green`,children:`eswar@devops`}),`:`,(0,i.jsx)(`span`,{className:`blue`,children:`~`}),`$ `,e.command]}),e.output&&(0,i.jsx)(`pre`,{className:`command-output`,children:e.output})]},`${e.command??`output`}-${t}`))}),(0,i.jsxs)(`form`,{className:`terminal-prompt`,onSubmit:b,children:[(0,i.jsx)(`label`,{htmlFor:`portfolio-command`,className:`sr-only`,children:`Enter a Linux or Kubernetes portfolio command`}),(0,i.jsxs)(`span`,{children:[(0,i.jsx)(`span`,{className:`green`,children:`eswar@devops`}),`:`,(0,i.jsx)(`span`,{className:`blue`,children:`~`}),`$`]}),(0,i.jsx)(`input`,{id:`portfolio-command`,ref:g,value:n,onChange:e=>l(e.target.value),onKeyDown:x,autoComplete:`off`,spellCheck:!1,placeholder:`help · Tab completes · ↑ shows history`}),(0,i.jsx)(`i`,{"aria-hidden":`true`}),(0,i.jsx)(`button`,{type:`submit`,className:`terminal-run-button`,"aria-label":`Run terminal command`,children:`Run`})]})]})}export{l as default};