// Individual component for each of the moveable color boxes in the create a palette page

//Component 
import React from 'react'

//Third Party JS
import { SortableElement } from 'react-sortable-hoc'
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

//CSS Styles
import styles from './styles/DraggableColorBoxStyles.js'


const DraggableColorBox = SortableElement((props) => {
    const{classes, handleClick, name, color} = props;
    return (
     <div 
        className={classes.root} 
        style={{background: color}}
    >
        <div className={classes.boxContent}>
            <span>{name}</span>
            <span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </span>
        </div>
     </div>
    )
})


export default withStyles(styles)(DraggableColorBox);