import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import LogoTipoLight from '../../../image/LogotipoLight_mode.png'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className='flex justify-center'>
           <img src={LogoTipoLight} className='pb-10 size-2/3 ' />
           </div>
           <div className='flex pb-4 text-orange-600 font-bold'>
           <h1>Inicia Sesión</h1>
           </div>
            <form onSubmit={submit}>
                
                <div >
                    
                    <InputLabel className="block text-blue-900 pb-2 font-semibold "htmlFor="email" value="Correo Electrónico" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full border-blue-900 dark:bg-gray-400"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-8 font-semibold">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full border-blue-900"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-8">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Recuerdame</span>
                        
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    

                    <PrimaryButton className="ms-4 bg-orange-500" disabled={processing}>
                    Iniciar Sesión
                    </PrimaryButton>
                    
                </div>
                <div className='text-right pt-3'>
                        {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className=" underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-gray-800"
                        >
                            ¿Olvidaste la contraseña?
                        </Link>
                    )}
                    </div>
                <div className='text-right text-xs pt-5'>
                <p className="pb-2 pt-3">Copyright. All Rights Reserved</p>
            <p>El contenido de las páginas de esta plataforma web sólo es informativo.Puede estar sujeto a cambios sin previo aviso</p>
            </div>
            </form>
        </GuestLayout>
    );
}
