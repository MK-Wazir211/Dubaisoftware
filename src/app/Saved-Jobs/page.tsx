import React from 'react';
import { format, differenceInDays } from 'date-fns';

interface SavedJob {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  dateSaved: string; // ISO 8601 date string
  expirationDays: number;
}

interface SavedJobsProps {
  savedJobs?: SavedJob[];
}

const dummySavedJobs: SavedJob[] = [
  {
    id: '1',
    jobTitle: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    dateSaved: '2024-01-20',
    expirationDays: 30,
  },
  {
    id: '2',
    jobTitle: 'Frontend Developer',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    dateSaved: '2024-01-25',
    expirationDays: 60,
  },
  {
    id: '3',
    jobTitle: 'Backend Developer',
    company: 'Amazon',
    location: 'Seattle, WA',
    dateSaved: '2024-02-01',
    expirationDays: 1,
  },
  {
    id: '4',
    jobTitle: 'Data Scientist',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    dateSaved: '2024-02-05',
    expirationDays: 15,
  },
  {
    id: '5',
    jobTitle: 'Product Manager',
    company: 'Apple',
    location: 'Cupertino, CA',
    dateSaved: '2026-02-10',
    expirationDays: 20,
  },
];

const SavedJobs: React.FC<SavedJobsProps> = ({ savedJobs = dummySavedJobs }) => {
  const hasSavedJobs = savedJobs && savedJobs.length > 0;

  if (!hasSavedJobs) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-600 italic">No saved jobs found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Your Saved Jobs
        </h2>
      </div>
      <div className="shadow overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Job Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Expiration
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {savedJobs.map((job) => {
              const savedDate = new Date(job.dateSaved);
              const expirationDate = new Date(
                savedDate.getTime() + job.expirationDays * 24 * 60 * 60 * 1000
              );
              const remainingDays = differenceInDays(expirationDate, new Date());
              const formattedExpirationDate = format(expirationDate, 'MMM dd, yyyy');
              const isExpired = remainingDays <= 0;

              return (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.jobTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {isExpired
                      ? 'Expired'
                      : `${remainingDays} days (${formattedExpirationDate})`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      {isExpired ? (
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
                          Expired
                        </button>
                      ) : (
                        <button
                          className="bg-[#286672] hover:bg-[#1d4d5a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                        >
                          Apply
                        </button>
                      )}
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedJobs;
