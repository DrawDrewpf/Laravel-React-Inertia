export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={` ml-5 absolute text-sm bg-white text-blue-900 p-0.5 z-1 -mt-3  ` + className}>
            {value ? value : children}
        </label>
    );
}
