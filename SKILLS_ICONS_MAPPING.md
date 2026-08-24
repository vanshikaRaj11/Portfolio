# Skills to Icons Mapping

## Current Icon Assignments in resume.tsx

### ✅ Correct Icon Assignments

| Skill      | Current Icon   | Status    |
| ---------- | -------------- | --------- |
| Typescript | Typescript     | ✓ Correct |
| React      | ReactLight     | ✓ Correct |
| Next.js    | NextjsIconDark | ✓ Correct |
| Docker     | Docker         | ✓ Correct |

---

### ❌ Incorrect/Placeholder Icon Assignments

| Skill         | Current Icon | Issue               | Needs             |
| ------------- | ------------ | ------------------- | ----------------- |
| Node.js       | Nodejs       | ✓ Correct           | -                 |
| Express.js    | Nodejs       | ✗ Using placeholder | Express.js icon   |
| MongoDB       | Nodejs       | ✗ Using placeholder | MongoDB icon      |
| Mongoose      | Nodejs       | ✗ Using placeholder | Mongoose icon     |
| Redis         | Nodejs       | ✗ Using placeholder | Redis icon        |
| JavaScript    | Nodejs       | ✗ Using placeholder | JavaScript icon   |
| Tailwind CSS  | Postgresql   | ✗ Wrong icon        | Tailwind CSS icon |
| Git           | Golang       | ✗ Wrong icon        | Git icon          |
| Linux         | Kubernetes   | ✗ Wrong icon        | Linux icon        |
| AWS           | Java         | ✗ Wrong icon        | AWS icon          |
| Vercel AI SDK | Csharp       | ✗ Wrong icon        | Vercel icon       |
| Postman       | Nodejs       | ✗ Using placeholder | Postman icon      |
| Jira          | Nodejs       | ✗ Using placeholder | Jira icon         |
| VS Code       | Nodejs       | ✗ Using placeholder | VS Code icon      |

---

## Available SVG Components (in src/components/ui/svgs/)

✓ **Currently imported:**

- ReactLight
- NextjsIconDark
- Typescript
- Nodejs
- Python
- Golang
- Postgresql
- Docker
- Kubernetes
- Java
- Csharp

✓ **Available but NOT imported:**

- ReactDark
- ReactWordmarkDark
- ReactWordmarkLight
- NextjsLogoDark
- NextjsLogoLight
- PostgresqlWordmarkDark
- PostgresqlWordmarkLight
- GolangDark

## Available Icons from Icons Object

- Icons.github
- Icons.linkedin
- Icons.x
- Icons.email
- Icons.globe
- Icons.youtube

---

## ⚠️ MISSING Icons (NOT in current repo)

These skills need icon components that don't exist yet:

- [ ] Express.js - **MISSING**
- [ ] MongoDB - **MISSING**
- [ ] Mongoose - **MISSING**
- [ ] Redis - **MISSING**
- [ ] JavaScript - **MISSING**
- [ ] Tailwind CSS - **MISSING**
- [ ] Git - **MISSING**
- [ ] Linux - **MISSING**
- [ ] AWS - **MISSING**
- [ ] Vercel - **MISSING**
- [ ] Postman - **MISSING**
- [ ] Jira - **MISSING**
- [ ] VS Code - **MISSING**

---

## Action Plan

### Option 1: Use Lucide React Icons (Recommended - Quick Solution)

Import from lucide-react and use for missing skills:

```tsx
import {
  Smartphone,
  Database,
  Globe,
  Code,
  Cloud,
  Mail,
  GitBranch,
} from "lucide-react";
```

### Option 2: Create SVG Components

Add new files to `src/components/ui/svgs/`:

- expressjs.tsx
- mongodb.tsx
- mongoose.tsx
- redis.tsx
- javascript.tsx
- tailwindcss.tsx
- git.tsx
- linux.tsx
- aws.tsx
- vercel.tsx
- postman.tsx
- jira.tsx
- vscode.tsx

### Option 3: Use Icon Libraries

- Use SimpleIcons from `lucide-react`
- Use React Icons library
- Import from other icon packages
