import { useDispatch,useSelector  } from 'react-redux'
import { increment, decrement } from './feature/add'
import './App.css'


export default function App() {
  const dispatch = useDispatch()
 const counter = useSelector((state) => state.addApple.value)


  return (
    <div className="main">
       <div className="container">
         <h2> 🍎 Pomme : {counter}</h2>
       </div>
       <div className="bodyApp">
           <img src="https://www.plantes-et-sante.fr/images/istock-155375750.jpg" alt="" />
       </div>
       
         <div className="boxButton">
           <button 
           onClick={() => dispatch(increment())}
           >Ajouter</button>
           <button>Ajouter X10</button>
           <button>Suprimer</button>
           <button>Suprimer x10</button>
         </div>
       
    </div>

  )
}