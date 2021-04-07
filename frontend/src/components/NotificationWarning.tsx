interface PropsType {
  animation: boolean;
}

const NotificationWarning = (props: PropsType) => {
  let flag = props.animation;
  return (
    <div
      className={
        flag
          ? 'opacity-100 transition duration-200 ease-in-out z-50'
          : 'opacity-0 transition duration-200 ease-in-out z-0'
      }
    >
      <div
        role="alert"
        className={
          flag
            ? 'xl:w-4/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 dark:bg-gray-800 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0'
            : 'xl:w-4/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 dark:bg-gray-800 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 '
        }
      >
        <div className="sm:px-6 p-2 ml-4 sm:ml-0 mt-4 sm:mt-0 flex items-center justify-center bg-yellow-400 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="currentColor"
          >
            <path
              className="heroicon-ui"
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center pl-4 sm:w-9/12 sm:pt-6 pb-6 pt-2">
          <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">
            Check your provided informations
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
            A problem occured while creating a new user account.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotificationWarning;
