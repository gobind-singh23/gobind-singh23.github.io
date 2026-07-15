# Product Requirements Document (PRD)
Before making any code changes:

1. Read this document completely.

2. Inspect the repository.

3. Preserve useful content whenever practical.

4. Produce an implementation plan.

5. Wait for user approval before making architectural changes.

Do not make assumptions if the document is ambiguous.

Instead, ask clarifying questions.

When implementing:

- Think step-by-step.
- Keep components modular.
- Follow Astro best practices.
- Keep everything editable through markdown.

# Project: Gobind Singh --- Digital Home

Version: 1.0

## 1. Vision

Build a timeless personal website that serves as my digital home.

This is **not** a portfolio.

It is a living archive of my work, interests, ideas, travels, books,
research, photography and writing.

Someone visiting should leave feeling they know who I am, not merely
what technologies I use.

Design goals:

-   Calm
-   Premium
-   Minimal
-   Editorial
-   Fast
-   Timeless
-   Markdown-first

------------------------------------------------------------------------

# 2. About Me (Source of Truth)

Name: Gobind Singh

Current Role: Software Engineer at Google.

Education: B.E. Computer Science BITS Pilani

Primary Interests

-   Machine Learning
-   Large Language Models
-   Computer Vision
-   Distributed Systems
-   Systems Engineering
-   Healthcare AI
-   Product Engineering

Research

Worked on ECG Arrhythmia Detection under Prof. Sumeet Sourav at
CSIR-CEERI.

Professional Experience

-   Google
-   DeepTek AI

Personal Interests

-   Basketball
-   Reading
-   Poetry
-   Photography
-   Weekend travel
-   Writing long-form technical articles

Personality

Curious. Builder. Minimalist. Lifelong learner.

The website should communicate these traits naturally rather than
explicitly.

------------------------------------------------------------------------

# 3. Design Language

Inspirations

-   Apple
-   Linear
-   Vercel
-   Stripe Docs
-   Read.cv
-   Obsidian

Avoid:

-   Generic portfolio templates
-   Skill bars
-   Progress circles
-   Particle backgrounds
-   Typing animations
-   Overly bright gradients

Use

-   White space
-   Beautiful typography
-   Soft shadows
-   Rounded corners
-   Gentle motion
-   Strong hierarchy

------------------------------------------------------------------------

# 4. Tech Stack

Astro

Tailwind CSS

TypeScript

Astro Content Collections

MDX

Pagefind

Motion One

Lucide Icons

Shiki

GitHub Pages

GitHub Actions

No backend.

No database.

------------------------------------------------------------------------

# 5. Information Architecture

Home

Projects

Writing

Poetry

Photography

Books

Timeline

Now

Resume

Contact

Search

Every page should feel connected.

------------------------------------------------------------------------

# 6. Homepage

Hero:

Gobind Singh

Software Engineer. Researcher. Writer. Basketball Player.

Short paragraph introducing myself.

CTA buttons

Resume

GitHub

LinkedIn

Below hero:

Currently

Location

Working on

Reading

Learning

Planning

Playing

Automatically populated from a single content file.

Then:

Featured Project

Latest Writing

Latest Poem

Current Book

Photo of the Month

Latest Timeline Entry

------------------------------------------------------------------------

# 7. Projects

Every project is a case study.

Structure:

Problem

Context

Motivation

Architecture

Implementation

Challenges

Lessons Learned

Gallery

GitHub Repository

Related Writing

------------------------------------------------------------------------

# 8. Writing

Markdown-driven.

Features

Reading time

Syntax highlighting

TOC

Footnotes

Tags

Previous/Next

Related posts

RSS

------------------------------------------------------------------------

# 9. Poetry

Distraction-free reading.

Large typography.

Comfortable width.

No sidebar.

------------------------------------------------------------------------

# 10. Books

Sections

Currently Reading

Finished

Wishlist

Every book supports:

Title

Author

Cover

Progress

Review

Favorite Quotes

Notes

------------------------------------------------------------------------

# 11. Photography

Responsive masonry gallery.

Fullscreen modal.

Keyboard navigation.

EXIF support if available.

Location.

Story.

------------------------------------------------------------------------

# 12. Timeline

Chronological.

Education

Research

Internships

Career

Travel

Achievements

Publications

------------------------------------------------------------------------

# 13. Now

Inspired by Derek Sivers.

Editable from one markdown file.

------------------------------------------------------------------------

# 14. Command Palette

Highest priority feature.

Cmd/Ctrl + K

Search:

Pages

Projects

Articles

Poems

Books

Photos

Timeline

Commands

Toggle theme

Random poem

Random article

Open resume

Open GitHub

------------------------------------------------------------------------

# 15. Keyboard Shortcuts

?

Display help

G H

Home

G P

Projects

G W

Writing

G B

Books

Esc

Close dialogs

------------------------------------------------------------------------

# 16. Content Model

Everything must live in markdown.

Suggested folders

src/content/projects

src/content/writing

src/content/books

src/content/poetry

src/content/photos

src/content/timeline

src/content/now

------------------------------------------------------------------------

# 17. Existing Repository

The repository already contains an existing GitHub Pages website.

Before making changes:

-   Inspect every folder.
-   Preserve valuable content.
-   Migrate existing markdown if possible.
-   Reuse images.
-   Reuse resume.
-   Preserve URLs where practical.
-   Remove obsolete implementation freely.

The priority is preserving information, not preserving code.

------------------------------------------------------------------------

# 18. Performance

Target Lighthouse:

Performance: 100

Accessibility: 100

Best Practices: 100

SEO: 100

------------------------------------------------------------------------

# 19. Deployment

Deploy automatically to GitHub Pages through GitHub Actions.

------------------------------------------------------------------------

# 20. Non-goals

No backend.

No authentication.

No CMS initially.

No analytics beyond lightweight privacy-friendly option.

------------------------------------------------------------------------

# 21. Success Criteria

A visitor should spend several minutes exploring the website.

The experience should feel like browsing a beautifully organized
notebook.

The website should remain maintainable for the next decade by editing
markdown files only.
