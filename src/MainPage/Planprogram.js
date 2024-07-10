import NavbarGeneral from "./NavbarGeneral";
import { useDarkMode } from "../DarkModeContext";

const PlanProgram = () => {
    const { darkMode } = useDarkMode()

    return ( 
        <div 
        style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}
        >
            <NavbarGeneral/>
            <div className="empty"></div>
            <div className="container mx-auto px-8 flex flex-col gap-8">
                <h1 className="text-4xl font-bold">Planprogram</h1>
            </div>
        </div>
     );
}
 
export default PlanProgram;