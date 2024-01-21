import React from 'react'

async function getDataUser(param:string){
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}


async function getDatarepos(param:string){
  const res = await fetch(`https://api.github.com/users/${param}/repos,`)
  await new Promise (r=>setTimeout(r,2000))
  return res.json()
}


export default async function Detailcari({params}:{params:{slug:string}}) {
  const dataUser = await getDataUser(params.slug)
  const dataRepos = await getDataRepos(params.slug) 
 return (
    <div> 
      <p>Detail user : {params.slug}</p>
      <div>
        {JSON.stringify(dataUser)}
      </div>

      <p>List repository</p>
      <div>
      {JSON.stringify(datarepos)}
      </div>
    </div>
  )
}
