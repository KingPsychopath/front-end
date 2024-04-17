# How is CSS Rendered?

1. Browser loads the HTML file
2. Converts HTML to DOM
3. Browser fetches linked resources (images, videos, CSS, etc.)
4. Browser parses CSS to CSSOM
5. Browser combines DOM and CSSOM to create a render tree (which node is applied to which CSS rule)
6. Browser renders & paints the website

## Terminology

### 1. Elements

The basic building blocks of a webpage. They are represented by tags in HTML.

They can take two forms: replaced elements (images, videos, etc.) and non-replaced elements (text, etc.)
Elements can be block or inline.

#### Block elements

Block elements take up the full width of the page(as a box) and start on a new line.

Example:

```html
<h1>Hello</h1>
<!-- block element -->
<p>This is a paragraph</p>
<!-- block element -->

Rendered as: Hello This is a paragraph
```

#### Inline elements

Inline elements only take up as much width as necessary and do not start on a new line.

Example:

```html
<span>Span</span>
<!-- inline element -->
<a href="#">Link</a>
<!-- inline element -->

Rendered as: Span Link
```

### 2. Selectors

CSS is a rule-based language. We define these rules by selecting elements and applying styles to them.

For example to select all `h1` elements and make them red, we would write:

```css
h1 {
  color: red;
}
```

Here, `h1` is the selector.
Inside the curly braces `{}` are the style declarations.

A declaration is a key-value pair. The key is the property (color) and the value is the value (red). In this case, `color: red;` is the declaration.

#### Types of Selectors

1. **Element Selector**: Selects all elements of a particular type. e.g. `h1`
2. **Class Selector**: Selects all elements with a particular class. e.g. `.class-name`
3. **ID Selector**: Selects a single element with a particular ID. e.g. `#id-name`

4. **Combination Selector**: Selects elements based on a combination of selectors. e.g. `h1.class-name` selects all `h1` elements with the class `class-name`.
5. **Descendant Selector**: Selects an element that is a descendant of another element. e.g. `div p` selects all `p` elements inside a `div` element.
6. **Grouping Selector**: Selects multiple selectors at once. e.g. `h1, h2, h3`
7. **Universal Selector**: Selects all elements. e.g. `*`

8. **Parent Selector**: Selects an element that is a parent of another element. e.g. `p < div` selects all `div` elements that are parents of `p` elements.
9. **Child Selector**: Selects an element that is a direct child of another element. e.g. `div > p` selects all `p` elements that are direct children of `div` elements.
10. **Adjacent Sibling Selector**: Selects an element that is the adjacent sibling of another element. e.g. `h1 + p` selects all `p` elements that are adjacent siblings of `h1` elements.
11. **General Sibling Selector**: Selects an element that is a sibling of another element. e.g. `h1 ~ p` selects all `p` elements that are siblings of `h1` elements.

12. **Attribute Selector**: Selects elements with a particular attribute. e.g. `[type="text"]`
13. **Pseudo-class Selector**: Selects elements based on their state. e.g. `:hover`
14. **Pseudo-element Selector**: Selects a part of an element. e.g. `::first-line`
15. **Negation Selector**: Selects elements that do not match a given selector. e.g. `:not(p)` selects all elements that are not `p` elements.

What does this select?

```css
.body p#blue {
  color: blue;
}
```

This selects all `p` elements with the ID `blue` inside an element with the class `body`.

### 3. Specificity

```html
<div class="blue">
  <p>Hello</p>
</div>
```

```css
.blue {
  color: blue;
}
```

In this case, the `p` element will be blue becaues the paragraph element inherits the color from the parent element.

#### Inheritance

Inheritance is the process by which styles are passed down from parent elements to child elements.
When an inheritable property is not set on a child element, the browser will look to the parent element for the value.
The parent chain is followed until a value is found.

#### Cascade

The cascade is the process by which the browser determines which styles to apply to an element.

The cascade is determined by the specificity of the selector and the order in which the styles are defined.

If two selectors have the same specificity, the one that is defined last will be applied.

```css
p {
  color: red;
}

.blue {
  color: blue;
}
```

The paragraph will be red because the `p` selector has a higher specificity than the `.blue` selector.
There is no need to traverse the parent chain tree because our paragraph has a direct style applied to it.

```css
p {
  color: red;
}

.blue p {
  color: blue;
}
```

In this case, the paragraph will be blue because the `.blue p` selector has a higher specificity than the `p` selector.

#### Specificity Hierarchy

Specificity is the algorithm used to determine which CSS rule is applied to an element when multiple rules are applied.
The hierarchy is as follows:

1. Inline styles (e.g. `<p style="color: blue;">`)
2. ID selectors (e.g. `#id`)
3. Class selectors, attributes, and pseudo-classes (e.g. `.class`, `[type="text"]`, `:hover`)
4. Elements and pseudo-elements (e.g. `p`, `::first-line`)
5. Universal selectors and combinators (e.g. `*`, `+`, `>`, `~`)

Each selector has a calculated weight.
The one with the most weight wins.

We can calculate the specificity of a selector by counting the number of each type of selector in the selector.

**ID Selector**: 1-0-0
**Class Selector**: 0-1-0
**Element/Type Selector**: 0-0-1

For each selector we concatenate the count of each selector for each specific column and compare them.
Inline styles override all other styles, so they have the highest specificity. (so does !important as property value) neither are recommended practice.

```css
#id .class p {
  color: blue;
}
```

This selector has a specificity of 1-1-1.

```css
#id p {
  color: red;
}
```

This selector has a specificity of 1-0-1.

The first selector will be applied because it has a higher specificity.

```css
.body p {
    ...
}
```

This selector has a specificity of 0-1-1.

```css
.body .text p{
...
}
```

This selector has a specificity of 0-2-1.

The second selector will be applied because it has a higher specificity.

The Specificity calculator can be found [here](https://specificity.keegan.st/). It is useful to compare the specificity of different selectors.
