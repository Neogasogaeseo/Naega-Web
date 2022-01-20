import {privateAPI} from './base';
import { Keyword } from '@infrastructure/api/types/user';

export type ResultDetailList = {
    id: number;
    title: string;
    subtitle: string;
    darkIconImage: string;
    createAt: string;
    q: string;
    keywordlists :Keyword[];
  }
  
export const getNeogaResult = async(formID: number) => {
    try{
        const response = await privateAPI.get({url:`/form/detail/${formID}`});
        if(response.status === 200 ){
            console.log(response);
            return response.data;
        }
    }
    catch(e){
        throw '서버 통신 실패';
    }
}