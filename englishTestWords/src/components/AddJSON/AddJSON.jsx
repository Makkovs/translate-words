import { useState } from "react";
import "./addjson.css";

const AddJSON = ({ addWordsFromJson }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const getFile = () => {
        if (!selectedFile) return;

        const reader = new FileReader()
        reader.onload = (e) => {
            try {
              addWordsFromJson(e.target.result);
            } catch(error) {
              console.log(error);
            }
        }
        reader.readAsText(selectedFile);
    }

    return (
      <div className="add_json">
        <input 
            type="file" 
            accept=".json" 
            onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button 
            className="add_json__button" 
            onClick={getFile}
        >
            Зберегти
        </button>
        <span>
            Увага: при додаванні слів таким способом, усі старі слова зникнуть!
        </span>
      </div>
    );
}

export default AddJSON;