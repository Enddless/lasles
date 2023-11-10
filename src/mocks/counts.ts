import count from "../assets/svg/sprite.svg"
import { ICounts } from "../interfaces/ICounts"


export const dataCounts: ICounts[]  = [
    {
        "id": "user",
        "title": "90+",
        "subtitle":"Users",
        "imageUrl": `${count}#userCount`
    },
    {
        "id": "location",
        "title": "30+",
        "subtitle":"Locations",
        "imageUrl": `${count}#locationCount`
    },
    {
        "id": "server",
        "title": "50+",
        "subtitle":"Servers",
        "imageUrl": `${count}#serverCount`
    }
]