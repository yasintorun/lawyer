import { saveMessage } from "@/lib/queries/message";

export default function handler(req, res) {
    if(req.method !== 'POST') return;
    console.log(req.body)
    saveMessage(req.body).then(r => {
        res.status(200).json({success: true, message: "Mesajınız başarıyla gönderildi. Teşekkür ederiz."});
    }).catch(err => {
        console.error("ERR => ", err)
        res.status(200).json({success: false, message: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."});
    })
  }
  