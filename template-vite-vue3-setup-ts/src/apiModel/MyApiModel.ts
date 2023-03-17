import ApiModel from "http-api-orm";
import type {ApiFinallyMid, ApiRequestMid, ApiResponseMid} from "http-api-orm/types/lib/ApiModel";
import {showNotify} from "vant/es";
import axios from 'axios';

export default abstract class MyApiModel extends ApiModel {
    reqMid: ApiRequestMid[] = [
        function (c, m) {
            //测试环境,mock
            c.baseURL = import.meta.env.DEV ? '/mock' : ''
            //token 设置
            return c
        },
    ]
    resMid: ApiResponseMid[] = [
        function (r, m) {
            //响应数据格式验证
            const res = r.data
            if (r.status == 200 && 1 === res.code) {
                if (m) {
                    m.data = res.content;
                }
            } else if (res.returnContent && res.returnContent.tips) {
                showNotify({type: 'warning', message: res.msg})
                return Promise.reject('接口状态不正确: ' + res.msg)
            }

            return r
        }
    ]
    finallyMid: ApiFinallyMid[] = [
        function (e, m) {
            // axios
            if (axios.isAxiosError(e)) {
                console.log('isAxiosError')
            }
        }
    ]
}
