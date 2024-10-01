import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import LoginImg from '../../image/LoginImg.jpg';
import LogoDark from '../../image/LogotipoDark_mode.png';

export default function Guest({ children }) {   
    return (
        <div className=" flex justify-center items-center h-screen dark:bg-gray-400">
            <div>
                <div className=" h-screen hidden lg:block relative">
                <div class="absolute inset-0 bg-black opacity-50 rounded-r-2xl"></div>
                    <img src={LoginImg} alt="Tu madre" className="object-cover w-full h-full rounded-r-2xl"/>
                    <div class="absolute top-52 left-0 w-full flex flex-col items-center p-4 text-white">
                        <img src={LogoDark} className='w-2/3'/>
                        <h1 class="pt-5 pb-2 text-4xl font-bold">¡Bienvenido!</h1>
                        <p class="mt-2 text-lg w-2/3 text-center">Ahora temen al castigo y ruegan por sus vidas, así que les dejaré libres, no por ninguna otra razón, sino para que puedan ver la diferencia entre un rey griego y un tirano bárbaro. Así que no esperen a sufrir ningún daño de mí. Un rey no mata a los mensajeros.</p>
                    </div>
                                        
                </div>
            </div>

            <div className=" lg:p-36 md:p-52 sm:20 p-8  ">
                {children}
            </div>
        </div>
    );
}
