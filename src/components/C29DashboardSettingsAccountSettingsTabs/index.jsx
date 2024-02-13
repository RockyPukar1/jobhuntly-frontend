import React from "react";

import { Line, Text } from "components";

const C29DashboardSettingsAccountSettingsTabs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtEpilogueSemiBold16Bluegray900"
          >
            {props?.profiletext}
          </Text>
          {!!props?.rectangle173 ? (
            <Line className="bg-indigo-A700 h-1 w-full" />
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.logintext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-base text-blue_gray-400 w-auto"
            size="txtEpilogueSemiBold16Bluegray400"
          >
            {props?.notificationstext}
          </Text>
        </div>
      </div>
    </>
  );
};

C29DashboardSettingsAccountSettingsTabs.defaultProps = {
  profiletext: "My Profile",
  logintext: "Login Details",
  notificationstext: "Notifications",
};

export default C29DashboardSettingsAccountSettingsTabs;
