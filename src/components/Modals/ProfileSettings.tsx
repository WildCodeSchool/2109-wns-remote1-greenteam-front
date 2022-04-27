import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { PencilAltIcon, MailIcon } from '@heroicons/react/outline';
import { useLogoutUserQuery } from '../../graphql/generated';
import ProfilePic from '../../assets/icons/profile-pic.svg';

export default function ProfileSettings({
  onCloseModal,
  showUserSettingsModal,
  showLogoutModal,
}: {
  onCloseModal: () => void;
  showUserSettingsModal: boolean;
  showLogoutModal: boolean;
}): JSX.Element {
  const navigate = useNavigate();
  const { data } = useLogoutUserQuery();

  const onSubmit = () => {
    const signout = data;
    if (signout?.logout?.statusCode === 201) {
      navigate('/');
    }
  };

  return (
    <>
      {showUserSettingsModal && (
        <Transition.Root show={showUserSettingsModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={() => {
              onCloseModal();
            }}
            open={showUserSettingsModal}
          >
            <div className="flex items-center justify-center h-screen pt-4 px-4 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle max-w-md rounded-2xl p-8 text-center">
                  <div>
                    <h1>Profile</h1>
                    <img src={ProfilePic} alt="avatar" />
                    <PencilAltIcon className="h-5 w-5" aria-hidden="true" />

                    <p>Name</p>
                    <p>Lastname</p>
                    <p>Role</p>

                    <div className="flex">
                      <MailIcon aria-hidden="true" />
                      <p>Email</p>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {showLogoutModal && (
        <Transition.Root show={showLogoutModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={() => {
              onCloseModal();
            }}
            open={showLogoutModal}
          >
            <div className="flex items-center justify-center h-screen pt-4 px-4 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle max-w-md rounded-2xl p-6 text-center">
                  <p>Are you sure you want to disconnect?</p>
                  <div className="flex flex-row justify-end mt-3">
                    <button
                      className="w-1/6 bg-cyan hover:bg-orange text-white p-1 border-2 border-white rounded-lg mr-2"
                      type="submit"
                      onClick={onSubmit}
                    >
                      Yes
                    </button>
                    <button
                      className="w-1/6 bg-cyan hover:bg-orange text-white p-1 border-2 border-white rounded-lg "
                      type="submit"
                      onClick={() => window.location.reload()}
                    >
                      No
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
