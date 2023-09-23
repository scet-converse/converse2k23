import React from 'react';

export default function TimeTable() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl md:text-4xl text-[#9333EA] py-10 decoration-dotted underline">
        ⏳ Events Scheduling ⌛{' '}
      </h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  ></th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    9:00 - 9:30
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                  >
                    9:30 - 10:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    10:00 - 10:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    10:30 - 11:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    11:00 - 11:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    11:30 - 12:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    12:00 - 12:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    12:30 - 1:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    1:00 - 1:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    1:30 - 2:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    2:00 - 2:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    2:30 - 3:00
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    3:00 - 3:30
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    3:30 - 4:30
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* first row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    rowSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                  >
                    29th Sept 2023
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30">
                    Inauguration
                  </td>
                  <td
                    colSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    PY-IT <span className="text-[#bd41ff]">(Round 01)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02, 03)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    IT Quiz{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02, 03, 04)</span>
                  </td>
                  <td
                    colSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    Break
                  </td>
                  <td
                    colSpan={4}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    Codathon{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02)</span>
                  </td>
                  <td
                    rowSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    Esports Revolution{' '}
                    <span className="text-[#ceea44]">(Reading Hall)</span>
                  </td>
                </tr>
                {/* first row end */}

                {/* second row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    colSpan={6}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500  bg-white/10"
                  ></td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    PY-IT <span className="text-[#bd41ff]">(Round 02)</span>{' '}
                    <span className="text-[#ceea44]">(NJ Seminar Hall)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    MindSpark <span className="text-[#bd41ff]">(Round 01)</span>{' '}
                    <span className="text-[#ceea44]">(G-203)</span>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-white/10"></td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500  bg-sky-600/30"
                  >
                    Auction Ka Adda{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(K-201)</span>
                  </td>
                </tr>
                {/* second row end */}

                {/* third row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    colSpan={5}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-white/10"
                  ></td>
                  <td
                    colSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    Filmy Dhundhamaka{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(K-202)</span>
                  </td>
                  <td
                    colSpan={5}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-white/10"
                  ></td>
                </tr>
                {/* third row start */}

                {/* empty row */}
                <tr>
                  <td
                    colSpan={15}
                    className="whitespace-nowrap border-r border-b px-6 py-4 dark:border-neutral-500"
                  ></td>
                </tr>

                {/* fourth row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    rowSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                  >
                    30th Sept 2023
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    Logo Hunt{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02, 03)</span>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30">
                    Bug Buzz <span className="text-[#bd41ff]">(Round 01)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02)</span>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30">
                    Bug Buzz <span className="text-[#bd41ff]">(Round 02) </span>{' '}
                    <span className="text-[#ceea44]">(Lab 03)</span>
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30">
                    Rise to Crescendo{' '}
                    <span className="text-[#bd41ff]">(Round 01)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 01, 02)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    Rise to Crescendo{' '}
                    <span className="text-[#bd41ff]">(Round 02)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 01)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    Penalty Shootout{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(Ground)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    PY-IT <span className="text-[#bd41ff]">(Round 03)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 01)</span>
                  </td>
                  <td
                    rowSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-white/10"
                  ></td>
                  <td
                    rowSpan={3}
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500  bg-sky-900/30"
                  >
                    Valedictory Ceremony + Prize Distribution
                  </td>
                </tr>
                {/* fourth row end */}

                {/* fifth row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    colSpan={5}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-white/10"
                  ></td>
                  <td
                    colSpan={4}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    Mind Spark{' '}
                    <span className="text-[#bd41ff]">(Round 02)</span>{' '}
                    <span className="text-[#ceea44]">(NJ Seminar Hall)</span>
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    Capture Quest{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(K-201)</span>
                  </td>
                </tr>
                {/* fifth row end */}

                {/* sixth row start */}
                <tr className="border-b dark:border-neutral-500">
                  <td
                    colSpan={8}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-900/30"
                  >
                    The Spy's Eye{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(G-203)</span>
                  </td>
                  <td
                    colSpan={3}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-sky-600/30"
                  >
                    Counter Strike{' '}
                    <span className="text-[#ff764c]">(Non Tech)</span>{' '}
                    <span className="text-[#ceea44]">(Lab 03)</span>
                  </td>
                </tr>
                {/* sixth row end */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
