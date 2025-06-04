import Link from "next/link"

export default function Vacancies() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex">
        <Link href="/" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Home
        </Link>
        <Link href="/latest-news" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Latest News
        </Link>
        <Link href="/vacancies" className="bg-purple-600 text-white py-4 px-6 hover:bg-purple-700 transition-colors">
          Vacancies
        </Link>
        <Link href="/contact-us" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Contact Us
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-teal-800 mb-10">Vacancies</h1>
        <p className="text-gray-600">No vacancies available at the moment.</p>
      </div>
    </div>
  )
}
