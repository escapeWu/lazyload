import { useEffect, useRef, useState } from 'react'

export default function LazyCard({ title }) {
  const cardRef = useRef(null)

  const [isLoading, setIsLoading] = useState(false)
  const doFetch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3 * 1000)
  }
  useEffect(() => {
    const io = new IntersectionObserver(entires => {
      entires.forEach(item => {
        if (item.isIntersecting) {
          doFetch()
          io.unobserve(item.target)
        }
      })
    })

    io.observe(cardRef.current)
  }, [])
  return (
    <div className="w-full h-[300px] bg-slate-800 flex items-center justify-center border" ref={cardRef}>
      <span className="text-white font-bold">{isLoading ? 'loading' : title}</span>
    </div>
  )
}
