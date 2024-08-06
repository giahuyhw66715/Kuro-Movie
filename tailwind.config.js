/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#f97316",
                orange: "#fec260",
                dark: "#0A0C0F",
                lightYellow: "#eeead6",
            },
        },
    },
    plugins: [],
});
