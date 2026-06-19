# RepGST

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Express](https://img.shields.io/badge/Express.js-5-black?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?style=for-the-badge&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![TurboRepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=for-the-badge&logo=turborepo)
![Bun](https://img.shields.io/badge/Bun-Package_Manager-F9F1E1?style=for-the-badge&logo=bun)

**Modern GST Compliance Platform**

Enterprise-grade GST management platform inspired by EY DigiGST, built with Next.js, Express.js, PostgreSQL, and Turborepo.

</div>

---

## Overview

RepGST is a modern SaaS platform designed to simplify GST compliance for businesses.

It enables organizations to:

- Manage customers and suppliers
- Create sales and purchase invoices
- Calculate GST automatically
- Track Input Tax Credit (ITC)
- Generate GST return summaries
- Support multiple companies
- Manage users with role-based access
- Maintain audit logs and activity tracking

The project is inspired by enterprise products like:

- EY DigiGST
- Zoho Books
- Tally Prime
- ERPNext
- FreshBooks

---

# Architecture

```text
┌────────────────────────────┐
│        Next.js App         │
│      Marketing + App       │
└─────────────┬──────────────┘
              │
              ▼
┌────────────────────────────┐
│       Express.js API       │
│         TypeScript         │
└─────────────┬──────────────┘
              │
      ┌───────┴────────┐
      ▼                ▼
 PostgreSQL           Redis
      │
      ▼
    Prisma
```

---

# Tech Stack

## Frontend

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Zustand

## Backend

- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis

## DevOps

- Docker
- Turborepo
- Bun
- Cloudflare
- Traefik
- Azure VM

---

# Monorepo Structure

```text
repgst
│
├── apps
│   │
│   ├── web
│   │     Next.js frontend
│   │
│   └── api
│         Express backend
│
├── packages
│   │
│   ├── eslint-config
│   ├── typescript-config
│   ├── shared
│   └── constants
│
├── .github
├── turbo.json
├── bun.lock
├── package.json
└── README.md
```

---

# Features

## Authentication

- Email and password login
- JWT authentication
- Refresh token mechanism
- Protected routes

---

## Multi-tenancy

Every company has isolated data.

Supports:

- Multiple organizations
- Separate users
- Separate invoices
- Independent subscriptions

---

## Role-Based Access Control

### Super Admin

- Manage companies
- Manage plans
- View platform analytics

### Company Admin

- Manage company settings
- Invite users
- Manage invoices

### Accountant

- Create invoices
- Manage customers
- Manage suppliers

### Auditor

- Read-only access

### Viewer

- Dashboard access

---

## Master Management

### Parties

Supports:

- Customer
- Supplier
- Both

### Items

Supports:

- Products
- Services

---

## Invoice Management

### Sales Invoices

- Create invoices
- Tax calculations
- PDF generation

### Purchase Invoices

- Track expenses
- ITC calculations

---

## GST Calculations

Supports:

### CGST

Central GST

### SGST

State GST

### IGST

Inter-state GST

Automatic tax determination based on state.

---

## GST Returns

Supports:

- GSTR-1
- GSTR-3B

Features:

- Monthly summaries
- Output tax calculation
- Input tax credit calculation
- Net tax payable

---

## Subscription Management

Plans:

### Starter

- 1 Company
- 5 Users
- 1000 invoices/month

### Growth

- 5 Companies
- 25 Users
- 10000 invoices/month

### Enterprise

- Unlimited
- Dedicated support
- Custom integrations

---

## Audit Logs

Track:

- Invoice creation
- User activity
- Updates
- Deletions

---

# Database

Core tables:

```text
users
roles
company_users

companies

plans
subscriptions

parties
items

invoices
invoice_items

gst_returns

payments

activity_logs
notifications
```

---

# Pages

### Public

- Landing Page
- Pricing Page
- Login
- Register

### Super Admin

- Dashboard
- Companies
- Plans
- Payments

### Company Portal

- Dashboard
- Users
- Parties
- Items
- Invoices
- GST Dashboard
- Returns
- Billing
- Activity Logs

---

# Getting Started

## Prerequisites

- Bun >= 1.x
- PostgreSQL >= 17
- Node.js >= 22

---

## Clone

```bash
git clone https://github.com/yourusername/repgst.git

cd repgst
```

---

## Install Dependencies

```bash
bun install
```

---

## Environment Variables

### apps/api/.env

```env
PORT=8080

DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

REDIS_URL=
```

### apps/web/.env.local

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## Database

Generate Prisma client

```bash
bun run db:generate
```

Run migrations

```bash
bun run db:migrate
```

Seed database

```bash
bun run db:seed
```

---

# Development

Start all applications

```bash
bun dev
```

Run frontend

```bash
bun --filter web dev
```

Run backend

```bash
bun --filter api dev
```

---

# Build

```bash
bun run build
```

---

# Lint

```bash
bun run lint
```

---

# Format

```bash
bun run format
```

---

# Roadmap

## MVP

- [x] Authentication
- [x] Multi-tenancy
- [x] RBAC
- [x] Parties
- [x] Items
- [x] Invoices
- [x] GST Dashboard
- [x] GSTR Summary
- [x] Audit Logs

## V2

- [ ] E-Invoicing
- [ ] E-Way Bills
- [ ] GSTN Integration
- [ ] Reconciliation
- [ ] PDF Reports
- [ ] Email Notifications
- [ ] File Uploads
- [ ] Excel Import

## V3

- [ ] AI Assistant
- [ ] ERP Integrations
- [ ] Workflow Engine
- [ ] Analytics
- [ ] Mobile App

---

# License

MIT License

---

<div align="center">

Built with ❤️ using Next.js, Express.js, PostgreSQL and Bun.

</div>