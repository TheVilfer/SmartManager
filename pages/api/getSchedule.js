import notion from "../../libs/initNotionApi"
export default async function handler(req, res) {

    res.status(200).json({ name: 'John Doe' })
}
