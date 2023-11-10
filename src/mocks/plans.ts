
import { IAllPlans } from "../interfaces/IAllPlans"


export const dataPlans: IAllPlans[] = [
    {
        "id": "Free Plan",
        "checkboxTitle": [
            "Unlimited Bandwitch", 
            "Encrypted Connection", 
            "No Traffic Logs", 
            "Works on All Devices", 
            
        ],
        "price":"Free",
    },
    {
        "id": "Standard Plan",
        "checkboxTitle": [
            "Unlimited Bandwitch", 
            "Encrypted Connection", 
            "No Traffic Logs", 
            "Works on All Devices",
            "Connect Anyware"            
        ],
        "price":"$9 / mo",
    },
    {
        "id": "Premium Plan",
        "checkboxTitle": [
            "Unlimited Bandwitch", 
            "Encrypted Connection", 
            "No Traffic Logs", 
            "Works on All Devices",
            "Connect Anyware" , 
            "Get New Features"            
        ],
        "price":"$12 / mo",
    }
]