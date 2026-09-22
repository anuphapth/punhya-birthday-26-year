# punhya-birthday-26-year

A birthday greeting letter (animated envelope) for Punhya's 26th birthday.

## Folder structure

```
.
├── index.html            # Main page markup
├── css/
│   └── style.css         # All styles and animations
├── js/
│   └── main.js           # Envelope opening / letter flipping logic
├── assets/
│   └── images/
│       ├── birthday.jpg  # Birthday person's photo (portrait 3:4)
│       └── mail.png      # Browser tab icon (favicon, 512x512)
└── README.md
```

## Usage

Open `index.html` directly in a browser, or run a simple static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

## Replacing the images

- **Birthday photo** — replace `assets/images/birthday.jpg` with the real photo (keep the same
  filename, or update the `src` in `index.html` to match the new one).
  A **portrait image with a 3:4 ratio** (e.g. 1536x2048) is recommended so it fits the frame on
  the page exactly.
- **Browser tab icon (favicon)** — replace `assets/images/mail.png` with a new icon
  (a square PNG, 512x512 recommended).