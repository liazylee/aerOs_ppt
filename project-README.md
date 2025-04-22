# aerOS PowerPoint-style Presentation Website

This is an interactive web-based PowerPoint-style presentation about aerOS, a platform for AI-driven personalized training. The presentation follows the design recommendations in the main README.md file.

## Features

- 10 beautifully designed slides based on the aerOS presentation design
- Smooth slide transitions
- Keyboard navigation (arrow keys)
- Responsive design
- Gradient color scheme (deep blue transitioning to teal/green)
- Modern, clean aesthetic

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation and Running

1. Clone this repository
2. Run the start script:

```bash
./start.sh
```

Or manually:

```bash
npm install
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Navigation

- Click the "Next" and "Previous" buttons to navigate slides
- Use the left and right arrow keys for keyboard navigation
- Current slide indicator is shown at the bottom right

## Technologies Used

- React
- styled-components
- SVG icons
- CSS animations

## Customization

You can customize the presentation by:
- Modifying the slide components in `src/components/`
- Adjusting the global styles in `src/styles/global.css`
- Changing the color scheme in CSS variables
- Updating the aerOS logo in the Icons component 