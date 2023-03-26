import Layout from '@/components/layouts/Layout'
import { fetcher } from '@/lib/api'
import React from 'react'
import useSWR from 'swr'
const FilmsList = () => {
  const { data, error, isLoading } = useSWR('/api/films', fetcher)
  console.log(data)
  return (
    <Layout>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
          Films
        </span>
      </h1>
    </Layout>
  )
}

export default FilmsList
