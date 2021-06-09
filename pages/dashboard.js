import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const dashboard = () => {
    console.log(withPageAuthRequired())
    return (
        <div>
            Welcome
        </div>
    )
}


export const getServerSideProps = withPageAuthRequired()

export default dashboard