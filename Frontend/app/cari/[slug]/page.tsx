import React from 'react'

async function getDataUser(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
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
      <suspanse fallback={<div> sedang mencoba menampilkan data obat....</div>}>
      <repoList slug={params.slug}/>
      </suspanse>
    </div>
    </div>
  )
}
