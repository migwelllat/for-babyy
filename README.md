# Mood-lifter website 🌸

A static HTML/CSS/JavaScript website made for GitHub Pages. All user-provided photos and the supplied MP3 are included locally.

## Project files

- `index.html` — page content and exact letter text
- `style.css` — peony-inspired wallpaper, responsive layout, envelope and animations
- `script.js` — start/music controls, reveal button, photo lightbox
- `images/` — the supplied photos and local peony SVG wallpaper
- `audio/valentine.mp3` — the supplied MP3 used by the on-page player

## Run locally

Open `index.html` in a modern browser. If your browser restricts local audio files, run a simple local server from this folder instead:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Extract `mood-lifter.zip`.
2. Create a new repository on GitHub, for example `mood-lifter`.
3. Upload the **contents** of the extracted `mood-lifter` folder to the repository root. `index.html` should be visible at the top level, not inside a second nested folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to finish publishing. The URL will look like `https://YOUR-USERNAME.github.io/mood-lifter/`.

## Music and file size

The included MP3 is about 2.3 MB, well below GitHub's 100 MB per-file push limit. It plays directly in the page from `audio/valentine.mp3`; it does not link to YouTube or Spotify. The site does not autoplay before the visitor interacts. Tapping the opening envelope attempts playback as part of the same user interaction.

## Test before sharing

- Open the page and tap **OPEN MO NA 😭❤️**.
- Check that the envelope animation opens and the music player appears.
- Use the player button to pause and resume.
- Tap photos to open them larger, then close the photo.
- Test the revealed message button.
- Open the published link on a phone and test over mobile data as well as Wi-Fi.
