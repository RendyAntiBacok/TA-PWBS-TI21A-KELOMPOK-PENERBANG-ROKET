import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
const fetcher = (url:string) => fetch(url).then(res => res.json())
interface props{
    query:string


}
export default function sectionResult({query}:props) {
      const {data, error}=useSWR(`https://api.github.com/search/users?q=${query}`,fetcher)
      var loading = ! data && !error 

  return (
    <div style = {{marginTop:"12 px"}} >
        <p>hasil pencarian : {query}</p>
        <div>
          {loading && "tunggu sebentar...."}
          {data && data.items.map((user:any,index:number)=>{
            return <ul key={index}>
              <li><Link href={`/cari/${user.login}`}>{user.login}</Link></li>
              <li><Link href={user.repos_url}>Repository</Link></li>
            </ul> 
          })}    
           </div>
    </div>
  )
}
