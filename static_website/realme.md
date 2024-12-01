

## **CSS Documentation: Photography Portfolio**

### **1. General Styles**
These styles apply to all elements on the page to ensure a clean, uniform layout:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- **Reset margins and padding:** Ensures there are no unexpected gaps around elements.
- **box-sizing: border-box:** Makes sure padding and borders are included in the element’s total width/height, which makes layout calculations easier.

### **2. Body Styles**
```css
body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}
```
- **font-family:** Uses a clean, modern font.
- **background-color:** Light gray background for a soft, neutral look.
- **color:** Dark gray text for readability.
- **line-height:** Improved text readability by increasing line spacing.

### **3. Header Styles**
```css
header {
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 3.5em;
    letter-spacing: 2px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
}
```
- **header:** A dark background (`#111`) contrasts with the white text, creating a bold look for the portfolio title.
- **h1 styles:** The title has large font size (`3.5em`), uppercase letters, and increased spacing (`letter-spacing: 2px`) for a stylish, bold heading.

### **4. Section Styles**
```css
.gallery-section {
    padding: 60px 20px;
    background-color: #fff;
    margin-bottom: 40px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

.gallery-section h2 {
    text-align: center;
    font-size: 2.8em;
    margin-bottom: 40px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
}

.gallery-section h2::after {
    content: '';
    width: 60px;
    height: 3px;
    background-color: #ff4d4d;
    display: block;
    margin: 10px auto 0;
}
```
- **gallery-section:** Provides spacing around each section with `padding: 60px 20px`, a white background, and a soft shadow (`box-shadow`) for visual depth.
- **h2 styles:** Section titles are large (`2.8em`), centered, uppercase, and have a decorative red underline (`::after` pseudo-element) for visual emphasis.

### **5. Masonry Grid Layout**
```css
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-gap: 20px;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
}
```
- **grid-template-columns:** Creates responsive columns using `auto-fill` and `minmax(250px, 1fr)` to ensure flexible columns that adjust based on screen size.
- **grid-auto-rows:** Each grid item starts with a base height of `250px` but can expand.
- **grid-gap:** Adds a gap of `20px` between grid items.
- **max-width:** Restricts the grid to a maximum width of `1200px` for better readability on large screens.

### **6. Gallery Item Styles**
```css
.gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}
```
- **position: relative:** Allows positioning of child elements (like captions).
- **overflow: hidden:** Ensures images and captions don’t spill outside their container.
- **transition:** Smoothly animates hover effects on `transform` and `box-shadow`.
- **box-shadow:** Adds a soft shadow for a card-like effect.
- **border-radius:** Adds rounded corners for a modern design.

### **7. Image Styles**
```css
.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.4s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}
```
- **object-fit: cover:** Ensures images fit within their container without stretching.
- **hover effect:** Images scale up slightly (`scale(1.05)`) on hover, creating a zoom effect.

### **8. Caption Styles**
```css
.caption {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    opacity: 0;
    font-size: 1.2em;
    transition: opacity 0.4s ease;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 0 0 8px 8px;
}

.gallery-item:hover .caption {
    opacity: 1;
}
```
- **caption styles:** Positioned at the bottom of the image. It is initially hidden (`opacity: 0`), and fades in on hover (`opacity: 1`).
- **background:** Semi-transparent black background makes text readable without hiding the image.
- **font-style:** Text is uppercase, bold, and centered for emphasis.

### **9. Masonry Layout for Different Sizes**
```css
.gallery-item.wide {
    grid-column: span 2;
}

.gallery-item.tall {
    grid-row: span 2;
}
```
- **grid-column / grid-row:** These classes allow certain items to span multiple columns or rows, creating a dynamic, Pinterest-like grid layout with varied item sizes.

### **10. Footer Styles**
```css
footer {
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 40px 0;
}

footer p {
    font-size: 1.1em;
}

footer p span {
    color: #ff4d4d;
}
```
- **footer:** A dark background and white text provide a clean, professional footer. A red highlight (`#ff4d4d`) is added for emphasis.

### **11. Responsive Styles**
```css
@media (max-width: 768px) {
    .masonry-grid {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-auto-rows: 200px;
    }
}

@media (max-width: 480px) {
    .masonry-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: 180px;
    }
}
```
- **media queries:** The grid layout adjusts on smaller screens (e.g., tablets and phones). The `minmax` values are reduced to allow more columns on small devices, ensuring the layout remains compact and visually balanced.

---
