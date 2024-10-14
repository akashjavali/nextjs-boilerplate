import { Button } from '@/components/ui/button';
import { HOOKS } from '@/utils';

export default function Homepage() {
  const { useGetCategoriesList } = HOOKS.useMisc();
  const { data: categoriesData, isLoading: isCategoriesListLoading } =
    useGetCategoriesList();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Button>Button</Button>
      {isCategoriesListLoading ? (
        'Loading'
      ) : (
        <ul>
          {categoriesData?.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
