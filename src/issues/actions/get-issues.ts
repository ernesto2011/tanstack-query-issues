import { githubApi } from "../../api"
import { sleep } from "../../helpers/slepp"
import { GithubIssue } from "../interfaces"

export const getIssues = async():Promise<GithubIssue[]> =>{
    await sleep(1500)
    const {data} = await githubApi.get<GithubIssue[]>('/issues')
    return data
}