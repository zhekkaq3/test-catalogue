// import { Suspense } from 'react'
// import { getAllProducts } from '@/lib/api'
// import { SkeletonGrid } from '@/components/ui/skeleton-grid'
// import Catalogue from '@/components/ui/catalogue/catalogue'


// export default async function Home() {
//   const allProducts = await getAllProducts()

//   return (
//     <main className="container mx-auto mt-[70px]">
//       <Suspense fallback={<SkeletonGrid />}>
//         <Catalogue products={allProducts}/>
//       </Suspense>
//     </main>
//   )
// }

import Form from 'next/form'


const fetchUsers = async (url) => {

    try {
        const getUsers = await fetch(url)
        const users = await getUsers.json()

        return users
    } catch (err) {
        console.error(err);
    }
}

function getUrl(query) {
    return `https://jsonplaceholder.typicode.com/users${query ? `?name_like=${query}` : ''}`
}



export default async function GetUsers({
    searchParams,
  }) {

    const results = (await searchParams).name || ''
    const url = getUrl(results)
    const users = await fetchUsers(url)

    return (
        <div className="mt-[100px]">
            <Form action='/'>
                <input name="name" />      
                <button type='submit'>Submit</button>            
            </Form>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

