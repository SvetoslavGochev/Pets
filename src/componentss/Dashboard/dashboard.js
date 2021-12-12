
import { Link} from "react-router-dom";


import PetList2 from "../PetList2/PetList2";

// import {ReactComponent as Logo} from '../../logo.svg'

const Dashboard = () => {
  return (
    <section id="dashboard-page" className="dashboard">
      <h1>Dashboard</h1>

      <nav>
        <Link to="types">Types</Link>
      </nav>

       <section>
         <PetList2 />
       </section>
           
    </section>
  );
};

export default Dashboard;
