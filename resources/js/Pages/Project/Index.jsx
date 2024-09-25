import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";


export default function Index({ projects }) {


    console.log(projects);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Proyectos
                </h2>
            }
        >

            <Head title="Proyectos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Image</th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Create Date</th>
                                        <th className="px-3 py-3">Due Date</th>
                                        <th className="px-3 py-3">Created By</th>
                                        <th className="px-3 py-3">Updated By</th>
                                        <th className="px-3 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map(project => (
                                        <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700">
                                            <td className="px-3 py-3">{project.id}</td>
                                            <td className="px-3 py-3">
                                                <img src={project.image_path} alt={project.name} className="w-10 h-10 rounded-md" />
                                            </td>
                                            <td className="px-3 py-3">{project.name}</td>
                                            <td className="px-3 py-3">{project.status}</td>
                                            <td className="px-3 py-3">{project.created_at}</td>
                                            <td className="px-3 py-3">{project.due_date}</td>
                                            <td className="px-3 py-3">{project.created_by.name}</td>
                                            <td className="px-3 py-3">{project.updated_by.name}</td>
                                            <td className="px-3 py-3">
                                                <Link
                                                    href={route('project.edit', project.id)}
                                                    className="font-medium text-blue-600 hover:underline mx-1 dark:text-blue-500"
                                                >
                                                    Edit
                                                </Link>
                                                <Link href={route('project.destroy', project.id)} className="font-medium text-red-500 hover:underline mx-1 dark:text-red-500 ">
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
