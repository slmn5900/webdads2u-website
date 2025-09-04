// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function IconBreadcrumbs() {
//   return (
//     <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link
//           underline="hover"
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="inherit"
//           href="/"
//         >
//           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Home
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="inherit"
//           href="/material-ui/getting-started/installation/"
//         >
//           <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Core
//         </Link>
//         <Typography
//           sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
//         >
//           <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Breadcrumb
//         </Typography>
//       </Breadcrumbs>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

export default function IconBreadcrumbs() {
    const router = useRouter(); // Hook must be called at the top level
    const [isMounted, setIsMounted] = useState(false);
    const [pathnames, setPathnames] = useState([]);

    useEffect(() => {
        // Ensure the component is only rendered on the client side
        setIsMounted(true);
        setPathnames(router.asPath.split('/').filter((x) => x));
    }, [router.asPath]); // Dependency on router.asPath to update breadcrumb on path change

    // Prevent rendering until the component is mounted
    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <Typography
                            key={value}
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            {value}
                        </Typography>
                    ) : (
                        <Link
                            key={value}
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href={routeTo}
                        >
                            {value}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
}
