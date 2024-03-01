"use client"
import { useState } from "react"

export default function Form () {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(subject && message !== "") {
            window.open(`mailto:ulukbekmambetov@gmail.com?subject=${subject}&body=${message}`);
            setSubject("")
            setMessage("")
        }
    }
    return(
    <form className="w-11/12" onSubmit={sendMessage}>
        <div className="my-5">
            <label className="block mb-2">Subject</label>
            <input required type="text" placeholder="Subject" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
            dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            value={subject} onChange={e => setSubject(e.target.value)}/>
        </div>

        <div className="my-5">
            <label className="block mb-2">Message</label>
            <textarea required rows={6} placeholder="Message" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
            dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            value={message} onChange={e => setMessage(e.target.value)}/>
        </div>
        <button disabled={!(subject !== "" && message !== "")} type="submit" className="disabled:bg-gray-400 disabled:brightness-50 disabled:cursor-not-allowed py-3 px-5 text-white bg-[#6246ea] hover:bg-[#583fd3] rounded-lg focus:ring-4 focus:outline-none">Send Message</button>
    </form>)
}