# CRM v2 Product Roadmap
## Student Networking CRM for Investment Banking

*Last Updated: January 26, 2026*

---

## 🎯 Vision
The go-to CRM for students breaking into investment banking — helping them organize contacts, track applications, and stay on top of networking with intelligent automation.

---

## ✅ Phase 0: Foundation (COMPLETE)
*Core infrastructure and basic features*

- [x] User authentication (register, login, password reset)
- [x] Contact management with detailed profiles
- [x] Company tracking
- [x] Meeting scheduling & logging
- [x] Email management (staging, templates, campaigns)
- [x] Interview tracking
- [x] Application tracking
- [x] Internship tracking
- [x] Calendar view
- [x] User settings
- [x] Legal pages (Privacy, Terms, CCPA, etc.)
- [x] Onboarding quiz (data collection)
- [x] Dashboard with basic analytics
- [x] Railway deployment (backend, frontend, Postgres)

---

## 🚧 Phase 1: Email Integration (IN PROGRESS)
*Q1 2026 — Connect with users' actual email workflows*

### Gmail Integration
- [x] OAuth 2.0 setup with Google Cloud
- [ ] Email sync (fetch sent/received emails)
- [ ] Auto-link emails to contacts
- [ ] Email composition from within CRM
- [ ] Thread view for conversation history

### Outlook Integration
- [ ] OAuth 2.0 setup with Microsoft Azure
- [ ] Email sync
- [ ] Auto-link to contacts
- [ ] Compose & send

### Email Intelligence
- [ ] Auto-extract contacts from email signatures
- [ ] Detect follow-up opportunities
- [ ] Smart email templates with merge fields

---

## 📅 Phase 2: Smart Follow-ups & Reminders
*Q2 2026 — Never drop the ball on networking*

### Follow-up Engine
- [ ] Configurable follow-up cadences (use onboarding quiz data!)
- [ ] Smart reminders based on last contact date
- [ ] "Going cold" warnings for neglected contacts
- [ ] Weekly digest: who to reach out to

### Meeting Prep
- [ ] Auto-generate briefing before meetings
- [ ] Pull recent news about contact's company
- [ ] Show conversation history summary
- [ ] Suggested talking points

### Calendar Integration
- [ ] Google Calendar sync
- [ ] Outlook Calendar sync
- [ ] Auto-log meetings from calendar
- [ ] Coffee chat scheduling assistant

---

## 📊 Phase 3: Application Tracking 2.0
*Q3 2026 — Track the full recruiting journey*

### Enhanced Pipeline
- [ ] Kanban board view for applications
- [ ] Custom stages per firm type (IB, PE, HF, etc.)
- [ ] Deadline tracking with alerts
- [ ] Document storage (resumes, cover letters per firm)

### Interview Prep
- [ ] Behavioral question bank
- [ ] Technical question tracker (what they asked)
- [ ] Firm-specific prep notes
- [ ] Mock interview scheduling

### Recruiting Timeline
- [ ] Firm-by-firm recruiting calendar
- [ ] "Applications opening soon" alerts
- [ ] Historical data: when firms recruit

---

## 🤖 Phase 4: AI Features
*Q4 2026 — Intelligence layer*

### Smart Suggestions
- [ ] Contact recommendations (who to network with)
- [ ] Optimal outreach timing
- [ ] Email tone & length suggestions
- [ ] "Similar to contacts you've had success with"

### Auto-Drafting
- [ ] AI-generated cold outreach drafts
- [ ] Follow-up email suggestions
- [ ] Thank-you note templates
- [ ] LinkedIn message drafts

### Analytics & Insights
- [ ] Response rate tracking
- [ ] Best performing email templates
- [ ] Networking ROI (contacts → interviews → offers)
- [ ] Weekly progress reports

---

## 🌟 Phase 5: Community & Growth
*2027 — Scale and network effects*

### Sharing & Collaboration
- [ ] Share contact lists with trusted friends
- [ ] Crowdsourced firm profiles
- [ ] Interview question database (community-contributed)
- [ ] Success story templates

### Mobile App
- [ ] iOS app (React Native)
- [ ] Android app
- [ ] Quick contact add after coffee chats
- [ ] Business card scanner

### Integrations
- [ ] LinkedIn profile import
- [ ] Handshake integration
- [ ] WallStreetOasis/M&I links
- [ ] Calendar embed widgets

---

## 🎯 Success Metrics

| Metric | Target |
|--------|--------|
| Weekly Active Users | Track growth |
| Contacts per user | 50+ |
| Follow-up completion rate | 80%+ |
| Email open rate (campaigns) | 40%+ |
| Interview conversion rate | Track improvement |

---

## 🏃 Current Sprint Focus

**Now:** Gmail Integration
- Complete email sync and auto-linking
- Test with beta users (pkangsubs@gmail.com)
- Fix any OAuth flow issues

**Next:** Follow-up engine MVP
- Basic reminder system
- Weekly digest email

---

## 💡 Future Ideas (Backlog)

- Browser extension for LinkedIn
- Referral tracking
- Salary/offer comparison tool
- Alumni directory integration
- Networking event discovery
- Video call integration (Zoom links)
- Voice memo → contact notes
- SMS/WhatsApp integration

---

## 📝 Notes

- Onboarding quiz already collects user preferences for follow-up timing — use this data in Phase 2!
- Railway hosting is set up and working
- Gmail OAuth is in "Testing" mode — needs verification for production launch

---

*This roadmap is a living document. Update as priorities shift.*
