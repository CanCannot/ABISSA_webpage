import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-scree bg- gap-4">
      <h1 className="text-3xl font-bold mb-6">Main Menu</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link href="/cart_page">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Cart Page</button>
        </Link>

        <Link href="/product_page">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Product Page</button>
        </Link>

        <Link href="/search_page">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">Search Page</button>
        </Link>

        <Link href="/settings">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Settings</button>
        </Link>

        <Link href="/admin_page">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Admin Page</button>
        </Link>

        <Link href="/test_page">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Test Page</button>
        </Link>

      </div>
    </div>
  )
}
