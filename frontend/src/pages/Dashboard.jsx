import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-primary-700">SoberEase</h1>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Track your recovery journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Sobriety Counters
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Track days clean for each substance
            </p>
            <div className="text-3xl font-bold text-primary-600">
              Coming Soon
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Daily Journal
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Record your thoughts and feelings
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              New Entry
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Community Forums
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with others in recovery
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
              Browse Forums
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Drug Encounters
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Document experiences for harm reduction
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
              Log Encounter
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Drug Library
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Harm reduction & interaction info
            </p>
            <Link to="/drug-library">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Browse Library
              </button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Resources
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Crisis support & recovery tools
            </p>
            <Link to="/resources">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                View Resources
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
