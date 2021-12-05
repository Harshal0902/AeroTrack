import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Navbar() {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="font-poppins">
            <nav className="flex items-center bg-primary p-3 flex-wrap px-4 lg:px-16 md:px-8">
                <Link href="/" passHref><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer text-white font-bold">
                    AeroTrack
                </span></Link>
                <button
                    className="lg:hidden right-0 text-white absolute font-bold md:px-8 text-6xl pt-16 px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    <FontAwesomeIcon className="text-white" icon={faBars} />&nbsp;
                </button>
                {showModal ? (
                    <>
                        <div
                            className=" flex overflow-x-hidden mx-4 md:mx-8 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative my-6 mx-auto w-screen ">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                                    <div className="flex items-start justify-between text-white p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <div className="text-3xl font-semibold cursor-pointer">
                                            <Link href="/" passHref>
                                                AeroTrack
                                            </Link>
                                        </div>

                                        <div className="text-6xl font-semibold absolute right-6" onClick={() => setShowModal(false)}>
                                            <FontAwesomeIcon className="text-white" icon={faTimes} />&nbsp;
                                        </div>

                                    </div>
                                    <div className="grid place-items-center text-xl py-2 w-full" >
                                        <Link href="/" passHref>
                                            <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Home</span>
                                        </Link>

                                        <Link href="/explore" passHref>
                                            <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Explore</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto" >

                        <Link href="/" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-6 mx-2 py-2 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Home</span>
                        </Link>

                        <Link href="/explore" passHref>
                            <span className="lg:inline-flex lg:w-auto w-full px-6 mx-2 py-2 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Explore</span>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}
