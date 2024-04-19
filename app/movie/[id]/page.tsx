import {ResizableHandle,
ResizablePanel,
ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image";

const Movie = async({params}: {params: {id: string}}) => {
  const {id} = params

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_TMDB_KEY}`
  );
  const movie = await res.json();
  
    
   
  return (
    <div className='flex min-h-[calc(100vh-136px)] flex-col items-center justify-center px-12 py-8 '>
      <ResizablePanelGroup direction="horizontal" >
      <ResizablePanel className=" flex p-4 justify-center items-center">
      <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title || ''}
          width={300}
          height={400}
          priority
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
        </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className=" flex flex-col p-6 justify-center items-start gap-2">
        <h1 className='text-2xl'>{movie.title}</h1>
        <p className='mb-3'>
            <span className='font-semibold mr-1'>Overview:</span>
            {movie.overview}
          </p>
        <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.release_date}
          </p>
        <p className='mb-3'>
            <span className='font-semibold mr-1'>Original Language:</span>
            {movie.original_language}
          </p>
        <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
        
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  )
}

export default Movie