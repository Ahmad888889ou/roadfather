const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  // Your existing webpack configuration...

  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Roboto Slab', }, // Replace with the fonts you want to use
        // You can add more fonts here
      ],
      formats: ['woff2'], // Choose the font formats you need
    }),
    // Other plugins...
  ],
};
