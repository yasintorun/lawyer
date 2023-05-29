import React, { useState } from 'react'

const newLawyer = () => {
    const [data, setData] = useState({
        name: '',
        title: '',
        phone: '',
        image: ''
    })
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)

    const showMessage = (msg) => {
        setMessage(msg)
        document.getElementById('message-modal').click()
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.name || !data.title || !data.phone || !data.image) {
            showMessage('Lütfen tüm alanları doldurunuz.')
            return;
        }
        setSending(true)
        fetch("/api/lawyer", {
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
                title: '',
                phone: '',
                image: ''
            })
            setSending(false)
        })
    }

    return (
        <div>
            {/* Use tailwindcss, form data {name, title, phone, image} */}
            <div className="flex justify-center">
                <div className="md:w-1/2 p-2 my-5">
                    <h1 className="text-2xl font-bold">Yeni Avukat</h1>
                    <div className="mt-4">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Ad Soyad
                                </label>
                                <input onChange={handleChange} value={data.name} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Ad Soyad" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Ünvan
                                </label>
                                <input onChange={handleChange} value={data.title} name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Ünvan" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Telefon
                                </label>
                                <input onChange={handleChange} value={data.phone} name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Telefon" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    Resim
                                </label>
                                <input onChange={handleChange} value={data.image} name="image" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="Resim" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={handleSubmit} className="btn btn-primary w-full">
                                    {sending ? 'Gönderiliyor...' : 'Gönder'}
                                </button>
                            </div>
                        </form>
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

        </div>
    )
}

export default newLawyer