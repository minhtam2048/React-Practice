// Axios make HTTP request to web service
import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {

    // add parameters to add queryString to requestURL
    GetData = async(dataType, params) => this.SendRequest("get", RestUrls[dataType], params);

    StoreData = (dataType, data) => this.SendRequest("post", RestUrls[dataType], {} , data);  

    SendRequest = (method, url, params, data) => Axios.request({ method, url, params, data });

}