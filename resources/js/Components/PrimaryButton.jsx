export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `" hover:bg-orange-600 text-white font-semibold rounded-full py-2 px-4 w-1/3 ${
                    disabled && 'opacity-100'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
