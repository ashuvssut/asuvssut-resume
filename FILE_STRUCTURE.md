# Resume Website File Structure

```
Resume-website/
|
|- public # Contains the favicon, etc. Any files within this directory will not be processed by Webpack but copied directly to the build folder.
|- src: # Contains all source code for the React application.
    |
    |- App.js
    |- index.css
    |- index.js
    |- assets   # Contains all the community brand assets. Keep all images, clips, etc here only
    |- components/   # Contains all the GLOBAL components used by "more than one" page. (includes Header, footer,etc.)
    |-fonts/         # Contains all the fonts 
    |-pages/         # Contains all the sections of the page.
    |      |-----Home /
    |      |      |- Home.jsx    # has sections as components
    |      |      |- home.module.css
    |      |      |- components/ # this components folder has components that is used by multiple sections of the same page (Home page)
    |      |      |     |-component1Name/
    |      |      |     |    |- Component1Name.jsx (in PascalCase)
    |      |      |     |    |- component1-name.module.css (in kebab-case)
    |      |      |     |
    |      |      |     |-component2Name/
    |      |      |         |- Component2Name.jsx
    |      |      |         |- component2-name.module.css
    |      |      |
    |      |      |- sections/ # contains all sections of the page
    |      |            |
    |      |            |----Banner/  # section1 of the page
    |      |            |        |- Banner.jsx
    |      |            |        |- banner.module.css          
    |      |            
    |      |            
    |      |
    |      |- 404/
    |
    |
    |-seo/ # Contains code for meta tags using react-helmet

```
