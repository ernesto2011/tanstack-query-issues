import { useQuery } from "@tanstack/react-query"
import { State } from "../interfaces"
import { getIssues } from "../actions"


interface Props {
    state: State
    selectedLabels: string[]
}
export const useIssuesInfinite = ({state, selectedLabels}:Props)=>{
    const issuesQuery = useQuery({
        queryKey:['Issues',{state, selectedLabels}],
        queryFn:() => getIssues(state, selectedLabels, 1),
        staleTime: 1000 * 60
    })

    return{
        issuesQuery,
    }
}