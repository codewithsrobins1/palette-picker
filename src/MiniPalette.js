//The mini color boxes displayed for each of the palettes

//Components
import React, { PureComponent } from 'react';

//Material UI
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from "@material-ui/styles"

//CSS Styles
import styles from './styles/MiniPaletteStyles.js'


class MiniPalette extends PureComponent{
    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    //Methods
    handleClick(){
        this.props.goToPalette(this.props.id);
    }

    deletePalette(e){
        e.stopPropagation(); //Need to stop link from opening up to palette route
        this.props.openDialog(this.props.id)
    }

    render(){
        const {classes, paletteName, emoji, colors} = this.props;
        const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor}
            style={{backgroundColor: color.color}}
            key={color.name}
        />

    ));

    return(
        <div className={classes.root} onClick={this.handleClick}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={this.deletePalette}
                />
            <div className={classes.colors}>
                {/* Mini Color Boxes */}
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    )
    }
}

export default withStyles(styles)(MiniPalette); //Example of High Order Component
    //High Order Component - Takes MiniPalette and returns a new version of component that has style passed to the props

    //Example - Dont Forget Paranthess
    // const styles = {
    //     main: {
    //         backgroundColor: 'blue',
    //         border: "2px solid red"
    //     }
    // }

    // function something(props){
    //     const {classes} = props;
    // }
    // <div className={classes.main}> 
    //     <h1>Hello</h1>
    // </div>