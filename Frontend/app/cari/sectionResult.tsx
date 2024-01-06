import React from 'react'
const fetcher = (url:string) => fetch(url).then(res => res.json())
interface props{
    query:string

}
export default function sectionResult({query}:props) {
      const {data, eror}=useSWR(`https://api.github.com/search/users?q=${query}`,fetcher)
      var loading = ! data && !error 

  return (
    <div style = {{marginTop:12px}} >
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
