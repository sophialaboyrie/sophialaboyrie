/*
  CASE STUDIES — edit this file to add or change your work.

  To add a case study: copy one block below, paste it into the list,
  and change the text. The homepage card and the full page are both
  created automatically. Newest/most important first.

  Fields
    slug     short-url-name, lowercase, no spaces (used in the page link)
    title    the case study name
    summary  one or two sentences shown on the homepage card
    tags     short labels, e.g. ["UX research", "AI"]
    year     e.g. "2026"
    role     your role
    duration e.g. "10 weeks"
    color    card tint: "lilac" | "peach" | "mint" | "sky"
    sections list of { heading, body } — body can be a string, or a list
             of strings (each becomes its own paragraph). You can use
             simple HTML such as <strong>bold</strong> or <a href="...">links</a>.
    image    (optional) path to a hero image, e.g. "images/my-project.jpg"
    imageAlt (required if you add an image) describe it for screen readers
*/
window.CASE_STUDIES = [
  {
    slug: "building-this-portfolio",
    title: "How I built this portfolio with AI",
    summary:
      "A behind-the-scenes look at designing and building this site in collaboration with Claude: what I decided, what I delegated, and what I'd do differently.",
    tags: ["AI-assisted design", "Process", "Front-end"],
    year: "2026",
    role: "Designer & product owner",
    duration: "1 week",
    color: "lilac",
    sections: [
      {
        heading: "The brief",
        body: [
          "I wanted a portfolio that shows how I think, not only what I've made, and that I could keep editing myself without a CMS or a build step.",
          "<em>Draft note: replace this with your own words.</em>"
        ]
      },
      {
        heading: "Working with AI",
        body: [
          "I started by describing the mood I wanted. The AI asked me questions about colour, type and motion, then proposed three clearly different directions for me to choose from.",
          "I chose the one that felt warmest and most like me, then reviewed and steered the result."
        ]
      },
      {
        heading: "What I decided vs. what I delegated",
        body: [
          "<strong>I decided:</strong> the direction, the content, what to show, and what to cut.",
          "<strong>AI helped with:</strong> structure, accessible markup, responsive layout and first-draft code."
        ]
      },
      {
        heading: "What I'd do differently",
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
    year: "2026",
    role: "UX designer",
    duration: "8 weeks",
    color: "peach",
    sections: [
      { heading: "Overview", body: ["What was the project, who was it for, and why did it matter?"] },
      { heading: "Problem", body: ["What problem were you solving? What did you find out about users?"] },
      { heading: "Process", body: ["Research, ideation, testing. Show the key decisions you made and why."] },
      { heading: "Outcome", body: ["What changed as a result? What did you learn?"] }
    ]
  },
  {
    slug: "example-project-two",
    title: "Example case study: AI-focused project",
    summary:
      "Placeholder for a project about designing with or for AI, such as interaction design, trust, or explainability.",
    tags: ["AI", "Interaction design"],
    year: "2026",
    role: "UX designer",
    duration: "6 weeks",
    color: "mint",
    sections: [
      { heading: "Overview", body: ["Describe the project and your role."] },
      { heading: "Challenge", body: ["What made this hard or interesting?"] },
      { heading: "Solution", body: ["What did you design, and why does it work?"] }
    ]
  }
];
