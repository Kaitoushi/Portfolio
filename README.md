# Our Story — setup guide

A tiny site to keep photos and letters, organized by month, hosted free on GitHub Pages.

## 1. Install what you need

- **A code editor** — [VS Code](https://code.visualstudio.com/) (free).
- **Git** — [git-scm.com](https://git-scm.com/downloads). This lets you send files to GitHub.
- **A GitHub account** — [github.com](https://github.com) (free).
- *(Optional, easier than typing git commands)* [GitHub Desktop](https://desktop.github.com/) — a simple app for pushing files with buttons instead of a terminal.

## 2. Create the GitHub repository

1. Go to github.com → click **New repository**.
2. Name it anything, e.g. `our-story`. Keep it **Public** (GitHub Pages' free tier needs public repos) — you'll add a password lock later if you want privacy.
3. Don't add a README/gitignore in the GitHub UI — you already have these files.

## 3. Upload this project

**Using GitHub Desktop (easier):**
1. Open GitHub Desktop → File → Add Local Repository → select this `our-story` folder.
2. It'll offer to publish it — click **Publish repository**, choose the same name as above.

**Using the terminal:**
```bash
cd path/to/our-story
git init
git add .
git commit -m "First version of our story"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/our-story.git
git push -u origin main
```

## 4. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait a minute, then refresh — GitHub shows you the live URL, something like:
   `https://YOUR-USERNAME.github.io/our-story/`

That's your site. Anyone with the link can view it (see the privacy note below if you don't want that).

## 5. How to add a new photo

1. Drop the image file into `photos/2026-03/` (make the folder if the month doesn't exist yet).
2. Open `data.js` and either add a new month object or add the filename to an existing month's `photos` list.
3. Save, then push the change:
   ```bash
   git add .
   git commit -m "Add March photos"
   git push
   ```
4. GitHub Pages updates automatically within a minute or two.

## 6. How to add a new letter

1. Create a plain `.txt` file inside `letters/2026-03/`, e.g. `letters/2026-03/happy-anniversary.txt`, and write the letter inside it.
2. Add the filename to that month's `letters` list in `data.js`.
3. Push the change the same way as above.

## 7. Adding a whole new month

In `data.js`, add a new entry:
```js
{
  id: "2026-03",
  label: "March 2026",
  photos: ["photo1.jpg"],
  letters: ["letter1.txt"]
},
```
Then create matching folders: `photos/2026-03/` and `letters/2026-03/`.

## 8. Keeping it private (optional but recommended)

GitHub Pages on a public repo means anyone with the link can see it, and it can be found by search engines unless you block that. Two free options:

- **Simplest:** add a `robots.txt` file (blocks search engines from indexing it, but the link still works for anyone who has it).
- **Actual password lock:** move hosting to **Netlify** instead of GitHub Pages — same free static hosting, but it has a built-in password-protection feature. You'd still edit files locally and push to GitHub; Netlify just connects to your repo and deploys it, with a password gate added in its site settings.

## File structure reference

```
our-story/
├── index.html          ← homepage (list of months)
├── month.html          ← template for a single month's page
├── style.css           ← all the styling
├── script.js           ← builds the homepage cards
├── month.js            ← loads photos/letters for a month page
├── data.js             ← the manifest — edit this whenever you add content
├── photos/
│   ├── 2026-01/        ← put January's photos here
│   └── 2026-02/
└── letters/
    ├── 2026-01/        ← put January's letters here (.txt files)
    └── 2026-02/
```
