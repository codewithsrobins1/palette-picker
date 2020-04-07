import sizes from './sizes'
import bg from './bg.svg'

export default {
        '@global':{ //Not going to be prefixed, you can access fade-exit style from any file
            '.fade-exit':{
                opacity: '1'
            },
            '.fade-exit-active':{
                opacity: '0',
                transition: 'opacity 500ms ease-out'
            } 
        },
        root:{
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            /* background by SVGBackgrounds.com */
            backgroundColor: '#6042aa',
            backgroundImage: `url(${bg})`,
            overflow: 'scroll'
        },
        container:{
            width: '50%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            [sizes.down('xl')]: {
                width: '80%'
            },
            [sizes.down('xs')]: {
                width: '75%'
            }
        },
        heading:{
            fontSize: '2rem'
        },
        nav:{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            "& a": {
                color: 'white'
            }
        },
        palettes:{
            boxSizing: 'border-box',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 30%)', //3 columns taking 30% of width
            gridGap: '5%', //5% gap between grids
            [sizes.down('md')]: {
                gridTemplateColumns: 'repeat(2, 50%)'
            },
            [sizes.down('xs')]: {
                gridTemplateColumns: 'repeat(1, 100%)',
            }
        }
    }