# basis.care — Website Build Spec (v2, Phase 1 storefront)

> **Pair with:** Basis Brand Book (voice, visual system, claims bank). Load both into Cursor; Brand Book as reference, this as the task.
> **Mission:** rebuild basis.care from the v1.2 protocol-heavy/longevity-platform version into a premium, high-converting GLP-1 storefront on Fuse. Premium but commercially clear. The site must answer, within ~5 seconds: *what is this, why is it different, how do I start, what happens next, why buy more than a month.*

---

## 1. Objectives & success metrics
- **Primary KPI:** assessment-start rate (visitors → intake started) and approved-checkout rate.
- **Secondary:** AOV (driven by 3-month plan mix), CAC payback, mobile bounce, time-to-first-CTA.
- **Design intent:** maximize clarity and trust; remove every step between "interested" and "Start assessment."
- **Non-goals (Phase 1):** education hub, longevity ecosystem, portal/dashboard depth, labs storytelling.

## 2. Keep / Cut
**Keep:** GLP-1 hero offer · 3-month/quarterly plan anchor · provider-review trust language · U.S. pharmacy fulfillment · light protocol language · access-vs-protocol comparison · FAQ/compliance trust · abandoned-cart & partial-intake recovery · server-side attribution / GHL integration · peptides/longevity/hormone/recovery as secondary, eligibility-gated tracks.
**Cut/demote:** heavy longevity ecosystem · labs/biomarkers as a major promise · portal/tracking depth · "not a storefront, a care system" framing · broad treatment architecture · Healthspan-style meds/program/lab/supplement taxonomy · membership-first framing.

---

## 3. Information architecture / sitemap
- **Home** (`/`)
- **How it works** (`/how-it-works`)
- **Plans & pricing** (`/plans`)
- **Basis Metabolic** (`/metabolic`) — the GLP-1 product/detail page (primary)
- **Protocols index** (`/protocols`) — light grid; secondary tracks
- **FAQ** (`/faq`)
- **About** (`/about`)
- **Support / Contact** (`/support`)
- **Legal:** Terms (`/terms`), Privacy (`/privacy`), Telehealth Consent (`/consent`)
- **Assessment** → links into the **Fuse intake** (not a Basis-built page; tracked handoff)
- *(Optional later: `/blog` for SEO — Phase 2)*

Primary conversion path: any page → "Start assessment" → Fuse intake → provider review → checkout.

---

## 4. Global elements

**Header (sticky):** logo (left) · nav: Plans · How it works · Protocols · FAQ · **[Start assessment]** (accent button, right). Mobile: logo + hamburger + persistent "Start" button; nav collapses, CTA always visible.

**Footer:** brand line + one-liner; columns: Protocols (Metabolic, others), Company (About, Support), Legal (Terms, Privacy, Consent); trust row (Licensed providers · U.S. pharmacies · LegitScript seal placeholder); compliance disclaimer block; copyright.

**Persistent CTA:** sticky "Start assessment" button on mobile (bottom bar) once user scrolls past hero.

**Announcement bar (optional, off by default):** reserve for a genuine, compliant message only (e.g., "Now serving [states]"). No fake urgency.

---

## 5. Homepage — section-by-section spec

> For each: **Goal · Layout · Copy (with A/B where useful) · Components · CRO rationale · Mobile.**

### 5.1 Hero
- **Goal:** instant category + credibility + CTA.
- **Layout:** left-aligned headline/subhead/CTAs; right or background a calm premium visual (clean lifestyle or abstract clinical texture — not a syringe/scale). Trust microcopy under CTAs.
- **Copy — H1 (A):** Premium GLP-1 care, guided by licensed providers.
  **H1 (B, test):** GLP-1 care, structured as a physician-guided protocol.
- **Subhead:** Basis offers physician-guided GLP-1 protocols for weight, appetite, and metabolic health — prescribed online if clinically appropriate and fulfilled through U.S. pharmacies. Start your assessment in about 10 minutes.
- **CTAs:** Primary `Start assessment` · Secondary `View plans`.
- **Microcopy:** Licensed provider review · No insurance needed · Eligibility required · Cancel anytime.
- **CRO:** category clear in H1; risk-reducers in microcopy; two CTAs (action + price-shopper).
- **Mobile:** headline ≤2 lines; CTA above the fold; visual below or as subtle bg.

### 5.2 Trust strip
- **Goal:** immediate legitimacy.
- **Copy (icons + label):** Licensed provider review · Prescribed if clinically appropriate · U.S. pharmacy fulfillment · Ongoing refill support.
- **Mobile:** 2×2 grid.

