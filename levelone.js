const lessonContent = {
  1: {
    title: "Intro to JavaScript",
    subtitle: "Learn basics of JavaScript in AI",
    content: `
      <p>Welcome to Lesson 1! JavaScript is the language of AI interactivity in the browser. You'll learn what JavaScript is, how it works, and how it fits in AI coding environments.</p>
      <ul>
        <li>What is JavaScript?</li>
        <li>Why it's useful for AI</li>
        <li>How browsers use JS</li>
        <li>Using <code>&lt;script&gt;</code> to run JS</li>
      </ul>
    `
  },
  2: {
    title: "Variables & Data Types",
    subtitle: "Understand types and how to use them",
    content: `<p>Learn how to create variables, use let/const, and work with strings, numbers, and booleans in your AI code.</p>`
  },
  3: {
    title: "Operators & Expressions",
    subtitle: "Explore JavaScript's operators",
    content: `<p>Dive into arithmetic, comparison, logical and assignment operators that drive AI logic flows.</p>`
  },
  4: {
    title: "Control Flow",
    subtitle: "if, else, switch and logic",
    content: `<p>Use conditional logic to make AI decisions.</p>`
  },
  5: {
    title: "Loops",
    subtitle: "while, for, and loop control in AI code",
    content: `<p>Understand how to repeat tasks and cycle through data for intelligent processing.</p>`
  },
  6: {
    title: "Functions",
    subtitle: "Define and call functions like a pro",
    content: `<p>Functions encapsulate logic for reuse—essential for AI development.</p>`
  },
  7: {
    title: "Objects & Arrays",
    subtitle: "Master data structures for AI logic",
    content: `<p>Organize AI data in arrays and objects for structured thinking.</p>`
  },
  8: {
    title: "Events & Interaction",
    subtitle: "Make your AI code interactive",
    content: `<p>Respond to clicks, keypresses, and input to create AI interfaces.</p>`
  }
};

const container = document.getElementById("lesson-container");
const lessonId = parseInt(window.location.pathname.match(/lesson(\d+)\.html/)?.[1]);

if (lessonContent[lessonId]) {
  const { title, subtitle, content } = lessonContent[lessonId];
  container.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; max-width: 800px; margin: auto;">
      <h1>${title}</h1>
      <h3>${subtitle}</h3>
      <div>${content}</div>
      <br>
      <a href="one.html" style="color: blue;">← Back to Level 1 Lessons</a>
    </div>
  `;
} else {
  container.innerHTML = "<p>Lesson not found.</p>";
}
