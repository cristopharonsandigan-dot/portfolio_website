# Portfolio website

A responsive HTML, CSS and JavaScript recreation of the supplied portfolio screenshot.

## Files

- `index.html` — page structure and content
- `style.css` — layout, colors, backgrounds and responsive rules
- `script.js` — three-slide vertical skills carousel
- `assets/` — cropped illustrations taken from your uploaded reference screenshot

## Run it

### On a computer
Open `index.html` in a browser. For a local development server, use VS Code Live Server or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

### On Android with Termux
1. Extract the ZIP into a folder, for example `portfolio_website`.
2. Open Termux and go into the folder:
   `cd ~/storage/shared/portfolio_website`
3. Start a local server:
   `python -m http.server 8000`
4. Open Chrome and visit `http://127.0.0.1:8000`.

If Python is not installed in Termux, run `pkg install python` first. You may need `termux-setup-storage` to access shared storage.

## Replace or edit images

Keep the image filenames in `assets/` the same if you want to avoid changing the code. To replace an image, copy your new image into `assets/` using the matching filename, for example `profile.png`. If you use a different filename, update the matching `src="assets/..."` in `index.html`.

The supplied screenshot is saved as `assets/design-reference.jpg`. The smaller image files are crops from that screenshot. Because the source is a screenshot, the cropped pictures may include a little of the original background or may not be as sharp as the original source assets from Figma. For the closest result, replace them with the original exported Figma images if you have them.

## Edit text and links

- Change the introduction in `index.html` inside `.intro`.
- Change skill titles and descriptions inside each `.skills-slide`.
- Change phone, Facebook and email destinations in the contact section.
- Change colors, spacing, font sizes and backgrounds in `style.css`.

The carousel has three slides and wraps around when you reach either end. The first slide uses the wording visible in the reference design. Slides 2 and 3 provide alternate descriptions; edit those text blocks to suit your own work.
