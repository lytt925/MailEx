'use client';

import React, { useState } from 'react';
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import Image from 'next/image'

export function Mailcard() {
    // State to track if the card is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card className="p-4 flex flex-col bg-white" onClick={toggleExpand}>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-4">
                    <Image alt="User Image" src="/avatar.png" height={40} width={40} className="rounded-full" />
                    <div className="font-medium">John Doe</div>
                </div>
                <Badge className="bg-[#D4AF37] text-white">New</Badge>
            </div>

            {/* Conditionally render the expanded content */}
            {isExpanded ?
                <div className="text-gray-700 dark:text-gray-300">
                    This is the expanded content. Click to collapse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab, placeat reprehenderit possimus voluptatibus quae eligendi, dicta laudantium autem magni aut totam eveniet expedita. Doloremque earum odit libero ratione deserunt?
                    Impedit libero numquam aspernatur beatae id itaque voluptas consequuntur sint reprehenderit. Magnam voluptatum praesentium provident fuga molestias labore consequuntur veritatis, ea ab omnis ratione numquam rerum? Tempora eligendi iure incidunt?
                    Pariatur odio in laborum eum nulla laboriosam mollitia enim eligendi qui blanditiis? Repudiandae architecto incidunt, sit accusamus eum, quibusdam quasi eius, atque animi perspiciatis ea nisi fugit consectetur voluptatibus excepturi?
                    Totam eum cupiditate voluptas voluptatem sunt cum ut eveniet voluptates nisi maiores. In, nobis quidem perferendis aperiam doloribus voluptas illum repellendus odit quo, blanditiis rem assumenda molestias mollitia numquam earum?
                    Enim, assumenda est magnam laborum non, dolore voluptates exercitationem tempora suscipit qui vero odio maxime tenetur? Reiciendis odio ex, totam pariatur fugiat quaerat facilis ab cupiditate, unde eum quibusdam consequuntur.
                    Nisi unde eum omnis praesentium corrupti consectetur obcaecati earum vel. Eveniet tempore perspiciatis dignissimos cupiditate placeat quod totam a quisquam aspernatur, deleniti nam vitae eum excepturi autem voluptatibus, cum at.
                    Illum expedita dolore sit. Blanditiis excepturi molestias ratione eum doloribus mollitia iusto vel adipisci eveniet exercitationem inventore ea doloremque, deleniti, voluptatem dicta aliquam asperiores ipsum voluptatibus? Sapiente assumenda repellat sed!
                    Quasi ad maiores fugiat, ratione excepturi ullam sequi voluptatum blanditiis exercitationem officiis minus ex reiciendis, ab inventore doloribus itaque recusandae obcaecati doloremque consectetur corrupti necessitatibus similique molestiae voluptate? Placeat, repellat.
                    Earum ducimus rem illum velit iusto sit voluptates consectetur eius ipsam. Est eligendi reprehenderit tempora consectetur autem inventore dolorem repellat, corrupti odio voluptate obcaecati, provident dolore quisquam iste quasi libero.
                    Sapiente ipsum odio sit doloribus, accusantium a aliquam iste voluptas facere provident quas culpa nemo rerum aspernatur repellendus non reprehenderit libero consectetur sint itaque, possimus fugiat nulla enim? Autem, culpa.
                </div>
                :
                <div className="text-gray-700 dark:text-gray-300">
                    Test. This is a preview of the letter content. Click to expand.
                </div>
            }
        </Card>
    );
}

