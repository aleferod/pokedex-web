# Spec Delta: app-shell

## MODIFIED Requirements

### Requirement: Accessible layout
Every page SHALL render inside one layout: a header with the application name linking home and the main navigation, a "Skip to content" link as the first focusable element, and a single `main` landmark that the skip link targets. Interactive elements SHALL show a visible focus indicator, and the layout SHALL work from 360 px wide without horizontal scrolling. In the main navigation, the link to the page being shown SHALL be marked as the current page, and the link to the section it belongs to (such as "Catalog" on a Pokémon's page) SHALL be marked as the current item without claiming to be the current page.

#### Scenario: Keyboard user skips the navigation
- **WHEN** a keyboard user presses Tab once on any page
- **THEN** the focused element is the "Skip to content" link, and activating it moves focus to the `main` landmark

#### Scenario: Navigation is announced
- **WHEN** a screen reader lists landmarks
- **THEN** it finds a banner, a navigation labelled "Main" and one main region

#### Scenario: Current page and current section
- **WHEN** a visitor is on `/pokemon`
- **THEN** the "Catalog" link has `aria-current="page"`
- **AND WHEN** the visitor is on a Pokémon's page, such as `/pokemon/25`
- **THEN** the "Catalog" link has `aria-current="true"`, so only the evolution stage being viewed is the current page
