# 🛠️ DevOps MSE-2 Project

**Name:** Deep Raj
**Roll No.:** 2400290120090
**Subject:** DevOps
**Exam:** MSE-2 — Even Sem 2026
**Institution:** KIET University

---

## 📋 Test Cases Implemented

- ✅ Test Case 1 — Linux System Audit & User Management
- ✅ Test Case 3 — Node.js Application Setup & Git Integration
- ✅ Test Case 5 — CI/CD Pipeline with GitHub Actions

---

## 🖥️ Test Case 1 — Linux System Audit & User Management

### Scenario
Acting as a Linux system administrator to onboard new employees at a tech company.

### Tasks Performed

1. Checked the identity of the currently logged-in user using `whoami` and `id`
2. Checked active sessions using `w`
3. Viewed login history using `last`
4. Displayed system info, hostname, and uptime using `uname -a` and `uptime`
5. Created two groups: `developers` and `qa` — verified using `grep` on `/etc/group`
6. Created users and assigned to groups:

| Employee | Department |
|----------|------------|
| aman     | developers |
| ritu     | developers |
| karan    | qa         |

7. Deleted resigned employee `ritu` using `userdel -r` and verified with `id ritu`

### Expected Outcome
- System audit commands ran without errors
- Groups `developers` and `qa` confirmed in system group list
- Users `aman` and `karan` verified via `id` command
- `id ritu` returns: `no such user` ✅

---

## 🌐 Test Case 3 — Node.js Application Setup & Git Integration

### Scenario
Setting up a new Node.js REST API from scratch and publishing it to GitHub.

### Tasks Performed

1. Initialized Node.js project using `npm init -y`
2. Installed dependencies:
   - `express` (main dependency)
   - `@types/express` (dev dependency)
3. Created `index.js` with an Express server on port `8080`
4. Implemented endpoint:
   - `GET /health` → returns `{ "status": "OK" }` with HTTP `200`
5. Initialized Git repository and made initial commit
6. Created GitHub repository `nodejs-api` and pushed all files

### Project Structure
nodejs-api/
├── index.js
├── package.json
├── .gitignore
└── node_modules/
### API Endpoint
GET http://localhost:8080/health
Response:

```json
{ "status": "OK" }
```

### Expected Outcome
- `package.json`, `node_modules/`, and `index.js` present ✅
- `/health` endpoint returns correct JSON response ✅
- GitHub repository `nodejs-api` publicly visible with commit ✅

---

## ⚙️ Test Case 5 — CI/CD Pipeline with GitHub Actions

### Scenario
Building an automated pipeline that triggers on every push to `main`, installs dependencies, builds Docker image, and simulates deployment.

### Tasks Performed

1. Created `.github/workflows/` directory inside `nodejs-api` repo
2. Created `deploy.yml` workflow file with:
   - **Trigger:** Push to `main` branch
   - **Runner:** `ubuntu-latest`
   - **Steps:**
     1. Checkout repository code
     2. Set up Node.js version 18
     3. Install project dependencies (`npm install`)
     4. Build Docker image tagged as `nodejs-api`
     5. Print: `Deploying application to server...`
3. Committed with message: `"This is the new CI/CD pipeline for CA2"` and pushed to `main`
4. Verified all 5 steps passed with green checkmark in GitHub Actions tab

### Workflow File Location
nodejs-api/
└── .github/
└── workflows/
└── deploy.yml
### Expected Outcome
- `deploy.yml` present in repository ✅
- All 5 steps completed with green checkmark ✅
- Final step printed deploy message in logs ✅

---

## 🧰 Tech Stack

- Ubuntu (WSL2)
- Node.js 18
- Express.js
- Git & GitHub
- GitHub Actions
- Docker
