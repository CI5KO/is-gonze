import CLientPage from './client'
import { getDictionary } from '@/utils/languages/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dictionary = await getDictionary(lang)
  return <CLientPage params={{ lang }} dictionary={dictionary} />
}
