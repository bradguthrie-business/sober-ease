import { Link } from "react-router-dom";
import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";
import {
  alcohol,
  opioids,
  benzodiazepines,
  stimulants,
  psychedelics,
  dissociatives,
  cannabis,
  depressants,
  inhalants,
  getDangerStyle,
} from "../utils/drugData";
import PageHeader from "../components/PageHeader";

const DangerIcon = ({ level }) => {
  const style = getDangerStyle(level);
  const iconClass = `w-4 h-4 ${style.icon}`;

  switch (level) {
    case "EXTREME":
      return <AlertTriangle className={iconClass} />;
    case "HIGH":
      return <AlertCircle className={iconClass} />;
    case "MODERATE":
      return <Info className={iconClass} />;
    case "LOW":
      return <CheckCircle className={iconClass} />;
    default:
      return null;
  }
};

export default function DrugLibrary() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-primary-700">SoberEase</h1>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Drug Library"
          subtitle="Evidence-based harm reduction information"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Alcohol */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">
              Alcohol
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {alcohol.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {alcohol.length} substances
            </div>
          </div>

          {/* Opioids */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-red-700">Opioids</h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {opioids.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {opioids.length} substances
            </div>
          </div>

          {/* Benzodiazepines */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              Benzodiazepines
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {benzodiazepines.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {benzodiazepines.length} substances
            </div>
          </div>

          {/* Stimulants */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">
              Stimulants
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {stimulants.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {stimulants.length} substances
            </div>
          </div>

          {/* Psychedelics */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Psychedelics
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {psychedelics.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {psychedelics.length} substances
            </div>
          </div>

          {/* Dissociatives */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Dissociatives
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {dissociatives.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {dissociatives.length} substances
            </div>
          </div>

          {/* Cannabis */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-emerald-700">
              Cannabis
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {cannabis.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {cannabis.length} substances
            </div>
          </div>

          {/* Depressants */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Depressants
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {depressants.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {depressants.length} substances
            </div>
          </div>

          {/* Inhalants */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-slate-700">
              Inhalants
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2">
              <ul className="space-y-2 text-sm">
                {inhalants.map((drug) => {
                  const style = getDangerStyle(drug.danger);
                  return (
                    <li
                      key={drug.name}
                      className={`flex items-center gap-2 p-2 rounded ${style.bg} ${style.border} border`}
                    >
                      <DangerIcon level={drug.danger} />
                      <span className={`flex-1 ${style.text}`}>
                        {drug.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${style.text} opacity-70`}
                      >
                        {drug.danger}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              {inhalants.length} substances
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">
            Drug Interaction Chart
          </h3>
          <p className="text-yellow-800 mb-4">
            Understanding drug interactions is critical for harm reduction. Some
            combinations can be dangerous or deadly.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
            View Interaction Matrix
          </button>
        </div>
      </main>
    </div>
  );
}
