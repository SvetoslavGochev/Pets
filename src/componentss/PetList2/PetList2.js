import { useEffect, useState } from "react";

import OtherPet from "../Dashboard/OtherPet/otherPet";
import * as petService from "../../Service/PetService";

const PetList2 = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    petService.getAll().then((result) => {
      console.log(result);
      setPets(result);
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <>
    
      {pets.length > 0
       ? (
        <ul className="other-pets-list">
          {pets.map((x) => (
            <OtherPet key={x._id} pet={x} />
          ))}
        </ul>
      ) : <p class="no-pets">No pets in database!</p>
        
      }
    </>
  );
};

export default PetList2;