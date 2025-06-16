---
layout: document-layout.html
---
# Roadmap to Public Preview Version v1.0

## Table of Contents
- [optimization engine](#optimization-engine)
- [connection-architecture](#connection-architecture)
- [frontend-user-experience](#frontend-user-experience)
- [platform-ecosystem-support](#platform-ecosystem-support)
- [ai-intelligence](#ai-intelligence)

## Optimization Engine
- **Noise Reduction:** Implement algorithms to group similar recommendations and reduce alert fatigue, preventing users from being spammed with too many minor suggestions.
- **Personalization & Relevancy:** Enhance the engine to learn from user actions (e.g., which PRs are accepted vs. rejected) to provide more targeted and relevant suggestions over time.
- **Advanced Optimizations:** Expand beyond right-sizing to include recommendations for spot instance usage, Reserved Instance/Savings Plan purchases, and idle resource cleanup.

## Connection & Architecture
- **Agent-Based Model:** Transition from a kubeconfig/IAM-based connection to a lightweight, secure agent deployed in the customer's cluster. This enables reliable egress-only communication, supporting private clusters and complex firewall configurations.
- **Database & Data Storage:** Implement intelligent data retention and auto-cleanup policies to prevent database bloat. Begin offloading historical metric data to cheaper, long-term storage like Amazon S3 for trend analysis.

## Frontend & User Experience
- **Identity Management:** Integrate with standard Identity Providers (IDPs) like OAuth2 (Google, GitHub) for secure and seamless user authentication.
- **Value-Oriented Dashboards:** Develop dashboards that track key performance indicators, such as:
  - Real-time and historical cost savings achieved.
  - Total number of automated PRs created to show manpower effectiveness.
  - Success rate of merged PRs from recommendations.

## Platform & Ecosystem Support
- **Multi-Cloud Expansion:** Add full support for Azure Kubernetes Service (AKS) and Google Kubernetes Engine (GKE), providing a consistent optimization experience across all major cloud providers.
- **Expanded Git Provider Support:** Move from PATs to GitHub Apps for higher rate limits and better security. Add support for various GitHub hosting options (Public, Private, Self-Hosted, Enterprise) and other providers like GitLab and Bitbucket.

## AI & Intelligence
- **Granular Control:** Give users more control over the AI engine, including:
  - Whitelisting/blacklisting of specific resources, namespaces, or clusters.
  - Setting a minimum desired node count and preferred CPU families (e.g., Graviton).
  - Configuring a buffer (e.g., +20%) to be added on top of recommendations for critical applications and should help avoid any snowflakes.
- **IaC Best Practices:** The AI will analyze repository structure and IaC files to provide recommendations on aligning with industry best practices for better organization and maintainability.
- **Expanded IaC Tooling:** Broaden the AI's modification capabilities to include other popular tools like Kustomize and Pulumi.
- **Workflow Automation:** For non-production environments, provide an option to bypass the PR approval process and merge changes automatically, enabling rapid iteration for dev/test clusters.
