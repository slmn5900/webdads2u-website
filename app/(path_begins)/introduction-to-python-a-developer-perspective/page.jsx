import React from 'react';
import dynamic from 'next/dynamic';
const UnderConstructions = dynamic(() => import('../../../components/'), { ssr: false });

export const metadata = {
    title: 'Introduction to Python A developer perspective',
    description: 'Discover python from a developer’s perspective in this beginner-friendly guide. Learn core concepts, real-world applications, and how python simplifies coding for web, data, and automation projects.',
    keyword: 'introduction to python a developer perspective'
};
const page = () => {
    return (
        <div>
              <UnderConstructions />
        </div>
    );
};

export default page;
