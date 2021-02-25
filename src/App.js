import './App.css';
import {useState} from "react";

function App() {
    const [files, setFiles] = useState([]);
    const [curFile, setCurFile] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);

    function addFile() {
        setMessage("");
        setError("");
        if (!curFile || !curFile?.[0]?.name || files.includes(curFile[0].name)) {
            setError("Vous n'avez pas sélectionné de fichier ou celui-ci existe déjà.");
            return;
        }
        setUploading(true);
        setTimeout(() => {
            setFiles([...files, curFile[0].name]);
            setCurFile(null);
            setUploading(false);
            setMessage("Le fichier a bien été transmis.")
        }, 2000);
    }

    function onFileChange(event) {
        setCurFile(event.target.files);
    }

    return (
        <div>
            <h1>EMESPERRE</h1>
            <h2>Page de test</h2>
            <div>
                <label htmlFor="value">Téléversez un CSV</label>
                <br/>
                <input id="value" name="value" type="file" onChange={onFileChange} accept=".csv"/>
                <br/>
                <input type="submit" value="Envoyer" disabled={uploading} onClick={() => {addFile()}}/>
            </div>
            <div>
                <ul>
                    {files.map(file => <li key={file}>{file}</li>)}
                </ul>
            </div>
            <h3 style={{color: "red"}}>{error}</h3>
            <h3 style={{color: "darkgreen"}}>{message}</h3>
        </div>
    );
}

export default App;
