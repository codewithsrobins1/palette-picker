//Components
import React, { Component } from 'react';
import Page from './Page.js'
import Palette from './Palette.js'
import PaletteList from './PaletteList.js'
import SingleColorPalette from './SingleColorPalette.js';
import NewPaletteForm from './NewPaletteForm.js';

//Helper Files
import {generatePalette} from './colorHelpers'
import seedColors from './seedColors'

//Third Party JS
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'


class App extends Component{
  constructor(props){
    super(props);

    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes')); //check local storage

    this.state = {palettes: savedPalettes || seedColors}    //palettes will be whatever is in local storage (if any) or the default palettes
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  //Methods
  //Find the Palette from SeedColors
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id === id;
    })
  }

  //Remove Palette
  deletePalette(id){
    this.setState (
      st => ({palettes: st.palettes.filter(palette => palette.id !== id)}), //filer all the palettes that dont match the ID that's passed in
      this.syncLocalStorage 
      )
  }

  //update the state and sync local storage
  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]},
      this.syncLocalStorage
    ) 
  }

   //Save Palettes to Local Storage
  syncLocalStorage(){
    window.localStorage.setItem(
      'palettes', 
      JSON.stringify(this.state.palettes) //local storage wants strings
      )
  }

  render(){
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='page' timeout={300}>
            <Switch location={location}>
            <Route 
              exact 
              path="/palette/new" 
              render={ (routeProps) => (
                  <Page>
                    <NewPaletteForm 
                      savePalette={this.savePalette} 
                      palettes={this.state.palettes} 
                      {...routeProps}
                    />
                  </Page>
                )}
            />
            <Route 
              exact
              path="/palette/:paletteId/:colorId" 
              render={routeProps => (
                  <Page>
                  <SingleColorPalette 
                    colorId={routeProps.match.params.colorId}
                    palette={generatePalette 
                      (this.findPalette(routeProps.match.params.paletteId)
                      )} 
                    />
                  </Page>
                )} 
            />
            <Route 
              exact
              path='/palette/:id' 
              render={routeProps => (
              <Page>   
                <Palette 
                  palette={generatePalette 
                    (this.findPalette(routeProps.match.params.id)
                  )} 
                />
              </Page>
              )} 
            />
            <Route 
              exact 
              path='/' 
              render={routeProps => (
                  <Page>
                    <PaletteList 
                      palettes={this.state.palettes} 
                      deletePalette={this.deletePalette} 
                      {...routeProps} 
                    />
                  </Page>
                )} 
            /> 
            
            {/* Catch / Error Route  */}
            <Route 
              render={routeProps => (
                  <Page>
                    <PaletteList 
                      palettes={this.state.palettes} 
                      deletePalette={this.deletePalette} 
                      {...routeProps} 
                    />
                  </Page>
                )} 
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} 
      />
    );
  }
}

export default App;
