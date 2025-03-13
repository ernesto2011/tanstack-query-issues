import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"

export const useIssues = ()=>{
    const issueQuery = useQuery({
        queryKey:['Issues'],
        queryFn: getIssues
    })
    return{
        issueQuery,
    }
}