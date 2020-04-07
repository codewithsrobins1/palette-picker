//Component for the form within the drawer of the 'Create a Palette' page

//Components
import React, { Component } from 'react';
import styles from './styles/ColorPickerFormStyles.js'

//Third Party JS
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

//Material UI Imports
import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles';



class ColorPickerForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            currentColor: 'orange',
            newColorName: ""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isNameUnique", value => 
            this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
    );
        ValidatorForm.addValidationRule("isColorUnique", value => 
            this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
}

    //Methods
    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex})
    }   

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.addNewColor(newColor);
        this.setState({newColorName: ''})
    }



    render() {
        const {paletteIsFull, classes} = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
            <ChromePicker 
                color={currentColor}
                onChangeComplete={this.updateCurrentColor}
                className={classes.picker}
            />
            <ValidatorForm onSubmit={this.handleSubmit} ref='form' instantValidate={false}>
                <TextValidator 
                    value={newColorName}
                    className={classes.colorNameInput}
                    name='newColorName' 
                    variant='filled'
                    margin='normal'
                    placeholder='Color Name'
                    onChange={this.handleChange}
                    validators={['required', 'isNameUnique', 'isColorUnique']}
                    errorMessages={[
                        'Enter a Color Name',
                        'Color Name Taken', 
                        'Color Already in Use' 
                    ]}
                />
                <Button 
                    variant="contained" 
                    type='submit'
                    color="primary" 
                    className={classes.addColor}
                    disabled={paletteIsFull}
                    style={{backgroundColor: paletteIsFull ? "Grey" : currentColor}}
                    >
                    {paletteIsFull ? "Palette Full" : 'Add Colors'}
                </Button>
            </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)