import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('./UnderConstructions'), { ssr: false });
export const metadata = {
    title: 'Top 8 Benefits of Having a Professional Web Design 2024',
    description: 'Explore the top 8 benefits of professional web design in 2024. Boost your brand, improve user experience, and drive more traffic with expert design.',
    keywords: 'top 8 benefits of having a professional web design 2024'
};
const page = () => {
    return (
        <div>
            <UnderConstructions />
        </div>
    );
};

export default page;
