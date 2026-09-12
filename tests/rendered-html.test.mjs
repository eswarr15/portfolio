import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete DevOps engineering platform", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Eswar Krishnamoorthy \| Cloud &amp; DevOps Engineer/);
  assert.match(html, /DevOps Playground/);
  assert.match(html, /DevOps Workbench/);
  assert.match(html, /Recruiter view/);
  assert.match(html, /Engineer view/);
  assert.match(html, />Troubleshooting</);
  assert.match(html, /Certified Kubernetes Administrator/);
  assert.match(html, /March 1, 2026/);
  assert.doesNotMatch(html, /Independent public portfolio/);
  assert.doesNotMatch(html, /Lorem Ipsum|Your site is taking shape|Building your site/i);
});

test("keeps public content safe and required downloads available", async () => {
  const [page, terminal, workbench] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/InteractiveTerminal.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/DevOpsWorkbench.tsx", import.meta.url), "utf8"),
    access(new URL("public/Eswar_Krishnamoorthy_DevOps_Resume.pdf", root)),
    access(new URL("public/Eswar_Krishnamoorthy_DevOps_Cover_Letter.pdf", root)),
    access(new URL("public/favicon.svg", root)),
    access(new URL("public/og.png", root)),
  ]);

  assert.match(page, /does not reproduce or document/);
  assert.match(terminal, /Simulation only/);
  assert.match(terminal, /demo-cluster/);
  assert.match(workbench, /<pod-ip-a>/);
  assert.match(terminal, /Tab completes/);
  assert.doesNotMatch(`${page}\n${terminal}\n${workbench}`, /BEGIN (RSA |OPENSSH )?PRIVATE KEY|password\s*=|token\s*=/i);
});
