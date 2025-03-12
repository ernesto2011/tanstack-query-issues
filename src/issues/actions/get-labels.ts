
import { sleep } from "../../helpers/slepp";
import { githubApi } from "../../api/github.api";
import { GithubLabel } from "../interfaces";

export const getLabels = async():Promise<GithubLabel[]> =>{
  await sleep(3000)
  const {data} = await githubApi.get<GithubLabel[]>('/labels')
  return data

}