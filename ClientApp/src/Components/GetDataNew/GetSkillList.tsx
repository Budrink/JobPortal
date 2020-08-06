import { Skill } from '../Data/Data';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetSkillList = async (
  amountOfCategories?: number,
): Promise<Skill[]> => {
  // export const getCategoryList = (): CategoryData[] => {
  let skillList: Skill[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Skills/list`,
      method: 'Get',
    });

    // console.log(response);
    if (response.parsedBody !== null) {
      skillList = response.parsedBody;
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }

  return skillList;
};
