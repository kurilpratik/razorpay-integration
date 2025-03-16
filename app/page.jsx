"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Phone, Star } from "lucide-react"
import { useRef, useState } from "react"

import RazorpayButton from './_components/razorpay/page'

export default function Home() {
  const [activeTab, setActiveTab] = useState("about")

  const aboutRef = useRef(null)
  const scheduleRef = useRef(null)
  const teachersRef = useRef(null)
  const moreDetailsRef = useRef(null)

  const handleTabClick = (tab) => {
    setActiveTab(tab)

    // Scroll to the appropriate section
    if (tab === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (tab === "schedule" && scheduleRef.current) {
      scheduleRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (tab === "teachers" && teachersRef.current) {
      teachersRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (tab === "moreDetails" && moreDetailsRef.current) {
      moreDetailsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen" >
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white fixed w-full">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="./pw.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Login/Register</button> */}
      </header>

      {/* Breadcrumb */}
      <div className="bg-purple-50 p-4 pt-24">
        <div className="flex items-center text-xs text-gray-600 gap-1">
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <span>&gt;</span>
          <Link href="/" className="mx-1">
            BANKING
          </Link>
          <span>&gt;</span>
          <Link href="/" className="mx-1">
            BATCHES
          </Link>
          <span>&gt;</span>
          <span className="truncate">BANK SUPERPACK PRIVATE GOV 1 YEAR SUBSCRIPTION...</span>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mt-3 mb-4">BANK SUPERPACK (Private + Gov) 1 Year Subscription</h1>

        {/* Course Image and Description */}
        <div className="flex gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="text-amber-500 text-xs">📅</span>
          </div>
          <p className="text-sm text-gray-700">
            mahapack mahapack nudge, valid for 1 year pack validity, 100+ batches, 18+ exams covered, 2000+ live
            classes, 1000+ mock tests, 1000+ pyqs & quizzes, & More
          </p>
        </div>

        {/* Date Information */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="text-amber-500 text-xs">📅</span>
          </div>
          <p className="text-sm">
            Starts on <strong>20 March 2024</strong> | Ends on <strong>20 Dec 2025</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-sm ${activeTab === "about" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => handleTabClick("about")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 text-sm ${activeTab === "schedule" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => handleTabClick("schedule")}
          >
            Schedule
          </button>
          <button
            className={`px-4 py-2 text-sm ${activeTab === "teachers" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => handleTabClick("teachers")}
          >
            Teachers
          </button>
          <button
            className={`px-4 py-2 text-sm ${activeTab === "moreDetails" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => handleTabClick("moreDetails")}
          >
            More Details
          </button>
        </div>
      </div>

      {/* About the Batch */}
      <div ref={aboutRef} className="p-4">
        <h2 className="text-lg font-bold mb-4">About the Batch</h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-gray-500 text-sm">Validity: 1-year validity with no limit of batches</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-gray-500 text-sm">Online lecture</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-gray-500 text-sm">One to one telephonic guidance</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-gray-500 text-sm">Seminars & toppers talk at offline centers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div ref={scheduleRef} className="p-4 border-t">
        <h2 className="text-lg font-bold mb-4">Batch Schedules</h2>

        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-medium mb-1">Notices</h3>
          <p className="text-sm text-gray-600">0 Lectures</p>
          <p className="text-sm text-gray-600 mt-2">
            Dheerendra Pratap Singh sir & Mayank Shukla Sir & Sachin Adekar Sir & Sumit Jaiswal Sir & Rupam Chikara
            Ma'am & Anchal Sharma Ma'am & Arpit Sohgaura Sir
          </p>
        </div>
      </div>

      {/* Teachers Section */}
      <div ref={teachersRef} className="p-4 border-t">
        <h2 className="text-lg font-bold mb-4">Know your Teachers</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-yellow-50 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="./dheerandra.png"
                alt="Dheerendra Pratap Singh"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="font-medium mt-2">Dheerendra Pratap Singh</h3>
            <p className="text-sm text-gray-500">Quants</p>
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
              10+ Years Exp
            </span>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-yellow-50 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="./mayank.png"
                alt="Mayank Shukla"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="font-medium mt-2">Mayank Shukla sir</h3>
            <p className="text-sm text-gray-500">Quants</p>
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
              9+ Years Exp
            </span>
          </div>
        </div>
      </div>

      {/* More Details Section */}
      <div ref={moreDetailsRef} className="p-4 border-t">
        <h2 className="text-lg font-bold mb-4">More Details</h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm">
              <span className="font-bold">01.</span> This Pack includes All{" "}
              <span className="font-bold">
                Government Banks Exam Courses & 100% Private Bank Job Assistance with Certification
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">02.</span> Minimum Eligibility Criteria For Private Bank Preparation : 50%
              marks in graduation
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">03.</span> Based on New Syllabus & Exam Pattern
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">04.</span> We also provide Test Series For Government Bank Exam Preparation
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">05.</span> 24*7 Doubt Support
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">06.</span> Syllabus Completion Before Exam.
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">07.</span> Duration of Lecture: 60 - 90 Min
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">08.</span> You can access all classes in recorded form till your validity.
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">09.</span> Complete lecture planner will be available in the PW App.
            </p>
          </div>

          <div>
            <p className="text-sm">
              <span className="font-bold">10.</span> We will provide class notes in the English language.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing and Buy Button */}
      <div className="p-4 border-t flex items-center justify-between sticky bottom-0 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">₹24,999</span>
            <span className="text-gray-400 line-through text-sm">₹43,000</span>
          </div>
          <div className="flex items-center text-green-600 text-xs">
            <span className="mr-1">•</span>
            <span>41% Off</span>
          </div>
        </div>
        <RazorpayButton />
      </div>

      {/* Floating Call Button */}
      {/* <div className="fixed bottom-20 right-6">
        <button className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
          <Phone className="w-5 h-5 text-white" />
        </button>
      </div> */}
    </div>
  )
}

