import { TopicSection } from './TopicSection';
import { UserCards } from './UserCards';



export function Homepage({ topics, users }) {

  return (
    <section className="w-full py-4 flex justify-center h-full">
      <div className="flex flex-col max-w-full w-[910px] h-[100%] justify-between">
        <div className='p-4 border-b border-gray-300'>
          <h1 className="text-2xl font-semibold ml-10 mb-2">Find a Friend</h1>
          <UserCards users={users} />
          <div className="text-base font-semibold mr-10 my-2 text-right text-app-primary cursor-pointer hover:text-app-primary-light">See More</div>
        </div>
        <div className='flex w-full h-[55%] justify-center gap-10 py-4 px-[50px] pt-8'>
          <TopicSection topics={topics} users={users} />
        </div>
      </div>
    </section>
  );
}

