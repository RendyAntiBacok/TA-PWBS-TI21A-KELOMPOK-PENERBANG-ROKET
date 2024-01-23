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
export default Repolist