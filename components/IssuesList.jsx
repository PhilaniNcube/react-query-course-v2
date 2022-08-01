import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import IssueItem from './IssueItem';

const IssuesList = ({ issues }) => {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-4">
        <form className="w-full my-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="search" className="font-medium text-sm">
              Search Issues
            </label>
            <input
              type="text"
              className="border border-gray-200/60 focus:outline-none bg-transparent rounded-md  text-sm py-2 px-3"
              placeholder="Search"
            />
          </div>
        </form>

        <h2 className="text-3xl font-bold">Issues List</h2>
        <ul>
          {issues.map((issue) => (
            <IssueItem item={issue} key={issue.id} />
          ))}
        </ul>
      </div>
      <div className="col-span-2 bg-gray-50/20 rounded-lg"></div>
    </div>
  );
};

export default IssuesList;
