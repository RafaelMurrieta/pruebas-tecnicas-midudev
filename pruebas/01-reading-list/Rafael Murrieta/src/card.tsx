export function Card({ID, cover, title, name, genere, synopsis}: {
    ID: string | number;
    cover: string;
    title: string;
    name: string;
    genere: string;
    synopsis: string;
  }): JSX.Element {
    return (
        <div key={ID} className=" bg-slate-300 m-3 p-8 grid text-black rounded-3xl card">
          <div className='image-card w-full justify-items-center'>
            <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
              <image href={cover} width="200" height="200" />
            </svg>
          </div>
          <div className='card-body w-full text-wrap'>
            <p><strong>{title}</strong></p>
            <p>Autor: {name}</p>
            <p>Genero: {genere}</p>
            <p>{synopsis}</p>
          </div>
        </div>
      )
  }