import React from 'react';
import { format } from 'date-fns';

interface JobApplication {
  id: string;
  jobTitle: string;
  company: string;
  status: string;
  dateApplied: string;
}

interface JobApplicationsProps {
  applications: JobApplication[];
}

const dummyApplications: JobApplication[] = [
  {
    id: '1',
    jobTitle: 'Software Engineer',
    company: 'Google',
    status: 'Applied',
    dateApplied: '2023-01-15',
  },
  {
    id: '2',
    jobTitle: 'Frontend Developer',
    company: 'Facebook',
    status: 'Interviewing',
    dateApplied: '2023-02-20',
  },
  {
    id: '3',
    jobTitle: 'Backend Developer',
    company: 'Amazon',
    status: 'Rejected',
    dateApplied: '2023-03-10',
  },
  {
    id: '4',
    jobTitle: 'Data Scientist',
    company: 'Netflix',
    status: 'Offer Received',
    dateApplied: '2023-04-01',
  },
  {
    id: '5',
    jobTitle: 'Product Manager',
    company: 'Apple',
    status: 'Accepted',
    dateApplied: '2023-05-05',
  },
];

const statusColors: { [key: string]: string } = {
  'Applied': 'bg-blue-100 text-blue-700',
  'Interviewing': 'bg-yellow-100 text-yellow-700',
  'Rejected': 'bg-red-100 text-red-700',
  'Offer Received': 'bg-green-100 text-green-700',
  'Accepted': 'bg-green-700 text-white',
};

const JobApplications: React.FC<JobApplicationsProps> = ({ applications = dummyApplications }) => {
  const hasApplications = applications && applications.length > 0;

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Job Applications</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Overview of your recent job applications.</p>
        </div>
        <div className="border-t border-gray-200">
          {hasApplications ? (
            <ul className="divide-y divide-gray-200">
              {applications.map((application) => (
                <li key={application.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">{application.jobTitle}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[application.status]}`}>
                          {application.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <span className="mr-1">Company:</span>
                          {application.company}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <span className="mr-1">Applied on:</span>
                        {format(new Date(application.dateApplied), 'MMM dd, yyyy')}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-5 sm:px-6 text-center">
              <p className="text-sm text-gray-500">No job applications found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
