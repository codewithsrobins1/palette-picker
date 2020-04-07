//Component for the colors that can be moved and rearranged within the create a palette form

//Components
import React from 'react';
import DraggableColorBox from './DraggableColorBox.js'

//Third Party JS
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height: '100%'}}>
            {colors.map((color, i) => (
                 <DraggableColorBox 
                    index={i}
                    key={color.name}
                    color={color.color} 
                    name={color.name} 
                    handleClick={() => removeColor(color.name)}
                />
            ))}
        </div>
    );
});


export default DraggableColorList;