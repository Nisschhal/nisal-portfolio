"use client"
// children need to be client and reac-water-wave use some hook to for effects
import { Children, FC, ReactNode } from "react"
import WaterWave from "react-water-wave"

interface WaterWaveWrapperProps {
  imageUrl: string
  dropRadius: string
  pertrubuance: string
  resolution: string
  children: () => ReactNode
}

const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius,
  pertrubuance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      pertrubuance={pertrubuance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  )
}

export default WaterWaveWrapper
