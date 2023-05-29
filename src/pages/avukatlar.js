import { getLawyers } from '@/lib/queries/lawyer'
import Link from 'next/link'
import React, { useState } from 'react'

const avukatlar = ({ lawyers }) => {
    const [deleting, setDeleting] = useState(0)
    const [message, setMessage] = useState('')

    const showMessage = (msg) => {
        setMessage(msg)
        document.getElementById('message-modal').click()
    }

    const handleDelete = (id) => {
        console.log(id)
        setDeleting(id)
        fetch("/api/lawyer?id="+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({ id }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showMessage(data.message)
            setDeleting(0)
        })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="md:w-11/12 p-2 my-5">
                    <Link href="/admin" className='text-sm underline'>
                        &#8592;
                        Admin Paneline Dön
                    </Link>
                    <h1 className="text-2xl font-bold">Avukatlar</h1>
                    <div className="mt-4">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Resim</th>
                                    <th className="px-4 py-2">İsim</th>
                                    <th className="px-4 py-2">Ünvan</th>
                                    <th className="px-4 py-2">Telefon</th>
                                    <th className="px-4 py-2">Sil</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lawyers?.map((lawyer, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">
                                            <img src={lawyer.image} alt={lawyer.name} className="w-10 h-10 rounded-full" />
                                        </td>
                                        <td className="border px-4 py-2">{lawyer.name}</td>
                                        <td className="border px-4 py-2">{lawyer.title}</td>
                                        <td className="border px-4 py-2">{lawyer.phone}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleDelete(lawyer.id)} className="btn btn-sm btn-error">
                                                {deleting == lawyer.id ? 'Siliniyor...' : 'Sil'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default avukatlar


export async function getServerSideProps() {
    const lawyers = await getLawyers()
    return {
        props: {
            lawyers
        }
    }
}