import React from "react";

function footer() {
    const today = new Date();
    const currentYear = today.getFullYear();

    return (
        <div>
            <footer className="text-center bg-slate-500 text-zinc-700 md:text-white lg:text-yellow-600 text-md">
                Copyright {currentYear}
            </footer>
        </div>
    )

}

export default footer;