export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark border-2 border-gray-300 dark:border-blue-900  text-orange-500 shadow-sm focus:ring-orange-400 dark:focus:ring-orange-500 dark:focus:ring-offset-blue-900 ' +
                className
            }
        />
    );
}
