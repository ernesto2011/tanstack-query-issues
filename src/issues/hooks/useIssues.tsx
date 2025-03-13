import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interfaces"
import { useEffect, useState } from "react"

interface Props {
    state: State
    selectedLabels: string[]
}
export const useIssues = ({state, selectedLabels}:Props)=>{
    const [pageNumber, setpageNumber]= useState(1)
    const issuesQuery = useQuery({
        queryKey:['Issues',{state, selectedLabels, pageNumber}],
        queryFn:() => getIssues(state, selectedLabels, pageNumber),
        staleTime: 1000 * 60
    })

    useEffect(()=>{
        setpageNumber(1);
    },[state])
    useEffect(()=>{
        setpageNumber(1);
    },[selectedLabels])
    const nextPage = () =>{
        if(issuesQuery.data?.length === 0)return
        setpageNumber(pageNumber+ 1)
    }
    const prevPage = () =>{
      if(pageNumber ===1) return  
      setpageNumber((prev)=> prev-1)
    }
    return{
        issuesQuery,

        pageNumber,

        nextPage,
        prevPage
    }
}