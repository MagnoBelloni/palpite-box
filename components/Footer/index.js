import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center text-white font-bold'>
                Projeto desenvolvido por: Magno Belloni /{' '}
                <a className='hover:underline' href="https://www.linkedin.com/in/magnobelloni/">Linkedin</a> /{' '}
                <a className='hover:underline' href="https://github.com/MagnoBelloni">Github</a>
            </div>
            <div className='mt-2'>
                <img className='inline p-4' src="/logo_semana_fsm.png" alt="Logo Semana FullStack Master" />
                <img className='inline p-4' src="/logo_devpleno.png" alt="Logo DevPleno" />
            </div>
        </div>
    )
}

export default Footer;