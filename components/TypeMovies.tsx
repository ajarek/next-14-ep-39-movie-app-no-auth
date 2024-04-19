import Link from 'next/link'

const TypeMovies = () => {
  return (
    <div className='flex flex-wrap gap-6 mb-4 text-xl'>
      <Link
        className=' underline-offset-4 hover:underline focus:underline'
        href={'/?genere=movie/top_rated'}
      >
        Top Rated
      </Link>
      <Link
        className=' underline-offset-4 hover:underline focus:underline'
        href={`/?genere=movie/popular`}
      >
        Popular
      </Link>
      <Link
        className=' underline-offset-4 hover:underline focus:underline'
        href={'/?genere=movie/upcoming'}
      >
        Upcoming
      </Link>
      <Link
        className=' underline-offset-4 hover:underline focus:underline'
        href={'/?genere=movie/now_playing'}
      >
        Now Playing
      </Link>
      <Link
        className=' underline-offset-4 hover:underline focus:underline'
        href={'/?genere=trending/all/week'}
      >
        Trending
      </Link>
    </div>
  )
}

export default TypeMovies
