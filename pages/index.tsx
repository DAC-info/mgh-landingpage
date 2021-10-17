import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import "animate.css"


import Main from '../components/Main';
import useWindowSize from "../hooks/windowSize"


const Home: NextPage = () => {
    const [scroll, setScroll] = useState(0);


    useEffect(function onFirstMount() {
        function onScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", onScroll, { passive: true });

    }, []);

    const size = useWindowSize();

    return (
        <>
            <Head>
                <title>MetaGameHub DAO</title>
                <meta name="description" content="" />
            </Head>

            <main className="flex flex-col items-center">
                <div className="max-w-full 2xl:max-w-screen-2xl">

                    {size.width ? (size.width < 1024 ? <Main animate={false}/> : <Main animate={true}/>) : (<Main animate={true}/>)}
                </div>

            </main>


        </>
    )
}

export default Home
