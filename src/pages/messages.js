import { getMessages } from '@/lib/queries/message'
import React from 'react'
import moment from 'moment';
import Link from 'next/link';
moment.locale("tr"); 
const messages = ({ messages }) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-1/2 my-5">
                    <Link href="/" className='text-sm underline'>
                        &#8592;
                        Anasayfaya Dön
                    </Link>
                    <h1 className="text-2xl font-bold">Mesajlar</h1>
                    <div className="mt-4">
                        {messages.map((message, index) => (
                            <div key={index} className="border border-gray-200 rounded-md p-4 mb-4">
                                <div className="flex justify-between">
                                    <div className="font-bold">{message.name}</div>
                                    <div className="text-sm">{moment(message.created_date).format('LLL')}</div>
                                </div>
                                <div className="mt-2">{message.message}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default messages

export const getServerSideProps = async () => {
    const messages = await getMessages();
    return {
        props: {
            messages
        }
    }
}