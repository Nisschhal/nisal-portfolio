import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-4xl ">Hello my world!</h1>
      <h1 className="text-4xl font-oswald">Hello my world!</h1>{" "}
      <h1 className="text-4xl font-pixel">Hello my world!</h1>{" "}
      <Link href={""} className="text-white">
        Link me
      </Link>
      <button className="text-white">Clink me</button>
    </>
  )
}
