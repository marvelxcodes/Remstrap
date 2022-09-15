import type { NextPage } from 'next'
import { Header, Sidebar } from '@components/editor'
import Head from '@utils/Head'

const Editor : NextPage = () => {
    return(
<>
<Head>Untitled-1</Head>
<div className="h-screen w-screen">
    <Header />
    <section className='flex'>
        <Sidebar />
        <div className="bg-gray-300 w-full h-full">
            
        </div>
    </section>
</div>
</>
)}

export default Editor