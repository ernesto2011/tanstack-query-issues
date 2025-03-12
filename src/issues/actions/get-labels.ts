
import { sleep } from "../../helpers/slepp";
import { githubApi } from "../../api/github.api";

export const getLabels = async():Promise<any>=>{
  await sleep(3000)
  const {data} = await githubApi.get('/labels')
  return data

}