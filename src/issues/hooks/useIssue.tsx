import { useQuery } from "@tanstack/react-query"
import { getIssue, getIssueComments } from "../actions"

export const useIssue = (issueNumber: number)=>{
    const issueQuery = useQuery({
        queryKey:['Issues', issueNumber],
        queryFn: ()=>getIssue(issueNumber) ,
        staleTime: 1000 * 60,
        //retry: false
    })
    // const commentsQuery = useQuery({
    //     queryKey:['Issues', issueNumber, 'comments'],
    //     queryFn: ()=>getIssueComments(issueNumber) ,
    //     staleTime: 1000 * 60,
    //     //retry: false
    // })
    const commentsQuery = useQuery({
        queryKey:['Issues', issueQuery.data?.number , 'comments'],
        queryFn: ()=>getIssueComments(issueQuery.data!.number) ,
        staleTime: 1000 * 60,
        enabled:issueQuery.data !== undefined
    })
    return{
        issueQuery,
        commentsQuery
    }
}