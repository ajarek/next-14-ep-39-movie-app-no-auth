import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export type PropsMovie = {
  id: number
  backdrop_path: string
  poster_path: string
  title: string
  overview: string
  release_date: string
}

const CardMovie = ({ movie }: { movie: PropsMovie }) => {
  return (
    <Card>
      <Link href={`/movie/${movie.id}`}>
        <CardHeader>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title || ''}
            width={500}
            height={300}
            className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{movie.title}</CardTitle>
          <CardDescription>{movie.overview.slice(0, 100)}</CardDescription>
        </CardContent>
        <CardFooter>
          <p>{movie.release_date}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default CardMovie
