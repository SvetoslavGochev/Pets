import CategoryNavigation from './CategoryNavigation/CategoriNavigation'

import  { Component } from 'react';

import  Pet  from '../Pet/Pet';

import * as petsService from '../../Service/PetService'


class Categories extends  Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
      
        // petsService.getAll()
        // .then(res => this.setState({ pets: res}))
    }

    componentDidUpdate() {
        
        // petsService.getAll(this.props.match.params.category)
        // .then(res => this.setState({ pets: res}))
        //match nqma
    }

    render() {
        

        return(
            <section className="dashboard">
            <h1>Dashboard</h1>
    
            <CategoryNavigation />
    
             
            <ul className="other-pets-list">
                {this.state.pets.map(x => 
                     <Pet
                      key={x.id}  {...x} 
                      //vmesdto da pi6em id, name, image i frugiyte taka gi vzimame vsi4ki
                      />
                )}
            </ul>
        </section>
        );
    }
    
}

export default Categories;