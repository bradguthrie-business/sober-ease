import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">SoberEase</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your journey to recovery, supported with compassion and understanding
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary-700">
              Sobriety Tracking
            </h2>
            <p className="text-gray-600">
              Track your progress with personalized counters for each substance
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary-700">
              Community Support
            </h2>
            <p className="text-gray-600">
              Connect with others in substance-specific support forums
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary-700">
              Daily Journaling
            </h2>
            <p className="text-gray-600">
              Document your thoughts, triggers, and victories
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary-700">
              Harm Reduction
            </h2>
            <p className="text-gray-600">
              Access evidence-based harm reduction information
            </p>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
