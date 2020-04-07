//Individual palette component with all the different shades of 1 color

//Components
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import PaletteFooter from './PaletteFooter.js'
import ColorBox from './ColorBox.js'

//Third Party JS
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'

//CSS Styles
import styles from './styles/PaletteStyles.js'


class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {format: 'hex'};
        this.changeFormat = this.changeFormat.bind(this);
    }

    //Methods
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id ===colorToFilterBy)
            )
        }
        //return all shades of given color
        return shades.slice(1); //give everything from 1 onwards
    }

    changeFormat(val){
        this.setState({ format: val });
    }

    render(){
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
   

export default withStyles(styles)(SingleColorPalette);