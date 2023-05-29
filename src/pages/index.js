import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import Contract from '@/components/Contract'
import Footer from '@/components/Footer'
import Service from '@/components/Service'
import { getLawyers } from '@/lib/queries/lawyer'

const inter = Inter({ subsets: ['latin'] })

const backgrounds = [
  "bg-blue-50",
  "bg-green-50",
  "bg-pink-50",
  "bg-yellow-50",
  "bg-red-50",
  "bg-purple-50",
  "bg-indigo-50",
]

export default function Home({ lawyers }) {

  return (
    <main>

      <section id='landing' className="w-full px-6 pb-12 antialiased bg-white">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Kendi alanlarında deneyimli</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Onlarca Avukat</span></h1>
            <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Tüm hukuk işlerinizi halledebilirsiniz.</div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">


              </span>
              <a href="#_" className="mt-3 text-sm text-indigo-500">Hemen Ara</a>
            </div>
          </div>
        </div>
      </section>
      <section id='preview' className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Hukuk, adalet</span>
                  <span className="block text-indigo-600 xl:inline" data-primary="indigo-600"><br />Tüm ihtiyaçlarınız<br /></span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Tüm ihtiyaçlara yönelik avukat ekibiniz hazır.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto" data-primary="indigo-600" data-rounded="rounded-md">Hemen Ulaş<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19" className=""></polyline>
                  </svg>
                  </a>
                  <a href="#team" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600" data-rounded="rounded-md"> Avukatları Gör</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <img src="https://media.istockphoto.com/id/104821087/tr/foto%C4%9Fraf/lawyer-holding-document-and-speaking-to-jury-in-courtroom.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=KEY1Y44n92_O7ULorx1yh5VyCUxOoItxTiKdONakqWQ=" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='service' className="py-20 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">Binlerce hizmet, sorunsuz duruşma</h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Hukuk büromuzun misyonu, adaleti sağlamak ve sizi korumaktır. Bizimle iken hiçbir duruşmadan çekinmeyin!</p>
          <div className="flex justify-center mt-8 space-x-3">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700" data-primary="indigo-600" data-rounded="rounded-md">Hemen Ara</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200" data-primary="indigo-600" data-rounded="rounded-md">Daha Fazla Bilgi</a>
          </div>
        </div>
      </section>

      <section id='team' className="relative py-20 overflow-hidden bg-white">
        <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
          <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
        </span>

        <span className="absolute bottom-0 left-0"> </span>

        <div className="relative px-16 mx-auto max-w-7xl">
          <p className="font-medium tracking-wide text-blue-500 uppercase">EKİBİMİZ</p>
          <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">Birbirinden Yetenekli Avukatlarımız</h2>
          <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            {lawyers?.map((lawyer, i) => (
              <div className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                  <div className={"absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none " + backgrounds[i % backgrounds.length]}></div>
                  <img className="relative z-20 w-full rounded-full" src={lawyer.image} />
                </div>
                <div className="mt-3 space-y-2 text-center">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="">{lawyer.name}</h3>
                    <p className="text-blue-600">{lawyer.title}</p>
                    <p className='text-sm'>
                      Telefon: <a className='underline' href={"tel:+9" + lawyer.phone.replace(/ /g, '')}>{lawyer.phone}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Service />
      <Contract />
      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
  const lawyers = await getLawyers()
  return {
    props: {
      lawyers
    }
  }
}