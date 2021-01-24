import React from 'react';
import styles from 'styles/vission_mission.module.scss';

export default function Box({ title, description }) {
  return (
    <div className="p-4">
      <div className={styles.vission_box}>
        <h1
          className="inline-flex p-1 pl-2 pr-2 mb-3 text-3xl font-semibold text-center text-gray-700 
        text-gradient bg-gradient-to-r from-custom-sun via-yellow-500 to-yellow-500
        rounded-md"
        >
          {title}
        </h1>
        <p className="text-left text-gray-300">{description}</p>
      </div>
    </div>
  );
}
