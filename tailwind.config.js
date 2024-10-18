/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                darkBlue: "hsl(217, 28%, 15%)",
                darkBlue1: "hsl(218, 28%, 13%)",
                darkBlue2: "hsl(216, 53%, 9%)",
                darkBlue3: "hsl(219, 30%, 18%)",
                accentCyan: "hsl(176, 68%, 64%)",
                accentBlue: "hsl(198, 60%, 50%)",
                lightRed: "hsl(0, 100%, 63%)",
            },
            fontFamily: {
                sans: ["Raleway", "sans-serif"],
                opensans: ["Open Sans", "sans-serif"],
            },
            backgroundImage: (theme) => ({
                "logo-dark-mode": "url('../images/logo-dark-mode.svg')",
                "logo-light-mode": "url('../images/logo-light-mode.svg')",
                "curvy-dark-mode": "url('../images/bg-curvy-dark-mode.svg')",
                "curvy-light-mode": "url('../images/bg-curvy-light-mode.svg')",
            }),
        },
    },
    variants: {
        extend: {
            // 添加dark变体，但是通常无法自定义变体，因为tailwindcss内核并不支持自定义变体，除非自己写一个plugin进行解读
            backgroundImage: ["dark"],

            // textColor: ['a'],  // 允许 textColor 使用自定义的 a 变体
        },
    },
    plugins: [],
    // plugins: [
    //     function ({ addVariant, e }) {
    //       addVariant('a', ({ modifySelectors, separator }) => {
    //         modifySelectors(({ className }) => {
    //           return `a.${e(`a${separator}${className}`)}`;
    //         });
    //       });
    //     },
    //   ],
};
