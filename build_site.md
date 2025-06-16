# Getting Started with a Static Site Generator on macOS

This guide will walk you through setting up a complete project using the Eleventy (11ty) static site generator. By the end, you'll be able to edit your documents in Markdown and have the final HTML pages built automatically.

---

## Step 1: Install Prerequisites

First, we need to ensure you have a code editor and the Node.js runtime, which Eleventy uses.

### A. Install Homebrew (The Mac Package Manager)

If you don't already have it, open the Terminal app on your Mac and paste this command to install Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### B. Install Node.js

With Homebrew installed, you can now easily install Node.js. In your Terminal, run:

```bash
brew install node
```

### C. Get a Code Editor

If you don't have one, we highly recommend [Visual Studio Code](https://code.visualstudio.com/). It's free and works perfectly for this kind of project.

---

## Step 2: Set Up Your Project Folder

Now, let's create a folder for your website and set up the basic structure.

### Create a Project Folder

Open your Terminal and run these commands:

```bash
mkdir kubeshift-site
cd kubeshift-site
```

### Initialize the Project

This command creates a `package.json` file:

```bash
npm init -y
```

### Install Eleventy

Install Eleventy as a development dependency:

```bash
npm install --save-dev @11ty/eleventy
```

### Create a Configuration File (The Fix)

Create a file named `.eleventy.js` in your project’s root directory and paste the following:

```js
module.exports = function(eleventyConfig) {
  // This tells Eleventy to use the Nunjucks templating engine
  // for all Markdown and HTML files. This is what enables
  // the `safe` filter to work correctly.
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
```

---

## Step 3: Create Your Website's Structure and Content

### Create an `_includes` Folder

This special folder is where Eleventy looks for layouts:

```bash
mkdir _includes
```

### Save the Layout File

Create a file named `document-layout.html` inside `_includes`. Paste the full HTML layout code (ensure it contains `{{ content | safe }}`).

### Save the `index.html` File

In the main `kubeshift-site` folder, create a file named `index.html` and paste your homepage HTML content.

### Save the Markdown Document Files

Create the following Markdown files in the `kubeshift-site` folder:

- `market-analysis.md`
- `state-of-the-market.md`
- `poc-plan.md`
- `devils-advocate.md`

Each file should begin with the following front matter:

```markdown
---
layout: document-layout.html
---
```

Below the front matter, paste the full Markdown content for that specific document.

### Final Folder Structure

Your project should now look like this:

```
kubeshift-site/
├── _includes/
│   └── document-layout.html
├── .eleventy.js
├── index.html
├── market-analysis.md
├── state-of-the-market.md
├── poc-plan.md
├── devils-advocate.md
└── package.json
```

---

## Step 4: Build Your Site and View It Live

You're all set! Now you can run Eleventy to build the website.

### Run the Development Server

In your Terminal:

```bash
npx @11ty/eleventy --serve
```

This will start a local server and build your site using the configuration.

### View Your Site

Open your browser and visit the address shown in your terminal (usually [http://localhost:8080](http://localhost:8080)).

You should see your `index.html` page and be able to click into your Markdown-powered pages like `/market-analysis/`.

---

## The Magic of the Workflow

Whenever you want to edit a document, just open the corresponding `.md` file in VS Code, make changes, and save. Eleventy's dev server will automatically rebuild the site. Refresh your browser to see the updates instantly.
