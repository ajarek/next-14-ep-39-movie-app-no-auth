'use server'

import connectToDb from './connectToDb'
import { User } from './models'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'



export const searchItem = async (formData: FormData) => {
  const search = formData.get('search')
  redirect(`/search/${search}`)
}
