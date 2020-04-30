# Palette Picker

Palette picker is a web application where users can view color schemes from a pre-set list and create their very own color palette to use. There is an option to increase the brightness or darkness of the palette using the navigation slider.

## Demo

![demo](https://github.com/codewithsrobins1/palette-picker/blob/master/readMeGif.gif?raw=true)

## Link to Live Site

https://palette-picker.netlify.com/

## Objectives

* See how a large React application is built
* Understand how many components share information and pass props and state to each other
* Implement different third parties libraries to implement features

## Built With

* React

## Dependencies

1.	Material UI (https://material-ui.com/) – Library for readily available React components
2.	React Router (https://reacttraining.com/react-router/) – Page Transitions for routing to keep UI in sync with URL
3.	React Color (https://casesandberg.github.io/react-color/) - Library for the color selector in the NewPaletteForm component
4.	React Sortable (https://github.com/clauderic/react-sortable-hoc) – Library for drag and drop functionality in the palette creation component
5.	Chroma JS (https://gka.github.io/chroma.js/) – Library to convert colors to wide array of formats. Used to help determine color bright/darkness
6.	Emoji Mart (https://missive.github.io/emoji-mart/) – Library to select an emoji when saving a newly created palette

## Getting Started

To get a local copy up and running follow these steps using your terminal.

### Installation

1. Clone the repo
```sh
git clone https://github.com/codewithsrobins1/palette-picker.git
```
2. Install NPM packages
```sh
npm install i

```

## React Components
* App.js – Renders the application. Contains the various routes
*	Colorbox.js – The individual color box component with the links to ‘more’ and ‘copy’ within the Palette component
*	ColorHelpers.js – Generate the palette colors
*	ColorPickerForm.js - Component for the form within the drawer of the 'Create a Palette' page
*	DraggableColorBox – Individual component for each of the moveable color boxes in the create a palette page
*	DraggableColorList – Component for the colors that can be moved and rearranged within the Create a palette form
*	Index.js -default index.js file
*	MiniPalette.js – The mini color boxes displayed for each of the palettes
*	NavBar.js – Navbar component with a link to go to home page, scroll for different shades of a color, and provide a color format in hexadecimal, rgb, and rgba
*	NewPaletteForm.js – Main Component for Palette Creation Form
*	Page.js – Component for the page transition between routes
*	Palette.js – Main component with all the different palette colors. Also includes Nav and Footer
*	PaletteFooter.js – Footer component with name of palette and emoji
*	PaletteFormNav.js – Component for the navigation bar in the palette creation form
*	PaletteList.js – The homepage component with the entire list of palettes.
*	PaletteMetaForm.js – Modal component that pops up after hitting ‘Save Palette’ in the PaletteFormNav
*	seedColors.js – Houses the default palette information
*	SingleColorPalette.js – Individual palette component with all the different shades of 1 color

## Component Tree

To help visualize the structure of the components, please reference the below structure,

- App.js
  - NewPaletteForm.js
    - seedColors.js
    - PaletteFormNav.js
      - PaletteMetaForm.js
      
  - ColorPickerForm.js
  - DraggableColorList.js
    - DraggableColorBox.js
    
  - PaletteList.js
    - MiniPalette.js
    
  - Palette.js
    - NavBar.js
    - ColorBox.js
      - Links to SingleColorPalette.js via props
        - Uses colorHelper.js to generate shades of a color
  - Page.js 
  - PaletteList (Catch/Error Routing)
  
## Credit
  * Final project from Colt Steele's 'The Modern React Bootcamp'
  * https://www.udemy.com/share/101YTuBEQadlpVQHg=/
