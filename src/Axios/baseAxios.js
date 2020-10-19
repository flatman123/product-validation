import axios from 'axios';

const db = 
const instance = axios.create({
    baseURL: 'https://proval-aa746.firebaseio.com/',
    baseURL_2 : `mongodb+srv://redeyedb:cisco123@cluster0.yp66n.mongodb.net/product_info?retryWrites=true&w=majority`
});

export default instance;