import React from "react";

const Timline = () => {
  return (
    <div>
      <div className="bg-[#060708]">
        <div className="max-w-xl mx-auto p-8">
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-[#4db5ff] rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-white-500">
                        <div>
                          <a href="#" className="font-medium  mr-2">
                            v3.2.0
                          </a>
                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          >
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3.5 font-medium ">Feature</div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          10h ago
                        </span>
                      </div>
                      <div className="mt-2 text-white-700">
                        <p>
                          - Added a user profile page for personalized settings.
                          <br />
                          - Implemented a dark mode for improved user experience
                          at night.
                          <br />- Introduced real-time notifications for instant
                          updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-[#4db5ff] rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-white-700">
                        <div>
                          <a href="#" className="font-medium  mr-2">
                            v3.1.0
                          </a>
                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          >
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3.5 font-medium ">Feature</div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          9h ago
                        </span>
                      </div>
                      <div className="mt-2 text-white-700">
                        <p>
                          - Improved performance by optimizing database queries.
                          <br />
                          - Enhanced security measures to protect user data.
                          <br />- Streamlined the user interface for a more
                          intuitive experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-[#4db5ff] rounded-full ring-8 ring-white flex items-center justify-center">
                          <svg
                            className="text-white h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md text-white-700">
                        <div>
                          <a href="#" className="font-medium  mr-2">
                            v3.0.10
                          </a>
                          <a
                            href="#"
                            className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          >
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-red-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-3.5 font-medium ">Bug</div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-sm">
                          6h ago
                        </span>
                      </div>
                      <div className="mt-2 text-white-700">
                        <p>
                          - Resolved a critical issue causing crashes on certain
                          devices.
                          <br />
                          - Fixed a login error that prevented some users from
                          accessing their accounts.
                          <br />- Addressed a display glitch causing text
                          overflow in long messages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timline;
