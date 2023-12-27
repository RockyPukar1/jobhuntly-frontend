import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import C19JobApplicationsColumnicon from "components/C19JobApplicationsColumnicon";

const JobApplicationsModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[45%]"
      overlayClassName="bg-gray-900_99_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <C19JobApplicationsColumnicon
          className="bg-white-A700 flex flex-col justify-start mb-[70px] p-6 md:px-5 w-full"
          bysendingthereqOne={
            <Text className="font-epilogue leading-[160.00%] max-w-[580px] md:max-w-full text-base text-blue_gray-700">
              <span className="text-blue_gray-700 text-left font-normal">
                By sending the request you can confirm that you accept our{" "}
              </span>
              <span className="text-indigo-A700 text-left font-normal">
                Terms of Service
              </span>
              <span className="text-blue_gray-700 text-left font-normal">
                {" "}
                and{" "}
              </span>
              <span className="text-indigo-A700 text-left font-normal">
                Privacy Policy
              </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default JobApplicationsModal;
