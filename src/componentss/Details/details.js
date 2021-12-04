import { useParams, useNavigate } from "react-router-dom";
import * as petService from '../../Service/PetService';

import { useEffect, useState, useContext } from "react"; 

import { AuthContext } from "../../context/AuthContext";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(async () => {
    
        let petResult = await petService.getOne(petId);
        setPet( petResult);
      
    }, []);

  const  deleteHandler = (e) => {
      e.preventDefault();
      
      petService.remouve(petId)
      .then(() => {
         navigate('/dashboard');
      })
    };
    const   editHandler = () => {
   
    };

    const ownerButtons = (
       <>
         <button className="button" href="#" onClick={editHandler} >Edit</button>
         <button className="button" href="#" onClick={deleteHandler} >Delete</button>
       </>
       );

       const userButtons = <a className="button" href="#">Like</a>;

     return(
        <section id="details-page" className="details">
        <div className="pet-information">
            <h3>Name: {pet.name}</h3>
            <p className="type">Type: {pet.type}</p>
            <p className="img"><img src={pet.imageUrl}/></p>
            <div className="actions">

             
                {user._id && (user._id == pet._ownerId
                ? ownerButtons
                : userButtons
                )}
                
               
                <div className="likes">
                    <img className="hearts" src="/images/heart.png" alt="sd"/>
                    <span id="total-likes">Likes: {pet.likes?.length}</span>
                </div>
                
            </div>
        </div>
        <div className="pet-description">
            <h3>Description:</h3>
            <p>{pet.description}</p>
        </div>
    </section>
     );
}

export default Details;