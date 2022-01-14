import { UserService } from '@api/user';
import { USER_DATA } from './user.data';

export function userDataMock(): UserService {
  const getKeywords = async () => {
    await wait(2000);
    return USER_DATA.KEYWORDS;
  };

  const postKeyword = async (userID: number, content: string) => {
    await wait(1000);
    return USER_DATA.KEYWORD(content);
  };

  return { getKeywords, postKeyword };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
