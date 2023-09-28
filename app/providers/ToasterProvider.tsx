'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    return ( 
        <Toaster />
     );
}
 
export default ToasterProvider;

// Toaster is not adjusted to the Next.js 13 app router, its a client component we want to use inside the app.