---
description: Workflow for making changes and deploying to production
---

# Development & Deployment Workflow

**Principle:** Only make changes in local and review before we push to production.

1.  **Local Development**
    - Make code changes in the local environment.
    - Ensure the local server is running (`npm run dev`).

2.  **Local Verification**
    - Verify changes on `http://localhost:3000`.
    - Run necessary tests or validations.

3.  **User Review**
    - Present the changes to the user (via screenshots, descriptions, or screen sharing).
    - **STOP:** Do not proceed until the user explicitly approves the changes.

4.  **Commit & Push**
    - Only after approval, stage and commit the changes.
    - `git push origin main` triggers the production deployment via Amplify/GitHub.
