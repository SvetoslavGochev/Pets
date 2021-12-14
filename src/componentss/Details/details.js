import { useParams, useNavigate,Link } from "react-router-dom";
import * as petService from '../../Service/PetService';

import { useEffect, useState, useContext } from "react"; 

import { AuthContext, useAuthContext } from "../../context/AuthContext";
import { ConfirmDialog} from '../Common/ConfirmDialog'

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect( () => {
    
        petService.getOne(petId)
           .then(petResult =>{
               setPet( petResult);
           } )
      
    }, [petId]);

  const deleteHandler = (e) => {
      e.preventDefault();
      console.log("Aleta Ocean");
      petService.remouve(petId, user.accessToken)
      .then(() => {
         navigate('/dashboard');
      })
    };
    const editHandler = () => {
   
    };

    const deleteClickHandler = (e) => {
        console.log("Aleta Ocean2")
        e.preventDefault();
    }

    const ownerButtons = (
       <>
         <Link className="button" to="/edit" onClick={editHandler}>Edit</Link>
         <a className="button" href="#" onClick={deleteHandler}>Delete</a>
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