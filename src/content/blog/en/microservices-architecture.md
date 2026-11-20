---
title: "Capstone 01: Containerizing and Deploying a Decoupled Microservices Sandbox"
description: "How I built, tested, and automated deployments for Multiverse Labs using Docker, MongoDB Atlas, Vitest, and GitHub Actions on a DigitalOcean Droplet."
pubDate: "2026-11-19"
isPublished: true
updatedDate: "2026-11-19"
heroImage: "@/assets/default.jpg"
featured: true
---

While most of my day-to-day work focuses on full-stack web development, **Multiverse Labs** (`https://www.labs.deepakpun.com`) is my foundational DevOps sandbox (`Capstone 01`)—a decoupled, multi-service application built to get my feet wet with container virtualization, automated pipeline assertions, and cloud deployments.

## System Overview

Instead of bundling everything into a single monolithic server, the application separates concerns across isolated services backed by managed cloud persistence:

* **Decoupled Services:** Splits the frontend interface and core REST API nodes into independent services so updates can be built and deployed without tight coupling.
* **Containerization with Docker:** Packaged each service into lightweight, reproducible Docker containers to eliminate environment drift between local development and production.
* **Cloud Persistence & Testing:** Backed by **MongoDB Atlas** for managed database operations, with **Vitest & Supertest** running automated integration and endpoint assertions before anything ships.

## How I Shipped It (CI/CD & Infrastructure)

Moving from running containers locally to hosting them reliably in the cloud required wiring up an automated delivery pipeline:

1. **Automated Pipeline Assertions:** Configured **GitHub Actions** to trigger on every push, running Vitest and Supertest suites automatically so broken endpoints never reach production.
2. **Container Build & Registry Workflow:** Built and tagged updated Docker images inside the CI pipeline, keeping deployment artifacts consistent across runs.
3. **DigitalOcean Droplet Deployment:** Automated SSH/container rollout onto a **DigitalOcean Droplet**, pulling fresh images and restarting services cleanly with minimal manual intervention.

## Key Takeaways & What's Next

Getting this first capstone live validated the core loop of **code → automated test → containerize → deploy**, while highlighting areas to level up next:

* **Learning XP:** Managing container networking, environment secrets, and reverse-proxy routing on a single Droplet gave me a clear baseline of how production traffic flows under the hood.
* **Looking Ahead to Capstone 02:** In my next capstone, I will build on this foundation by introducing Infrastructure as Code (Terraform), automated container vulnerability scanning, and multi-node orchestration.
