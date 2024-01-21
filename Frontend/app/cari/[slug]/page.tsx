import React from 'react'

async function getDataUser(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}


async function getDatarepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos,`)
  await new Promise(r => setTimeout(r, 2000))
  return res.json()
}
const RepoLIst = async ({slug}:any) => {
  const dataRepos = await getDataRepos(slug)  
  return <>
    <p>List repository</p>
    <div>
      {JSON.stringify(datarepos)}
    </div>
  </>
}


export default async function Detailcari({ params }: { params: { slug: string } }) {
  const dataUser = await getDataUser(params.slug)
  
  return (
    <div>
      <p>Detail user : {params.slug}</p>
      <div>
        {JSON.stringify(dataUser)}
      </div>
      <div style={{marginTop:"10px"}}>
      <suspanse fallback={<div>mencoba menampilkan repository....</div>}>
      <repoList slug={params.slug}/>
      </suspanse>
    </div>
    </div>
  )
}
