//Footer component with name of palette and emoji

//Components
import React from 'react';

//Material UI
import { withStyles } from '@material-ui/styles'

//CSS Styles 
import styles from './styles/PaletteFooterStyles'

function PaletteFooter(props){
    const {paletteName, emoji, classes} = props;
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            {/* Emoji doesnt show up on windows */}
            <span className={classes.emoji}>{emoji}</span> 
        </footer>
    )
}


export default withStyles(styles)(PaletteFooter);