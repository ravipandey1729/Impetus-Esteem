# CSS Architecture Documentation

## File Organization

The CSS has been reorganized into a modular structure for better maintainability and easier development. Here's the breakdown:

### 📁 CSS Files Structure

```
css/
├── style.css              # Main file - imports all modules
├── variables.css          # CSS custom properties and color scheme
├── base.css              # Reset, typography, and base styles
├── buttons.css           # All button components and variants
├── navigation.css        # Header and navigation styles
├── cards.css             # Card components (program, pillar, stat, etc.)
├── footer.css            # Footer component styles
├── hero.css              # Hero section specific styles
├── sections.css          # All other page sections
├── 3d-effects.css        # 3D animations and effects
├── animations.css        # Keyframes and animation definitions
├── responsive.css        # Mobile and tablet responsive styles
└── style-backup.css      # Backup of original monolithic file
```

### 🎨 Module Descriptions

#### `variables.css`

- CSS custom properties (--primary-color, --secondary-color, etc.)
- Color scheme definitions
- Spacing, shadows, and transition variables
- Border radius and gradient definitions

#### `base.css`

- CSS resets and normalizations
- Typography (headings, paragraphs, links)
- Base body and html styles
- Container and section layouts
- Custom scrollbar styling

#### `buttons.css`

- Primary, secondary, text, and card button styles
- Glassmorphism button effects
- Hover animations and transitions
- Button variants for different sections

#### `navigation.css`

- Fixed header with glassmorphism
- Navigation menu styling
- Logo and nav link effects
- Mobile menu toggle (hamburger)

#### `cards.css`

- Program cards with glassmorphism
- Pillar, stat, and experience cards
- Card hover effects and animations
- Icon styling within cards

#### `footer.css`

- Footer layout and styling
- Social media icons with glassmorphism
- Contact information and links
- Footer bottom section

#### `hero.css`

- Hero section layout and styling
- Hero content glassmorphism container
- Title, subtitle, and tagline styles
- Hero button variations
- Background animations and gradients

#### `sections.css`

- About preview section
- CTA section with glassmorphism
- Strategic plan and pillars
- Why it matters and stats
- Experience and join movement sections

#### `animations.css`

- fadeInUp keyframe animation
- pulse animation for icons
- rotate animation for backgrounds
- Reusable animation definitions

#### `responsive.css`

- Tablet styles (max-width: 1024px)
- Mobile styles (max-width: 768px)
- Small mobile styles (max-width: 480px)
- Grid adjustments and layout changes

### 🔧 Benefits of This Architecture

1. **Maintainability**: Each file has a specific purpose, making it easier to find and edit styles
2. **Performance**: Smaller files load faster and can be cached individually
3. **Collaboration**: Multiple developers can work on different modules without conflicts
4. **Debugging**: Easier to locate style issues within specific components
5. **Modularity**: Components can be reused or modified independently
6. **Organization**: Clear separation of concerns for different UI elements

### 📝 Development Workflow

1. **For new components**: Create styles in the appropriate module file
2. **For global changes**: Modify `variables.css` for color/spacing updates
3. **For responsive issues**: Edit `responsive.css`
4. **For animations**: Add to `animations.css`
5. **For major restructuring**: Consider creating new module files

### 🚀 Loading Order

The CSS files are imported in a specific order to ensure proper cascading:

1. Variables (foundation)
2. Base styles (resets and typography)
3. Components (buttons, navigation, cards, footer)
4. Layouts (hero, sections)
5. 3D effects (special animations)
6. Animations (keyframes)
7. Responsive (media queries override)

### 💡 Tips for Maintenance

- Always check `variables.css` before adding new custom properties
- Use existing animation classes from `animations.css` when possible
- Follow the glassmorphism pattern established in existing components
- Test responsive behavior after making changes
- Keep the backup file (`style-backup.css`) for reference

This modular approach ensures the Impetus Esteem website remains scalable and maintainable as it grows!
