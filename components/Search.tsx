import { Button } from '@/components/ui/button'
import { searchItem } from '@/lib/action'
import { Input } from './ui/input'

export default async function Search() {
  return (
    <form
      action={searchItem}
      className=' w-1/2 max-lg:w-full flex gap-2 mb-4'
    >
      <Input
        className=''
        type='text'
        name='search'
        placeholder='Search...'
        autoFocus
      />
      <Button>Search</Button>
    </form>
  )
}
