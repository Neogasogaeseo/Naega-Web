import { privateAPI } from './base';
import {TeamIssueCategory} from '@api/types/team';

export const getTeamIssueCategory = async ():Promise<TeamIssueCategory[] |null> => {
    const response = await privateAPI.get({url:`/team/issue/category`});
    console.log("응답",response);
    if(response.status === 200 ){
        console.log(response.data);
        return response.data;
    } else throw '서버 통신 실패';
}