const Pets = () => {
    return    <li className="otherPet">
    <h3>Name: </h3>
    <p>Category: </p>
    <p className="img"><img src={"s"} /></p>
    <p className="description"></p>
    <div className="pet-info">
       <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
       <a href="#"><button className="button">Details</button></a>
       <i className="fas fa-heart"></i> <span>likes</span>
    </div>
 </li>
}

export default Pets;