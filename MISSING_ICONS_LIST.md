# Missing Icons - Complete List

## 📋 13 Missing Icon Components

These icon components need to be created or imported for your skills section:

### 1. **Express.js**

- Used for: Express.js skill
- Current: Using Nodejs (placeholder)
- Needs: `Expressjs` icon component

### 2. **MongoDB**

- Used for: MongoDB skill
- Current: Using Nodejs (placeholder)
- Needs: `Mongodb` icon component

### 3. **Mongoose**

- Used for: Mongoose skill
- Current: Using Nodejs (placeholder)
- Needs: `Mongoose` icon component

### 4. **Redis**

- Used for: Redis skill
- Current: Using Nodejs (placeholder)
- Needs: `Redis` icon component

### 5. **JavaScript**

- Used for: JavaScript skill
- Current: Using Nodejs (placeholder)
- Needs: `Javascript` icon component

### 6. **Tailwind CSS**

- Used for: Tailwind CSS skill
- Current: Using Postgresql (WRONG)
- Needs: `Tailwindcss` icon component

### 7. **Git**

- Used for: Git skill
- Current: Using Golang (WRONG)
- Needs: `Git` icon component

### 8. **Linux**

- Used for: Linux skill
- Current: Using Kubernetes (WRONG)
- Needs: `Linux` icon component

### 9. **AWS**

- Used for: AWS skill
- Current: Using Java (WRONG)
- Needs: `Aws` icon component

### 10. **Vercel**

- Used for: Vercel AI SDK skill
- Current: Using Csharp (WRONG)
- Needs: `Vercel` icon component

### 11. **Postman**

- Used for: Postman skill
- Current: Using Nodejs (placeholder)
- Needs: `Postman` icon component

### 12. **Jira**

- Used for: Jira skill
- Current: Using Nodejs (placeholder)
- Needs: `Jira` icon component

### 13. **VS Code**

- Used for: VS Code skill
- Current: Using Nodejs (placeholder)
- Needs: `Vscode` icon component

---

## 🎯 Required Locations & Import Names

All icons should be created at:

```
src/components/ui/svgs/
```

### Import statements needed in resume.tsx:

```tsx
import { Expressjs } from "@/components/ui/svgs/expressjs";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Mongoose } from "@/components/ui/svgs/mongoose";
import { Redis } from "@/components/ui/svgs/redis";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Git } from "@/components/ui/svgs/git";
import { Linux } from "@/components/ui/svgs/linux";
import { Aws } from "@/components/ui/svgs/aws";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Postman } from "@/components/ui/svgs/postman";
import { Jira } from "@/components/ui/svgs/jira";
import { Vscode } from "@/components/ui/svgs/vscode";
```

---

## 📁 Files to Create

```
src/components/ui/svgs/
├── expressjs.tsx          (NEW)
├── mongodb.tsx            (NEW)
├── mongoose.tsx           (NEW)
├── redis.tsx              (NEW)
├── javascript.tsx         (NEW)
├── tailwindcss.tsx        (NEW)
├── git.tsx                (NEW)
├── linux.tsx              (NEW)
├── aws.tsx                (NEW)
├── vercel.tsx             (NEW)
├── postman.tsx            (NEW)
├── jira.tsx               (NEW)
└── vscode.tsx             (NEW)
```

---

## ✅ Updates Needed in resume.tsx

### Current Skills Array (Lines 25-45):

Replace with correct icon references once components are created.

```tsx
skills: [
  { name: "Node.js", icon: Nodejs },
  { name: "Express.js", icon: Expressjs },        // ← Change from Nodejs
  { name: "MongoDB", icon: Mongodb },              // ← Change from Nodejs
  { name: "Mongoose", icon: Mongoose },            // ← Change from Nodejs
  { name: "Redis", icon: Redis },                  // ← Change from Nodejs
  { name: "JavaScript", icon: Javascript },        // ← Change from Nodejs
  { name: "Typescript", icon: Typescript },
  { name: "React", icon: ReactLight },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "Tailwind CSS", icon: Tailwindcss },     // ← Change from Postgresql
  { name: "Git", icon: Git },                      // ← Change from Golang
  { name: "Docker", icon: Docker },
  { name: "Linux", icon: Linux },                  // ← Change from Kubernetes
  { name: "AWS", icon: Aws },                      // ← Change from Java
  { name: "Vercel AI SDK", icon: Vercel },         // ← Change from Csharp
  { name: "Postman", icon: Postman },              // ← Change from Nodejs
  { name: "Jira", icon: Jira },                    // ← Change from Nodejs
  { name: "VS Code", icon: Vscode },               // ← Change from Nodejs
],
```

---

## 🚀 Next Steps

1. ✅ **Create all 13 SVG icon components** in `src/components/ui/svgs/`
2. ✅ **Update imports** in `src/data/resume.tsx`
3. ✅ **Replace icon references** in the skills array

Would you like me to:

- Create the SVG icon templates for these 13 components?
- Update the resume.tsx file with the new imports and mappings?
- Use Lucide React icons instead for quick implementation?
