//Navbar component with a link to go to home page, scroll for different shades of a color, and provide a color format in hexadecimal, rgb, and rgba

//Components
import React, { Component } from 'react'

//Third Party JS
import {Link} from 'react-router-dom'
import Slider from 'rc-slider' //import slider files for color slider

//Material UI Modules
import { withStyles } from '@material-ui/styles'
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton  from '@material-ui/core/IconButton'

//CSS Styles
import styles from './styles/NavbarStyles.js'
import 'rc-slider/assets/index.css' //Place about palette css b/c of specificity 

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: 'hex', open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    //Methods
    //Change Format for Color Value - Popup the Snackbar too
    handleFormatChange(e){
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    //Close the Snackbar on Bottom Left
    closeSnackbar(){
        this.setState({open: false})
    }

    render() {
        const { level, changeLevel, showingAllColors, classes} = this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to='/'>React Color Picker</Link>
                </div>

                {/* RC Color Slider - If showingAllColors true, then display */}
                {showingAllColors && (
                    <div>
                        <span>
                            Level: {level}
                        </span>
                        <div className={classes.slider}>
                            <Slider 
                                defaultValue={level} 
                                min={100} 
                                max={900} 
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                )}

                {/* Select the Color Format */}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>

                {/* Snackbar Popup on Bottom Left After Selecting Different Color Format*/}
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id='message-id'>Format Changed to {format.toUpperCase()}</span>}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton 
                        onClick={this.closeSnackbar} 
                        color='inherit' 
                        key='close'
                        aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);