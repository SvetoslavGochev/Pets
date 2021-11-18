import CategoryNavigation from './CategoryNavigation/CategoriNavigation'

import  { Component } from 'react';

import  Pet  from '../Pet/Pet';



class Categories extends  Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
    }

    componentDidMount() {

        fetch('http://localhost:5000/pets')
        .then(res => res.json())
        .then(res => this.setState({pets: res}))
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)

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