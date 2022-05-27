import React from 'react';
import { CgDanger } from 'react-icons/cg';
import { BiMessageDetail } from 'react-icons/bi';

const IssueItem = ({ item }) => {
  return (
    <div className="w-full border border-gray-100 rounded-md px-4 py-2 my-3">
      <div className="flex space-x-4 items-center">
        <CgDanger className="h-8 w-8 text-green-600" />
        <div className="flex-1">
          <div className="flex">
            <h3 className="font-medium text-yellow-500 text-md">
              {item.title}{' '}
              <span className="ml-3  px-2 rounded-full border border-red-600 text-red-700 text-xs">
                {item.labels[0]}
              </span>
            </h3>{' '}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <BiMessageDetail className="h-4 w-4 text-gray-500" />
          <p className="text-xs text-gray-500">{item.comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default IssueItem;
