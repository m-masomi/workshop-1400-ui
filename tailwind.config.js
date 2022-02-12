module.exports = {
  content: ["./Pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000",
        border: {
          default: "#485164",
        },
        'river': {
          default: '#485164',
          '50': '#A5ADBE',
          '100': '#99A3B6',
          '200': '#828DA5',
          '300': '#6A7793',
          '400': '#59647C',
          '500': '#485164',
          '600': '#313743',
          '700': '#191C23',
          '800': '#020202',
          '900': '#000000'
        },
        'vivid': {
          default: '#FF8383',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFDFD',
          '300': '#FFD5D5',
          '400': '#FFACAC',
          '500': '#FF8383',
          '600': '#E46666',
          '700': '#D04242',
          '800': '#AE2C2C',
          '900': '#7D2121'
        },
      },
      fontSize: {
        12: ["12px", { lineHeight: "20px" }],
        14: ["14px", { lineHeight: "24px" }],
        16: ["16px", { lineHeight: "24px" }],
        18: ["18px", { lineHeight: "25px" }],
        20: ["20px", { lineHeight: "25px" }],
        26: ["26px", { lineHeight: "32px" }],
        30: ["30px", { lineHeight: "35px" }],
        96: ["96px", { lineHeight: "120px" }],
      },
      fontFamily: {
        sans: ["Vazir", "ui-sans-serif", "system-ui"],
        serif: ["Vazir", "ui-serif", "Georgia"],
        mono: ["Vazir", "ui-monospace", "SFMono-Regular"],
        display: ["Vazir", "Oswald"],
        body: ["Vazir", "Open Sans"],
      },
    },
  },
  plugins: [],
};
