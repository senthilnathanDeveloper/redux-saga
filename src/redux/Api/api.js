import axios from "axios";

export const loadGetApi  = async() => 
    await axios.get("https://jsonplaceholder.typicode.com/posts")


export const loadGetApiId = async() => {
    await axios.get("https://jsonplaceholder.typicode.com/posts/1")
}