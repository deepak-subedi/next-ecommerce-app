import Link from 'next/link';

const MyApp = ({ Component, pageProps }) => {
    return(
        <>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            
            <Component {...pageProps} />
            <footer>This is copyright to DP online</footer>
        </>
    ) 
}

export default MyApp;