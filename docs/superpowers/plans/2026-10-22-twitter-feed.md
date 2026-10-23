# Homepage Twitter Feed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the live @maximustweetr timeline beside the homepage sections after the hero, inside a terminal card.

**Architecture:** The homepage under the hero becomes a two-column grid from `lg` up. A new `TwitterFeed` component renders X's official timeline widget inside the existing publication-card frame. `Section` gains a `contained` prop so those sections stay inside the left column. The browser loads `widgets.js` after an inline script sets the iframe height. There is no API token and no build-time fetch.

**Tech Stack:** Astro 5, Tailwind CSS 3, X timeline widget (`https://platform.twitter.com/widgets.js`).

## Global Constraints

- Homepage only. The ASCII hero stays full width above the feed.
- Do not add an X link to the navbar. Do not change `NAV_LINKS` or `PROFILE_LINKS`.
- Do not call the X API. No new dependencies. No new test framework.
- `TWITTER_HANDLE` in `src/consts.ts` is `maximustweetr`. Profile URL is `https://x.com/maximustweetr`.
- From `lg` (1024px) up, the grid is `lg:grid-cols-[minmax(0,1fr)_22rem]`. The sections column is `min-w-0`.
- The feed `aside` classes are `order-1 lg:order-2 lg:sticky lg:top-20 lg:self-start lg:flex lg:flex-col lg:h-[calc(100vh-5rem)] lg:px-4 lg:py-10`.
- The sections wrapper classes are `order-2 lg:order-1 min-w-0`.
- Below `lg`, the card height is `h-[70vh]`. At `lg`, the card is `lg:h-auto lg:min-h-0 lg:flex-1`.
- Timeline anchor: `class="twitter-timeline"`, `data-theme="dark"`, `data-chrome="noheader nofooter noborders transparent"`, `data-link-color="#ffffff"`, visible text `Tweets by @maximustweetr`.
- Title and timeline anchor use `target="_blank"` and `rel="noopener noreferrer"`.
- One `is:inline` script sets `data-height` before appending `https://platform.twitter.com/widgets.js` once (`async`, `charset="utf-8"`). No separate widget script tag.
- Height: at `lg`, `Math.floor` of the card's `getBoundingClientRect().height`; below `lg`, `Math.floor(window.innerHeight * 0.7)`; if missing or below 200, use that `70vh` pixel fallback.
- `contained` on `Section` switches `w-screen` to `w-full`. Default stays `w-screen`.
- Commit as `droidmaximus <bhojanapalliavinash@gmail.com>` with `git -c user.name=... -c user.email=...`. Do not run `git config`.
- Implement on the current `main` branch. The user asked to implement here after the spec was committed on `main`.

---

### Task 1: Homepage Twitter timeline

The constant, the section prop, the card, and the homepage wrapper are one deliverable. A reviewer would not ship any of them alone.

**Files:**
- Modify: `src/consts.ts` (after `GITHUB_USERNAME`)
- Modify: `src/components/Section.astro`
- Create: `src/components/TwitterFeed.astro`
- Modify: `src/pages/index.astro`
- Test: `npm run build` and the Node check in Step 4. No new test file.

**Interfaces:**
- Consumes: `Section` props `title`, `full_screen`, `className`. Homepage section titles stay unchanged.
- Produces: `export const TWITTER_HANDLE = "maximustweetr"`. `TwitterFeed` takes no props. `Section` accepts `contained?: boolean` (default `false`).

- [x] **Step 1: Run the failing source check**

Run:

```bash
node --input-type=module -e '
import fs from "node:fs";
const consts = fs.readFileSync("src/consts.ts", "utf8");
const section = fs.readFileSync("src/components/Section.astro", "utf8");
const feed = fs.existsSync("src/components/TwitterFeed.astro")
  ? fs.readFileSync("src/components/TwitterFeed.astro", "utf8")
  : "";
const page = fs.readFileSync("src/pages/index.astro", "utf8");
const required = [
  [consts, "export const TWITTER_HANDLE = \"maximustweetr\";"],
  [section, "contained"],
  [section, "w-full"],
  [feed, "twitter-timeline"],
  [feed, "Tweets by @"],
  [feed, "platform.twitter.com/widgets.js"],
  [feed, "noheader nofooter noborders transparent"],
  [page, "TwitterFeed"],
  [page, "lg:grid-cols-[minmax(0,1fr)_22rem]"],
  [page, "contained"],
];
const missing = required.filter(([text, needle]) => !text.includes(needle));
if (missing.length === 0) {
  console.log("PASS");
} else {
  console.log("FAIL missing " + missing.length + " markers");
  process.exit(1);
}
'
```

Expected: exit 1 and `FAIL missing` before the feature exists.

- [x] **Step 2: Add the handle**

In `src/consts.ts`, immediately after `GITHUB_USERNAME`:

```ts
/** Public X/Twitter handle for the homepage timeline. */
export const TWITTER_HANDLE = "maximustweetr";
```

- [x] **Step 3: Let homepage sections leave `w-screen`**

