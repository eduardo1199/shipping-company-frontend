import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const fetchWeatherForest = await fetch(
    process.env.SHIPPING_API_URL! + 'WeatherForecast',
  )
  const weatherForestJson = await fetchWeatherForest.json()

  return res.status(201).json(weatherForestJson)
}
