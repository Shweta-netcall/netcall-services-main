import Link from "next/link"

export default function ContactUs() {
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
        <Link href="/vacancies" className="bg-teal-400 text-black py-4 px-6 hover:bg-teal-500 transition-colors">
          Vacancies
        </Link>
        <Link href="/contact-us" className="bg-purple-600 text-white py-4 px-6 hover:bg-purple-700 transition-colors">
          Contact Us
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-teal-800 mb-10">Contact Us</h1>

        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
