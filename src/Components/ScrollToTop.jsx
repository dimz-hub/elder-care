import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to the top when the pathname changes
      window.scrollTo(0, 0);
    }, [pathname]);
  
    // Render nothing (null), as this is a utility component
    return null;
}
