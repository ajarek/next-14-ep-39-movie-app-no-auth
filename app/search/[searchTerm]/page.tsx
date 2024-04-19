import CardMovie from '@/components/CardMovie'
import type { PropsMovie } from '@/components/CardMovie'

const SerachPage = async ({ params }: { params: { searchTerm: string } }) => {
  const { searchTerm } = params
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_TMDB_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  )
  const data = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const results = data.results
  return (
    <div className='flex min-h-screen flex-col items-center justify-start p-12 max-sm:p-4'>
      <h1 className='text-2xl font-medium '>Search Page</h1>
      <p>Search term: {searchTerm}</p>
      <p>Results: {results.length}</p>
      <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {results.map((movie: PropsMovie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  )
}

export default SerachPage
