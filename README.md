# Website Optimization project

## Instructions For Use
* Download this project or clone repository with Git.
* Open index.html in a web browser. **Tested using Chrome**

## Changes From Original

### index.html
1. Inlined style.css and print.css before the head section
2. Inlined perfmatters.js and added async attribute
3. Added async attribute to google analytics
4. Loaded font with Font Loader
5. Converted all images to webp

### main.js
1. Added 'will-change:left' to sliding pizzas
2. updatePositions() gets document.body.scrollTop outside of the for loop
3. updatePositions() uses requestAnimationFrame() for visual changes
4. updatePositions() retrieves elements by class rather than selector
4. changePizzaSizes() uses a switch to check for size, then uses a % rather than converting to px
5. changePizzaSizes() gets all the pizzaContainers before the loop, then loops inside of a requestAnimationFrame()
6. Only 50 pizzas are created on DOM load
