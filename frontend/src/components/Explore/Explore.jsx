import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import UserCard from "./UserCard"
import { useUserCards } from "./hooks/useFetchUser"


const json = {
    "id": 41,
    "username": "GourmetGuru",
    "age": 45,
    "gender": "female",
    "profile_content": "Chef and food critic with a love for culinary arts.",
    "card_content": "Bonjour! I'm GourmetGuru, a 45-year-old professional chef and food critic from France. My passion lies in the art of cooking and the joy of tasting. With over 20 years in the culinary world, I have a wealth of recipes and reviews to share. From haute cuisine to street food, join me on a delicious journey through the world of gastronomy.",
    "country_name": "France"
}

const Explore = ({ userId, users }) => {
    const [userCards, setUserCards] = useState(users)
    const { ref, inView } = useInView()
    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useUserCards(userId)

    useEffect(() => {
        if (inView && !isFetching && !isFetchingNextPage && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage])

    useEffect(() => {
        if (data?.pages) {
            const aggregatedData =
                data.pages.flatMap(page => page.users)
            // filter out users that are already in the list
            const filteredData = aggregatedData.filter(user => !userCards.some(card => card.id === user.id))
            setUserCards([...userCards, ...filteredData])
        }
    }, [data]);


    return (
        <section className="flex flex-col items-center justify-center w-full mt-[30px] mb-[30px]">
            <div className="flex flex-col my-6 w-[910px] h-[100%]">
                <div className='w-full flex justify-start mb-5'>
                    <p className='text-2xl font-semibold mb-4'>Explore</p>
                </div>
                <div className="grid grid-cols-3 gap-12">
                    {userCards.map((user) => (
                        <UserCard
                            userProfile={user}
                            key={user.id}
                        />
                    ))}
                </div>
            </div>
            <div ref={ref} className="flex justify-center items-center w-full h-24" />
        </section>
    )
}
export default Explore