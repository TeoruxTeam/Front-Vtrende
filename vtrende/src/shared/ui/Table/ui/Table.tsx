/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import React from "react";
import styles from "./Table.module.scss";

interface TableProps {
  headers: string[];
  data: Array<Record<string, any>> | any | undefined;
  className?: string;
}

export const Table = ({ headers, data, className }: TableProps) => {
  const isArrayData = Array.isArray(data);
  
  return (
    <div className={classNames(styles['table-container'], className)}>
      <table>
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th
                key={index}
                className={styles['table-header']}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isArrayData ? (
            data.map((row: Record<string, any>, rowIndex: number) => (
              <tr key={rowIndex}>
                {headers?.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={styles['table-cell']}
                  >
                    {row[header] ?? ''}
                  </td>
                ))}
              </tr>
            ))
          ) : data ? (
            <tr>
              {headers?.map((header, cellIndex) => (
                <td
                  key={cellIndex}
                  className={styles['table-cell']}
                >
                  {typeof data === 'object' && data[header]}
                </td>
              ))}
            </tr>
          ) : (
            <tr>
              <td colSpan={headers.length} className={styles['no-data']}>
                Нет данных
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};