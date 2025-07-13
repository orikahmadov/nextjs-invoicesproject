import React from 'react';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';


export default function Page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}> Dashboard Page </p>
        </Suspense>
    )
}