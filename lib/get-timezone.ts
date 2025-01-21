export default async function getTimeZone({
  lat,
  lon,
}: {
  lat: number
  lon: number
}) {
  try {
    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
    )
    const result = await res.json()

    if (result.results) {
      return result.results[0].timezone.name
    } else {
      alert("Allow access location for accurate Time!📍")
    }
  } catch (error) {
    console.log("Error while fetching timeZone!", error)
  }
}
