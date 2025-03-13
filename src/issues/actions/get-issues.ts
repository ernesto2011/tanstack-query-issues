import { githubApi } from "../../api"
import { sleep } from "../../helpers/slepp"
import { GithubIssue, State } from "../interfaces"

export const getIssues = async(state:State, selectedLabels:string[]):Promise<GithubIssue[]> =>{
    await sleep(1500)
    const params = new URLSearchParams();
    if(state !== State.All){
        params.append('state', state)
    }
    if(selectedLabels.length > 0){
        params.append('labels', selectedLabels.join(','))
    }
    params.append('per_page','5')

    const {data} = await githubApi.get<GithubIssue[]>('/issues',{
        params: params
    })
    return data
}