from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
GREEN = colors.HexColor("#12824C")
DARK = colors.HexColor("#17241F")
MUTED = colors.HexColor("#53635C")
RULE = colors.HexColor("#C9D8D0")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=20, leading=22, textColor=DARK, alignment=TA_CENTER, spaceAfter=2),
        "tag": ParagraphStyle("Tag", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.2, leading=10, tracking=0.7, textColor=GREEN, alignment=TA_CENTER, spaceAfter=5),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.5, leading=9.5, textColor=MUTED, alignment=TA_CENTER, spaceAfter=6),
        "section": ParagraphStyle("Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9.1, leading=11, textColor=GREEN, spaceBefore=5, spaceAfter=3, keepWithNext=True),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=7.3, leading=9.3, textColor=DARK, spaceAfter=2),
        "role": ParagraphStyle("Role", parent=base["BodyText"], fontName="Helvetica-Bold", fontSize=8, leading=9.5, textColor=DARK, spaceBefore=2, spaceAfter=1, keepWithNext=True),
        "bullet": ParagraphStyle("Bullet", parent=base["BodyText"], fontName="Helvetica", fontSize=7.05, leading=8.8, leftIndent=8, firstLineIndent=-5, bulletIndent=0, textColor=DARK, spaceAfter=0.6),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName="Helvetica", fontSize=6.9, leading=8.5, textColor=DARK, spaceAfter=1.5),
        "letter": ParagraphStyle("Letter", parent=base["BodyText"], fontName="Helvetica", fontSize=9.2, leading=13.2, textColor=DARK, spaceAfter=10),
        "notice": ParagraphStyle("Notice", parent=base["BodyText"], fontName="Helvetica-Oblique", fontSize=6.5, leading=8, textColor=MUTED, alignment=TA_CENTER, spaceBefore=4),
    }


def section(story, s, title):
    story.append(Paragraph(title.upper(), s["section"]))
    story.append(Table([[""]], colWidths=[174 * mm], rowHeights=[0.35 * mm], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), RULE)])))
    story.append(Spacer(1, 1.5 * mm))


def header(story, s, tag):
    story.extend([
        Paragraph("ESWAR KRISHNAMOORTHY", s["name"]),
        Paragraph(tag, s["tag"]),
        Paragraph(
            "K.Eswar7045@gmail.com &nbsp;|&nbsp; +91 99446 82249 &nbsp;|&nbsp; "
            "linkedin.com/in/eswarcloudanddevops &nbsp;|&nbsp; github.com/eswarr15 &nbsp;|&nbsp; "
            "eswarr15.github.io/portfolio/",
            s["contact"],
        ),
    ])


def build_resume():
    s = styles()
    out = PUBLIC / "Eswar_Krishnamoorthy_DevOps_Resume.pdf"
    doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=12 * mm, bottomMargin=10 * mm,
                            title="Eswar Krishnamoorthy - ATS DevOps Resume", author="Eswar Krishnamoorthy",
                            subject="Public-safe DevOps, Cloud, Kubernetes and automation resume")
    story = []
    header(story, s, "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | KUBERNETES | AUTOMATION")

    section(story, s, "Professional Summary")
    story.append(Paragraph(
        "Certified Kubernetes Administrator (CKA) with 2+ years of hands-on experience across Kubernetes/AKS, Microsoft Azure, AWS, OCI, CI/CD automation, cloud migration, disaster recovery, observability, and hybrid cloud/on-premises operations. Builds repeatable delivery workflows with Linux, Docker, Azure DevOps, Python, REST APIs, secure service connections, and AI-assisted investigation with human review.",
        s["body"],
    ))

    section(story, s, "Technical Skills")
    skill_lines = [
        ("Cloud", "Microsoft Azure (AKS, Blob Storage, Key Vault, Azure Monitor), AWS (EC2, ECS, ECR, WorkSpaces, VPC), OCI, Hostinger"),
        ("Containers & Infrastructure", "Kubernetes, AKS, OpenShift/OKD, Docker, Podman, Terraform, Ansible, Linux, Nginx, hybrid environments"),
        ("CI/CD & DevOps", "Azure DevOps, Azure Pipelines, Jenkins, GitHub Actions, GitLab CI/CD, YAML, multi-stage delivery"),
        ("Monitoring & Security", "Grafana, Prometheus, Mimir, Loki, Azure Monitor, HashiCorp Vault, Key Vault, SonarQube, Trivy, OWASP"),
        ("Networking", "DNS, load balancing, SSL/TLS, VPN, NAT, subnets, security groups, Microsoft Entra ID"),
        ("AI & Automation", "Python, Bash, REST APIs, MCP concepts, ChatGPT, Claude, Cursor and Devin-style workflows with controlled access"),
    ]
    for label, value in skill_lines:
        story.append(Paragraph(f"<b>{label}:</b> {value}", s["small"]))

    section(story, s, "Professional Experience")
    roles = [
        ("DevOps Engineer — SWIFFYLABS", "September 2025 – Present", [
            "Support SaaS environments across staging, UAT and production, covering setup, configuration, deployments, monitoring and operational troubleshooting.",
            "Administer Kubernetes/AKS and OKD workloads across hybrid cloud and on-premises environments; all public descriptions are deliberately generalized.",
            "Supported Azure account migration checks, access validation, disaster-recovery readiness, deployment validation and recovery exercises.",
            "Build and maintain multi-stage Azure DevOps pipelines with YAML, Python automation, controlled promotion and least-privilege service connections.",
            "Investigate platform health using Grafana, Prometheus, Mimir, Loki, Azure Monitor and secure secrets workflows with Vault and Key Vault.",
        ]),
        ("Cloud and DevOps Engineer — CYGNONEX INNOVATIONS (CYGNOZ)", "December 2024 – August 2025", [
            "Built and deployed containerized microservices across multi-stage environments using GitHub, Jenkins, Docker and CI/CD pipelines.",
            "Configured AWS EC2, ECS, ECR, load balancers, Global Accelerator, TLS certificates and production deployments.",
            "Integrated secure API delivery and vulnerability/code-quality checks using SonarQube, OWASP and Trivy.",
        ]),
        ("Cloud and DevOps Intern — CYGNONEX INNOVATIONS (CYGNOZ)", "August 2024 – November 2024", [
            "Deployed multiple client applications using GitHub Actions, API gateways and Docker without exposing client-specific details.",
            "Supported cloud access, Microsoft Entra ID, AWS WorkSpaces and cloud-cost activities.",
        ]),
        ("Cloud and DevOps Intern — JIO PLATFORMS LIMITED", "October 2023 – June 2024", [
            "Supported Azure DevOps CI/CD operations, service requests, failed-build reporting, Grafana reports and Scrum request tracking.",
        ]),
    ]
    for title, dates, bullets in roles:
        story.append(Paragraph(f"{title} <font color='#53635C'>| {dates}</font>", s["role"]))
        for bullet in bullets:
            story.append(Paragraph(bullet, s["bullet"], bulletText="•"))

    section(story, s, "Certifications and Education")
    story.append(Paragraph("<b>Certified Kubernetes Administrator (CKA)</b> — Completed March 1, 2026 &nbsp; | &nbsp; <b>Microsoft Azure Fundamentals (AZ-900)</b> &nbsp; | &nbsp; <b>AWS Educate</b> — Cloud Operations, Compute and Networking", s["small"]))
    story.append(Paragraph("<b>B.E. Computer Science and Engineering</b> — E.G.S. Pillay Engineering College, Anna University | 2020–2024 | CGPA 8.04/10 &nbsp; | &nbsp; Languages: Tamil, English", s["small"]))
    story.append(Paragraph("Public résumé: employer names identify work history only. No client names, credentials, proprietary documentation, internal topology, hostnames, account IDs or production data are included.", s["notice"]))
    doc.build(story)


