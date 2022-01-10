import { UserService } from '@api/user';
import { USER_DATA } from './user.data';

export function userDataMock(): UserService {
  const getKeywords = async () => {
    await wait(2000);
    return USER_DATA.KEYWORDS;
  };

  const getKeywordColors = async () => {
    await wait(2000);
    return USER_DATA.KEYWORD_COLORS;
  };

  return { getKeywords, getKeywordColors };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
