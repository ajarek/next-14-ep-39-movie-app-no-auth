'use server'

import { redirect } from 'next/navigation'

export const searchItem = async (formData: FormData) => {
  const search = formData.get('search')
  redirect(`/search/${search}`)
}
