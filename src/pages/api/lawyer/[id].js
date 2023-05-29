import { saveLawyer } from "@/lib/queries/lawyer";

export default function handler(req, res) {
  console.log("REQ => ", req.method, req.body, req.query, req.params)
//   if(req.method === "DELETE") {
//     deleteLawyer(req.body.id).then(r => {
//       res.status(200).json({ success: true, message: "Avukat başarıyla silindi." });
//     }).catch(err => {
//       console.error("ERR => ", err)
//       res.status(200).json({ success: false, message: "Avukat silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz." });
//     })
//   }
  res.status(200).json({ success: false, message: "Yanlış istek." });
}
