import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import LoginImg from '../../image/LoginImg.jpg';
import LogoDark from '../../image/LogotipoDark_mode.png';

export default function Guest({ children }) {   
    return (
        <div className=" flex justify-center  items-center h-screen dark:bg-gray-400">
            <div>
                <div className=" flex justify-center items-center h-screen">
                
                    <img src={LoginImg} alt="LoginImg" className="object-cover w-full h-full rounded-r-2xl"/>
                                        
                </div>
            </div>

            <div className=" lg:p-36 md:p-52 sm:20 p-8  ">
                {children}
            </div>
        </div>
    );
}
