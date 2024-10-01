export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`   text-sm text-blue-900  p-0.5 z-1 -mt-3  ` + className}>
            {value ? value : children}
        </label>
    );
}
