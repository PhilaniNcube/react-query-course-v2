import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Fragment>
      <div className="h-screen w-screen flex justify-center items-center">
        <button className="bg-green-600 text-white text-base font-medium px-8 py-2 rounded-md shadow-md hover:shadow-sm translate-y-[3px] hover:translate-y-0 transition-all ease-in-out">
          React Query
        </button>
      </div>
    </Fragment>
  );
}
