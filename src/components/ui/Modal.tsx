'use client';

import React, { FC, ReactElement, PropsWithChildren, useState } from 'react';

const ModalComponent: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return isOpen ? (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen overflow-x-hidden overflow-y-hidden md:inset-0"
    >
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen overflow-x-hidden overflow-y-hidden md:inset-0 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-sm hover:cursor-pointer"
        data-modal-hide="defaultModal"
        onClick={(e) => {
          setIsOpen(false);
        }}
      />

      <div className="absolute top-1/2 left-1/2 z-20 translate-x-[-50%] translate-y-[-50%] flex flex-col bg-[#19191a] py-12 px-8 rounded-2xl w-[25rem] max-w-[calc(100vw - 5rem)] w:4/5 h-4/5 md:w-1/2 md:h-3/5 overflow-auto">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalComponent;
