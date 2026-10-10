// components/GoogleAnalytics.tsx
"use client";

import React from 'react'; // Import React for JSX

// --- IMPORTANT ---
// In a real Next.js app, you should remove the 'Script' component below
// and uncomment the following line:
// import Script from 'next/script';
//
// The 'Script' component defined here is a simplified fallback for environments
// where 'next/script' is not available. It does not include the performance
// optimizations (like loading strategy) of the official Next.js component.

const Script = ({ src, id, children }) => {
    // This component mimics the basic behavior of next/script for demonstration.
    // It renders standard HTML <script> tags.
    React.useEffect(() => {
        const script = document.createElement('script');

        if (src) {
            script.src = src;
            script.async = true;
        }

        if (id) {
            script.id = id;
        }

        if (children) {
            script.textContent = children;
        }

        document.body.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [src, id, children]);

    return null; // This component doesn't render anything directly in the React tree.
};


export const GoogleAnalytics = () => {
    // In your real Next.js project, you should use environment variables
    // to store your Google Analytics ID for security and flexibility.
    // const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    // For this example, we'll hardcode the ID.
    const gaId = "G-XGD562CFY5";


    // Don't render the component if the Google Analytics ID is not set
    if (!gaId) {
        return null;
    }

    return (
        <>
            {/* The main Google Analytics script */}
            <Script
                strategy="afterInteractive" // This prop is for Next.js; ignored by our fallback
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />

            {/* The inline script to initialize Google Analytics */}
            <Script
                id="google-analytics"
                strategy="afterInteractive" // This prop is for Next.js; ignored by our fallback
            >
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
