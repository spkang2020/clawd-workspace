# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases  
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras
- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH
- home-server → 192.168.1.100, user: admin

### TTS
- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Workflow Preferences

### Coding Tasks
- **Handle directly** — small fixes, config, single-file changes, docs (DON'T default to Claude Code)
- **Coordinate first** — check active sessions before starting to avoid duplicate work
- **Claude Code** — ONLY for complex work (multi-file refactors, full page rewrites, deep debugging)
- **Claude Code timeout** — 5 hours (18000 seconds) to prevent premature kills
- **Browser** → Visual verification of UI changes
- **Track changes** — log significant changes to memory/worklog

### Live Narration (IMPORTANT)
- **Always narrate what you're doing** as you work — like Claude Code does
- Say what you're about to do BEFORE calling tools: "Reading the component to understand the structure..."
- Give context on your approach: "I'll rebuild this with split-view layout, add keyboard nav..."
- Report results: "Build passed, pushing to Railway..."
- This helps Peter follow along and catch issues early
- **All sessions/sub-agents must do this** — it's a global preference

### CRM Project Paths
- **Frontend:** `~/CRM-frontend` (GitHub repo, NOT ~/clawd/CRM-frontend)
- **Backend:** `~/CRM-backend` (GitHub repo, NOT ~/clawd/CRM-backend)
- **Branch:** `feature/gmail-integration-2.0`

### Railway Deployment
- **Dockerfile ENV vs ARG**: Never hardcode `ENV REACT_APP_*` in Dockerfile — use `ARG` with default so Railway env vars can override at build time
- **New environments need**: Firebase authorized domain, backend `FRONTEND_URL` for CORS, frontend `REACT_APP_API_URL` pointing to new backend
- **REACT_APP_* vars are build-time only** — changing them requires a full rebuild, not just restart
- **Verify deploys**: Check the JS bundle hash (`main.XXXXXX.js`) changes to confirm a new build actually shipped

### Changelog
- **After every CRM change**, append to `/home/peter-kang/changelog-2026-01-27.txt` (or current date's file)
- Format: `HH:MM AM/PM — Short Title\n  - Description of what changed`
- Sub-agents/spawned sessions must also write to this file
- If a new day starts, create a new file: `changelog-YYYY-MM-DD.txt`

### Scope
- Rules/preferences set in CRM Discord channels or main chat apply **globally** across all sessions
- **Auto-sync**: When workflow rules change, notify all active sessions immediately

---

Add whatever helps you do your job. This is your cheat sheet.
