module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Arial'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
    minHeight: {
      custom: 'calc(100vh - 184px)',
    },
  },
};
