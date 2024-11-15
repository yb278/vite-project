import React, { useState, useEffect } from "react";

function Pagination() {

    return (
        <>
            <div class="center_header">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#1">1</a></li>
                    <li class="page-item"><a class="page-link" href="#2">2</a></li>
                    <li class="page-item"><a class="page-link" href="#3">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            </div>       
        </>
    );
}

export default Pagination;