### 5.3 Credibility / how it's different (short)
- **Goal:** premium-vs-vending-machine in one glance, before the offer.
- **Copy header:** GLP-1 care, done properly.
- **3 points:** "A provider reviews you — not an algorithm." · "A protocol with dosing and refills — not a one-off script." · "Transparent pricing and U.S. pharmacies — no surprises."
- **CRO:** frames the premium justification early.

### 5.4 Basis Metabolic (the offer)
- **Goal:** present the hero product concretely.
- **Layout:** product-style block — name, one-line promise, "what's included" list, CTA, supporting visual.
- **Copy header:** Start with Basis Metabolic.
- **Subhead:** A physician-guided GLP-1 protocol for weight, appetite regulation, and metabolic health.
- **Includes:** online intake · provider eligibility review · GLP-1 prescription if appropriate · personalized dosing guidance · U.S. pharmacy fulfillment · refill support · optional multi-month protocol.
- **CTA:** `Start assessment`.

### 5.5 Plans (conversion engine)
- **Goal:** drive 3-month selection; make pricing obvious and safe.
- **Layout:** 3 cards side by side; **3-Month pre-selected + "Recommended" badge + subtle highlight border.** Per-month price prominent; total secondary; savings callout on 3-month.
- **Copy:**
  - *Monthly Protocol* — Start with flexibility. `$[X]/mo` · billed monthly · cancel anytime.
  - *3-Month Protocol — Recommended* — Built for continuity and better value. `$[Y]` (`$[Y/3]/mo`) · one checkout · fewer interruptions · **save [Z]% vs monthly.**
  - *6-Month Protocol* — Best per-month price. `$[W]` (`$[W/6]/mo`). *(or "Coming soon")*
- **Under plans:** Treatment and supply are subject to provider review, eligibility, and prescription decisions. You're only charged if a provider determines treatment is appropriate.
- **CRO:** anchoring (3-month between monthly and 6-month), per-month framing, risk reversal ("only charged if approved"), single clear CTA per card.
- **Mobile:** stack with 3-Month first/highlighted.

### 5.6 How it works
- **Goal:** remove process uncertainty.
- **Copy header:** How Basis works.
- **Steps:** 1) Complete your online intake (~10 min). 2) A licensed provider reviews your eligibility. 3) Prescription issued if clinically appropriate. 4) Medication ships from a U.S. pharmacy. 5) Continue with refills and support.
- **CTA:** `Start assessment`. **Mobile:** vertical stepper.

### 5.7 Comparison
- **Goal:** justify premium; create the contrast.
- **Copy header:** Access is not the same as a protocol.
- **Generic GLP-1 access:** medication-first · limited continuity · price-led · minimal support · monthly-only mindset.
- **Basis:** physician-guided protocol · personalized dosing · multi-month options · refill support · premium experience · built for continuity.
- **Mobile:** two stacked cards (generic muted, Basis emphasized).

### 5.8 Secondary protocols
- **Goal:** signal range without diluting the GLP-1 focus.
- **Copy header:** Built beyond one medication.
- **Cards (short):** GLP-1 / Metabolic *(featured)* · Longevity Support · Hormone Support · Recovery / Performance · Peptide Protocols.
- **Disclaimer:** Protocol availability varies by eligibility, provider review, clinical availability, and applicable regulations.

### 5.9 FAQ teaser
- 4–5 top questions in an accordion; "See all FAQs" → `/faq`.

### 5.10 Final CTA band
- **Header:** Start with Basis Metabolic.
- **Sub:** Take the assessment to see whether physician-guided GLP-1 care may be appropriate for you.
- **CTA:** `Start assessment` · **Microcopy:** ~10 minutes · No insurance needed · No commitment until you're approved.

### 5.11 Footer — per §4.

---

## 6. Key page specs

### 6.1 Basis Metabolic (`/metabolic`)
Hero (GLP-1 promise + CTA) → what it is / who it's for → what's included → how dosing/titration works (light) → plans (reuse plan cards) → safety & eligibility (compliant) → FAQ subset → final CTA. No outcome guarantees.

