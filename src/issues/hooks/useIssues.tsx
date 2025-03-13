import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"

export const useIssues = ()=>{
    const issuesQuery = useQuery({
        queryKey:['Issues'],
        queryFn: getIssues,
        staleTime: 1000 * 60
    })
    return{
        issuesQuery,
    }
}