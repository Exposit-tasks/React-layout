import './content.scss'
import Main from "../main/main";
import Aside from "../aside/aside";


export default function Content(){
    return(
        <div className='content'>
            <Aside/>
            <Main/>
        </div>
    )
}