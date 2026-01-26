# CRM Project Work Log

**READ THIS AT SESSION START. APPEND YOUR WORK WHEN DONE. NOTIFY OTHER SESSIONS.**

Sessions working on CRM:
- `#crm-project` — main CRM development channel
- `#v2` — feature brainstorming & ideas
- `#clawdbot` — general/overflow

---

## How to Use This File

1. **At session start**: Read this entire file
2. **After significant work**: Append to today's section
3. **Notify others**: `sessions_send` to active sessions with summary
4. **Format**: `### Session: #channel-name (HH:MM TZ)` then bullet points

---

## Quick Reference

| Item | Value |
|------|-------|
| Backend repo | `~/CRM-backend` |
| Frontend repo | `~/CRM-frontend` |
| Current branch | `feature/gmail-integration-2.0` (both) |
| Backend latest | `5851386` |
| Frontend latest | `73376f1e` |
| Ideas file | `~/clawd/IDEAS.md` (50 feature ideas) |

---

## Key Decisions & Context

- **Campaign emails not re-synced**: Intentional — they're logged with `source='campaign'` when sent
- **Status update pattern**: Use `try/finally` to guarantee campaign status updates
- **Modal widening**: Created reusable `.modal-wide` class (700px) via `className` prop
- **Timezone**: Auto-detected from browser, stored per-user

---

## Active Issues / TODOs

- [ ] Campaign status update — monitor if still fails sometimes
- [ ] Test auto-advance feature in production
- [ ] Consider implementing top IDEAS.md features

---

## 2026-01-26

### Session: #v2 (overnight)
- Generated 50 feature ideas → `~/clawd/IDEAS.md`
- Categories: Networking, Analytics, AI features, Mobile, Integrations, Career-specific, Email

### Session: #crm-project (00:29-01:12 EST)
- **Campaign emails**: Added `from_email` and `to_emails` capture
- **Auto-advance contacts**: "No Activity" → "Reached Out" on any communication (manual, sync, campaign)
- **Campaign sorting**: Separated "Ready to Send" / "Sent" sections with date sorting
- **Campaign status fix**: `try/finally` ensures status always updates to 'completed'
- **Email preview modal**: Fixed text cutoff — widened modal, added word-wrap
- **Modal component**: Added `className` prop for variants
- **Blog posts**: Wrote 10 IB recruiting posts → `~/clawd/ib-blog-posts.md`

### Session: #crm-project (09:42 EST)
- Set up cross-session continuity system (this file)
- Updated AGENTS.md with continuity protocol
- Notified all sessions

### Session: #clawdbot (09:45-13:35 EST)
- **Gmail OAuth**: Set up credentials and fixed localhost callback URL
- **Email campaign threading**: 
  - Added `thread_mode` column ('new' | 'reply') to campaigns
  - Added `selected_thread_id` to recipients for per-recipient thread selection
  - Preview shows full email history with selectable threads
  - **Reply mode now uses "Re: [original subject]"** instead of template subject
  - Fixed both `sendCampaign` and `sendSingleRecipient` functions
- **Unique campaign names**: Added unique constraint per user (migration 024)
- **Light mode fix**: Fixed navbar invisible on landing page (ios-theme.css nav override)
- **System setup**: PostgreSQL installed, passwordless sudo, cloudflare tunnels

**Latest commits:**
- Backend: `5851386` - check-name endpoint route fix
- Frontend: `73376f1e` - form-row alignment fix

**Additional work this session:**
- Live campaign name validation (red outline/text as you type)
- Fixed route ordering for /check-name endpoint
- Fixed form-row alignment when labels wrap

---

## Recent Features Shipped (Past Week)

### Email V2 System
- Gmail OAuth integration with sync
- Outlook/Microsoft integration
- Email templates with merge fields
- Mass email campaigns
- Email staging for review before import
- Reply tracking

### Analytics
- Comprehensive analytics API
- Response rate tracking
- Funnel visualization data

### UI/UX
- iOS/macOS theme
- Toast notifications (replaced alerts)
- Confirm dialogs (replaced window.confirm)
- Clickable rows in tables
- Thread preview in campaigns

### Infrastructure
- Soft deletes for data recovery
- TypeScript foundation
- Jest test foundation
- Timezone handling (per-user)

---

## Session Keys (for notifications)

```
#crm-project: agent:main:discord:channel:1465217021405954108
#v2: agent:main:discord:channel:1465214639330689241
#clawdbot: agent:main:discord:channel:1465046095989047606
```
