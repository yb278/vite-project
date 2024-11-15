import React, { useState, useEffect } from "react";

function Pagination() {
    // Initialize active page from localStorage or default to 1
    const [activePage, setActivePage] = useState(() => {
        const savedPage = localStorage.getItem("activePage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });

    // Update localStorage whenever activePage changes
    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);


    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center">
                    {[1, 2, 3].map((page) => (
                        <li
                            key={page}
                            className={`page-item ${activePage === page ? "active" : ""}`}
                            onClick={() => setActivePage(page)} // Update active page
                        >
                            <a className="page-link" href={`/${page}`}>
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Pagination;
