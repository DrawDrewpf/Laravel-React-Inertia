export default function ColonButton() {
    return (
        <button>
            <div
                class=" ] relative w-[180px] h-[100px] bg-gray-100 font-['Open_Sans'] border-b-2 rounded-xl">

                <p class="m-[5px]  text-blue-900 font-bold ">Documentación</p>

                <div className="text-start">

                    <p class="m-[5px] text-gray-500 text-xs font-montserrat">Aqui encontrara su documentación</p>
                </div>
                <svg
                    class=" transition-opacity absolute right-[-23px] bottom-[-15px]"
                    width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_667_8558)">
                        <path d="M11.3533 27.0186L26.8943 78.0421L31.3053 78.0421L15.7293 25.7316C15.388 24.571 15.5217 23.3224 16.101 22.2604C16.6803 21.1983 17.6578 20.4099 18.8183 20.0686L42.8865 12.9901L45.4605 21.7421C45.9725 23.483 47.1551 24.9492 48.7481 25.8181C50.3411 26.6871 52.2141 26.8876 53.955 26.3756L62.707 23.8016L68.1971 42.4686L68 25.9995L67.0831 22.5146L41.5994 8.61404L17.5313 15.6926C15.2102 16.3753 13.2552 17.9521 12.0966 20.0761C10.938 22.2002 10.6706 24.6975 11.3533 27.0186Z" fill="#FB7D16" />
                    </g>
                    <defs>
                        <clipPath id="clip0_667_8558">
                            <rect width="72.9816" height="72.9816" fill="white" transform="translate(0.0273438 20.8408) rotate(-16.3889)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </button>

    );
}
