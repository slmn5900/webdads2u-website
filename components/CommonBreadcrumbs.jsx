
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Breadcrumb } from "react-bootstrap";
// import { capitalize } from "@/utils/textUtils";

// const CommonBreadcrumbs = () => {
//   const pathname = usePathname();
//   const segments = pathname.split("/").filter((item) => item !== "");

//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//       {segments.map((segment, index) => {
//         const url = `/${segments.slice(0, index + 1).join("/")}`;
//         return index === segments.length - 1 ? (
//           <Breadcrumb.Item key={url} active>
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         ) : (
//           <Breadcrumb.Item key={url} href={url}>
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         );
//       })}
//     </Breadcrumb>
//   );
// };

// export default CommonBreadcrumbs;

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Breadcrumb } from "react-bootstrap";

// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// const CommonBreadcrumbs = () => {
//   const pathname = usePathname();
//   const segments = pathname.split("/").filter((item) => item !== "");

//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
//       {segments.map((segment, index) => {
//         const url = `/${segments.slice(0, index + 1).join("/")}`;
//         return index === segments.length - 1 ? (
//           <Breadcrumb.Item key={url} active>
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         ) : (
//           <Breadcrumb.Item key={url} href={url}>
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         );
//       })}
//     </Breadcrumb>
//   );
// };

// export default CommonBreadcrumbs;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const CommonBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <Breadcrumb className="current-home-page-breadcrumb">
      {/* Render "Home" breadcrumb item only if there are segments */}
      {segments.length > 0 && (
        <Breadcrumb.Item href="/" >Home</Breadcrumb.Item >
      )}
      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join("/")}`;
        return index === segments.length - 1 ? (
          <Breadcrumb.Item key={url} active >
            <MdKeyboardDoubleArrowRight style={{color:"#74C0FC",fontWeight:"600",}}/>
            {capitalize(segment)}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={url} href={url}>
                        <MdKeyboardDoubleArrowRight style={{color:"#74C0FC",fontWeight:"600",}}/>
            {capitalize(segment)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default CommonBreadcrumbs;










// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Breadcrumb } from "react-bootstrap";
// // import './styles.css'; // Adjust path as necessary

// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// const CommonBreadcrumbs = () => {
//   const pathname = usePathname();
//   const segments = pathname.split("/").filter((item) => item !== "");

//   return (
//     <Breadcrumb className="breadcrumb-custom">
//       {/* Render "Home" breadcrumb item only if there are segments */}
//       {segments.length > 0 && (
//         <Breadcrumb.Item href="/" >
//           Home
//         </Breadcrumb.Item>
//       )}
//       {segments.map((segment, index) => {
//         const url = `/${segments.slice(0, index + 1).join("/")}`;
//         return index === segments.length - 1 ? (
//           <Breadcrumb.Item key={url} active >
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         ) : (
//           <Breadcrumb.Item key={url} href={url}>
//             {capitalize(segment)}
//           </Breadcrumb.Item>
//         );
//       })}
//     </Breadcrumb>
//   );
// };

// export default CommonBreadcrumbs;
