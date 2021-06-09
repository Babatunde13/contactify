import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import NavbarComponent from '../components/Navbar'

const dashboard = () => {
    console.log(withPageAuthRequired())
    return (
        <div>
            <NavbarComponent />
            Welcome
        </div>
    )
}


export const getServerSideProps = withPageAuthRequired()

export default dashboard