# BookBazaar Home Page — Design & Layout Specification

## 1. Layout & Structure

### Header (Top Bar)
- Full-width, fixed-height horizontal bar (approx. 60px).
- Background: Bright yellow (`--primary-bg: #FFCC00`).
- Contains (from left to right):
  - Logo (“bookbazaar” in stylized text or with book icon, left-aligned)
  - Horizontal navigation menu (center-aligned): Home, Latest, Category, Best Sellers, Special, All Products, Contact Us
  - Search bar (input box + search button, right-aligned)
- Header padding: 16px vertical, 32px horizontal
- Font: Bold, “Helvetica Neue, Arial, sans-serif”
- Navigation links: Uppercase, spaced evenly, color #252525, hover effect (underline or darker shade)

### Main Content Area
- Background: White (`--canvas-bg: #FFF`)
- Centered layout, max-width ~1200px, horizontal padding 24px
- Top margin: 32px below header

#### Section Title (“LATEST PRODUCTS”)
- Large, bold, uppercase heading
- Font: ~1.6em, color #252525
- Margin-bottom: 20px

#### Product Grid
- CSS Grid layout: 5 columns (responsive, reduces on smaller screens)
- Gap: 24px between cards
- Each product card (vertical stack):
    - Book cover image (top, 3:4 aspect, ~170x220px, subtle border/shadow)
    - Book title (bold, ~1.1em)
    - Author (smaller, muted gray #888)
    - Price: accent color if discounted (`--accent: #E53935`); old price struck-through in light gray
- Card padding: 12-16px; border-radius: 4px; background: #FFF

### Footer
- Right-aligned, small gray text (“Powered by Joomla!”)
- Margin-top: 20px

---

## 2. Color Palette

| Variable        | Value     | Usage                               |
|-----------------|-----------|-------------------------------------|
| --primary-bg    | #FFCC00   | Header/nav, highlight sections      |
| --canvas-bg     | #FFF      | Page/main background                |
| --primary-text  | #252525   | Main headings, body text            |
| --muted-text    | #888      | Minor/secondary text (e.g., author) |
| --accent        | #E53935   | Sale price, highlights              |
| --action-bg     | #FFF      | Card/input backgrounds              |
| --border-default| #EEE      | Card borders, separators            |

---

## 3. Typography

- Family: “Helvetica Neue, Arial, sans-serif”
- Header/logo: Bold, large, all lowercase (~1.4em)
- Navigation: Uppercase, medium weight, letter-spacing 0.04em
- Section titles: All caps, bold, ~1.6em
- Product titles: Bold, ~1.1em
- Author names: Regular, muted, ~0.95em, gray
- Prices: Strong accent (#E53935); previous price: light gray, strikethrough

---

## 4. Spacing & Sizing

- Header: 16px padding (top/bottom), 32px (sides)
- Page content: min 24px padding per side
- Product grid gap: 24px
- Card padding: 12-16px; border-radius: 4px
- Footer: 20px margin-top, right-aligned

---

## 5. Navigation

- Header/Navigation is horizontal, possibly sticky/fixed
- Menu: Home, Latest, Category, Best Sellers, Special, All Products, Contact Us
- Hover: Underline or darker shade
- Search: Text input with yellow-accented search button, right-aligned

---

## 6. Images & Icons

- Product covers: ~170x220px, 3:4 aspect, image with subtle border/shadow
- Logo: Stylized text/icon (left-aligned)
- Search icon/button in input (right-aligned)

---

## 7. Responsiveness

- Product grid: 5 → 3 → 1 columns on desktop/tablet/mobile
- Card/image size adapts to container width
- Header nav may become a hamburger on small screens (assumed)

---

## 8. Interactive Elements

- Navigation links: Hover underline/darken
- Search button: Accent background on hover
- Product: Clickable image/title for details

---

## 9. Additional Notes

- No banners/hero, no visible sidebar
- Clean, bright, modern look, prioritizing product imagery and ease of browsing
- Footer minimal, secondary info only

---
