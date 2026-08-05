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
    slug: 'url-shortener-blog',
    title: 'Rate Limiter + URL Shortener',
    date: '2026-07-28',
    summary:
      'Spring Boot, Postgres, Redis caching, a homemade rate limiter and every error I hit on the way to 7,700+ requests/sec',
    tags: ['Backend Systems'],
  }
  // Add more posts here, e.g.:
  // {
  //   slug: 'tinycc-devlog',
  //   title: 'What LLVM hides: writing a codegen by hand',
  //   date: '2026-03-02',
  //   summary: 'A short devlog on tinycc-subset.',
  //   tags: ['Compilers', 'C'],
  // },
];
