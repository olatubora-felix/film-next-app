export async function fetcher() {
  const res = await fetch('http://localhost:1337/api/films')
  const data = await res.json()
  return data
}
