import axios from "axios";

export function getProudctRight(id) {
    return axios.get("/getProudctRight",{
        params:{
            id
        }
    })
}