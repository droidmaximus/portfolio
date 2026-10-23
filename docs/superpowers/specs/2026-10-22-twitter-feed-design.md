# Homepage Twitter feed

## Purpose

Visitors can read the live @maximustweetr timeline while they read the portfolio. The feed is a live X timeline inside a terminal card that matches the existing publication cards.

## Scope

The feed appears on the homepage only. The ASCII hero stays full width above it. The navbar and footer stay as they are. No X link is added to the navbar. Tweets are not redrawn in the site font, and the site does not call the X API.

## Layout

From the `lg` breakpoint (1024px) up, the homepage under the hero is two columns: the existing sections on the left, and a `22rem` feed on the right. The columns are a grid: `lg:grid-cols-[minmax(0,1fr)_22rem]`. The sections column is `min-w-0` so wide cards stay inside it.

The right column is an `aside` with `lg:sticky lg:top-20 lg:self-start lg:flex lg:flex-col lg:h-[calc(100vh-5rem)] lg:px-4 lg:py-10`. `top-20` is the same `5rem` clearance `main` already uses on desktop (`md:pt-20`). `py-10` matches `Section`, so the card's top lines up with the first section heading. The card is `lg:flex-1 lg:min-h-0` and fills the aside's content box. The timeline scrolls inside the card. The aside is inside the homepage column wrapper, which ends before the footer in `Layout.astro`, so the card scrolls away with the footer.

`Section` currently sets `w-screen` on the section element. Homepage sections inside the left column pass a new `contained` prop. When `contained` is true, that width is `w-full` instead of `w-screen`. The default stays `w-screen`. The hero is not a `Section` and stays outside the grid.

Below `lg`, including phones, the feed is a normal block directly under the hero, and the sections follow at full width. In the DOM the feed comes first and the sections second. The feed has `order-1 lg:order-2`. The sections wrapper has `order-2 lg:order-1`. The stacked card is not sticky and has no `py-10` viewport box. Its height is `h-[70vh]`, and the timeline scrolls inside it.

## Component and data flow

`TWITTER_HANDLE` in `src/consts.ts` is `maximustweetr`. The profile URL is `https://x.com/maximustweetr`.

`src/components/TwitterFeed.astro` renders one card using the publication-card frame: `border-2 border-white rounded-lg`, a white bar with three black dots, and the title `❯ @maximustweetr`. The title links to the profile URL. The title and the timeline anchor both use `target="_blank"` and `rel="noopener noreferrer"`.

Inside the card, an anchor points at the profile URL:

- `class="twitter-timeline"`
- `data-theme="dark"`
- `data-chrome="noheader nofooter noborders transparent"`
- `data-link-color="#ffffff"`
- visible text: `Tweets by @maximustweetr`

One `is:inline` script, and no separate widget script tag, sets `data-height` on that anchor before the widget loads:

- At `lg` and up, `Math.floor` of the card's `getBoundingClientRect().height`.
- Below `lg`, `Math.floor(window.innerHeight * 0.7)`.
- If the measured value is missing or below 200, `Math.floor(window.innerHeight * 0.7)`.

After that attribute is set, the same script appends `https://platform.twitter.com/widgets.js` once, with `async` and `charset="utf-8"`, and skips the append when that script tag is already on the page. `widgets.js` replaces the anchor with a live iframe. There is no build-time fetch and no API token. The card frame uses the site font. Text inside the iframe uses X's own type.

`src/pages/index.astro` places `TwitterFeed` in the right column described above and passes `contained` to every homepage `Section`.

## Failure behavior

The timeline anchor is real HTML. If `widgets.js` is blocked or fails to load, the anchor stays visible inside the card and links to `https://x.com/maximustweetr` with the text `Tweets by @maximustweetr`. There is no retry loop and no server-side proxy. If X returns an empty or unavailable timeline, that message shows inside the iframe and the card frame stays in place. The height script uses the `70vh` pixel fallback when it cannot measure the card.

## Testing

Check the homepage in the browser at a width of at least 1024px and at a phone width.

Desktop:

- The hero is full width.
- The feed sits beside the sections under the hero.
- While those sections scroll, the card stays under the navbar.
- The card scrolls away at the footer.
- The card shows the live @maximustweetr timeline, or the fallback link if the widget does not load.

Phone:

- The feed is its own block directly under the hero.
- Later sections are full width.
- The timeline scrolls inside a card `70vh` tall.

Run `npm run build` and confirm it succeeds. No new test framework and no new dependencies.

## Files

- `src/consts.ts` — add `TWITTER_HANDLE`
- `src/components/TwitterFeed.astro` — new card and widget
- `src/components/Section.astro` — add the `contained` prop
- `src/pages/index.astro` — two-column wrapper under the hero
