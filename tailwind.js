/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()


/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  "red-50": "#ffebee",
  "red-100": "#ffcdd2",
  "red-200": "#ef9a9a",
  "red-300": "#e57373",
  "red-400": "#ef5350",
  "red-500": "#f44336",
  "red-600": "#e53935",
  "red-700": "#d32f2f",
  "red-800": "#c62828",
  "red-900": "#b71c1c",
  "red-a100": "#ff8a80",
  "red-a200": "#ff5252",
  "red-a400": "#ff1744",
  "red-a700": "#d50000",

  "pink-50": "#fce4ec",
  "pink-100": "#f8bbd0",
  "pink-200": "#f48fb1",
  "pink-300": "#f06292",
  "pink-400": "#ec407a",
  "pink-500": "#e91e63",
  "pink-600": "#d81b60",
  "pink-700": "#c2185b",
  "pink-800": "#ad1457",
  "pink-900": "#880e4f",
  "pink-a100": "#ff80ab",
  "pink-a200": "#ff4081",
  "pink-a400": "#f50057",
  "pink-a700": "#c51162",

  "purple-50": "#f3e5f5",
  "purple-100": "#e1bee7",
  "purple-200": "#ce93d8",
  "purple-300": "#ba68c8",
  "purple-400": "#ab47bc",
  "purple-500": "#9c27b0",
  "purple-600": "#8e24aa",
  "purple-700": "#7b1fa2",
  "purple-800": "#6a1b9a",
  "purple-900": "#4a148c",
  "purple-a100": "#ea80fc",
  "purple-a200": "#e040fb",
  "purple-a400": "#d500f9",
  "purple-a700": "#aa00ff",

  "deeppurple-50": "#ede7f6",
  "deeppurple-100": "#d1c4e9",
  "deeppurple-200": "#b39ddb",
  "deeppurple-300": "#9575cd",
  "deeppurple-400": "#7e57c2",
  "deeppurple-500": "#673ab7",
  "deeppurple-600": "#5e35b1",
  "deeppurple-700": "#512da8",
  "deeppurple-800": "#4527a0",
  "deeppurple-900": "#311b92",
  "deeppurple-a100": "#b388ff",
  "deeppurple-a200": "#7c4dff",
  "deeppurple-a400": "#651fff",
  "deeppurple-a700": "#6200ea",

  "indigo-50": "#e8eaf6",
  "indigo-100": "#c5cae9",
  "indigo-200": "#9fa8da",
  "indigo-300": "#7986cb",
  "indigo-400": "#5c6bc0",
  "indigo-500": "#3f51b5",
  "indigo-600": "#3949ab",
  "indigo-700": "#303f9f",
  "indigo-800": "#283593",
  "indigo-900": "#1a237e",
  "indigo-a100": "#8c9eff",
  "indigo-a200": "#536dfe",
  "indigo-a400": "#3d5afe",
  "indigo-a700": "#304ffe",

  "blue-50": "#e3f2fd",
  "blue-100": "#bbdefb",
  "blue-200": "#90caf9",
  "blue-300": "#64b5f6",
  "blue-400": "#42a5f5",
  "blue-500": "#2196f3",
  "blue-600": "#1e88e5",
  "blue-700": "#1976d2",
  "blue-800": "#1565c0",
  "blue-900": "#0d47a1",
  "blue-a100": "#82b1ff",
  "blue-a200": "#448aff",
  "blue-a400": "#2979ff",
  "blue-a700": "#2962ff",

  "lightblue-50": "#e1f5fe",
  "lightblue-100": "#b3e5fc",
  "lightblue-200": "#81d4fa",
  "lightblue-300": "#4fc3f7",
  "lightblue-400": "#29b6f6",
  "lightblue-500": "#03a9f4",
  "lightblue-600": "#039be5",
  "lightblue-700": "#0288d1",
  "lightblue-800": "#0277bd",
  "lightblue-900": "#01579b",
  "lightblue-a100": "#80d8ff",
  "lightblue-a200": "#40c4ff",
  "lightblue-a400": "#00b0ff",
  "lightblue-a700": "#0091ea",

  "cyan-50": "#e0f7fa",
  "cyan-100": "#b2ebf2",
  "cyan-200": "#80deea",
  "cyan-300": "#4dd0e1",
  "cyan-400": "#26c6da",
  "cyan-500": "#00bcd4",
  "cyan-600": "#00acc1",
  "cyan-700": "#0097a7",
  "cyan-800": "#00838f",
  "cyan-900": "#006064",
  "cyan-a100": "#84ffff",
  "cyan-a200": "#18ffff",
  "cyan-a400": "#00e5ff",
  "cyan-a700": "#00b8d4",

  "teal-50": "#e0f2f1",
  "teal-100": "#b2dfdb",
  "teal-200": "#80cbc4",
  "teal-300": "#4db6ac",
  "teal-400": "#26a69a",
  "teal-500": "#009688",
  "teal-600": "#00897b",
  "teal-700": "#00796b",
  "teal-800": "#00695c",
  "teal-900": "#004d40",
  "teal-a100": "#a7ffeb",
  "teal-a200": "#64ffda",
  "teal-a400": "#1de9b6",
  "teal-a700": "#00bfa5",

  "green-50": "#e8f5e9",
  "green-100": "#c8e6c9",
  "green-200": "#a5d6a7",
  "green-300": "#81c784",
  "green-400": "#66bb6a",
  "green-500": "#4caf50",
  "green-600": "#43a047",
  "green-700": "#388e3c",
  "green-800": "#2e7d32",
  "green-900": "#1b5e20",
  "green-a100": "#b9f6ca",
  "green-a200": "#69f0ae",
  "green-a400": "#00e676",
  "green-a700": "#00c853",

  "lightgreen-50": "#f1f8e9",
  "lightgreen-100": "#dcedc8",
  "lightgreen-200": "#c5e1a5",
  "lightgreen-300": "#aed581",
  "lightgreen-400": "#9ccc65",
  "lightgreen-500": "#8bc34a",
  "lightgreen-600": "#7cb342",
  "lightgreen-700": "#689f38",
  "lightgreen-800": "#558b2f",
  "lightgreen-900": "#33691e",
  "lightgreen-a100": "#ccff90",
  "lightgreen-a200": "#b2ff59",
  "lightgreen-a400": "#76ff03",
  "lightgreen-a700": "#64dd17",

  "lime-50": "#f9fbe7",
  "lime-100": "#f0f4c3",
  "lime-200": "#e6ee9c",
  "lime-300": "#dce775",
  "lime-400": "#d4e157",
  "lime-500": "#cddc39",
  "lime-600": "#c0ca33",
  "lime-700": "#afb42b",
  "lime-800": "#9e9d24",
  "lime-900": "#827717",
  "lime-a100": "#f4ff81",
  "lime-a200": "#eeff41",
  "lime-a400": "#c6ff00",
  "lime-a700": "#aeea00",

  "yellow-50": "#fffde7",
  "yellow-100": "#fff9c4",
  "yellow-200": "#fff59d",
  "yellow-300": "#fff176",
  "yellow-400": "#ffee58",
  "yellow-500": "#ffeb3b",
  "yellow-600": "#fdd835",
  "yellow-700": "#fbc02d",
  "yellow-800": "#f9a825",
  "yellow-900": "#f57f17",
  "yellow-a100": "#ffff8d",
  "yellow-a200": "#ffff00",
  "yellow-a400": "#ffea00",
  "yellow-a700": "#ffd600",

  "amber-50": "#fff8e1",
  "amber-100": "#ffecb3",
  "amber-200": "#ffe082",
  "amber-300": "#ffd54f",
  "amber-400": "#ffca28",
  "amber-500": "#ffc107",
  "amber-600": "#ffb300",
  "amber-700": "#ffa000",
  "amber-800": "#ff8f00",
  "amber-900": "#ff6f00",
  "amber-a100": "#ffe57f",
  "amber-a200": "#ffd740",
  "amber-a400": "#ffc400",
  "amber-a700": "#ffab00",

  "orange-50": "#fff3e0",
  "orange-100": "#ffe0b2",
  "orange-200": "#ffcc80",
  "orange-300": "#ffb74d",
  "orange-400": "#ffa726",
  "orange-500": "#ff9800",
  "orange-600": "#fb8c00",
  "orange-700": "#f57c00",
  "orange-800": "#ef6c00",
  "orange-900": "#e65100",
  "orange-a100": "#ffd180",
  "orange-a200": "#ffab40",
  "orange-a400": "#ff9100",
  "orange-a700": "#ff6d00",

  "deeporange-50": "#fbe9e7",
  "deeporange-100": "#ffccbc",
  "deeporange-200": "#ffab91",
  "deeporange-300": "#ff8a65",
  "deeporange-400": "#ff7043",
  "deeporange-500": "#ff5722",
  "deeporange-600": "#f4511e",
  "deeporange-700": "#e64a19",
  "deeporange-800": "#d84315",
  "deeporange-900": "#bf360c",
  "deeporange-a100": "#ff9e80",
  "deeporange-a200": "#ff6e40",
  "deeporange-a400": "#ff3d00",
  "deeporange-a700": "#dd2c00",

  "brown-50": "#efebe9",
  "brown-100": "#d7ccc8",
  "brown-200": "#bcaaa4",
  "brown-300": "#a1887f",
  "brown-400": "#8d6e63",
  "brown-500": "#795548",
  "brown-600": "#6d4c41",
  "brown-700": "#5d4037",
  "brown-800": "#4e342e",
  "brown-900": "#3e2723",

  "grey-50": "#fafafa",
  "grey-100": "#f5f5f5",
  "grey-200": "#eeeeee",
  "grey-300": "#e0e0e0",
  "grey-400": "#bdbdbd",
  "grey-500": "#9e9e9e",
  "grey-600": "#757575",
  "grey-700": "#616161",
  "grey-800": "#424242",
  "grey-900": "#212121",

  "bluegrey-50": "#eceff1",
  "bluegrey-100": "#cfd8dc",
  "bluegrey-200": "#b0bec5",
  "bluegrey-300": "#90a4ae",
  "bluegrey-400": "#78909c",
  "bluegrey-500": "#607d8b",
  "bluegrey-600": "#546e7a",
  "bluegrey-700": "#455a64",
  "bluegrey-800": "#37474f",
  "bluegrey-900": "#263238",

  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef',

  'quem_compra-laranja': '#F5690A',
  'quem_compra-verde': '#009900',
  'quem_compra-azul': '#0502FC',
  'quem_compra-roxo': '#9D008F',
  'quem_compra-amarelo': '#F6FF0A',

  get ['brand']() {return this['quem_compra-roxo'];  },
  get ['brand-primary']() {return this['quem_compra-azul'];  },
  get ['brand-secondary']() {return this['quem_compra-laranja'];  },
  get ['brand-background']() {return this['grey-lightest'];  }
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      '-apple-system',
      'BlinkMacSystemFont',
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
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ]
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    'xs': '.75rem',     // 12px
    'sm': '.875rem',    // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },


  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'hairline': 100,
    'thin': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'none': 1,
    'tight': 1.25,
    'normal': 1.5,
    'loose': 2,
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight': '-0.05em',
    'normal': '0',
    'wide': '0.05em',
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: Object.assign({default: colors['grey-light']}, colors),


  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    'none': '0',
    'sm': '.125rem',
    default: '.25rem',
    'lg': '.5rem',
    'full': '9999px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%',
    'screen': '100vw'
  },


  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    'auto': 'auto',
    'px': '1px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '24': '6rem',
    '32': '8rem',
    '48': '12rem',
    '64': '16rem',
    'full': '100%',
    'screen': '100vh'
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0': '0',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh'
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    'xs': '20rem',
    'sm': '30rem',
    'md': '40rem',
    'lg': '50rem',
    'xl': '60rem',
    '2xl': '70rem',
    '3xl': '80rem',
    '4xl': '90rem',
    '5xl': '100rem',
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    'none': 'none',
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    '60': 60,
    '70': 70,
    '80': 80,
    '90': 90,
    '100': 100
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants: 'responsive', 'hover', 'focus'
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
