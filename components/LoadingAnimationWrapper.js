
import dynamic from 'next/dynamic'

const LoadingAnimation = dynamic(
  () => import('./LoadingAnimation'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-50 bg-black" />
  }
)

export default function LoadingAnimationWrapper() {
  return <LoadingAnimation />
}