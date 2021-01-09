import { Div } from 'react-atomize';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/home/Header';
import Categories from '../components/layout/home/Categories';
import NewProducts from '../components/layout/home/NewProducts';
import Process from '../components/layout/home/Process';
import Quotes from '../components/layout/home/Quotes';
import Customers from '../components/layout/home/Customers';
import Parallax from '../components/layout/home/Parallax';
import Suscribe from '../components/layout/home/Suscribe';

const Home = () => {

    return (
        <Layout>
            <Header />
            <Categories />
            <NewProducts />
            <Process />
            <Quotes />
            <Div border={{b:'1px solid'}} borderColor='black10' className='container' />
            <Customers />
            <Parallax />
            <Suscribe />
        </Layout>
    )
}

export default Home
