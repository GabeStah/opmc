import React, { Component } from "react"
import { Link } from "gatsby"

export default class Footer extends Component {
  render() {
    return (
      <section className={"gradient"}>
        <svg
          className="wave-top"
          viewBox="0 0 1439 147"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  />
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  />
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <footer>
          <div className="container mx-auto  px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1 mb-6">
                <a
                  className="text-gray-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="/"
                >
                  {/*<svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg"*/}
                  {/*     viewBox="0 0 512.005 512.005">*/}
                  {/*  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502"*/}
                  {/*        transform="matrix(1,0,0,1,0,0)"/>*/}
                  {/*  <path className="plane-take-off"*/}
                  {/*        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>*/}
                  {/*</svg>*/}
                  OPMC
                </a>
              </div>

              <div className="flex-1">
                <p className="uppercase text-gray-800 md:mb-6">About</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/about/rehearsal"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Rehearsal
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/about/history"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      History
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/about/mission-statement"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Mission Statement
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/about/director"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      OPMC Director
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-800 md:mb-6">
                  <Link to={'/contact'}>
                    Contact Us
                  </Link>
                </p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/contact/event-booking"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Event Booking
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-800 md:mb-6">Quartets</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/quartets/no-batteries-required"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      No Batteries Required
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/quartets/three-good-looking-guys"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Three Good Looking Guys
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="uppercase text-gray-800 md:mb-6">Members</p>
                <ul className="list-reset mb-6">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/roster"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Roster
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/calendar"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Calendar
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link
                      to={"/music"}
                      className="no-underline hover:underline text-gray-700 hover:text-orange-500"
                    >
                      Repertoire
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}
