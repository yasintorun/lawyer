import { saveLawyer } from "@/lib/queries/lawyer";

export default function handler(req, res) {
    if(req.method !== 'POST') return;
    console.log(req.body)
    saveLawyer(req.body).then(r => {
        res.status(200).json({success: true, message: "Avukat başarıyla eklendi."});
    }).catch(err => {
        console.error("ERR => ", err)
        res.status(200).json({success: false, message: "Avukat eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."});
    })
  }
  