import Head from 'next/head'

const MetaData = ({title}) => {
    return (
        <Head>
            <title>{`Contact Manager App ${title && "| " +title}`}</title>
            <meta name="description" content="A simple Contact Manager" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default MetaData
