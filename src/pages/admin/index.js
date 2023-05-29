import LoginModal from '@/components/LoginModal'
import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            {/* use tailwind - show links = [new Lawyer, lawyers, messages] */}
            <div className="flex justify-center">
                <div className="md:w-1/2 p-2 my-5">
                    <Link href="/" className='text-sm underline'>
                        &#8592;
                        Anasayfaya Dön
                    </Link>
                    <h1 className="text-2xl font-bold">Admin Paneli</h1>
                    <div className="mt-4">
                        <div className="flex flex-col space-y-2 justify-between">
                            <Link href={"/yeni-avukat"}className="border border-gray-200 rounded-md p-4 mb-4 hover:bg-blue-200 cursor-pointer">
                                <div className="font-bold">Yeni Avukat</div>
                                <div className="mt-2">Yeni avukat eklemek için tıklayınız.</div>
                            </Link>
                            <Link href={"/avukatlar"} className="border border-gray-200 rounded-md p-4 mb-4 hover:bg-red-200 cursor-pointer">
                                <div className="font-bold">Avukatlar</div>
                                <div className="mt-2">Avukatları görüntülemek için tıklayınız.</div>
                            </Link>
                            <Link href={"/mesajlar"} className="border border-gray-200 rounded-md p-4 mb-4 hover:bg-green-200 cursor-pointer">
                                <div className="font-bold">Mesajlar</div>
                                <div className="mt-2">Mesajları görüntülemek için tıklayınız.</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index