def build_cover_letter():
    s = styles()
    out = PUBLIC / "Eswar_Krishnamoorthy_DevOps_Cover_Letter.pdf"
    doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=22 * mm, rightMargin=22 * mm, topMargin=18 * mm, bottomMargin=16 * mm,
                            title="Eswar Krishnamoorthy - DevOps Cover Letter", author="Eswar Krishnamoorthy",
                            subject="Public-safe general cover letter for DevOps and Cloud Engineering roles")
    story = []
    header(story, s, "DEVOPS ENGINEER | CLOUD INFRASTRUCTURE | KUBERNETES")
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph("<b>Subject: Application for DevOps Engineer / Cloud Engineer Position</b>", s["letter"]))
    story.append(Paragraph("Dear Hiring Manager,", s["letter"]))
    paragraphs = [
        "I am applying for DevOps Engineer and Cloud Engineer opportunities. I hold the Certified Kubernetes Administrator (CKA) credential, earned on March 1, 2026, and bring 2+ years of hands-on experience supporting cloud infrastructure, Kubernetes platforms, CI/CD automation, migration, disaster recovery and hybrid environments.",
        "In my current role at Swiffylabs, I support SaaS and on-premises environments across staging, UAT and production. My work includes Kubernetes/AKS and OKD operations, Azure migration validation, disaster-recovery readiness, Azure DevOps pipelines, monitoring and secure operational practices. These public descriptions are intentionally generalized and do not reproduce client or employer systems.",
        "I have built and maintained multi-stage delivery workflows with Azure Pipelines, Jenkins, GitHub Actions, YAML, Python scripting and least-privilege service connections. My toolkit also includes Docker, Linux, DNS, load balancers, SSL/TLS, Azure Monitor, Grafana, Prometheus, Mimir, Loki and HashiCorp Vault. I use AI-assisted and MCP-based workflows for controlled investigation and automation while keeping credentials and proprietary data outside prompts, code and documentation.",
        "Earlier at Cygnoz, I progressed from Cloud and DevOps Intern to Engineer while deploying containerized services and working with AWS EC2, ECS, ECR, load balancers, Jenkins, Docker and security scanning. At Jio Platforms, I supported Azure DevOps operations and build-issue reporting. These roles strengthened my ability to troubleshoot methodically and support reliable multi-cloud delivery.",
        "I would welcome the opportunity to contribute my Kubernetes, cloud, CI/CD and production-operations experience to your team. I am comfortable taking ownership of deployments, investigating infrastructure issues and collaborating with engineers to improve reliability and delivery.",
        "Thank you for your time and consideration.",
        "Sincerely,<br/><b>Eswar Krishnamoorthy</b>",
    ]
    for paragraph in paragraphs:
        story.append(Paragraph(paragraph, s["letter"]))
    story.append(Paragraph("General public cover letter: no client identifiers, credentials, internal architecture or proprietary documentation are included.", s["notice"]))
    doc.build(story)


if __name__ == "__main__":
    PUBLIC.mkdir(parents=True, exist_ok=True)
    build_resume()
    build_cover_letter()
