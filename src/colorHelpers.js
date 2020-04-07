//Generate the palette colors

import chroma from "chroma-js"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette){
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    //build a new colors object that will build 100 set to array, 200 set to array etc
    for (let level of levels){
        newPalette.colors[level] = [];
    }
    //Loops over every color - generate colors and take the smallest number and set to lightest value and then go up from there
    for (let color of starterPalette.colors){
        let scale = getScale(color.color, 10).reverse();
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i])
                .css()
                .replace('rgb', "rgba")
                .replace(")", ", 1.0)")
            })
        }
    }
    return newPalette;
}

//Take Hex Color and then define end color; then create Range of colors
function getRange(hexColor){
    const end = "#fff";
    //Generate an array with 3 color values
    return[
        chroma(hexColor)
        .darken(1.4)
        .hex(),
        hexColor,
        end
    ];
}


//Give 10 colors Based off an input color
function getScale (hexColor, numberOfColors){
   return chroma
   .scale(getRange(hexColor))
   .mode('lab')
   .colors(numberOfColors)
}

export { generatePalette };