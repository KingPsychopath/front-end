## Color

When it comes to color in CSS there are several different ways to define a color.

- **Color Names**: There are 147 color names that are recognized by all browsers. These are the same colors that are used in HTML. `red`, `blue`, `green`, etc.
- **Hexadecimal**: Hexadecimal colors are the most common way to define a color in CSS. They are defined by a `#` followed by a six-digit code. `#ff0000` is red. There is also a three-digit shorthand for hexadecimal colors. `#fff` is white, this means repeating the same digit for each pair of digits.
- **RGB**: RGB colors are defined by the amount of red, green, and blue in the color. They are defined by `rgb()` followed by three values between 0 and 255. `rgb(255, 0, 0)' is red.`
- **RGBA**: RGBA colors are the same as RGB colors but with an additional value for opacity. The opacity is defined by a value between 0 and 1. `rgba(255, 0, 0, 0.5)` is red with 50% opacity.
- **HSL**: HSL colors are defined by the hue, saturation, and lightness of the color. They are defined by `hsl()` followed by three values. `hsl(0, 100%, 50%)` is red. The parameters are as follows:
  - **Hue**: The color type. It is a value between 0 and 360 (Degrees by default, or if specified radians or gradians).
  - **Saturation**: The intensity of the color. It is a value between 0% and 100%.
  - **Lightness**: The brightness of the color. It is a value between 0% and 100%.