### 6.2 Plans & pricing (`/plans`)
Full plan comparison table (features × Monthly/3-Month/6-Month), 3-Month highlighted; "what's included in every plan" (provider review, refills, support); pricing FAQ (billing, cancellation, what's charged when); risk-reversal restated; CTA.
**Plan card anatomy:** name · per-month price (large) · total · savings badge · 1-line value · included bullets · `Start assessment`.

### 6.3 How it works (`/how-it-works`)
Expanded 5 steps, a sentence each + timing expectations + "what if I'm not eligible" (honest) + CTA.

### 6.4 FAQ (`/faq`) — full answers
- **Is GLP-1 prescribed automatically?** No. A licensed provider reviews your intake and prescribes only if treatment is clinically appropriate.
- **Who reviews my information?** Licensed U.S. providers.
- **Where do medications come from?** Licensed U.S. pharmacies.
- **What does "if clinically appropriate" mean?** The provider decides whether GLP-1 treatment fits your health history and goals. Not everyone is eligible.
- **Do I need insurance?** No — Basis is cash-pay with transparent pricing.
- **What does it cost?** Plans start at `$[X]/mo`; the 3-month protocol is the best value. You're only charged if approved.
- **Monthly or 3-month?** Either. The 3-month protocol is designed for continuity and better value.
- **Can I cancel?** Yes, anytime.
- **Is it safe? Side effects?** GLP-1 medications are prescription drugs with possible side effects. Your provider reviews your history and advises what to expect.
- **How fast does it ship?** Typically within `[X]` business days of provider approval.
- **Are peptides/other protocols available?** Select protocols are available by provider review, subject to eligibility and regulations.
- **What happens after I submit my assessment?** A provider reviews it; if appropriate, your prescription is sent to a U.S. pharmacy and shipped, with ongoing refill support.

### 6.5 About (`/about`)
Premium, brief, credible: the "why" (GLP-1 should be done properly — provider-led, structured, premium) without overclaiming or naming sensitive specifics. Founder/operator credibility stated soberly. No fluff.

### 6.6 Support (`/support`)
Contact method(s), hours, "for medical questions, message your provider in the pharmacy/portal," not-for-emergencies notice.

### 6.7 Legal
Terms, Privacy, Telehealth Consent — placeholders supplied by counsel/LegitScript; linked in footer + intake.

---

## 7. The assessment / funnel handoff
- "Start assessment" → **Fuse intake** (Basis doesn't build the clinical intake).
- **Pre-intake microcopy (on click / interstitial):** "Next, a few questions about your health (~10 minutes). A licensed provider will review your answers. You won't be charged unless treatment is approved."
- **Post-submit expectation:** confirmation + "what happens next" (provider review timeline, how they'll hear back).
- Carry brand continuity into Fuse where the platform allows (logo/colors), so the handoff doesn't feel like leaving Basis.

---

## 8. Conversion / CRO system
- **Above the fold:** category + credibility + CTA, always.
- **CTA hierarchy:** one primary verb everywhere — `Start assessment`. Secondary `View plans` for shoppers.
- **Risk reversal (repeat ≥3×):** "only charged if approved," "cancel anytime," "no insurance needed."
- **Trust stack (repeat):** licensed providers · U.S. pharmacies · provider review.
- **Anchoring:** 3-month framed as the smart middle; per-month pricing.
- **Objection handling:** map each persona objection (Brand Book §3) to a section (hero microcopy, comparison, FAQ).
- **No dark patterns / no fake urgency / no fake reviews.** Premium trust beats pressure.
- **Friction audit:** minimize clicks to intake; sticky mobile CTA; fast load.

---

## 9. Lifecycle / recovery copy (the acquisition-economics levers)
> These flows live in GHL/Fuse but the copy belongs here. Keep human, low-pressure, compliant.

- **Abandoned checkout — email 1 (1 hr):** Subj: "Your Basis assessment is waiting." Body: "You're a few minutes from a provider review. Pick up where you left off — you won't be charged unless treatment is approved. [Resume]"
- **Abandoned checkout — SMS (3 hr):** "Your Basis assessment is still saved. Finish in ~5 min — only charged if approved: [link]"
- **Partial intake — email (24 hr):** "Still thinking it over? Here's how Basis works and what to expect. Resume anytime: [link]"
- **Post-approval onboarding — email:** "You're approved. Here's what happens next: shipping timing, how to reach your provider, and how refills work."
- **Refill reminder (pre-runout):** "Time to refill your Basis protocol so you don't have a gap. [Refill]"
- **Win-back (lapsed):** "Ready to restart your protocol? A provider can review you again in minutes. [Restart]"

---

## 10. Analytics & attribution event schema
> Fire **server-side** through the Fuse → GHL → Meta (CAPI) path. Pass no PHI to Meta. Confirm exact event support on the partner/API call.

| Event | Fires when | Key params |
|---|---|---|
| `page_view` | each page | path, referrer, utm_* |
| `cta_click` | any "Start assessment" | location (hero/plans/etc.) |
| `assessment_start` | intake begins | utm_*, landing_path |
| `assessment_complete` | intake submitted | — |
| `plan_selected` | plan chosen | plan, duration_months |
| `checkout_start` | checkout begins | plan, value |
| `purchase` | order completes | value, plan, duration_months |
| `refill` / `subscription_renewal` | recurring order | value, plan |
- **UTM discipline:** every ad URL tagged (source/medium/campaign/content). Map `purchase` value + `duration_months` back to Meta to optimize for high-AOV/quarterly buyers, not just first purchases.

---

## 11. SEO & metadata
- **Home title:** "Basis — Premium GLP-1 Care, Physician-Guided" · meta: "Physician-guided GLP-1 protocols, prescribed online if clinically appropriate. U.S. providers and pharmacies. Start your assessment."
- Unique title/meta per page; one H1 per page; semantic headings.
- Schema: Organization, FAQPage (on `/faq`), Product/Offer (on plans, carefully/compliantly).
- Keyword direction (organic, later): "online GLP-1," "physician-guided GLP-1," "[medication] online prescription," "GLP-1 telehealth." No keyword-stuffing; compliance first.

## 12. Technical / performance / accessibility
- **Stack:** Next.js/React (current), Tailwind; component-driven.
- **Performance budget:** LCP < 2.5s mobile; optimized images; minimal JS; no heavy sliders.
- **Mobile-first:** all layouts designed mobile-up; sticky CTA; tap targets ≥44px.
- **Accessibility:** WCAG AA contrast, labeled inputs, visible focus, alt text, keyboard nav.
- **Analytics:** event layer per §10; consent/cookie banner as required.

## 13. Microcopy bank
- **Buttons:** `Start assessment` · `View plans` · `Resume assessment` · `See all FAQs`.
- **Form labels:** plain ("Your email"), helper text under field.
- **Errors:** calm, blame-free ("That email doesn't look right — mind checking?").
- **Loading:** "Saving your progress…" / "One moment…".
- **Empty/confirmation:** "You're all set — a provider will review your assessment shortly."
- **Pre-charge reassurance (near any payment):** "You won't be charged unless a provider approves treatment."

## 14. Design direction (full system in Brand Book §9)
Premium clinical: warm off-white background, deep ink primary, single restrained accent, editorial serif headlines + clean sans body, generous whitespace, premium cards, subtle motion. Avoid: med-spa glam, supplement aesthetics, lab/biomarker dashboards, dark longevity-platform UI, fake testimonials, aggressive claims, clutter above the fold.

## 15. Founder placeholders (fill before launch)
Plan prices + savings % (Fuse catalog margins) · states licensed/operating · exact medication naming allowed (per pharmacy + LegitScript) · shipping timeframe · provider/MSO + legal copy · LegitScript seal · Fuse intake URL + any brandable handoff settings.

---

## 16. Cursor build prompt (paste-ready)

> Rebuild basis.care from the current v1.2 protocol-heavy/longevity-platform version into a premium, high-converting GLP-1 storefront for Phase 1, using the attached Basis Brand Book for voice, visual system, and claims rules.
>
> **Strategy:** Basis is launching as a premium telehealth brand offering physician-guided GLP-1 (and light, eligibility-gated longevity/peptide) protocols, powered by Fuse. The site must prove paid acquisition: GLP-1-forward, offer-clear, assessment-first, conversion-oriented — while staying premium (never cheap, med-spa, or supplement-like). Do NOT present it as a longevity clinic, membership platform, or biomarker/labs care system.
>
> **Build the pages in §3 (sitemap)** with the global header/footer in §4 and the homepage sections in §5 (Hero → Trust strip → Credibility → Basis Metabolic → Plans → How it works → Comparison → Secondary protocols → FAQ teaser → Final CTA). Use the exact copy provided; where A/B variants are given, implement variant A and leave variant B as a comment. Anchor the **3-Month plan** (pre-selected, "Recommended" badge, highlight). Implement the Plans, Basis Metabolic, How it works, FAQ (full answers), About, Support, and Legal pages per §6.
>
> **Positioning line:** "Premium GLP-1 care, structured as a physician-guided protocol." Light protocol language; never imply guaranteed prescription, guaranteed results, or free availability of restricted peptides. Use "if clinically appropriate," "subject to provider review," "eligibility required," "U.S. pharmacy fulfillment."
>
> **Every primary CTA = "Start assessment,"** linking to the Fuse intake URL (placeholder env var). Implement the analytics event layer in §10 (server-side friendly, no PHI to Meta) and wire abandoned-cart/partial-intake hooks. Mobile-first, fast (LCP <2.5s), WCAG AA, sticky mobile CTA.
>
> **Visual:** premium clinical — warm off-white bg, deep ink primary, one restrained accent, editorial serif headlines (e.g., Fraunces/Newsreader) + clean sans body (e.g., Inter), generous whitespace, premium cards, subtle motion. Leave prices, states, medication naming, shipping, and legal copy as clearly-marked placeholders.
