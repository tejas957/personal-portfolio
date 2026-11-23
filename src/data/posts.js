// ---- EDIT ME: one entry per blog post ----
//
// `slug` MUST match the filename (without .html) of the file you drop into
// src/pages/blog/. Example: slug: 'raft-lite-writeup' → the file must be
// src/pages/blog/raft-lite-writeup.html, and it will be served at
// /blog/raft-lite-writeup
//
// `slug` is also how you link a project to a post — see the `blogSlug`
// field on each project in src/pages/index.astro.

export const posts = [
  {
    slug: 'ta-studio-build-log',
    title: 'TA Studio',
    date: '2026-11-23',
    summary:
      'Replacing the UT CS TA staffing process while reading an old app I am not allowed to touch, and the four wrong guesses before the real fix',
    tags: ['Legacy Systems', 'Scraping'],
  },
  {
    slug: 'clinic-autopilot-build-log',
    title: 'Clinic Autopilot',
    date: '2026-11-23',
    summary:
      'An AI marketing app for small clinics, from a 400 on every AI call to the Meta permissions that hid Instagram',
    tags: ['Full Stack', 'Meta Graph API'],
  },
  {
    slug: 'jointscore-build-log',
    title: 'JointScore',
    date: '2026-11-23',
    summary:
      'A native iPhone app for knee and hip outcome surveys, Xcode errors I could only fix by pasting them back, and a voice that finally stopped sounding sad',
    tags: ['iOS', 'Swift'],
  },
  {
    slug: 'url-shortener-blog',
    title: 'Rate Limiter + URL Shortener',
    date: '2026-07-28',
    summary:
      'Spring Boot, Postgres, Redis caching, a homemade rate limiter and every error I hit on the way to 7,700+ requests/sec',
    tags: ['Backend Systems'],
  },
  // Add more posts here, e.g.:
  // {
  //   slug: 'tinycc-devlog',
  //   title: 'What LLVM hides: writing a codegen by hand',
  //   date: '2026-03-02',
  //   summary: 'A short devlog on tinycc-subset.',
  //   tags: ['Compilers', 'C'],
  // },
];
