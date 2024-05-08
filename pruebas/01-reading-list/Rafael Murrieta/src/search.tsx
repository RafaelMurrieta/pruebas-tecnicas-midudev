function search(){
    return(
        <>
        <div className="container-search w-auto flex flex-wrap gap-10">
            <input type="text" placeholder="Buscar" className="input-search rounded-md p-4"  id="search-book"/>
            <button className="btn-search font-white">Buscar</button>
        </div>
        </>
    )
}

export default search;