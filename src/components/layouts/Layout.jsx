import Head from 'next/head';
import { PageHeader, PageFooter } from './';

const Layout = ({
    children,
    title = "Devslopes 30-Day JavaScript Coding Challenge!",
    keywords = "javascript, devslopes, challenge, web development",
    description = "Devslopes 30-day JavaScript coding challenge"
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" conent="#002461" />
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className="page-wrapper">
                <PageHeader />
                {children}
                <PageFooter />
            </div>
        </>
    )
}

export default Layout;
