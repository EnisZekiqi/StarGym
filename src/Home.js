import { useEffect, useState } from "react"
import { useSuccessMessage } from './SuccessMessageContext';
const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const { successMessage, setSuccessMessage } = useSuccessMessage();
    const [name, setName] = useState('');
    const [shadow,setShadow]=useState(true)


    const handleInput = (e) => {
        setInputValue(e.target.value);
        setName(e.target.value);
    }

    const handleSubmit = () => {
        if (inputValue.trim() === '') {
            setError(true);
            setSuccessMessage('');
            setTimeout(() => {
                setError(false);
            }, 5000);
        } else {
            setError(false);
            setSuccessMessage('The message was sent successfully');
            setTimeout(() => {
               setShadow(false)
                
            }, 5000);
        }
    }

    const [blogs,setBlogs]=useState(null)

    

    return (
        <div className="home mt-12">
            <div className="flex flex-col bg-red-500">
                <input value={name} onChange={handleInput} className="border-x-blue-100" type="text" />
                <input value={inputValue} onChange={handleInput} type="text" />
                <input value={inputValue} onChange={handleInput} type="message" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            {successMessage && (
                <div className="success-message">
                   {shadow && 
                   <div className="f">
                     <div className="flex gap-2">
                    <p>{name}</p>
                    <p>{successMessage}</p>
                    </div>
                   </div>
                   }
                </div>
            )}
            {error && <p>Please fill the empty space</p>}

           
        </div>
    );
}
 
export default Home;