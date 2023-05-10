# Page Loaded In

This little JavaScript package will tell you how fast is your site by adding text to the desired place on your site.

## Installation

The usuall installation:

```bash
npm install page-loaded-in
```

```bash
yarn add page-loaded-in
```

Or using CDN:

```html
<script src="https://unpkg.com/page-loaded-in@0.0.4/dist/index.js"></script>
```

## Usage

Include the code in your JavaScript file. For example, if you installed the package via npm, use `require` to load the script.

```js
require('page-loaded-in')
```

Make sure there is an HTML element with the class `js-page-loaded-in`.

You should see how fast is your page now.

## Example

I've placed the “Page loaded in” text on my site in the footer section.

![Screenshot of a page footer showing Page Loaded In output - “Page loaded in 0.237s.”](https://res.cloudinary.com/starbist/image/upload/v1680254395/page-loaded-in_bzopkl.png)

## The article

I wrote article about how this code works: https://www.silvestar.codes/articles/how-to-measure-page-loading-time-with-performance-api/
