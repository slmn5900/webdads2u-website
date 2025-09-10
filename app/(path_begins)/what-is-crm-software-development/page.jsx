import React from 'react';
import dynamic from "next/dynamic"
const UnderConstructionsComponent = dynamic(() => import('../../../components/common/UnderConstructionsComponent'), { ssr: false });

export const metadata = {
    title: 'What is CRM Software Development',
    description: 'What is crm software development?',
    keywords: 'what is crm software development, crm software development'
};
const page = () => {
    return (
        <div>
            {/* <h1>about page</h1> */}
            <UnderConstructionsComponent />
        </div>
    );
};

export default page;