Replace `src/components/Section.astro` with:

```astro
---
type Props = {
  title: string;
  full_screen?: boolean;
  className?: string;
  contained?: boolean;
};
const {
  title = "Section",
  full_screen = false,
  className = "",
  contained = false,
} = Astro.props;
const widthClass = contained ? "w-full" : "w-screen";
---

<section
  id={title.toLowerCase().replaceAll(" ", "")}
  class={`${full_screen ? "h-screen" : ""} px-4 py-10 ${widthClass} !overflow-x-hidden ${className}`}
>
  <div class="w-full grid place-items-center">
    <h2 class="text-4xl md:text-6xl text-center">{`<${title} />`}</h2>
  </div>
  <div class="w-full mt-10 px-4">
    <slot />
  </div>
</section>
```

- [x] **Step 4: Add the timeline card**

Create `src/components/TwitterFeed.astro`:

```astro
---
import { TWITTER_HANDLE } from "@/consts";

const profileUrl = `https://x.com/${TWITTER_HANDLE}`;
---

<div
  id="twitter-feed-card"
  class="flex h-[70vh] flex-col overflow-hidden rounded-lg border-2 border-white bg-gradient-to-br from-white/[0.001] to-white/[0.01] lg:h-auto lg:min-h-0 lg:flex-1"
>
  <div class="flex items-center justify-start bg-white/95 px-4 py-2">
    <div class="flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-black"></div>
      <div class="h-3 w-3 rounded-full bg-black"></div>
      <div class="h-3 w-3 rounded-full bg-black"></div>
    </div>
  </div>
  <div class="flex min-h-0 flex-1 flex-col p-6 tracking-wider">
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="mb-4 text-xl font-medium text-white"
    >
      <span class="ba mr-2 text-white/70">❯</span>@{TWITTER_HANDLE}
    </a>
    <div class="min-h-0 flex-1 overflow-hidden">
      <a
        id="twitter-feed-timeline"
        class="twitter-timeline"
        href={profileUrl}
        data-theme="dark"
        data-chrome="noheader nofooter noborders transparent"
        data-link-color="#ffffff"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweets by @{TWITTER_HANDLE}
      </a>
    </div>
  </div>
</div>
<script is:inline>
  (function () {
    var card = document.getElementById("twitter-feed-card");
    var anchor = document.getElementById("twitter-feed-timeline");
    if (!anchor) return;
    var isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    var height = 0;
    if (isDesktop && card) {
      height = Math.floor(card.getBoundingClientRect().height);
    } else {
      height = Math.floor(window.innerHeight * 0.7);
    }
    if (!height || height < 200) {
      height = Math.floor(window.innerHeight * 0.7);
    }
    anchor.setAttribute("data-height", String(height));
    var src = "https://platform.twitter.com/widgets.js";
    if (!document.querySelector('script[src="' + src + '"]')) {
      var widget = document.createElement("script");
      widget.src = src;
      widget.async = true;
      widget.charset = "utf-8";
      document.body.appendChild(widget);
    }
  })();
</script>
```

- [x] **Step 5: Place the feed under the hero**

In `src/pages/index.astro`:

- Import `TwitterFeed` from `@/components/TwitterFeed.astro`.
- After `<Hero />`, open the grid and render the feed first:

```astro
  <div class="lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
    <aside
      class="order-1 lg:order-2 lg:sticky lg:top-20 lg:self-start lg:flex lg:flex-col lg:h-[calc(100vh-5rem)] lg:px-4 lg:py-10"
    >
      <TwitterFeed />
    </aside>
    <div class="order-2 lg:order-1 min-w-0">
```

- Add `contained` to every homepage `Section` (`About Me`, `Publications`, `Work Experience`, `Education`, `Featured Projects`, `Technologies I Know`). Keep existing `full_screen={false}` values.
- Close the sections wrapper and the grid immediately before `</Layout>`:

```astro
    </div>
  </div>
</Layout>
```

- [x] **Step 6: Re-run the source check and the production build**

Run the Step 1 command. Expected: `PASS`.

Run: `npm run build`

Expected: exit 0.

- [x] **Step 7: Check the homepage in the browser**

Start `npm run dev`. At a viewport at least 1024px wide:

- The hero is full width.
- The feed card is beside the sections, under the hero.
- Scrolling the sections keeps the card under the navbar.
- The card scrolls away at the footer.
- The card shows the live timeline or the `Tweets by @maximustweetr` link.

At a phone width (390px):

- The feed is a block directly under the hero.
- Later sections are full width.
- The card is `70vh` tall.

- [x] **Step 8: Commit**

```bash
git add src/consts.ts src/components/Section.astro src/components/TwitterFeed.astro src/pages/index.astro docs/superpowers/plans/2026-10-22-twitter-feed.md
git -c user.name='droidmaximus' -c user.email='bhojanapalliavinash@gmail.com' commit -m "$(cat <<'EOF'
Add a live Twitter timeline beside the homepage sections.

EOF
)"
```

Do not commit `.superpowers/`.
