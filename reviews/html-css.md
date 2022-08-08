# HTML and CSS

## HTML

1. What is HTML?

   - HyperText Markup Language
   - Structure and content of a page
   - Semantic meaning to document text
   - Used by the browser to render a web page
   - Series of elements

2. What are block level elements vs inline elements?

   - Block level elements take up an entire line, and are as wide as the containing space
   - Inline level elements as wide as its inner content
   - Ex: `<a href="some.web.address">Go To Some Place</a>` is inline
   - Ex: `<p>Some paragraph text</p>`

3. What are attributes?

   - Additional information about an element
   - Modify an element
   - Written as `name="value"` pairs in the opening tag of an element
   - Ex: `<img src="path/to/image.jpg">`

## CSS

1. What are the 3 types of css?

   - Inline
     - In html file, `<p style="color: blue; background-color: gray;">Some text</p>`
   - Internal/embedded
     - In html file, `<style>h1 { color: blue; background-color: gray; }</style>`
   - External
     - In html file, `<link rel="stylesheet" href="path/to/stylesheet">`
     - In external css file `h1 { color: blue; background-color: gray; }`

2. What makes up a css ruleset?

   - Ex:

   ```css
   /* ruleset */
   selector {
     /* declarations */
     property: value;
   }
   ```

3. What are the simple selectors?

   Ordered from most to least specific

   - Id `#`, (1, 0, 0)
   - Class `.`, (0, 1, 0)
   - Element `p`, (0, 0, 1)
   - Universal `*`, (0, 0, 0)

4. What is the box model?

   - Defines structure of html elements as boxes (4 sides)
   - From inside out:
     - Content
     - Padding (space between content and element border)
     - Border
     - Margin (space between any elements border and another element's margin)
