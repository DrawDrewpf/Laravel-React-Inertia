import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import muchaeljordan from '../../image/muchaeljordan.jpg'

export default function Guest({ children }) {   
    return (
        <div className=" flex justify-center items-center h-screen">
            <div>
                <div className=" h-screen hidden lg:block">
                    <img src={muchaeljordan} alt="Tu madre" className="object-cover w-full h-full rounded-r-2xl"/>
                </div>
            </div>

            <div className=" lg:p-36 md:p-52 sm:20 p-8 w-full border-blue-900">
                {children}
            </div>
        </div>
    );
}
