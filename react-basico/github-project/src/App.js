import { useState } from "react"; 
import UserInformation from "./components/UserInformation";
import SearchContainer from "./components/SearchContainer";
import Swal from "sweetalert2";
import './App.css';
import search from "./assets/icons/search.png";
import sun from "./assets/icons/sun.png";

function App() {
  const [inputText, setInputText] = useState("");

  const [user, setUser] = useState(null);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      // VAMOS A VALIDAR QUE EL USUARIO EXISTA
      if (data.message === "Not Found") {
        // AQUI AGREGAREMOS LA ALERTA [titulo, mensaje, tipo]
        Swal.fire("Error", "El usuario que buscas no existe", "error");
        return;
      }

      setUser(data)
      setInputText("");
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className="container">
        <div className="section-1">
            <h4 className="title">devfinder</h4>
            <button className="btn-mode"> 
                <img width="20" src={sun} alt=""/>LIGHT
            </button>
        </div>
        <SearchContainer
          inputText={inputText}
          handleInputChange={handleInputChange}
          searchUser={searchUser}
        />        
        {/* AQUI HAREMOS UNA VALIDACION PARA QUE EL DIV SIGUIENTE EXISTA SIEMPRE Y CUANDO USER TENGA DATOS */}
        { user && <UserInformation user={user}/>}
    </div>
  );
}

export default App;
