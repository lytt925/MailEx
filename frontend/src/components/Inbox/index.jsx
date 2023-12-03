import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "./Mail"
import { Friend } from "./Friend"

export const Inbox = () => {

    return (
        <div className="flex h-full w-full lg:h-[90%] lg:w-[90%] lg:max-w-full lg:mx-auto lg:border lg:rounded-md lg:shadow">
            <div className="flex flex-col box-border h-full w-[22%] border-r">
                <div className="bg-gray-100 h-20 p-6 border-b shadow">
                    <Input placeholder="Search friends..." />
                </div>
                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <Friend key={i} />)}
                </div>
            </div >
            <div className="flex flex-col w-[28%] bg-white border-r">
                <div className="h-20 bg-gray-100 p-6 border-b">
                    <div className="text-2xl text-black font-semibold">Mails</div>
                </div>
                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100">
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                </div>
            </div>
            <div className="flex flex-col w-[50%] p-6">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                    <div className="text-2xl font-semibold">嗨嗨！</div>
                    <div className="flex flex-col items-end">
                        <div>ytlitw</div>
                        <div className="text-sm text-gray-500">2023/12/02 12:03</div>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <div className="whitespace-pre-wrap text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ipsum in dui malesuada tempus. Sed
                        vitae nulla nec nulla suscipit egestas. Aliquam erat volutpat. Cras vitae turpis lacinia, tempus purus at,
                        auctor libero.
                    </div>
                </div>
                <div className="mt-4">
                    <form>
                        <textarea className="w-full h-24 p-2 text-lg border rounded shadow-inner" placeholder="Reply..." />
                        <div className="flex justify-end mt-3">
                            <Button className="text-2xl">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}