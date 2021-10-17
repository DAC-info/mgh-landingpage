import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import "animate.css"

import Intro from "../components/Desktop";
import Footer from "../components/Footer";

import Desktop from '../components/Desktop';
import Mobile from '../components/Mobile';
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
                <meta name="description" content="Governance of metaverse related items, fair valuation and minting of NFT backed tokens and provision of metaverse market data." />
                {/* <meta name="robots" content="noodp,noydir" /> */}
            </Head>

            <main className="flex flex-col items-center">
                <div className="max-w-full 2xl:max-w-screen-2xl">

                    {size.width ? (size.width < 1025 ? <Mobile /> : <Desktop/>) : (<Desktop/>)}

                </div>

            </main>


        </>
    )
}

export default Home
