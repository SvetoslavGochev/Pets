import { useEffect, useState } from "react";

import { Route } from 'react-router-dom';
import OtherPet from "./OtherPet/otherPet";

import * as petService from '../../Service/PetService'

const Dashboard = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
        .then(result => {

          console.log(result)
            setPets(result);
        })
    }, [])


    return(
        <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        
      <nav>
            <Route path="all" />

            
      </nav>


        <ul class="other-pets-list">
          { pets.map(x => <OtherPet key={x._id} pet={x} />)}
        </ul>

        <p class="no-pets">No pets in database!</p>
    </section>
    );
}

export default Dashboard;