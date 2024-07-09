/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-header': "url('./assets/header_img.png')",
        
      },
      gridTemplateColumns: {
        'custom-grid': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        'custom-grid2': '2fr 1fr 1fr',
      },
      
        
    
       

    },
  },
  plugins: [],
}

