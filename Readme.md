# KubeShiftDynamics

KubeShiftDynamics is a research and technical documentation project focused on bridging the gap between FinOps (cloud cost optimization) and GitOps (declarative, version-controlled infrastructure management) for Kubernetes environments. The project explores the market landscape, technical challenges, and proposes an AI-driven, GitOps-native platform for automated Kubernetes cost optimization.

## Project Structure

```
.
├── .eleventy.js                # Eleventy static site generator config
├── index.html                  # Homepage for the site
├── market-analysis.md          # In-depth market analysis document
├── state-of-the-market.md      # Technical and strategic state-of-the-market report
├── poc-plan.md                 # Proof of Concept (PoC) technical plan
├── devils-advocate.md          # Critical Q&A challenging the core assumptions
├── build_site.md               # Step-by-step guide to building the static site
├── pdf_content.txt             # Source content for pitch decks and collateral
├── css/
│   └── style.css               # Custom styles
├── images/                     # Image assets
├── _includes/
│   └── document-layout.html    # HTML layout for Eleventy
├── _site/                      # Output folder for generated static site
└── package.json                # Node.js dependencies
```

## Key Documents

- **[Market Analysis](market-analysis.md):** Executive overview of Kubernetes cost optimization, GitOps integration, and market opportunity.
- **[State of the Market](state-of-the-market.md):** Deep dive into the technical and organizational challenges of unifying FinOps and GitOps.
- **[Proof of Concept Plan](poc-plan.md):** Technical plan for building an MVP that automates cost optimizations via GitOps-native pull requests.
- **[Devil's Advocate Q&A](devils-advocate.md):** Critical self-assessment of the opportunity and solution.

## Solution Vision

KubeShiftDynamics proposes a platform that:
- Analyzes Kubernetes workloads and cloud spend using ML.
- Translates optimization recommendations into precise Infrastructure-as-Code (IaC) changes.
- Automatically generates pull requests to the user's Git repositories, integrating seamlessly with GitOps workflows.
- Supports bi-directional sync and drift reconciliation between live clusters and Git.
- Targets large-scale, multi-cloud Kubernetes environments.

## Building the Static Site

This project uses [Eleventy (11ty)](https://www.11ty.dev/) to generate a static documentation site.

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npx @11ty/eleventy --serve
   ```

3. **View the site:**  
   Open [http://localhost:8080](http://localhost:8080) in your browser.

4. **Edit content:**  
   Modify the Markdown files (`.md`) or HTML as needed. The site will auto-rebuild.

See [build_site.md](build_site.md) for a detailed setup guide.

## License

This repository is for research, planning, and demonstration purposes.  
© 2025 KubeShiftDynamics. All rights reserved.
