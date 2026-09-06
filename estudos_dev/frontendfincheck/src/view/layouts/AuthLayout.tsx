// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ilustration from '../../assets/ilustration.png'
import logo from '../../assets/logo_verde.svg'
import logo2 from '../../assets/logo_cinza.svg'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
    return (
        <div className='flex w-full h-full'>
            <div className='w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2'>
                <img src={logo2} className='h-6' />


                <div className='w-full max-w-[504px] px-8'>
                 <Outlet />
                </div>
            </div>

            <div className='w-1/2 h-ful justy-center items-center p-8 relative hidden lg:flex'>
                <img
                    src={ilustration}
                    className='object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]'
                />

                <div className='max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-[32px]'>
                    <img src={logo} />

                    <p className='text-gray-700 font-medium text-xl mt-6'> Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhir, totalmente de graça!</p>
                </div>
            </div>
        </div>

    )
}