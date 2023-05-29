import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Service = () => {
    const [services] = useState([
        {
            title: "Avukatlık Büromuzla Hukuki Sorunlarınızı Çözün", 
            description: "Avukatlık büromuz size uzmanlık alanlarında hukuki destek sunmak için burada. Sorunlarınızı çözmek ve haklarınızı korumak için bize başvurun.", 
            image: "https://www.lawyer-monthly.com/Lawyer-Monthly/wp-content/uploads/2019/10/How-to-Work-in-Law-Without-Being-a-Lawyer-750x430.jpg"
        },
        {
            title: "Avukatlık Bürosunda Profesyonel Hizmetler",
            description: "Hukuki ihtiyaçlarınız için uzman avukatlarımızla çalışın. Sizlere en iyi hizmeti sunarak yasal konularınızda destek olalım.",
            image: "https://www.forbes.com/advisor/wp-content/uploads/2022/10/Paralegal_vs._Lawyer.jpeg.jpg"
        },
        {
            title: "İş Hukuku",
            description: "Çalışma hayatıyla ilgili iş hukuku konularında size destek oluyoruz.",
            image: "https://blog.ipleaders.in/wp-content/uploads/2018/01/BV-Acharya-46.jpg"
        },
        {
            title: "Ceza Hukuku",
            description: "Suçlarla ilgili ceza hukuku konularında savunma hizmeti sunmaktayız.",
            image: "https://www.careeraddict.com/uploads/article/60648/choosing-career-types-of-lawyers.jpg"
        },
        {
            title: "Ticaret Hukuku",
            description: "Şirketlerin ticari işlemlerinde ticaret hukuku konusunda size yardımcı oluyoruz.",
            image: "https://d2zhlgis9acwvp.cloudfront.net/images/uploaded/lawyers.jpg"
        },
        {
            title: "Gayrimenkul Hukuku",
            description: "Emlak işlemleri ve taşınmazlarla ilgili hukuki konularda size destek sağlıyoruz.",
            image: "https://cache.careers360.mobi/media/article_images/2023/2/14/types-of-lawyers.webp"
        }
    ])
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: {
            perView: 3.5,
            spacing: 15,
        },
    })
    return (
        <div ref={sliderRef} className="keen-slider my-32" id='services'>
            {services.map((service, idx) => (
                <div key={idx} className="keen-slider__slide">
                    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 shadow border rounded-lg">
                        <a href="#_" class="block">
                            <img class="object-cover w-full mb-2 overflow-hidden max-h-56" src={service.image} />
                        </a>
                        <div class="bg-green-500 m-8 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Tamamlandı</span>
                        </div>
                        <div className='p-8'>
                            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">{service.title}</h2>
                            <p class="text-sm text-gray-500">{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Service