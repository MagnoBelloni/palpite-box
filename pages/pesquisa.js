import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='py-6'>
            <PageTitle title="Pesquisa" />
            <h1 className='text-center font-bold my-4 text-2xl'>Criticas e sugestões</h1>
            <p className='text-center mb-6'>
                O resturante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abetos a ouvir a sua opinião.
            </p>
            {!success && (
                <div className='mx-auto w-1/5'>
                    <label className='font-bold' htmlFor="">Seu nome:</label>
                    <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                    <label className='font-bold' htmlFor="">E-mail:</label>
                    <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className='font-bold' htmlFor="">Whatsapp:</label>
                    <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                    <label className='font-bold'>Nota:</label>
                    <div className='flex py-6'>
                        {notas.map(nota => (
                            <label key={nota} className='block w-1/6 text-center' htmlFor={`Nota${nota}`} >
                                {nota}<br />
                                <input type="radio" name="Nota" id={`Nota${nota}`} value={nota} onChange={onChange} />
                            </label>
                        ))}
                    </div>
                    <button onClick={save} className='bg-blue-400 hover:bg-blue-700 px-12 py-4 font-bold rounded-lg text-white shadow-lg'>
                        Enviar
                    </button>
                </div>
            )}
            {
                success &&
                <div className='mx-auto w-1/5'>
                    <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
                        Obrigado por contribuir com sua sugestão/critica
                    </p>
                    {
                        retorno.showCoupon && (
                            <div className='text-center border p-4 mb-4'>
                                Seu cupom: <br />
                                <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                            </div>
                        )
                    }
                    {
                        retorno.showCoupon && (
                            <div className='text-center border p-4 mb-4'>
                                <span className='font-bold block mb-2'>{retorno.Promo}</span>
                                <br />
                                <p className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</p>
                            </div>
                        )
                    }
                </div>
            }
        </div >
    )
}

export default Pesquisa;