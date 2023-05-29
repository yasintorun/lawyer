import React, { useState } from 'react'

const Contract = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)

    const handleChange = (e) => {
        const { value, name } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const showMessage = (msg) => {
        setMessage(msg)
        document.getElementById('message-modal').click()
    }

    const handleSubmit = () => {
        const isEmailRegex = /\S+@\S+\.\S+/
        if (!isEmailRegex.test(data.email)) {
            showMessage('Lütfen geçerli bir eposta adresi giriniz!')
            return
        }
        if (!data.email || !data.name || !data.message) {
            showMessage('Lütfen tüm alanları doldurunuz!')
            return
        }
        setSending(true)
        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showMessage(data.message)
            setData({
                name: '',
                email: '',
                message: ''
            })
            setSending(false)
        })

    }

    return (
        <section className="w-full bg-white" id='contract'>

            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row">
                    <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
                        <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                            <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                                <div className="relative">
                                    <p className="mb-2 font-medium text-gray-700 uppercase">kolayca ulaş</p>
                                    <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Formu doldur, hukuk büromuzla iletişime geç</h2>
                                </div>
                                <p className="text-2xl text-gray-700"></p>
                                <a href="tel:+905123456789" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">İletişime Geç</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                        <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                            <h4 className="w-full text-3xl font-bold">İletişim Formu</h4>
                            <p className="text-lg text-gray-500">Tüm bilgileri eksiksiz, doldurunuz!</p>
                            <div className="relative w-full mt-10 space-y-8">
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Ad - Soyad</label>
                                    <input name='name' value={data.name} onChange={handleChange} type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Adınız soyadınız.." />
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Eposta</label>
                                    <input name='email' value={data.email} onChange={handleChange} type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Eposta adresiniz.." />
                                </div>
                                <div className="relative">
                                    <label className="font-medium text-gray-900">Mesajınız</label>
                                    <textarea name='message' value={data.message} onChange={handleChange} rows={10} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Mesajınız.." />
                                </div>
                                <div className="relative">
                                    <button type='button' onClick={handleSubmit} disabled={sending} className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease" data-primary="blue-600" data-rounded="rounded-lg">
                                    {sending ? 'Gönderiliyor...' : 'Gönder'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="message-modal" className="modal-toggle" />
            <label htmlFor="message-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    {/* <h3 className="text-lg font-bold">Uyarı</h3> */}
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="message-modal" className="btn btn-sm">Tamam!</label>
                    </div>
                </label>
            </label>

        </section>
    )
}

export default Contract