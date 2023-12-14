import Link from 'next/link';
import { TopicSection } from './TopicSection';
import { UserCards } from './UserCards';



export function Homepage({ topics, users }) {

  return (
    <section className="h-full w-full py-4 flex justify-center">
      <div className="flex flex-col max-w-full w-[910px] h-full justify-between">
        <div className='p-4 border-b border-gray-300'>
          <h1 className="text-2xl font-semibold ml-10 mb-2">Find a Friend</h1>
          <UserCards users={users} />
          <div className="flex justify-end">
            <Link href='/explore' className="text-base font-semibold mr-10 my-2 text-right text-app-primary cursor-pointer hover:text-app-primary-light">
              See More
            </Link>
          </div>
        </div>
        <div className='flex w-full grow basis-[550px] justify-center gap-10 py-4 px-[50px] pt-8'>
          <TopicSection topics={topics} users={users} />
        </div>
      </div>
    </section>
  );
}

