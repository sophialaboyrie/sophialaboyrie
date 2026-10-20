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
      "How I designed and built this site with AI: the decisions I owned, the parts I delegated, and what I'd do differently.",
    tags: ["AI-assisted design", "Process", "Front-end"],
    color: "peach",
    type: "Design & build",
    context: "Personal project",
    format: "Live website",
    timeline: "2026",
    sections: [
      {
        label: "The brief",
        heading: "A portfolio I could keep editing myself",
        body: [
          "I wanted a site that shows how I think, not only what I've made, and that I could update myself without a CMS or a build step.",
          "<em>Draft note: replace this with your own words.</em>"
        ]
      },
      {
        label: "Working with AI",
        heading: "Describe the feel, then steer",
        body: [
          "I started by describing the mood I wanted. The AI asked me about colour, type and motion, then proposed three clearly different directions to choose from.",
          "I picked the warmest one, then reviewed and refined the result until it felt like me."
        ]
      },
      {
        label: "Decisions vs. delegation",
        heading: "What I owned, what I handed over",
        body: [
          "<strong>I decided:</strong> the direction, the content, what to show and what to cut.",
          "<strong>AI helped with:</strong> structure, accessible markup, responsive layout and first-draft code."
        ]
      },
      {
        label: "Reflection",
        heading: "What I'd take from this",
        body: ["Add your reflections here: what worked, what you had to correct, and what you learned."]
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
  },
  {
    slug: "example-project-two",
    title: "Example case study: AI-focused project",
    summary:
      "Placeholder for a project about designing with or for AI, such as interaction design, trust, or explainability.",
    tags: ["AI", "Interaction design"],
    color: "mint",
    type: "Interaction design · AI",
    context: "MSc project",
    format: "Concept",
    timeline: "6 weeks · 2026",
    sections: [
      { label: "The challenge", heading: "What made this interesting", body: ["Describe the project, your role, and what made it hard or novel."] },
      { label: "The solution", heading: "What I designed", body: ["What did you design, and why does it work?"] }
    ]
  }
];
