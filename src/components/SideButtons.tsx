import React, { useState } from 'react';
import { UserIcon, BellIcon } from '@heroicons/react/outline';
import ProfileSettings from './Modals/ProfileSettings';
import logout from '../assets/icons/logout.svg';

export default function SideButtons(): JSX.Element {
  const [showUserSettingsModal, setShowUserSettingsModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  return (
    <div className="absolute flex w-full justify-end h-1 cursor-pointer">
      <div className="dropdown dropdown-end mt-4 mr-3">
        <button
          className="tooltip tooltip-bottom"
          data-tip="Notifications"
          type="button"
        >
          <BellIcon className="h-8 w-8" aria-hidden="true" />
        </button>
        <div className="dropdown-content menu p-5 shadow rounded-lg border-2 border-black bg-white">
          <p>Notifications</p>
          <p>Notifications</p>
          <p>Notifications</p>
        </div>
      </div>
      <div className="dropdown dropdown-end mt-4 mr-3">
        <button
          className="tooltip tooltip-bottom"
          data-tip="Profile"
          type="button"
          onClick={() => {
            setShowUserSettingsModal(true);
          }}
        >
          <UserIcon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      {showUserSettingsModal && (
        <ProfileSettings
          showUserSettingsModal={showUserSettingsModal}
          onCloseModal={() => setShowUserSettingsModal(false)}
          showLogoutModal={false}
        />
      )}
      <div className="dropdown dropdown-end mt-4 mr-4">
        <button
          className="tooltip tooltip-bottom"
          data-tip="Logout"
          type="button"
          onClick={() => {
            setShowLogoutModal(true);
          }}
        >
          <img src={logout} className="h-8 w-8" alt="logout" />
        </button>
      </div>

      {showLogoutModal && (
        <ProfileSettings
          showLogoutModal={showLogoutModal}
          onCloseModal={() => setShowLogoutModal(false)}
          showUserSettingsModal={false}
        />
      )}
    </div>
  );
}
