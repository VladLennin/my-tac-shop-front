module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        screens: {
            'xl': '900px',

        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}