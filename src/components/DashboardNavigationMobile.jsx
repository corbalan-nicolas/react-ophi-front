import DashboardNavigation from "./DashboardNavigation.jsx";
import CloseIcon from "./icons/CloseIcon.jsx";

const DashboardNavigationMobile = ({isOpen, setIsOpen}) => {
    return (
        <>
            {isOpen &&
                <div
                    className='border-2 fixed inset-0 bg-black/30 z-50 md:hidden'
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className='fixed grid border rounded-e-lg top-0 left-0 h-full glass'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className='absolute left-[calc(100%+.5rem)] top-4 text-white/60 p-2'
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon />
                        </button>
                        <DashboardNavigation handleClick={() => setIsOpen(false)} />
                    </div>
                </div>
            }
        </>
    )
}

export default DashboardNavigationMobile;