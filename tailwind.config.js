module.exports = {
    purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'rust': '#DAA37F'
            },
            fontSize: {
                'mega': '10rem'
            }
        },
        fontFamily: {
            'sans': [
                'Albra Grotesk',
                'system-ui',
                'BlinkMacSystemFont',
                '-apple-system',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            'serif': [
                'Albra',
                'serif',
            ],
        }
    },
    variants: {
        display: ['responsive', 'group-hover'],
    },
    plugins: [],
}
