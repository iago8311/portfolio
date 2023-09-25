import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero':"url('../assets/img.jpg')",
    },
    extend: {
        colors: {
          'primary-blue':'#106EB0',
          'primary-orage':'#EC7000',
          'primary-gray':'#33303E',
          'second-gray':'#4E4B59',
          'gray-phone':'#F4F4F4',
          'text-gray':'#7A7786',
          'primary-black':'#0F0F0F',
          'primary-green':'#00FF00',
          'second-green':'#7CFC00'

        }


    },
  },
  plugins: [],
}
export default config
