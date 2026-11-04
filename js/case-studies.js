/*
  CASE STUDIES — edit this file to add or change your work.

  To add a case study: copy one block below, paste it into the list,
  and change the text. The homepage card and the full page are both
  created automatically. Newest/most important first.

  Top fields
    slug      short-url-name, lowercase, no spaces (used in the page link)
    title     the case study name
    summary   one or two sentences shown on the homepage card and page intro
    tags      short labels, e.g. ["UX research", "AI"]
    color     card tint: "peach" | "lilac" | "mint" | "sky" (all peach tones)

  Facts row (shown near the top of the full page — include the ones you want)
    type      e.g. "UX design · AI strategy"
    context   e.g. "MSc project · City, University of London"
    format    e.g. "0→1 prototype"
    timeline  e.g. "8 weeks · 2026"

  sections    the body of the case study, as a list of blocks.
              Each block can have:
                label    small eyebrow, e.g. "The problem"  -> shows as "01 — The problem"
                heading  the big bold headline for that section
                body     a string, or a list of strings (each becomes a paragraph).
                         You can use simple HTML like <strong>bold</strong> or <a href>.
              Sections are numbered automatically (01, 02, 03 …).

    image     (optional) hero image, e.g. "images/project.jpg"
    imageAlt  (required if you add an image) describe it for screen readers
*/
window.CASE_STUDIES = [
  {
    slug: "building-this-portfolio",
    title: "This portfolio is the case study",
    summary:
      "I designed and built this site in collaboration with AI, setting the direction and steering it through several redesigns while keeping the decisions my own. I wanted a portfolio that shows how I think and that I can keep editing myself, so the site itself became the case study.",
    tags: ["AI assisted design", "Design direction", "Front end"],
    color: "peach",
    type: "AI assisted design & build",
    context: "Personal project",
    format: "Live site · HTML, CSS & JS",
    timeline: "2026",
    sections: [
      {
        label: "The approach",
        heading: "Design by conversation",
        body: [
          "Instead of opening Figma, I started by describing the feeling I wanted, and the AI proposed three distinct directions rather than one. Choosing between real, rendered options made the decisions concrete, much closer to how I actually judge design. From there I kept steering: the type moved from a playful sans to a refined serif, the palette from pastel to crimson, and when I found a minimal editorial portfolio I loved, I pivoted the whole look in minutes by comparing full versions live. I owned the direction, content and taste, while AI handled the first drafts of the code, accessible markup and responsive layout. The skill wasn't writing code, it was knowing what I wanted and recognising when something wasn't right."
        ]
      },
      {
        label: "The outcome",
        heading: "A living, editable portfolio",
        body: [
          "The result is a fast, accessible, responsive site with light and dark modes, plus case studies I can add or edit myself in a single file. More than the artifact, it shows how I work with AI: as a design tool I direct, rather than a voice I defer to."
        ]
      },
      {
        label: "The reflection",
        heading: "What I'd take from this",
        body: [
          "Seeing options rendered live and early changed how fast and how confidently I could decide, and I'd bring that 'show me three' habit to any project.",
          "<em>Make this yours: add what surprised you, what you'd do differently, and what this taught you about designing with AI.</em>"
        ]
      }
    ]
  },
  {
    slug: "example-project-one",
    title: "Example case study: your project title",
    summary:
      "A one or two sentence hook: the problem you tackled and the outcome. Replace this placeholder with your real project.",
    tags: ["UX research", "Prototyping"],
    color: "lilac",
    type: "UX design",
    context: "MSc project",
    format: "Prototype",
    timeline: "8 weeks · 2026",
    sections: [
      { label: "The problem", heading: "What wasn't working", body: ["What problem were you solving? What did you learn about users?"] },
      { label: "The approach", heading: "How I tackled it", body: ["Research, ideation, testing. Show the key decisions you made and why."] },
      { label: "Outcome", heading: "What changed", body: ["What was the result? What did you learn?"] }
    ]
  }
];
