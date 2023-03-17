import MyApiModel from "@/apiModel/MyApiModel";
import type {Method} from "axios";

export default class DemoApiModel extends MyApiModel {
    url = '/demo/demo'
    method: Method = 'get'
    data = {
        "demoId": "",
        "name": ""
    }
}
