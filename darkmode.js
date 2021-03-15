// Fazer umas mudancas pq as cores estão todas erradas

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    whiteBg: getStyle(html, "--white-bg"),
    textColorWhite: getStyle(html, "--text-color-white"),
    lightGray: getStyle(html, "--light-gray"),
    bgColor: getStyle(html, "--bg-color"),
    greenLink: getStyle(html, "--green-link"),
    textDark: getStyle(html, "--text-dark"),
    green: getStyle(html, "--green"),
    lightGreen: getStyle(html, "--ligth-green"),
    lemonGreen: getStyle(html, "--lemon-green"),
    greenButton: getStyle(html, "--green-button"),
    red: getStyle(html, "--red"),
}

const darkMode = {
    bgColor: "#363636",
    bg: "#2b2b2b",
    whiteBg: "#494949",
    textColorWhite: "#f0f0f0",
    lightGray: "#d3d9ed",
    greenLink: "#33be00",
    textDark: "#fff",
    green: "#3dd705",
    lemonGreen: "#3dd705",
    lightGreen: "#3dd705",
    greenButton: "#1e540c",
    red: "#ff4040",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}



checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})