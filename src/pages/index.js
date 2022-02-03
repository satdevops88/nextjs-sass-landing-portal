import React from 'react';
import Layout from '@components/Layout/Layout';
import Hero from '@sections/Home/Hero/Hero';
import content from '@utils/textContent';
import Introduction from '@sections/Home/Introduction/Introduction';
import Experiences from '@sections/Home/Experiences/Experiences';


const Home = () => {
    const { hero, introduction, experiences } = content;
    return (
        <Layout>
            <Hero content={hero} />
            <Introduction content={introduction} />
            <Experiences content={experiences} />
            <div></div>
        </Layout>
    );
};

export default Home;
