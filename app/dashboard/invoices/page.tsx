import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';


export default function Page() {
    return (
        <div className="flex h-screen flex-col">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}> Invoices Page </p>
        </div>
    )
}
