'use client';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery).toString();
        const url = urlQueryParam ? `${pathname}?${urlQueryParam}` : pathname;
        router.push(url);
    }, [search,pathname, router]);

    return (
        <div>
            <h1 className='text-2xl font-bold'>Meal Search</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for meals..."
                className="border p-2 mb-4 w-full"
            />
        </div>
    );
};

export default MealSearchInput;