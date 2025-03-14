// 'use client'

// import React from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }) => {

//     const paths = usePathname()
//     const pathNames = paths.split('/').filter(path => path)

//     return (
//         <div>
//             <ul className={containerClasses}>
//                 <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
//                 {pathNames.length > 0 && separator}
//                 {
//                     pathNames.map((link, index) => {
//                         let href = `/${pathNames.slice(0, index + 1).join('/')}`
//                         let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
//                         let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link
//                         return (
//                             <React.Fragment key={index}>
//                                 <li className={itemClasses}>
//                                     <Link href={href}>{itemLink}</Link>
//                                 </li>
//                                 {pathNames.length !== index + 1 && separator}
//                             </React.Fragment>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default NextBreadcrumb


'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumb } from 'react-bootstrap'

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <div className={containerClasses}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    {homeElement}
                </Breadcrumb.Item>
                {pathNames.length > 0 && separator}
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let isActive = paths === href
                        let itemClasses = isActive ? `${listClasses} ${activeClasses}` : listClasses
                        let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1) : link

                        return (
                            <React.Fragment key={index}>
                                <Breadcrumb.Item 
                                    href={href} 
                                    className={itemClasses} 
                                    active={isActive}
                                    style={{textDecoration: 'none'}}
                                >
                                    {itemLink}
                                </Breadcrumb.Item>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        )
                    })
                }
            </Breadcrumb>
        </div>
    )
}

export default NextBreadcrumb
