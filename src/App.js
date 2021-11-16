
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Header  from './componentss/Header/Header';
import Footer from './componentss/Footer/Footer'
import style from './componentss/Header/Header.css';

import Categories  from './componentss/Categories/Categories';

//switch kato machne edin rout i da spre
function App() {
  return (
    <div className="container">
     <Header />
     
    <Routes>

       <Route path="/" element={<Categories />}/>
    </Routes>
    

     <Footer />
    </div>
  );
}

export default App;
