"use client"
import getTimeZone from "@/lib/get-timezone"
import { FC, useEffect, useState } from "react"
import moment from "moment-timezone"

const LiveClock: FC = () => {
  const [timeZone, setTimeZone] = useState<string>("")
  const [error, setError] = useState<string>("Loading...")
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    // Fetch the user's timezone based on geolocation
    const fetchTimeZone = async () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          try {
            const res = await getTimeZone({ lat, lon })
            setTimeZone(res)
            setError("") // Clear error on success
          } catch (error) {
            console.error("Error fetching timezone:", error)
            setError("Unable to fetch timezone. Please try again.")
          }
        },
        (error) => {
          console.error("Geolocation error:", error.message)
          setError(
            "Location permission denied. Please enable location services."
          )
        }
      )
    }

    fetchTimeZone()
  }, [])

  useEffect(() => {
    if (!timeZone) return // Wait until timezone is set

    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm:ss")
      setTime(currentTime)
    }

    updateClock() // Initialize the clock immediately
    const intervalId = setInterval(updateClock, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [timeZone]) // Re-run when `timeZone` changes

  // when error set the default time zone
  useEffect(() => {
    if (!error) return
    const updateClock = () => {
      const currentTime = moment().tz("Asia/Kathmandu").format("HH:mm:ss")
      setTime(currentTime)
    }

    updateClock() // Initialize the clock immediately
    const intervalId = setInterval(updateClock, 1000)
  }, [error])
  return (
    <div className="p-10 text-4xl bg-transparent">
      <div className="flex items-center justify-center gap-[.5vw]">
        <>{error ? "Nepal" : <>{timeZone.split("/").pop()}</>} </>, {time}
      </div>
    </div>
  )
}

export default LiveClock
