import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import IssuesList from '../components/IssuesList';
import { useQuery } from 'react-query';

export default function Home() {
  const issuesQuery = useQuery(['issues'], async () => {
    const res = await fetch('https://ui.dev/api/courses/react-query/issues');
    const issues = res.json();
    return issues;
  });

  return (
    <Fragment>
      <div className="bg-slate-900 text-white min-h-screen py-8 px-16">
        <h1 className="text-6xl font-extrabold text-center py-16">
          Issue Tracker
        </h1>

        {issuesQuery.isLoading && (
          <p className="text-base text-gray-800">Loading...</p>
        )}

        {issuesQuery.isSuccess && <IssuesList issues={issuesQuery.data} />}
        {issuesQuery.isFetching && <p className="text-xs mt-3">Fetching...</p>}
      </div>
    </Fragment>
  );
}
