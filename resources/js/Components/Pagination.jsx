import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {

    return (
        <nav className="text-center mt-4">
            {links.map(link => (
                <Link
                    preserveScroll
                    key={link.label}
                    href={link.url || ""}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs mx-1" +
                        (link.active ? " bg-blue-500" : " bg-gray-500") +
                        (!link.url ? " pointer-events-none !text-gray-400 cursor-not-allowed" : " hover:bg-blue-700")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                >
                </Link>
            ))}
        </nav>
    )
}