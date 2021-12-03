
import { Route, Routes , Link} from "react-router-dom";

import PetList2 from "../PetList2/PetList2";

import {ReactComponent as Logo} from '../../logo.svg'

const Dashboard = () => {
  return (
    <section id="dashboard-page" className="dashboard">
      <h1>Dashboard</h1>

      <nav>
        <Link to="types">Types</Link>
      </nav>

       <section>
        <Routes>
          <Route path="/"  element={<PetList2 />}/>
          {/* <Route path="/types"  element={<><p>Types ...</p></> } /> */}

        </Routes>

       </section>
          
          {/* <img src={logo} title="asd" alt="asd" /> */}
          <Logo className="logo" />
    </section>
  );
};

export default Dashboard;
