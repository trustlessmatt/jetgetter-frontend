module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lounge: {
          'light-purple': '#a8sdec',
          'mid-purple' : '#6c25bc',
          'dark-purple' : '#4f1b88',
          'floor-purple' : '#7e02e6',
          'white-couch' : '#e8e7df',
          'gold' : '#c5942d',
          'dark-panel' : '#160435',
          'blueprint' : '#1622dd'
        }
      },
      fontFamily: {
        yellowtail: ['yellowtail'],
        jose: ['jose'],
        caveat: ['caveat'],
        merriweather: ['merriweather'],
        opensans: ['opensans']
      },
    },
  },
  plugins: [],
}